'use client';

import { useUser, useClerk } from '@clerk/nextjs';
import { useState } from 'react';

export default function TestAuthPage() {
  const { user, isLoaded, isSignedIn } = useUser();
  const { signOut } = useClerk();
  const [testResult, setTestResult] = useState('');

  const testAuth = async () => {
    const res = await fetch('/api/clerk-test');
    const data = await res.json();
    setTestResult(JSON.stringify(data, null, 2));
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Clerk Authentication Test Page</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Client-Side Status</h2>
          <div className="space-y-2 text-sm">
            <p><strong>Clerk Loaded:</strong> {isLoaded ? '✅ Yes' : '❌ No'}</p>
            <p><strong>User Signed In:</strong> {isSignedIn ? '✅ Yes' : '❌ No'}</p>
            <p><strong>User Email:</strong> {user?.primaryEmailAddress?.emailAddress || 'Not signed in'}</p>
            <p><strong>User ID:</strong> {user?.id || 'N/A'}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Server-Side Test</h2>
          <button 
            onClick={testAuth}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mb-4"
          >
            Test Server API
          </button>
          {testResult && (
            <pre className="bg-gray-100 p-4 rounded text-xs overflow-auto">
              {testResult}
            </pre>
          )}
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Actions</h2>
          <div className="space-x-4">
            {!isSignedIn ? (
              <>
                <a 
                  href="/portal/login" 
                  className="inline-block px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Go to Login
                </a>
                <a 
                  href="/portal/register" 
                  className="inline-block px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                >
                  Go to Register
                </a>
              </>
            ) : (
              <>
                <button 
                  onClick={() => signOut()}
                  className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Sign Out
                </button>
                <a 
                  href="/tools/calculator" 
                  className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Go to Protected Page
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}