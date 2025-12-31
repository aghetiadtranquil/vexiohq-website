import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Simple JWT implementation for demo purposes
// In production, use a proper JWT library like jsonwebtoken
function generateToken(email: string): string {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const payload = btoa(JSON.stringify({
    email,
    iat: Date.now(),
    exp: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
  }));
  const signature = btoa(`${header}.${payload}.secret-key`);
  return `${header}.${payload}.${signature}`;
}

// Demo user credentials
const DEMO_USERS = [
  { email: 'demo@vexiohq.com', password: 'demo123' },
  { email: 'admin@vexiohq.com', password: 'admin123' },
  { email: 'test@vexiohq.com', password: 'test123' }
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Check credentials (in production, hash passwords and use a database)
    const user = DEMO_USERS.find(u => u.email === email && u.password === password);
    
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = generateToken(email);

    // Create response with token
    const response = NextResponse.json(
      { 
        success: true,
        user: { email },
        message: 'Login successful'
      },
      { status: 200 }
    );

    // Set httpOnly cookie for security
    response.cookies.set({
      name: 'auth-token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/'
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}