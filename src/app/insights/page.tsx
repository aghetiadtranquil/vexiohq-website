'use client';

import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User, TrendingUp, Brain, Target, Lightbulb, BarChart3, Globe, BookOpen } from 'lucide-react';
import { insightArticles } from '@/data/blogArticles';
import ReadingTime from '@/components/ReadingTime';
import NewsletterSignup from '@/components/NewsletterSignup';

// #COMPLETION_DRIVE_IMPL: Using centralized insights data
const featuredArticles = insightArticles;

const categories = [
  { name: 'All Insights', slug: 'all', count: 24 },
  { name: 'AI Strategy', slug: 'ai-strategy', count: 8 },
  { name: 'Data Analytics', slug: 'data-analytics', count: 6 },
  { name: 'Digital Transformation', slug: 'transformation', count: 5 },
  { name: 'Industry Insights', slug: 'industry', count: 3 },
  { name: 'Operational Excellence', slug: 'operations', count: 2 }
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DT</span>
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-900">VexioHQ</div>
                  <div className="text-xs text-slate-500 -mt-1">Strategic AI Advisory</div>
                </div>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#expertise" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">Expertise</Link>
              <Link href="/#solutions" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">Solutions</Link>
              <Link href="/insights" className="text-slate-900 font-semibold border-b-2 border-slate-900 pb-1">Insights</Link>
              <Link href="/#about" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">About</Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link 
                href="https://moneytrail.vexiohq.com"
                className="px-5 py-2 text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors font-medium"
              >
                MoneyTrail Platform
              </Link>
              <Link 
                href="/#contact"
                className="px-5 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4 mr-2" />
              Strategic Insights & Thought Leadership
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Strategic
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {' '}Insights
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Research-driven perspectives on AI transformation, data strategy, and the future of intelligent business.
              Insights from 200+ enterprise implementations and industry-leading experts.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.slug}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  category.slug === 'all' 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Insight</h2>
            <p className="text-slate-600">Our latest strategic analysis and thought leadership</p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 h-80 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <Brain className="h-20 w-20 mx-auto mb-4 opacity-80" />
                  <div className="text-lg font-semibold">Featured Insight</div>
                </div>
              </div>
              <div className="md:w-1/2 p-12">
                <div className="text-sm text-blue-600 font-bold mb-3">{featuredArticles[0].category}</div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">
                  {featuredArticles[0].title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                  {featuredArticles[0].excerpt}
                </p>
                <div className="flex items-center text-sm text-slate-500 mb-6">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredArticles[0].author}</span>
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredArticles[0].readTime}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{featuredArticles[0].date}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredArticles[0].tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  href={`/insights/${featuredArticles[0].id}`}
                  className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-semibold"
                >
                  Read Full Analysis <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Latest Insights</h2>
            <p className="text-slate-600">Strategic analysis and expert perspectives on transformative business topics</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.slice(1).map((article) => (
              <div key={article.id} className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-slate-500 to-slate-700 flex items-center justify-center">
                  <div className="text-center text-white">
                    {article.category.includes('ANALYTICS') && <BarChart3 className="h-12 w-12 mx-auto mb-2 opacity-80" />}
                    {article.category.includes('STRATEGY') && <Target className="h-12 w-12 mx-auto mb-2 opacity-80" />}
                    {article.category.includes('TRANSFORMATION') && <TrendingUp className="h-12 w-12 mx-auto mb-2 opacity-80" />}
                    {article.category.includes('INDUSTRY') && <Globe className="h-12 w-12 mx-auto mb-2 opacity-80" />}
                    {article.category.includes('OPERATIONAL') && <Lightbulb className="h-12 w-12 mx-auto mb-2 opacity-80" />}
                    {article.category.includes('DATA') && <BarChart3 className="h-12 w-12 mx-auto mb-2 opacity-80" />}
                    <div className="text-sm font-medium">{article.category}</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold mb-2" style={{
                    color: article.category.includes('ANALYTICS') ? '#059669' :
                           article.category.includes('STRATEGY') ? '#2563eb' :
                           article.category.includes('TRANSFORMATION') ? '#7c3aed' :
                           article.category.includes('INDUSTRY') ? '#ea580c' :
                           article.category.includes('OPERATIONAL') ? '#dc2626' : '#059669'
                  }}>
                    {article.category}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-slate-500 mb-4">
                    <User className="h-3 w-3 mr-1" />
                    <span className="mr-3">{article.author}</span>
                    <Clock className="h-3 w-3 mr-1" />
                    <span className="mr-3">{article.readTime}</span>
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {article.tags.slice(0, 2).map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={`/insights/${article.id}`}
                    className="inline-flex items-center font-semibold" style={{
                      color: article.category.includes('ANALYTICS') ? '#059669' :
                             article.category.includes('STRATEGY') ? '#2563eb' :
                             article.category.includes('TRANSFORMATION') ? '#7c3aed' :
                             article.category.includes('INDUSTRY') ? '#ea580c' :
                             article.category.includes('OPERATIONAL') ? '#dc2626' : '#059669'
                    }}
                  >
                    Read Analysis <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <div className="bg-slate-900">
        <NewsletterSignup 
          variant="inline"
          title="Stay Ahead of the Curve"
          description="Get strategic insights delivered to your inbox."
          context="insights_listing"
          className="bg-slate-900"
        />
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DT</span>
                </div>
                <div>
                  <div className="text-xl font-bold">VexioHQ</div>
                  <div className="text-sm text-slate-400">Strategic AI Advisory</div>
                </div>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                Transforming enterprises through strategic AI implementation, advanced analytics, 
                and intelligent automation solutions.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-6 text-white">Insights</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link href="/insights?category=ai-strategy" className="hover:text-white transition-colors">AI Strategy</Link></li>
                <li><Link href="/insights?category=data-analytics" className="hover:text-white transition-colors">Data Analytics</Link></li>
                <li><Link href="/insights?category=transformation" className="hover:text-white transition-colors">Digital Transformation</Link></li>
                <li><Link href="/insights?category=industry" className="hover:text-white transition-colors">Industry Insights</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-white">Solutions</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link href="https://moneytrail.vexiohq.com" className="hover:text-white transition-colors">MoneyTrail Platform</Link></li>
                <li><Link href="/#solutions" className="hover:text-white transition-colors">Strategic Intelligence</Link></li>
                <li><Link href="/#solutions" className="hover:text-white transition-colors">Workforce Analytics</Link></li>
                <li><Link href="/#contact" className="hover:text-white transition-colors">Custom Solutions</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-slate-400 mb-4 md:mb-0">
                &copy; 2025 VexioHQ Strategic AI Advisory. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm text-slate-400">
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="/#contact" className="hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}