import { currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const user = await currentUser();
    
    if (!user) {
      return NextResponse.json({ 
        status: 'not_authenticated',
        message: 'No user logged in',
        clerkWorking: true 
      });
    }
    
    return NextResponse.json({
      status: 'authenticated',
      user: {
        id: user.id,
        email: user.emailAddresses[0]?.emailAddress,
        firstName: user.firstName,
        lastName: user.lastName
      },
      clerkWorking: true
    });
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      message: error instanceof Error ? error.message : 'Unknown error',
      clerkWorking: false
    }, { status: 500 });
  }
}