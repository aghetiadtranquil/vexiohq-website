'use client';

import { useEffect } from 'react';
import { AuthenticateWithRedirectCallback } from '@clerk/nextjs';

export default function SSOCallbackPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <AuthenticateWithRedirectCallback 
        afterSignInUrl="/tools/calculator"
        afterSignUpUrl="/tools/calculator"
      />
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Completing sign in...</p>
      </div>
    </div>
  );
}