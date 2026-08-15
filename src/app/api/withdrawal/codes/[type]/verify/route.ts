import { NextResponse } from 'next/server';
import { verifyCode } from '@/lib/services/WithdrawalCodeService';
import { requireAuth, type AuthenticatedRequest, type AuthRouteContext } from '@/middleware/auth';
import { WITHDRAWAL_CODE_TYPES, type WithdrawalCodeType } from '@/lib/withdrawal-codes';

// POST /api/withdrawal/codes/[type]/verify
// Matches a user-entered 6-digit code against the issued code on the
// draft and marks the slot verified.
export const POST = requireAuth(async (request: AuthenticatedRequest, ctx: AuthRouteContext) => {
  try {
    const userId = request.user!.id;
    if (!ctx) throw new Error('Missing route context');
    const { type } = await ctx.params;
    if (!WITHDRAWAL_CODE_TYPES.includes(type as WithdrawalCodeType)) {
      return NextResponse.json({ success: false, error: 'Invalid code type' }, { status: 400 });
    }
    if (type === 'TPIN') {
      return NextResponse.json({ success: false, error: 'TPIN is verified at submit time' }, { status: 400 });
    }
    const body = await request.json();
    const draftId = String(body.draftId || '');
    const code = String(body.code || '');
    if (!draftId || !code) {
      return NextResponse.json({ success: false, error: 'draftId and code are required' }, { status: 400 });
    }
    const result = await verifyCode(userId, draftId, type as WithdrawalCodeType, code);
    if (!result.ok) {
      return NextResponse.json(
        {
          success: false,
          error: `Incorrect code. ${result.attemptsLeft ?? 0} attempts remaining.`
        },
        { status: 400 }
      );
    }
    return NextResponse.json({ success: true, data: result.draft });
  } catch (error) {
    console.error('Verify code error:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Failed to verify code' },
      { status: 400 }
    );
  }
});
