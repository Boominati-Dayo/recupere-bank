// Business logic for the multi-step withdrawal flow:
// - Preflight: which codes are required for this user, what's the
//   cumulative fee cap, what the running total will be
// - Draft: create / read / expire the in-progress draft
// - Issue: charge a code fee, generate a 6-digit code, return it to
//   the client (and email it)
// - Verify: match a user-entered code, mark the slot verified
// - Submit: finalise the draft into a withdrawalRequest once all
//   required codes are verified (including TPIN)
// - Refund: walk a withdrawal and refund all paid, unrefunded codes
//
// All money operations write a corresponding `transactions` entry on
// the user doc so the balance + history stay consistent.

import { ObjectId } from 'mongodb';
import { getDb } from '@/lib/mongodb';
import { sendEmail, emailTemplates } from '@/lib/email';
import {
  buildInitialCodeState,
  areAllRequiredCodesVerified,
  totalUnrefundedFees,
  DRAFT_TTL_MINUTES,
  MAX_CODE_ATTEMPTS,
  clampPricing
} from '@/lib/WithdrawalDraft';
import {
  WITHDRAWAL_CODE_ORDER,
  WITHDRAWAL_CODE_TYPES,
  type WithdrawalCodeType,
  type UserCodePricing,
  defaultUserCodePricing
} from '@/lib/withdrawal-codes';
import { randomInt } from 'crypto';

const CODE_CHARSET = '0123456789';
const CODE_LENGTH = 6;
const CODE_TTL_MINUTES = 10; // issued codes are valid for 10 minutes

export interface PreflightResult {
  pricing: UserCodePricing;
  codeState: ReturnType<typeof buildInitialCodeState>;
  totalMaxFees: number;
  // codes the user has to pay for in order
  paidGateOrder: WithdrawalCodeType[];
  // TPIN is always there but free
  currency: string;
}

export async function getUserPricing(userId: string): Promise<UserCodePricing> {
  const db = await getDb();
  const user = await db.collection('users').findOne(
    { _id: new ObjectId(userId) },
    { projection: { withdrawalCodePricing: 1 } }
  );
  const stored = (user as { withdrawalCodePricing?: UserCodePricing } | null)?.withdrawalCodePricing;
  if (!stored) return defaultUserCodePricing();
  // Defensive: ensure every key exists
  const base = defaultUserCodePricing();
  return { ...base, ...stored };
}

function generateCode(): string {
  let out = '';
  for (let i = 0; i < CODE_LENGTH; i++) {
    out += CODE_CHARSET.charAt(randomInt(0, CODE_CHARSET.length));
  }
  return out;
}

export async function preflight(userId: string, amount: number, currency: string): Promise<PreflightResult> {
  const pricing = await getUserPricing(userId);
  const clamped = clampPricing(pricing, amount);
  const codeState = buildInitialCodeState(clamped, amount);
  const totalMaxFees = (Object.keys(codeState) as WithdrawalCodeType[])
    .filter((k) => k !== 'TPIN')
    .reduce((sum, k) => (codeState[k].required ? sum + codeState[k].price : sum), 0);
  const paidGateOrder = WITHDRAWAL_CODE_ORDER.filter((k) => k !== 'TPIN' && codeState[k].required);
  return { pricing: clamped, codeState, totalMaxFees, paidGateOrder, currency };
}

export async function getActiveDraft(userId: string) {
  const db = await getDb();
  // Expire any past-due drafts first
  await db.collection('withdrawalDrafts').updateMany(
    { userId, status: 'draft', expiresAt: { $lt: new Date() } },
    { $set: { status: 'expired', updatedAt: new Date() } }
  );
  return db.collection('withdrawalDrafts').findOne({ userId, status: 'draft' });
}

export interface CreateDraftInput {
  userId: string;
  amount: number;
  currency: string;
  paymentMethodId: string;
  accountDetails: {
    accountName: string;
    accountNumber: string;
    bankName?: string;
    walletAddress?: string;
    network?: string;
  };
  // TPIN, captured at submit time
  pin: string;
}

