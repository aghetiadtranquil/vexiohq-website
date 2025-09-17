'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TestPage() {
  const [endpoint, setEndpoint] = useState('https://api.datatranquil.com/v1/analyze');
  const [method, setMethod] = useState('POST');
  const [headers, setHeaders] = useState('{\n  "Content-Type": "application/json",\n  "Authorization": "Bearer YOUR_API_KEY"\n}');
  const [body, setBody] = useState('{\n  "text": "Analyze this sample text for sentiment",\n  "model": "advanced",\n  "options": {\n    "include_confidence": true\n  }\n}');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTest = async () => {
    setLoading(true);
    setResponse('');
    
    // Simulate API call for demonstration
    setTimeout(() => {
      setResponse(JSON.stringify({
        status: 200,
        data: {
          sentiment: "positive",
          confidence: 0.92,
          entities: ["sample text", "sentiment"],
          processing_time: "142ms"
        },
        message: "Analysis completed successfully"
      }, null, 2));
      setLoading(false);
    }, 1500);
  };

  const sampleEndpoints = [
    { name: 'Sentiment Analysis', url: '/v1/analyze', method: 'POST' },
    { name: 'Text Generation', url: '/v1/generate', method: 'POST' },
    { name: 'Entity Recognition', url: '/v1/entities', method: 'POST' },
    { name: 'Document Classification', url: '/v1/classify', method: 'POST' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            API Testing Playground
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Test and explore our AI APIs in real-time. Perfect for developers integrating our solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar - Quick Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Quick Endpoints</h2>
              <div className="space-y-2">
                {sampleEndpoints.map((ep) => (
                  <button
                    key={ep.name}
                    onClick={() => {
                      setEndpoint(`https://api.datatranquil.com${ep.url}`);
                      setMethod(ep.method);
                    }}
                    className="w-full text-left px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-all duration-200"
                  >
                    <div className="font-medium">{ep.name}</div>
                    <div className="text-sm text-blue-200">{ep.method} {ep.url}</div>
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold text-white mb-3">Resources</h3>
                <div className="space-y-2">
                  <Link href="/docs/api" className="block text-blue-300 hover:text-blue-200">
                    → API Documentation
                  </Link>
                  <Link href="/docs/authentication" className="block text-blue-300 hover:text-blue-200">
                    → Authentication Guide
                  </Link>
                  <Link href="/docs/examples" className="block text-blue-300 hover:text-blue-200">
                    → Code Examples
                  </Link>
                  <Link href="/pricing" className="block text-blue-300 hover:text-blue-200">
                    → API Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - API Tester */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              {/* Endpoint Configuration */}
              <div className="mb-6">
                <label className="block text-white font-medium mb-2">Endpoint</label>
                <div className="flex gap-2">
                  <select
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                    className="px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white"
                  >
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="PUT">PUT</option>
                    <option value="DELETE">DELETE</option>
                  </select>
                  <input
                    type="text"
                    value={endpoint}
                    onChange={(e) => setEndpoint(e.target.value)}
                    className="flex-1 px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50"
                    placeholder="Enter API endpoint..."
                  />
                </div>
              </div>

              {/* Headers */}
              <div className="mb-6">
                <label className="block text-white font-medium mb-2">Headers</label>
                <textarea
                  value={headers}
                  onChange={(e) => setHeaders(e.target.value)}
                  className="w-full h-32 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white font-mono text-sm placeholder-white/50"
                  placeholder="Enter headers as JSON..."
                />
              </div>

              {/* Request Body */}
              {method !== 'GET' && (
                <div className="mb-6">
                  <label className="block text-white font-medium mb-2">Request Body</label>
                  <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="w-full h-40 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white font-mono text-sm placeholder-white/50"
                    placeholder="Enter request body as JSON..."
                  />
                </div>
              )}

              {/* Execute Button */}
              <button
                onClick={handleTest}
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Execute Request →'
                )}
              </button>

              {/* Response */}
              {response && (
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-white font-medium">Response</label>
                    <button
                      onClick={() => navigator.clipboard.writeText(response)}
                      className="text-sm text-blue-300 hover:text-blue-200"
                    >
                      Copy Response
                    </button>
                  </div>
                  <pre className="w-full p-4 bg-black/30 border border-white/20 rounded-lg text-green-400 font-mono text-sm overflow-x-auto">
                    {response}
                  </pre>
                </div>
              )}
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">Rate Limits</h3>
                <p className="text-blue-100 text-sm mb-3">Current tier: Professional</p>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between text-blue-200">
                    <span>Requests/minute:</span>
                    <span className="font-mono">60</span>
                  </div>
                  <div className="flex justify-between text-blue-200">
                    <span>Requests/day:</span>
                    <span className="font-mono">10,000</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">API Status</h3>
                <div className="flex items-center mb-3">
                  <span className="relative flex h-3 w-3 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-green-400">All Systems Operational</span>
                </div>
                <div className="text-sm text-blue-200">
                  <div>Latency: <span className="font-mono">42ms</span></div>
                  <div>Uptime: <span className="font-mono">99.99%</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}