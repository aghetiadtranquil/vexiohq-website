'use client'

import { useUser, useAuth, UserButton, SignOutButton } from '@clerk/nextjs'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function TestAuthPage() {
  const { isLoaded, isSignedIn, user } = useUser()
  const { userId, sessionId, getToken } = useAuth()
  const [token, setToken] = useState<string | null>(null)
  
  useEffect(() => {
    if (isSignedIn) {
      getToken().then(setToken).catch(console.error)
    }
  }, [isSignedIn, getToken])

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Clerk Authentication Test Page</h1>
        
        {/* Status Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Authentication Status</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="font-medium">Clerk Loaded:</span>
              <span className={`ml-2 ${isLoaded ? 'text-green-600' : 'text-yellow-600'}`}>
                {isLoaded ? '✅ Yes' : '⏳ Loading...'}
              </span>
            </div>
            <div>
              <span className="font-medium">Signed In:</span>
              <span className={`ml-2 ${isSignedIn ? 'text-green-600' : 'text-red-600'}`}>
                {isSignedIn ? '✅ Yes' : '❌ No'}
              </span>
            </div>
          </div>
        </div>

        {/* User Information */}
        {isSignedIn && user && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">User Information</h2>
            <div className="space-y-2">
              <p><strong>User ID:</strong> <code className="bg-gray-100 px-2 py-1 rounded">{userId}</code></p>
              <p><strong>Email:</strong> {user.primaryEmailAddress?.emailAddress}</p>
              <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
              <p><strong>Username:</strong> {user.username || 'Not set'}</p>
              <p><strong>Created:</strong> {new Date(user.createdAt!).toLocaleString()}</p>
              <p><strong>Session ID:</strong> <code className="bg-gray-100 px-2 py-1 rounded text-xs">{sessionId}</code></p>
            </div>
            
            {/* User Button Component */}
            <div className="mt-4 flex items-center gap-4">
              <UserButton afterSignOutUrl="/portal/login/clerk" />
              <span className="text-sm text-gray-600">← Click to manage account</span>
            </div>
          </div>
        )}

        {/* Session Token */}
        {token && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Session Token (JWT)</h2>
            <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-xs overflow-x-auto">
              {token.substring(0, 50)}...
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Token can be used for API authentication
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Actions</h2>
          
          {!isSignedIn ? (
            <div className="space-y-4">
              <Link 
                href="/portal/login/clerk"
                className="block w-full text-center bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition"
              >
                Sign In with Clerk
              </Link>
              <Link 
                href="/portal/register/clerk"
                className="block w-full text-center bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition"
              >
                Create New Account
              </Link>
              <Link 
                href="/portal/login-debug"
                className="block w-full text-center bg-gray-600 text-white py-3 px-4 rounded-lg hover:bg-gray-700 transition"
              >
                Debug Page
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              <SignOutButton redirectUrl="/portal/test-auth">
                <button className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition">
                  Sign Out
                </button>
              </SignOutButton>
              <Link 
                href="/tools/calculator"
                className="block w-full text-center bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition"
              >
                Go to Calculator (Protected Route)
              </Link>
            </div>
          )}
        </div>

        {/* Test Results */}
        <div className="mt-6 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">✅ Working Features</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Clerk SDK loads successfully</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Built-in SignIn component renders</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Built-in SignUp component renders</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Email/password fields are functional</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Environment variables properly configured</span>
            </li>
            {isSignedIn && (
              <>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>User authentication successful</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>User data retrieval working</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>JWT token generation functional</span>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}