import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

// Decode a token without verifying the signature. Useful for diagnosing
// "Invalid or expired verification token" complaints -- shows whether the
// token arrived intact and what claim was on it. Returns the server's
// JWT_SECRET source so you can confirm the issuer and verifier agree.
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');

  if (!token) {
    return NextResponse.json(
      {
        error: 'Missing token query parameter',
        usage: 'GET /api/auth/debug-token?token=<paste-the-token-here>',
      },
      { status: 400 }
    );
  }

  const secret = process.env.JWT_SECRET ?? null;

  let header: Record<string, unknown> | null = null;
  let payload: Record<string, unknown> | null = null;
  let signatureOk: string | null = null;

  try {
    const decoded = jwt.decode(token, { complete: true });
    if (decoded && typeof decoded === 'object' && 'header' in decoded) {
      header = decoded.header as unknown as Record<string, unknown>;
      payload = decoded.payload as unknown as Record<string, unknown>;
    } else {
      signatureOk = 'malformed';
    }
  } catch (err) {
    signatureOk = 'malformed';
    return NextResponse.json(
      {
        error: 'Token could not be decoded as a JWT',
        detail: err instanceof Error ? err.message : String(err),
        serverJwtSecretSource: secret === null ? 'missing (process.env.JWT_SECRET is undefined)' : secret,
      },
      { status: 400 }
    );
  }

  if (secret && signatureOk === null) {
    try {
      jwt.verify(token, secret, { clockTolerance: 30 });
      signatureOk = 'verified';
    } catch (err) {
      if (err instanceof jwt.TokenExpiredError) signatureOk = 'expired';
      else if (err instanceof jwt.JsonWebTokenError) signatureOk = 'invalid_signature';
      else signatureOk = 'malformed';
    }
  } else if (secret === null) {
    signatureOk = 'unknown (JWT_SECRET missing on server)';
  }

  return NextResponse.json({
    tokenLength: token.length,
    tokenHead: token.slice(0, 12),
    tokenTail: token.slice(-12),
    decoded: { header, payload },
    signatureOk,
    serverJwtSecretSource:
      secret === null
        ? 'missing (process.env.JWT_SECRET is undefined)'
        : secret.startsWith('<')
          ? `placeholder (${secret}) -- rotate to a real secret via "node scripts/generate-jwt-secret.js"`
          : `set, length=${secret.length}, head=${secret.slice(0, 4)}...`,
  });
}
