'use client';

import Link from 'next/link';

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Documentation
          </h1>
          <p className="text-xl text-gray-600">
            Learn how to integrate and use our AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Getting Started</h2>
            <p className="text-gray-600 mb-4">Quick start guides and tutorials</p>
            <Link href="/docs/getting-started" className="text-purple-600 hover:text-purple-700 font-medium">
              Learn more →
            </Link>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">API Reference</h2>
            <p className="text-gray-600 mb-4">Complete API documentation</p>
            <Link href="/docs/api" className="text-purple-600 hover:text-purple-700 font-medium">
              View API docs →
            </Link>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Examples</h2>
            <p className="text-gray-600 mb-4">Code samples and use cases</p>
            <Link href="/docs/examples" className="text-purple-600 hover:text-purple-700 font-medium">
              Browse examples →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}