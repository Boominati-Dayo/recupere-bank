'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpDown, CreditCard, Clock, Calendar, ShieldCheck, X, Mail, KeyRound, CheckCircle2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { showSuccess, showError } from '@/utils/toast';
import { getPaymentMethods, PaymentMethod } from '@/lib/services/PaymentMethodService';
import { getCurrencySymbol } from '@/lib/currencies';
import { usePinPrompt } from './PinPrompt';

interface WithdrawalRequest {
  userId: string;
  paymentMethodId: string;
  amount: number;
  currency?: string;
  accountDetails: {
    accountName: string;
    accountNumber: string;
    bankName?: string;
    walletAddress?: string;
    network?: string;
  };
  status: 'pending' | 'processing' | 'completed' | 'rejected';
}

interface WithdrawalSchedule {
  enabled: boolean;
  allowedDays: string[];
  allowedTimes: {
    start: string;
    end: string;
  };
  timezone: string;
}

type CodeType = 'TPIN' | 'TAC' | 'MFA' | 'TVC' | 'SAC';

const CODE_LABELS: Record<CodeType, { name: string; description: string }> = {
  TPIN: { name: 'Transaction PIN', description: 'Your 4-digit security PIN.' },
  SAC: { name: 'Secure Access Code', description: 'A code required to access the withdrawal flow.' },
  TVC: { name: 'Transaction Verification Code', description: 'Confirms the specific withdrawal details.' },
  MFA: { name: 'Multi-Factor Authentication', description: 'A second-factor code sent to your verified contact.' },
  TAC: { name: 'Transaction Authorization Code', description: 'A final code authorizing the withdrawal.' }
};

const CODE_FLOW_ORDER: CodeType[] = ['SAC', 'TVC', 'MFA', 'TAC'];

