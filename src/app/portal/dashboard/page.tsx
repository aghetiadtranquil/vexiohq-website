'use client'

import { useUser, UserButton, SignOutButton, useClerk } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'

export default function DashboardPage() {
  const { isLoaded, isSignedIn, user } = useUser()
  const { signOut } = useClerk()
  const router = useRouter()

  useEffect(() => {
    // Redirect to login if not authenticated
    if (isLoaded && !isSignedIn) {
      router.push('/portal/login/clerk')
    }
  }, [isLoaded, isSignedIn, router])

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isSignedIn) {
    return null // Will redirect
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <UserButton afterSignOutUrl="/portal/login/clerk" />
              <button
                onClick={() => signOut({ redirectUrl: '/portal/login/clerk' })}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Welcome back, {user?.firstName || user?.username || 'User'}!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{user?.primaryEmailAddress?.emailAddress}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">User ID</p>
              <p className="font-mono text-sm">{user?.id}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Joined</p>
              <p className="font-medium">{user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Last Sign In</p>
              <p className="font-medium">{user?.lastSignInAt ? new Date(user.lastSignInAt).toLocaleDateString() : 'First time'}</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link 
              href="/tools/calculator"
              className="block p-4 border rounded-lg hover:bg-blue-50 transition"
            >
              <h4 className="font-semibold text-blue-600">ROI Calculator</h4>
              <p className="text-sm text-gray-600 mt-1">Calculate business transformation ROI</p>
            </Link>
            <Link 
              href="/portal/test-auth"
              className="block p-4 border rounded-lg hover:bg-green-50 transition"
            >
              <h4 className="font-semibold text-green-600">Test Auth</h4>
              <p className="text-sm text-gray-600 mt-1">View authentication details</p>
            </Link>
            <Link 
              href="/"
              className="block p-4 border rounded-lg hover:bg-gray-50 transition"
            >
              <h4 className="font-semibold text-gray-600">Home</h4>
              <p className="text-sm text-gray-600 mt-1">Return to main website</p>
            </Link>
          </div>
        </div>

        {/* Success Status */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">Authentication Working!</h3>
              <div className="mt-2 text-sm text-green-700">
                <p>✅ Clerk authentication is fully operational</p>
                <p>✅ User session is active and persistent</p>
                <p>✅ Protected routes are accessible</p>
                <p>✅ Sign out functionality is available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}