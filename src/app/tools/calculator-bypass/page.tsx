'use client';

import Link from 'next/link';

export default function CalculatorBypass() {
  // This is a bypass version without authentication check
  
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* User info bar - mock version */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <h1 className="text-lg font-medium text-gray-900">Business Tools Portal (Test Mode)</h1>
            
            <div className="flex items-center space-x-3">
              <div className="text-sm text-right">
                <p className="font-medium text-gray-900">Test User</p>
                <p className="text-gray-500">test@vexiohq.com</p>
              </div>
              <Link
                href="/"
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Exit
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                Home
              </Link>
            </li>
            <li>
              <span className="text-gray-400 mx-2">/</span>
            </li>
            <li>
              <Link href="/tools" className="text-gray-500 hover:text-gray-700">
                Tools
              </Link>
            </li>
            <li>
              <span className="text-gray-400 mx-2">/</span>
            </li>
            <li>
              <span className="text-gray-900 font-medium">ROI Calculator</span>
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
              Calculate your potential return on investment from AI and business transformation initiatives
            </p>
          </div>
          
          {/* Embed the actual calculator HTML */}
          <div className="p-6">
            <iframe 
              src="/calculators/business-transformation-calculator.html"
              className="w-full"
              style={{ height: "1200px", border: "none" }}
              title="Business Transformation ROI Calculator"
            />
          </div>
        </div>
      </div>
    </div>
  );
}