const WithdrawSection = () => {
  const { user, userProfile, forceRefresh } = useAuth();
  const currencyCode = userProfile?.currency || 'USD';
  const currencySymbol = getCurrencySymbol(currencyCode);
  const { promptForPin } = usePinPrompt();
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);
  const [amount, setAmount] = useState('');
  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [network, setNetwork] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [withdrawalSchedule, setWithdrawalSchedule] = useState<WithdrawalSchedule | null>(null);
  const [scheduleLoading, setScheduleLoading] = useState(true);

  const availableBalance = userProfile?.balances?.main || 0;
  const withdrawalAmount = parseFloat(amount) || 0;

  // Wizard state for the multi-code flow
  const [wizardOpen, setWizardOpen] = useState(false);
  const [wizardDraftId, setWizardDraftId] = useState<string | null>(null);
  const [wizardOrder, setWizardOrder] = useState<CodeType[]>([]);
  const [wizardIndex, setWizardIndex] = useState(0);
  const [wizardStep, setWizardStep] = useState<'pay' | 'enter' | 'verify' | 'done'>('pay');
  const [wizardIssueData, setWizardIssueData] = useState<{ code?: string; price: number; free: boolean } | null>(null);
  const [wizardEnteredCode, setWizardEnteredCode] = useState('');
  const [wizardProcessing, setWizardProcessing] = useState(false);
  const [wizardIssuedType, setWizardIssuedType] = useState<CodeType | null>(null);
  const [wizardError, setWizardError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWithdrawalSchedule = async () => {
      try {
        const response = await fetch('/api/withdrawal-schedule');
        const result = await response.json();
        if (result.success) {
          setWithdrawalSchedule(result.data);
        }
      } catch (error) {
        console.error('Error fetching withdrawal schedule:', error);
      } finally {
        setScheduleLoading(false);
      }
    };
    fetchWithdrawalSchedule();
  }, []);

  const isWithdrawalAllowed = () => {
    if (!withdrawalSchedule || !withdrawalSchedule.enabled) return true;
    const now = new Date();
    const currentDay = now.toLocaleDateString('en-AU', { weekday: 'long' }).toLowerCase();
    const currentTime = now.toLocaleTimeString('en-AU', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    });
    if (!withdrawalSchedule.allowedDays.includes(currentDay)) return false;
    const startTime = withdrawalSchedule.allowedTimes.start;
    const endTime = withdrawalSchedule.allowedTimes.end;
    return currentTime >= startTime && currentTime <= endTime;
  };

  const getNextAllowedTime = () => {
    if (!withdrawalSchedule || !withdrawalSchedule.enabled) return null;
    const now = new Date();
    const currentDay = now.toLocaleDateString('en-AU', { weekday: 'long' }).toLowerCase();
    const currentTime = now.toLocaleTimeString('en-AU', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    });
    const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const currentDayIndex = daysOfWeek.indexOf(currentDay);
    for (let i = 0; i < 7; i++) {
      const dayIndex = (currentDayIndex + i) % 7;
      const day = daysOfWeek[dayIndex];
      if (withdrawalSchedule.allowedDays.includes(day)) {
        const nextDate = new Date(now);
        nextDate.setDate(now.getDate() + i);
        if (i === 0 && currentTime < withdrawalSchedule.allowedTimes.start) {
          return { date: nextDate.toLocaleDateString(), time: withdrawalSchedule.allowedTimes.start, day };
        } else if (i > 0) {
          return { date: nextDate.toLocaleDateString(), time: withdrawalSchedule.allowedTimes.start, day };
        }
      }
    }
    return null;
  };

  const isAmountValid = withdrawalAmount <= availableBalance && withdrawalAmount > 0;
  const isFormValid = isAmountValid && selectedMethod && accountName && accountNumber && isWithdrawalAllowed();

  useEffect(() => {
    loadPaymentMethods();
  }, []);

  const loadPaymentMethods = async () => {
    try {
      const methods = await getPaymentMethods();
      setPaymentMethods(methods.filter((method: PaymentMethod) => method.isActive));
    } catch (error) {
      console.error('Error loading payment methods:', error);
      showError('An error occurred while loading payment methods');
    }
  };

  const resetForm = () => {
    setAmount('');
    setAccountName('');
    setAccountNumber('');
    setBankName('');
    setNetwork('');
    setSelectedMethod(null);
  };

  const resetWizard = () => {
    setWizardOpen(false);
    setWizardDraftId(null);
    setWizardOrder([]);
    setWizardIndex(0);
    setWizardStep('pay');
    setWizardIssueData(null);
    setWizardEnteredCode('');
    setWizardProcessing(false);
    setWizardIssuedType(null);
    setWizardError(null);
  };

  const cancelDraft = async (draftId: string) => {
    try {
      await fetch(`/api/withdrawal/draft?id=${encodeURIComponent(draftId)}`, { method: 'DELETE' });
    } catch (e) {
      console.error('Cancel draft error:', e);
    }
  };

  const submitDirect = async (pin: string) => {
    if (!selectedMethod) return;
    const withdrawalRequest: WithdrawalRequest = {
      userId: user?._id || '',
      paymentMethodId: selectedMethod._id,
      amount: withdrawalAmount,
      currency: currencyCode,
      accountDetails: {
        accountName,
        accountNumber,
        bankName: bankName || undefined,
        walletAddress: accountNumber,
        network: network || undefined
      },
      status: 'pending'
    };

    const response = await fetch('/api/transactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'withdrawal', pin, ...withdrawalRequest })
    });
    const result = await response.json();
    if (!result.success) throw new Error(result.error || 'Failed to submit withdrawal request');
  };

  const runCodeFlow = async (pin: string) => {
    // 1) Preflight
    const preRes = await fetch(`/api/withdrawal/draft?amount=${encodeURIComponent(withdrawalAmount)}&currency=${encodeURIComponent(currencyCode)}`);
    const preJson = await preRes.json();
    if (!preJson.success) throw new Error(preJson.error || 'Preflight failed');

    const preflight = preJson.data?.preflight;
    const existingDraft = preJson.data?.draft;

    // Build the ordered list of paid codes from preflight.paidGateOrder
    const order: CodeType[] = Array.isArray(preflight?.paidGateOrder) ? preflight.paidGateOrder : [];
    const orderFromState: CodeType[] = preflight?.codeState
      ? Object.keys(preflight.codeState).filter((k) => k !== 'TPIN' && preflight.codeState[k].required) as CodeType[]
      : [];
    const finalOrder = order.length > 0 ? order : orderFromState;

    if (finalOrder.length === 0) {
      // No codes active — fall back to direct path
      await submitDirect(pin);
      return;
    }

    // 2) Create draft if needed (also re-uses an active draft if one is open)
    let draftId: string;
    if (existingDraft && existingDraft.codeState) {
      const stillUsable = finalOrder.every((k) => {
        const s = existingDraft.codeState[k];
        return s && !s.verified;
      });
      if (stillUsable) {
        draftId = existingDraft._id;
      } else {
        await cancelDraft(existingDraft._id);
        draftId = await createDraftWithPin(pin);
      }
    } else {
      draftId = await createDraftWithPin(pin);
    }

    setWizardDraftId(draftId);
    setWizardOrder(finalOrder);
    setWizardIndex(0);
    setWizardStep('pay');
    setWizardOpen(true);

    await runCurrentCodeStep(draftId, finalOrder, 0);
  };

  const createDraftWithPin = async (pin: string): Promise<string> => {
    const res = await fetch('/api/withdrawal/draft', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: withdrawalAmount,
        currency: currencyCode,
        paymentMethodId: selectedMethod!._id,
        accountDetails: {
          accountName,
          accountNumber,
          bankName: bankName || undefined,
          walletAddress: accountNumber,
          network: network || undefined
        },
        pin
      })
    });
    const json = await res.json();
    if (!json.success) throw new Error(json.error || 'Failed to start withdrawal');
    return json.data._id;
  };

  const runCurrentCodeStep = async (draftId: string, order: CodeType[], index: number) => {
    if (index >= order.length) {
      await finalizeDraft(draftId);
      return;
    }
    const codeType = order[index];
    setWizardIssuedType(codeType);
    setWizardEnteredCode('');
    setWizardError(null);

    // Issue the code (charges fee if > 0, free codes still need issuance)
    setWizardStep('pay');
    setWizardProcessing(true);
    try {
      const res = await fetch(`/api/withdrawal/codes/${codeType}/issue`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ draftId })
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.error || 'Failed to issue code');

      const draft = json.data;
      const slot = draft?.codeState?.[codeType];
      const price = slot?.price ?? 0;
      const free = price === 0;
      setWizardIssueData({
        code: typeof slot?.code === 'string' ? slot.code : undefined,
        price,
        free
      });
      setWizardStep('enter');
    } catch (e) {
      setWizardError(e instanceof Error ? e.message : 'Failed to issue code');
      setWizardProcessing(false);
      await cancelDraft(draftId);
    }
  };

  const handleVerifyCode = async () => {
    if (!wizardDraftId || !wizardIssuedType) return;
    setWizardProcessing(true);
    setWizardError(null);
    try {
      const res = await fetch(`/api/withdrawal/codes/${wizardIssuedType}/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ draftId: wizardDraftId, code: wizardEnteredCode })
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.error || 'Incorrect code');
      setWizardStep('verify');
      const next = wizardIndex + 1;
      setWizardIndex(next);
      if (next < wizardOrder.length) {
        // continue with the next code
        setTimeout(() => runCurrentCodeStep(wizardDraftId, wizardOrder, next), 400);
      } else {
        setTimeout(() => finalizeDraft(wizardDraftId), 400);
      }
    } catch (e) {
      setWizardError(e instanceof Error ? e.message : 'Verification failed');
    } finally {
      setWizardProcessing(false);
    }
  };

  const finalizeDraft = async (draftId: string) => {
    setWizardStep('done');
    setWizardProcessing(false);
    // TPIN was already captured when we created the draft, so submit will
    // re-verify it server-side. We need to pass it back here.
    // Easiest: read from the cached preflight state — but pin isn't kept.
    // The submit endpoint requires a pin; we don't have it. Approach:
    // re-create flow would be heavy. Instead, ask the user once more.
    setWizardDraftId(draftId);
    setWizardStep('verify');
  };

  const handleFinalSubmit = async () => {
    if (!wizardDraftId) return;
    const pin = await promptForPin('Enter your transaction PIN one more time to finalize this withdrawal.');
    if (!pin) return;
    setWizardProcessing(true);
    setWizardError(null);
    try {
      const res = await fetch('/api/withdrawal/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ draftId: wizardDraftId, pin })
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.error || 'Failed to finalize withdrawal');
      setWizardStep('done');
      showSuccess('Withdrawal request submitted successfully! Please wait for admin processing.');
      resetForm();
      await forceRefresh();
      setTimeout(() => resetWizard(), 1200);
    } catch (e) {
      setWizardError(e instanceof Error ? e.message : 'Failed to submit');
    } finally {
      setWizardProcessing(false);
    }
  };

  const handleWizardCancel = async () => {
    if (wizardDraftId) {
      await cancelDraft(wizardDraftId);
    }
    resetWizard();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMethod || !amount || !accountName || !accountNumber) {
      showError('Please fill in all required fields');
      return;
    }
    const localAmount = parseFloat(amount);
    const localBalance = userProfile?.balances?.main || 0;
    if (localAmount > localBalance) {
      showError(`Insufficient balance. Available balance: ${currencyCode} ${localBalance}`);
      return;
    }

    const pin = await promptForPin('Enter your transaction PIN to confirm this withdrawal request.');
    if (!pin) return;

    setIsSubmitting(true);
    try {
      // Try the multi-code path first; if no codes are active for this
      // user it falls through to the direct legacy submit.
      await runCodeFlow(pin);
    } catch (error) {
      console.error('Error submitting withdrawal request:', error);
      showError(error instanceof Error ? error.message : 'An error occurred while submitting your request');
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentCodeType = wizardIssuedType;
  const currentLabel = currentCodeType ? CODE_LABELS[currentCodeType] : null;
  const totalSteps = wizardOrder.length;
  const stepNumber = Math.min(wizardIndex + 1, totalSteps);

  return (
    <div className="px-0 py-4 mobile:px-6 mobile:py-6">
      <div className="bg-white rounded-none lg:rounded-lg shadow-none lg:shadow-lg p-0 lg:p-8">
        <div className="flex items-center space-x-3 mb-5 mobile:mb-8">
          <div>
            <h2 className="text-xl mobile:text-2xl font-bold text-gray-900">Request Withdrawal</h2>
            <p className="text-xs mobile:text-sm text-gray-600">Withdraw funds to your preferred payment method</p>
          </div>
        </div>

        {scheduleLoading ? (
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/3"></div>
            </div>
          </div>
        ) : !isWithdrawalAllowed() ? (
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Clock className="h-5 w-5 mobile:h-6 mobile:w-6 text-orange-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-base mobile:text-lg font-semibold text-orange-800 mb-1 mobile:mb-2">
                  Withdrawals Currently Not Available
                </h3>
                <p className="text-xs mobile:text-sm text-orange-700 mb-3 mobile:mb-4">
                  Withdrawals are only allowed during specific days and times as set by our administrators.
                </p>
                {withdrawalSchedule && (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-orange-600" />
                      <span className="text-sm text-orange-700">
                        <strong>Allowed Days:</strong> {withdrawalSchedule.allowedDays.map(day =>
                          day.charAt(0).toUpperCase() + day.slice(1)
                        ).join(', ')}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-orange-600" />
                      <span className="text-sm text-orange-700">
                        <strong>Allowed Times:</strong> {withdrawalSchedule.allowedTimes.start} - {withdrawalSchedule.allowedTimes.end} ({withdrawalSchedule.timezone})
                      </span>
                    </div>
                    {(() => {
                      const nextTime = getNextAllowedTime();
                      return nextTime && (
                        <div className="mt-3 p-3 bg-orange-100 rounded-lg">
                          <p className="text-sm text-orange-800">
                            <strong>Next Available:</strong> {nextTime.day.charAt(0).toUpperCase() + nextTime.day.slice(1)} at {nextTime.time}
                          </p>
                        </div>
                      );
                    })()}
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : null}

        {userProfile?.kycStatus !== 'verified' && (
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <ShieldCheck className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-3 flex-1">
                <h3 className="text-lg font-bold text-orange-800 mb-2">
                  KYC Verification Required
                </h3>
                <p className="text-sm text-orange-700 mb-4">
                  To ensure the security of your transactions and comply with financial regulations, you must complete your identity verification before making any withdrawals.
                </p>
                <div className="flex items-center space-x-4">
                  {userProfile?.kycStatus === 'pending' ? (
                    <div className="px-4 py-2 bg-orange-100 text-orange-800 rounded-xl font-bold flex items-center space-x-2">
                      <Clock className="w-5 h-5" />
                      <span>Verification Pending Review</span>
                    </div>
                  ) : (
                    <div className="text-sm font-bold text-navy-900 border-b-2 border-primary-500 pb-1">
                      Please complete Identity Verification via the sidebar
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={`transition-all duration-700 ${!isWithdrawalAllowed() && !scheduleLoading ? 'blur-md grayscale pointer-events-none opacity-50' : ''}`}>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">Available Balance:</span>
              <span className="text-lg font-bold text-gray-900">{currencySymbol}{(availableBalance).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={`space-y-4 mobile:space-y-6 transition-all duration-700 ${(!isWithdrawalAllowed() && !scheduleLoading) || userProfile?.kycStatus !== 'verified'
          ? 'blur-md grayscale pointer-events-none opacity-40'
          : ''
          }`}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Select Withdrawal Method</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {paymentMethods.map((method) => (
                <motion.div
                  key={method._id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-3 mobile:p-4 border-2 rounded-lg cursor-pointer transition-all ${selectedMethod?._id === method._id
                    ? 'border-[#ee2737] bg-[#fde8ea]'
                    : 'border-gray-200 hover:border-gray-300'
                    }`}
                  onClick={() => setSelectedMethod(method)}
                >
                  <div className="flex items-center space-x-3">
                    {method.logo && (
                      <Image src={method.logo} alt={method.name} width={28} height={28} className="w-7 h-7 mobile:w-8 mobile:h-8 rounded" />
                    )}
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm mobile:text-base">{method.name}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Withdrawal Amount ({currencyCode})</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className={`w-full px-4 py-2.5 mobile:py-3 border rounded-lg focus:ring-2 focus:border-transparent text-sm mobile:text-base ${amount && !isAmountValid
                ? 'border-[#ee2737] focus:ring-[#ee2737] bg-[#fde8ea]'
                : 'border-gray-300 focus:ring-[#ee2737]'
                }`}
              placeholder="Enter amount to withdraw"
              min="1"
              step="0.01"
              max={availableBalance}
              required
            />
            {amount && !isAmountValid && (
              <p className="mt-1 text-sm text-[#ee2737]">
                Amount exceeds available balance ({currencySymbol}{(availableBalance).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })})
              </p>
            )}
            {amount && isAmountValid && (
              <p className="mt-1 text-sm text-green-600">
                Available balance: {currencySymbol}{(availableBalance).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            )}
            {!amount && (
              <p className="text-sm text-gray-500 mt-1">
                Available balance: {currencySymbol}{(availableBalance).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            )}
          </div>

          <div className="space-y-3 mobile:space-y-4">
            <h3 className="text-base mobile:text-lg font-semibold text-gray-900">Your Account Details</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Account Holder Name *</label>
              <input
                type="text"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
                className="w-full px-4 py-2.5 mobile:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ee2737] focus:border-transparent text-sm mobile:text-base"
                placeholder="Enter account holder name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Account Number/Wallet Address *</label>
              <input
                type="text"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="w-full px-4 py-2.5 mobile:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ee2737] focus:border-transparent text-sm mobile:text-base"
                placeholder="Enter account number or wallet address"
                required
              />
            </div>

            {selectedMethod?.accountDetails?.bankName && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bank Name</label>
                <input
                  type="text"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  className="w-full px-4 py-2.5 mobile:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ee2737] focus:border-transparent text-sm mobile:text-base"
                  placeholder="Enter bank name"
                />
              </div>
            )}

            {selectedMethod?.accountDetails?.network && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Network</label>
                <input
                  type="text"
                  value={network}
                  onChange={(e) => setNetwork(e.target.value)}
                  className="w-full px-4 py-2.5 mobile:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ee2737] focus:border-transparent text-sm mobile:text-base"
                  placeholder="Enter network (e.g., Ethereum, BSC)"
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={!isFormValid || isSubmitting || userProfile?.kycStatus !== 'verified'}
            className={`w-full text-white py-2.5 mobile:py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 text-sm mobile:text-base ${!isFormValid && !isSubmitting
              ? 'bg-[#ee2737] hover:bg-[#ee2737]'
              : 'bg-[#0b1626] hover:bg-[#1a2b45] disabled:bg-gray-400 text-primary-500'
              }`}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <CreditCard className="w-5 h-5" />
                <span>Submit Withdrawal Request</span>
              </>
            )}
          </button>
        </form>
      </div>

      {/* Multi-code wizard modal */}
      <AnimatePresence>
        {wizardOpen && currentCodeType && currentLabel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={(e) => { if (e.target === e.currentTarget && wizardStep !== 'pay' && !wizardProcessing) handleWizardCancel(); }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 mobile:p-8 relative"
            >
              <button
                onClick={handleWizardCancel}
                disabled={wizardProcessing}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 disabled:opacity-50"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Security Verification</h3>
                {totalSteps > 1 && (
                  <span className="text-xs text-gray-500">Step {stepNumber} of {totalSteps}</span>
                )}
              </div>

              {totalSteps > 1 && (
                <div className="flex gap-1 mb-5">
                  {wizardOrder.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full ${i < wizardIndex ? 'bg-green-500' : i === wizardIndex ? 'bg-[#ee2737]' : 'bg-gray-200'}`}
                    />
                  ))}
                </div>
              )}

              <div className="mb-5">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#fde8ea] flex items-center justify-center">
                    <KeyRound className="w-5 h-5 text-[#ee2737]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{currentLabel.name}</h4>
                    <p className="text-xs text-gray-500">{currentLabel.description}</p>
                  </div>
                </div>
              </div>

              {wizardStep === 'pay' && (
                <div className="text-center py-6">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#ee2737] mx-auto mb-3"></div>
                  <p className="text-sm text-gray-600">Preparing your security code…</p>
                </div>
              )}

              {wizardStep === 'enter' && wizardIssueData && (
                <div className="space-y-4">
                  <div className={`rounded-lg p-4 ${wizardIssueData.free ? 'bg-blue-50 border border-blue-200' : 'bg-orange-50 border border-orange-200'}`}>
                    <div className="flex items-start space-x-2">
                      <Mail className={`w-5 h-5 mt-0.5 ${wizardIssueData.free ? 'text-blue-600' : 'text-orange-600'}`} />
                      <div className="text-sm">
                        {wizardIssueData.free ? (
                          <p className="text-blue-800">
                            A free {currentLabel.name.toLowerCase()} has been emailed to you. Enter it below to continue.
                          </p>
                        ) : (
                          <p className="text-orange-800">
                            A fee of <strong>{currencySymbol}{wizardIssueData.price.toFixed(2)}</strong> was charged and a code was emailed to you. Enter it below to continue.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Enter the 6-digit code</label>
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={6}
                      value={wizardEnteredCode}
                      onChange={(e) => setWizardEnteredCode(e.target.value.replace(/\D/g, ''))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ee2737] focus:border-transparent text-center text-lg tracking-widest font-mono"
                      placeholder="000000"
                      autoFocus
                    />
                  </div>

                  {wizardError && (
                    <p className="text-sm text-[#ee2737]">{wizardError}</p>
                  )}

                  <button
                    onClick={handleVerifyCode}
                    disabled={wizardProcessing || wizardEnteredCode.length !== 6}
                    className="w-full bg-[#0b1626] hover:bg-[#1a2b45] disabled:bg-gray-400 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
                  >
                    {wizardProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Verifying…</span>
                      </>
                    ) : (
                      <span>Verify Code</span>
                    )}
                  </button>
                </div>
              )}

              {wizardStep === 'verify' && wizardIndex >= wizardOrder.length && (
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                    <p className="text-sm text-green-800">
                      All required codes have been verified. Confirm your transaction PIN to finalize the withdrawal.
                    </p>
                  </div>

                  {wizardError && (
                    <p className="text-sm text-[#ee2737]">{wizardError}</p>
                  )}

                  <button
                    onClick={handleFinalSubmit}
                    disabled={wizardProcessing}
                    className="w-full bg-[#0b1626] hover:bg-[#1a2b45] disabled:bg-gray-400 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
                  >
                    {wizardProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Submitting…</span>
                      </>
                    ) : (
                      <span>Confirm & Submit Withdrawal</span>
                    )}
                  </button>
                </div>
              )}

              {wizardStep === 'done' && (
                <div className="text-center py-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-7 h-7 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Withdrawal Submitted</h4>
                  <p className="text-sm text-gray-600">Your request has been sent for admin processing.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WithdrawSection;