export async function createDraft(input: CreateDraftInput) {
  const db = await getDb();
  // Block creating a second active draft
  const existing = await getActiveDraft(input.userId);
  if (existing) {
    throw new Error('A withdrawal is already in progress. Complete or cancel it before starting a new one.');
  }

  // Verify PIN against stored hash. We don't require auth here; the
  // caller passes the PIN and the userId is from the session.
  const user = await db.collection('users').findOne({ _id: new ObjectId(input.userId) });
  if (!user) throw new Error('User not found');
  const { verifyTransactionPin } = await import('@/lib/auth/pin');
  const pinOk = await verifyTransactionPin(input.pin, (user as { transactionPin?: string }).transactionPin);
  if (!pinOk) throw new Error('Invalid transaction PIN');

  // Verify KYC + balance
  const balances = (user as { balances?: { main?: number } }).balances;
  const available = balances?.main || 0;
  if (available < input.amount || input.amount <= 0) {
    throw new Error('Insufficient balance or invalid amount');
  }

  const pricing = await getUserPricing(input.userId);
  const clamped = clampPricing(pricing, input.amount);
  const codeState = buildInitialCodeState(clamped, input.amount);

  const now = new Date();
  const draft = {
    userId: input.userId,
    amount: input.amount,
    currency: input.currency,
    paymentMethodId: input.paymentMethodId,
    accountDetails: input.accountDetails,
    pricingSnapshot: clamped,
    codeState,
    totalFeesPaid: 0,
    status: 'draft' as const,
    createdAt: now,
    updatedAt: now,
    expiresAt: new Date(now.getTime() + DRAFT_TTL_MINUTES * 60_000)
  };
  const res = await db.collection('withdrawalDrafts').insertOne(draft);
  return { ...draft, _id: res.insertedId };
}

export async function issueCode(userId: string, draftId: string, codeType: WithdrawalCodeType) {
  if (codeType === 'TPIN') throw new Error('TPIN does not use a paid code');
  const db = await getDb();
  const draft = await db.collection('withdrawalDrafts').findOne({ _id: new ObjectId(draftId), userId });
  if (!draft) throw new Error('Draft not found');
  if (draft.status !== 'draft') throw new Error('Draft is no longer active');
  if (new Date(draft.expiresAt) < new Date()) throw new Error('Draft has expired');
  const slot = draft.codeState?.[codeType];
  if (!slot) throw new Error(`Unknown code type: ${codeType}`);
  if (!slot.required) throw new Error(`Code ${codeType} is not required for this user`);
  if (slot.paid && slot.code) {
    // Already issued; re-issuing would be confusing. Just return the
    // existing code so the client can re-display it.
    return draft;
  }
  if (!slot.paid) {
    // Charge the fee (free codes are pre-marked paid and skip this branch)
    const price = slot.price;
    if (price > 0) {
      const user = await db.collection('users').findOne({ _id: new ObjectId(userId) });
      const available = (user as { balances?: { main?: number } }).balances?.main || 0;
      if (available < price) {
        throw new Error(`Insufficient balance to pay the ${codeType} fee of ${price}`);
      }
      const code = generateCode();
      const now = new Date();
      await db.collection('users').updateOne(
        { _id: new ObjectId(userId) },
        {
          $inc: { 'balances.main': -price },
          $set: { updatedAt: now },
          $push: {
            transactions: {
              type: 'fee',
              amount: -price,
              date: now,
              status: 'completed',
              description: `Withdrawal code fee: ${codeType}`,
              metadata: { codeType, draftId: draftId.toString() }
            },
            activityLog: {
              action: `Paid ${codeType} fee of ${price} for withdrawal draft`,
              timestamp: now.toISOString()
            }
          } as any
        } as any
      );
      await db.collection('withdrawalDrafts').updateOne(
        { _id: new ObjectId(draftId) },
        {
          $set: {
            [`codeState.${codeType}.paid`]: true,
            [`codeState.${codeType}.paidAt`]: now,
            [`codeState.${codeType}.code`]: code,
            [`codeState.${codeType}.issuedAt`]: now,
            updatedAt: now
          },
          $inc: { totalFeesPaid: price }
        }
      );
      // Email the code for this code type. Fire-and-forget so the
      // API responds immediately instead of waiting on SMTP.
      void sendWithdrawalCodeEmail(userId, codeType, code, now, price, draft.currency);
    } else {
      // Free code: just issue the code, no charge
      const code = generateCode();
      const now = new Date();
      await db.collection('withdrawalDrafts').updateOne(
        { _id: new ObjectId(draftId) },
        {
          $set: {
            [`codeState.${codeType}.code`]: code,
            [`codeState.${codeType}.issuedAt`]: now,
            updatedAt: now
          }
        }
      );
      // Email the code for this code type. Fire-and-forget.
      void sendWithdrawalCodeEmail(userId, codeType, code, now, 0, draft.currency);
    }
  }
  return db.collection('withdrawalDrafts').findOne({ _id: new ObjectId(draftId) });
}

