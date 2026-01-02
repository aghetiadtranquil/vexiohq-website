import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Force dynamic rendering for this route (uses cookies)
export const dynamic = 'force-dynamic';

function verifyToken(token: string): { valid: boolean; email?: string } {
  try {
    const [header, payload, signature] = token.split('.');
    const decodedPayload = JSON.parse(atob(payload));
    
    // Check expiration
    if (decodedPayload.exp < Date.now()) {
      return { valid: false };
    }
    
    // In production, verify signature properly
    return { 
      valid: true, 
      email: decodedPayload.email 
    };
  } catch (error) {
    return { valid: false };
  }
}

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth-token');

    if (!token) {
      return NextResponse.json(
        { authenticated: false },
        { status: 200 }
      );
    }

    const { valid, email } = verifyToken(token.value);

    if (!valid) {
      return NextResponse.json(
        { authenticated: false },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { 
        authenticated: true,
        user: { email }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Verify error:', error);
    return NextResponse.json(
      { authenticated: false },
      { status: 200 }
    );
  }
}