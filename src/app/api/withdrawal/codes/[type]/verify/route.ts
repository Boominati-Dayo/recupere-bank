import { NextRequest, NextResponse } from 'next/server';
import { verifyCode } from '@/lib/services/WithdrawalCodeService';
import { verifyToken } from '@/lib/auth/jwt';
import { UserService } from '@/lib/auth/user';
import { WITHDRAWAL_CODE_TYPES, type WithdrawalCodeType } from '@/lib/withdrawal-codes';

// POST /api/withdrawal/codes/[type]/verify
// Matches a user-entered 6-digit code against the issued code on the
// draft and marks the slot verified.
export async function POST(
  request: NextRequest,
  context: { params: Promise<{ type: string }> }
) {
  try {
    const { type } = await context.params;
    const auth = await authenticate(request);
    if (!auth.success) {
      return NextResponse.json({ success: false, error: auth.error }, { status: 401 });
    }
    const userId = auth.user!.id;
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
}

async function authenticate(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value
    || request.headers.get('authorization')?.replace('Bearer ', '');
  if (!token) return { success: false as const, error: 'No authentication token provided' };
  const payload = verifyToken(token);
  if (!payload) return { success: false as const, error: 'Invalid or expired token' };
  const user = await UserService.getUserById(payload.userId);
  if (!user) return { success: false as const, error: 'User not found' };
  if (!user._id) return { success: false as const, error: 'User record is corrupted' };
  if (!user.isActive) return { success: false as const, error: 'Account is deactivated' };
  return { success: true as const, user: { id: user._id.toString(), email: user.email, isAdmin: user.isAdmin } };
}
