import jwt, { TokenExpiredError, JsonWebTokenError, NotBeforeError } from 'jsonwebtoken';

const RAW_SECRET = process.env.JWT_SECRET;
if (!RAW_SECRET || RAW_SECRET.startsWith('<') || RAW_SECRET === 'your-super-secret-jwt-key-change-in-production') {
  console.warn(
    '[jwt] JWT_SECRET is not set or is still the placeholder. ' +
    'Tokens issued in this process will not be verifiable after a restart, ' +
    'and any other process using a different (or missing) secret will reject them. ' +
    'Set JWT_SECRET in .env.local to a long random string and restart the dev server.'
  );
}
const JWT_SECRET = RAW_SECRET || 'recupere-dev-fallback-secret-do-not-use-in-production';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

// 30 seconds of clock-skew tolerance so that a slightly fast or slow issuer
// doesn't make tokens look "expired" or "not yet valid" to the verifier.
const VERIFY_OPTIONS = { clockTolerance: 30 } as const;

export interface JWTPayload {
  userId: string;
  email: string;
  isAdmin: boolean;
}

export function generateToken(payload: JWTPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN } as Record<string, unknown>);
}

export function verifyToken(token: string): JWTPayload | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET, VERIFY_OPTIONS) as JWTPayload;
    return decoded;
  } catch (error) {
    logVerifyFailure('JWT', error, token);
    return null;
  }
}

export function generateEmailVerificationToken(userId: string): string {
  return jwt.sign({ userId, type: 'email-verification' }, JWT_SECRET, { expiresIn: '7d' } as Record<string, unknown>);
}

export function generatePasswordResetToken(userId: string): string {
  return jwt.sign({ userId, type: 'password-reset' }, JWT_SECRET, { expiresIn: '4h' } as Record<string, unknown>);
}

export function verifyEmailVerificationToken(token: string): { userId: string } | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET, VERIFY_OPTIONS) as { userId: string; type?: string };
    if (decoded && decoded.type === 'email-verification' && typeof decoded.userId === 'string') {
      return { userId: decoded.userId };
    }
    console.warn(
      '[jwt] Email verification token has wrong type or missing userId:',
      JSON.stringify({ type: decoded?.type, hasUserId: !!decoded?.userId })
    );
    return null;
  } catch (error) {
    logVerifyFailure('Email verification', error, token);
    return null;
  }
}

export function verifyPasswordResetToken(token: string): { userId: string } | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET, VERIFY_OPTIONS) as { userId: string; type?: string };
    if (decoded && decoded.type === 'password-reset' && typeof decoded.userId === 'string') {
      return { userId: decoded.userId };
    }
    console.warn(
      '[jwt] Password reset token has wrong type or missing userId:',
      JSON.stringify({ type: decoded?.type, hasUserId: !!decoded?.userId })
    );
    return null;
  } catch (error) {
    logVerifyFailure('Password reset', error, token);
    return null;
  }
}

function logVerifyFailure(label: string, error: unknown, token: string) {
  const len = token?.length ?? 0;
  const head = token ? token.slice(0, 12) : '';
  const tail = token ? token.slice(-12) : '';
  if (error instanceof TokenExpiredError) {
    console.warn(`[jwt] ${label} token expired (length=${len}, head=${head}…, tail=…${tail})`);
  } else if (error instanceof NotBeforeError) {
    console.warn(`[jwt] ${label} token not yet valid (length=${len}, head=${head}…, tail=…${tail})`);
  } else if (error instanceof JsonWebTokenError) {
    console.warn(
      `[jwt] ${label} token invalid: ${error.message} (length=${len}, head=${head}…, tail=…${tail})`
    );
  } else {
    console.error(`[jwt] ${label} token verification threw`, error, `(length=${len})`);
  }
}
