'use client';

import { useEffect } from 'react';
import { useUser, useClerk } from '@clerk/nextjs';
import Link from 'next/link';

export default function BusinessTransformationCalculator() {
  const { user, isLoaded, isSignedIn } = useUser();
  const { signOut } = useClerk();

  useEffect(() => {
    // Load the calculator directly via iframe for proper script execution
    if (isSignedIn) {
      // Calculator scripts will execute properly in iframe context
    }
  }, [isSignedIn]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Authentication Required</h1>
          <p className="text-gray-600 mb-6">Please sign in to access the calculator</p>
          <Link 
            href="/portal/login/clerk"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* User Dashboard Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DT</span>
                </div>
                <span className="text-xl font-semibold text-gray-900">VexioHQ</span>
              </Link>
              <span className="text-gray-400">|</span>
              <h1 className="text-lg font-medium text-gray-900">Business Tools</h1>
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Navigation */}
              <nav className="hidden md:flex space-x-6">
                <Link href="/tools/calculator" className="text-blue-600 font-medium">
                  ROI Calculator
                </Link>
                <Link href="/portal/dashboard" className="text-gray-600 hover:text-gray-900">
                  Dashboard
                </Link>
                <Link href="/tools/reports" className="text-gray-600 hover:text-gray-900">
                  Reports
                </Link>
                <Link href="/tools/settings" className="text-gray-600 hover:text-gray-900">
                  Settings
                </Link>
              </nav>

              {/* User Menu */}
              <div className="flex items-center space-x-3">
                <div className="text-sm text-right">
                  <p className="font-medium text-gray-900">
                    {user?.firstName || user?.username || 'User'}
                  </p>
                  <p className="text-gray-500">{user?.primaryEmailAddress?.emailAddress}</p>
                </div>
                <button
                  onClick={() => signOut()}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/portal/dashboard" className="text-gray-500 hover:text-gray-700">
                Tools
              </Link>
            </li>
            <li>
              <span className="text-gray-400 mx-2">/</span>
            </li>
            <li>
              <span className="text-gray-900 font-medium">Business Transformation ROI Calculator</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Calculator Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600">
            <h2 className="text-2xl font-bold text-white">Business Transformation ROI Calculator</h2>
            <p className="mt-2 text-blue-100">
              Calculate the potential return on investment for your digital transformation initiatives
            </p>
          </div>
          
          {/* Embedded Calculator using iframe for proper script execution */}
          <div className="calculator-container" style={{ minHeight: '800px' }}>
            <iframe 
              src="/calculators/business-transformation-calculator.html"
              style={{ 
                width: '100%', 
                height: '1200px', 
                border: 'none',
                display: 'block'
              }}
              title="Business Transformation ROI Calculator"
            />
          </div>
        </div>

        {/* Additional Tools Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-gray-900 mb-2">AI Readiness Assessment</h3>
            <p className="text-gray-600 text-sm mb-4">
              Evaluate your organization&apos;s preparedness for AI adoption
            </p>
            <Link href="/tools/ai-assessment" className="text-blue-600 font-medium text-sm hover:text-blue-700">
              Start Assessment →
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Cost-Benefit Analysis</h3>
            <p className="text-gray-600 text-sm mb-4">
              Compare implementation costs with expected benefits
            </p>
            <Link href="/tools/cost-analysis" className="text-blue-600 font-medium text-sm hover:text-blue-700">
              Analyze Now →
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Implementation Roadmap</h3>
            <p className="text-gray-600 text-sm mb-4">
              Create a customized transformation timeline
            </p>
            <Link href="/tools/roadmap" className="text-blue-600 font-medium text-sm hover:text-blue-700">
              Build Roadmap →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}