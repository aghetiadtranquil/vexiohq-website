'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function TestLoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleQuickLogin = () => {
    setIsLoading(true);
    
    // Bypass authentication for testing
    localStorage.setItem('auth_token', 'test_token_' + Date.now());
    localStorage.setItem('user_email', 'test@vexiohq.com');
    localStorage.setItem('user', JSON.stringify({
      email: 'test@vexiohq.com',
      name: 'Test User',
      role: 'admin'
    }));
    
    // Redirect to calculator/dashboard
    setTimeout(() => {
      router.push('/tools/calculator');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Test Login</h1>
            <p className="text-gray-600 mt-2">Quick access for testing</p>
          </div>
          
          <button
            onClick={handleQuickLogin}
            disabled={isLoading}
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 disabled:opacity-50"
          >
            {isLoading ? 'Logging in...' : 'Quick Login as Test User'}
          </button>
          
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> This is a test login page that bypasses authentication. 
              Use this only for development/testing purposes.
            </p>
          </div>
          
          <div className="mt-6 text-center space-y-2">
            <Link href="/portal/login" className="text-blue-600 hover:text-blue-700 text-sm">
              Go to Regular Login →
            </Link>
            <br />
            <Link href="/portal/register" className="text-blue-600 hover:text-blue-700 text-sm">
              Create New Account →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}