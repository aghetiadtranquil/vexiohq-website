'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function DocsPage() {
  const [activeCategory, setActiveCategory] = useState('getting-started');
  const [searchQuery, setSearchQuery] = useState('');

  type DocSection = {
    title: string;
    icon: string;
    items: Array<{
      title: string;
      href: string;
      time: string;
    }>;
  };

  const documentationSections: Record<string, DocSection> = {
    'getting-started': {
      title: 'Getting Started',
      icon: '🚀',
      items: [
        { title: 'Quick Start Guide', href: '/docs/quickstart', time: '5 min read' },
        { title: 'Installation & Setup', href: '/docs/installation', time: '10 min read' },
        { title: 'Authentication', href: '/docs/authentication', time: '8 min read' },
        { title: 'Your First API Call', href: '/docs/first-api-call', time: '7 min read' },
      ]
    },
    'api-reference': {
      title: 'API Reference',
      icon: '📚',
      items: [
        { title: 'REST API Overview', href: '/docs/api/overview', time: '15 min read' },
        { title: 'Endpoints & Methods', href: '/docs/api/endpoints', time: '20 min read' },
        { title: 'Request/Response Format', href: '/docs/api/format', time: '12 min read' },
        { title: 'Error Handling', href: '/docs/api/errors', time: '10 min read' },
        { title: 'Rate Limiting', href: '/docs/api/rate-limits', time: '5 min read' },
      ]
    },
    'ai-models': {
      title: 'AI Models',
      icon: '🤖',
      items: [
        { title: 'Available Models', href: '/docs/models/list', time: '10 min read' },
        { title: 'Model Selection Guide', href: '/docs/models/selection', time: '15 min read' },
        { title: 'Fine-tuning Options', href: '/docs/models/fine-tuning', time: '25 min read' },
        { title: 'Performance Metrics', href: '/docs/models/metrics', time: '12 min read' },
      ]
    },
    'use-cases': {
      title: 'Use Cases',
      icon: '💡',
      items: [
        { title: 'Sentiment Analysis', href: '/docs/use-cases/sentiment', time: '10 min read' },
        { title: 'Text Generation', href: '/docs/use-cases/generation', time: '15 min read' },
        { title: 'Entity Recognition', href: '/docs/use-cases/ner', time: '12 min read' },
        { title: 'Document Classification', href: '/docs/use-cases/classification', time: '10 min read' },
        { title: 'Predictive Analytics', href: '/docs/use-cases/predictive', time: '20 min read' },
      ]
    },
    'sdks': {
      title: 'SDKs & Libraries',
      icon: '📦',
      items: [
        { title: 'Python SDK', href: '/docs/sdks/python', time: '10 min read' },
        { title: 'JavaScript/Node.js', href: '/docs/sdks/javascript', time: '10 min read' },
        { title: 'Java SDK', href: '/docs/sdks/java', time: '10 min read' },
        { title: 'Go SDK', href: '/docs/sdks/go', time: '10 min read' },
        { title: '.NET SDK', href: '/docs/sdks/dotnet', time: '10 min read' },
      ]
    },
    'best-practices': {
      title: 'Best Practices',
      icon: '⭐',
      items: [
        { title: 'Security Guidelines', href: '/docs/best-practices/security', time: '15 min read' },
        { title: 'Performance Optimization', href: '/docs/best-practices/performance', time: '18 min read' },
        { title: 'Error Recovery', href: '/docs/best-practices/error-recovery', time: '12 min read' },
        { title: 'Data Privacy', href: '/docs/best-practices/privacy', time: '10 min read' },
        { title: 'Scalability Patterns', href: '/docs/best-practices/scalability', time: '20 min read' },
      ]
    }
  };

  const popularArticles = [
    { title: 'How to Implement Sentiment Analysis', views: '12.3k', category: 'Tutorial' },
    { title: 'Understanding Rate Limits', views: '8.7k', category: 'Guide' },
    { title: 'Python SDK Quick Start', views: '15.2k', category: 'SDK' },
    { title: 'Webhook Integration Guide', views: '6.4k', category: 'Integration' },
  ];

  const filteredSections = Object.entries(documentationSections).reduce<Record<string, DocSection>>((acc, [key, section]) => {
    if (searchQuery) {
      const filteredItems = section.items.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filteredItems.length > 0) {
        acc[key] = { ...section, items: filteredItems };
      }
    } else {
      acc[key] = section;
    }
    return acc;
  }, {});

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Documentation Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to integrate and leverage our AI solutions effectively
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search documentation..."
              className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-14"
            />
            <svg
              className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-2">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Categories</h3>
              {Object.entries(documentationSections).map(([key, section]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                    activeCategory === key
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200'
                  }`}
                >
                  <span className="text-xl">{section.icon}</span>
                  <span className="font-medium">{section.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {searchQuery && Object.keys(filteredSections).length === 0 ? (
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <p className="text-gray-500 text-center">No results found for "{searchQuery}"</p>
              </div>
            ) : (
              Object.entries(searchQuery ? filteredSections : { [activeCategory]: documentationSections[activeCategory] }).map(([key, section]) => (
                <div key={key} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <span className="text-3xl">{section.icon}</span>
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200 group"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">{item.time}</p>
                          </div>
                          <svg
                            className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors mt-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Popular Articles */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Popular Articles</h3>
              <div className="space-y-3">
                {popularArticles.map((article) => (
                  <Link
                    key={article.title}
                    href="#"
                    className="block hover:bg-gray-50 rounded-lg p-3 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-sm font-medium text-gray-700 line-clamp-2">
                        {article.title}
                      </h4>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">{article.category}</span>
                      <span className="text-xs text-gray-400">{article.views} views</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/test" className="block text-blue-100 hover:text-white transition-colors">
                  → API Playground
                </Link>
                <Link href="/pricing" className="block text-blue-100 hover:text-white transition-colors">
                  → Pricing Plans
                </Link>
                <Link href="/contact" className="block text-blue-100 hover:text-white transition-colors">
                  → Contact Support
                </Link>
                <Link href="https://github.com/datatranquil" className="block text-blue-100 hover:text-white transition-colors">
                  → GitHub
                </Link>
              </div>
            </div>

            {/* Need Help Card */}
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-purple-900 mb-2">Need Help?</h3>
              <p className="text-sm text-purple-700 mb-4">
                Our support team is ready to assist you with any questions.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
              >
                Contact Support →
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Resources */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">📹</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800">Video Tutorials</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Learn through comprehensive video guides and walkthroughs.
            </p>
            <Link href="/docs/videos" className="text-blue-600 hover:text-blue-700 font-medium">
              Watch Videos →
            </Link>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">💬</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800">Community Forum</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Join discussions and get help from our developer community.
            </p>
            <Link href="/community" className="text-purple-600 hover:text-purple-700 font-medium">
              Join Community →
            </Link>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">📄</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800">Changelog</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Stay updated with the latest features and improvements.
            </p>
            <Link href="/changelog" className="text-green-600 hover:text-green-700 font-medium">
              View Updates →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}