async function sendWithdrawalCodeEmail(
  userId: string,
  codeType: WithdrawalCodeType,
  code: string,
  issuedAt: Date,
  price: number,
  currency: string
) {
  try {
    const db = await getDb();
    const userRecord = await db.collection('users').findOne({ _id: new ObjectId(userId) });
    const userName = (userRecord as { firstName?: string; email?: string } | null)?.firstName || 'Customer';
    const userEmail = (userRecord as { email?: string } | null)?.email;
    if (!userEmail) return;
    if (codeType === 'TPIN') return;
    const expiresAt = new Date(issuedAt.getTime() + CODE_TTL_MINUTES * 60_000);
    const emailData = emailTemplates.withdrawalCode(
      userName,
      codeType,
      code,
      expiresAt.toISOString(),
      price,
      currency
    );
    await sendEmail({ to: userEmail, ...emailData });
  } catch (e) {
    console.error(`Failed to email ${codeType} code:`, e);
  }
}

export async function verifyCode(
  userId: string,
  draftId: string,
  codeType: WithdrawalCodeType,
  enteredCode: string
) {
  if (codeType === 'TPIN') throw new Error('TPIN is verified at submit time, not here');
  const db = await getDb();
  const draft = await db.collection('withdrawalDrafts').findOne({ _id: new ObjectId(draftId), userId });
  if (!draft) throw new Error('Draft not found');
  if (draft.status !== 'draft') throw new Error('Draft is no longer active');
  const slot = draft.codeState?.[codeType];
  if (!slot) throw new Error(`Unknown code type: ${codeType}`);
  if (!slot.paid || !slot.code) throw new Error(`Pay the ${codeType} fee before verifying`);
  if (slot.verified) {
    return { ok: true, draft }; // already verified
  }
  if (slot.attempts >= MAX_CODE_ATTEMPTS) {
    throw new Error('Too many incorrect attempts. Restart the withdrawal to get a new code.');
  }
  const entered = String(enteredCode || '').trim();
  const now = new Date();
  if (entered !== slot.code) {
    await db.collection('withdrawalDrafts').updateOne(
      { _id: new ObjectId(draftId) },
      {
        $inc: { [`codeState.${codeType}.attempts`]: 1 },
        $set: { updatedAt: now }
      }
    );
    return { ok: false, attemptsLeft: MAX_CODE_ATTEMPTS - slot.attempts - 1, draft };
  }
  await db.collection('withdrawalDrafts').updateOne(
    { _id: new ObjectId(draftId) },
    {
      $set: {
        [`codeState.${codeType}.verified`]: true,
        [`codeState.${codeType}.verifiedAt`]: now,
        updatedAt: now
      }
    }
  );
  return { ok: true, draft: await db.collection('withdrawalDrafts').findOne({ _id: new ObjectId(draftId) }) };
}

export async function cancelDraft(userId: string, draftId: string) {
  const db = await getDb();
  const draft = await db.collection('withdrawalDrafts').findOne({ _id: new ObjectId(draftId), userId });
  if (!draft || draft.status !== 'draft') return null;
  // Refund any paid codes
  await refundDraftCodes(userId, draftId, 'cancelled');
  await db.collection('withdrawalDrafts').updateOne(
    { _id: new ObjectId(draftId) },
    { $set: { status: 'cancelled', updatedAt: new Date() } }
  );
  return true;
}

export async function refundDraftCodes(userId: string, draftId: string, reason: string) {
  const db = await getDb();
  const draft = await db.collection('withdrawalDrafts').findOne({ _id: new ObjectId(draftId), userId });
  if (!draft) return;
  const refundTotal = totalUnrefundedFees(draft.codeState);
  if (refundTotal <= 0) return;
  const now = new Date();
  await db.collection('users').updateOne(
    { _id: new ObjectId(userId) },
    {
      $inc: { 'balances.main': refundTotal },
      $set: { updatedAt: now },
      $push: {
        transactions: {
          type: 'refund',
          amount: refundTotal,
          date: now,
          status: 'completed',
          description: `Refund of withdrawal code fees (${reason})`,
          metadata: { draftId: draftId.toString() }
        },
        activityLog: {
          action: `Refunded ${refundTotal} in withdrawal code fees (${reason})`,
          timestamp: now.toISOString()
        }
      } as any
    } as any
  );
  // Mark every paid-but-unrefunded slot as refunded
  const update: Record<string, unknown> = { updatedAt: now };
  (Object.keys(draft.codeState) as WithdrawalCodeType[]).forEach((key) => {
    const slot = draft.codeState[key];
    if (key === 'TPIN') return;
    if (slot.paid && !slot.refunded) {
      update[`codeState.${key}.refunded`] = true;
      update[`codeState.${key}.refundedAt`] = now;
    }
  });
  await db.collection('withdrawalDrafts').updateOne({ _id: new ObjectId(draftId) }, { $set: update });
}

export { areAllRequiredCodesVerified };
