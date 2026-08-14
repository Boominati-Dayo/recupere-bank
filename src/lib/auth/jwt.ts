import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

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
    const decoded = jwt.verify(token, JWT_SECRET) as JWTPayload;
    return decoded;
  } catch (error) {
    console.error('JWT verification failed:', error);
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
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string; type: string; iat?: number; exp?: number };
    if (decoded.type === 'email-verification') {
      return { userId: decoded.userId };
    }
    return null;
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      console.warn('Email verification token expired');
    } else if (error instanceof jwt.JsonWebTokenError) {
      console.warn('Email verification token invalid:', error.message);
    } else {
      console.error('Email verification token verification failed:', error);
    }
    return null;
  }
}

export function verifyPasswordResetToken(token: string): { userId: string } | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string; type: string; iat?: number; exp?: number };
    if (decoded.type === 'password-reset') {
      return { userId: decoded.userId };
    }
    return null;
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      console.warn('Password reset token expired');
    } else if (error instanceof jwt.JsonWebTokenError) {
      console.warn('Password reset token invalid:', error.message);
    } else {
      console.error('Password reset token verification failed:', error);
    }
    return null;
  }
}
