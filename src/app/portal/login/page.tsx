'use client';

import { useState, useEffect } from 'react';
import { useSignIn, useClerk, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Force dynamic rendering to ensure Clerk loads properly
export const dynamic = 'force-dynamic';

export default function LoginPage() {
  const signInData = useSignIn();
  const clerk = useClerk();
  const { user, isSignedIn, isLoaded: userLoaded } = useUser();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isClerkReady, setIsClerkReady] = useState(false);
  
  // Comprehensive debugging
  console.log('[Clerk Debug] Initial render:', {
    signInData,
    isLoaded: signInData?.isLoaded,
    signIn: signInData?.signIn,
    clerkObject: clerk,
    clerkLoaded: clerk?.loaded,
    windowClerk: typeof window !== 'undefined' ? (window as any).Clerk : 'SSR',
    publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  });

  useEffect(() => {
    // Check if Clerk is properly loaded
    console.log('[Clerk Debug] useEffect triggered, checking Clerk status:', {
      signInData: !!signInData,
      isLoaded: signInData?.isLoaded,
      clerkLoaded: clerk?.loaded
    });
    
    if (signInData && signInData.isLoaded) {
      console.log('[Clerk Debug] ✅ Clerk is ready! Enabling form.');
      setIsClerkReady(true);
    } else if (clerk && clerk.loaded) {
      console.log('[Clerk Debug] ✅ Clerk object loaded! Enabling form.');
      setIsClerkReady(true);
    }
  }, [signInData, clerk]);

  // Fallback: Enable form after timeout if Clerk fails to load
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isClerkReady) {
        console.warn('Clerk not loaded after 3s, enabling form anyway');
        setIsClerkReady(true);
      }
    }, 3000);
    
    return () => clearTimeout(timeout);
  }, [isClerkReady]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Guard against undefined signInData
    if (!signInData || !signInData.isLoaded || !signInData.signIn) {
      setError('Authentication system is not ready. Please refresh the page.');
      return;
    }
    
    const { signIn, setActive } = signInData;
    
    setError('');
    setIsLoading(true);

    try {
      // Attempt to sign in
      const result = await signIn.create({
        identifier: email,
        password,
      });

      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId });
        router.push('/tools/calculator');
      } else {
        // Handle other statuses if needed
        setError('Please complete the sign-in process');
      }
    } catch (err: any) {
      console.error('Sign in error:', err);
      setError(err.errors?.[0]?.message || 'Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    if (!signInData || !signInData.isLoaded || !signInData.signIn) {
      setError('Authentication system is not ready. Please refresh the page.');
      return;
    }
    
    const { signIn } = signInData;
    
    try {
      await signIn.authenticateWithRedirect({
        strategy: 'oauth_google',
        redirectUrl: window.location.origin + '/sso-callback',
        redirectUrlComplete: window.location.origin + '/tools/calculator',
      });
    } catch (err: any) {
      console.error('Google sign in error:', err);
      setError('Failed to sign in with Google');
    }
  };

  // If user is already signed in, show welcome message
  if (userLoaded && isSignedIn && user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">DT</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                VexioHQ
              </span>
            </Link>
            <h2 className="text-3xl font-bold text-gray-900">Already Signed In</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Welcome back!</h3>
              <p className="text-gray-600">You are logged in as:</p>
              <p className="font-medium text-gray-900">{user.primaryEmailAddress?.emailAddress}</p>
              
              <div className="pt-4 space-y-3">
                <Link
                  href="/tools/calculator"
                  className="block w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
                >
                  Go to Calculator →
                </Link>
                
                <Link
                  href="/portal/dashboard"
                  className="block w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-center font-medium"
                >
                  Go to Dashboard
                </Link>
                
                <button
                  onClick={() => clerk.signOut()}
                  className="block w-full px-6 py-3 bg-white text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors font-medium"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-md w-full">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-3 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">DT</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              VexioHQ
            </span>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900">Customer Portal</h2>
          <p className="mt-2 text-gray-600">Sign in to access your dashboard</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="you@company.com"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your password"
              />
            </div>


            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !isClerkReady}
              className="w-full flex justify-center items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </>
              ) : (
                'Sign in to Portal'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
          </div>

          {/* Google Sign In */}
          <div className="mt-6">
            <button
              onClick={handleGoogleSignIn}
              disabled={!isClerkReady}
              className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign in with Google
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              New to VexioHQ?{' '}
              <Link href="/portal/register" className="font-medium text-blue-600 hover:text-blue-500">
                Create an account
              </Link>
            </p>
          </div>
        </div>

        {/* Help Links */}
        <div className="mt-8 flex justify-center space-x-4 text-sm">
          <Link href="/support" className="text-gray-600 hover:text-gray-900">
            Support Center
          </Link>
          <span className="text-gray-400">•</span>
          <Link href="/docs" className="text-gray-600 hover:text-gray-900">
            Documentation
          </Link>
          <span className="text-gray-400">•</span>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  );
}