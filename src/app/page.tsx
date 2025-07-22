'use client';

import Link from 'next/link';
import { ArrowRight, Brain, BarChart3, Sparkles, Users, Zap, CheckCircle, Globe, Shield, TrendingUp } from 'lucide-react';

export default function CompanyHomepage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">DT</span>
                </div>
                <span className="text-xl font-bold text-gray-900">DataTranquil</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#products" className="text-gray-700 hover:text-blue-600 transition-colors">Products</Link>
              <Link href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link 
                href="https://moneytrail-nine.vercel.app"
                className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Try MoneyTrail
              </Link>
              <Link 
                href="#contact"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI-Powered
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}Data Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business with intelligent automation, advanced analytics, and cutting-edge AI technologies. 
              From expense tracking to enterprise solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#products"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Explore Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="#services"
                className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our suite of AI-powered applications designed to streamline your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* MoneyTrail */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">MoneyTrail</h3>
              <p className="text-gray-600 mb-6">
                AI-powered expense tracking with receipt scanning, automated categorization, and intelligent insights.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Receipt OCR & AI Processing
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Smart Categorization
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Real-time Analytics
                </div>
              </div>
              <Link 
                href="https://moneytrail-nine.vercel.app"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Try Live Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Coming Soon Products */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow opacity-75">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">DataMind</h3>
              <p className="text-gray-600 mb-6">
                Advanced data analytics platform with machine learning capabilities for business intelligence.
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg">
                Coming Soon
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow opacity-75">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AutoFlow</h3>
              <p className="text-gray-600 mb-6">
                Intelligent workflow automation platform for streamlining repetitive business processes.
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg">
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to accelerate your digital transformation journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Development</h3>
              <p className="text-gray-600 text-sm">
                Custom AI solutions, machine learning models, and intelligent automation systems.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Analytics</h3>
              <p className="text-gray-600 text-sm">
                Advanced analytics, business intelligence, and data visualization solutions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Consulting</h3>
              <p className="text-gray-600 text-sm">
                Strategic guidance for AI adoption, digital transformation, and technology roadmaps.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-5 w-5 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Automation</h3>
              <p className="text-gray-600 text-sm">
                Process automation, workflow optimization, and intelligent system integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">AI Models Deployed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">1M+</div>
              <div className="text-gray-600">Data Points Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let us help you harness the power of AI and data to drive growth and efficiency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#contact"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Start Your Project
            </Link>
            <Link 
              href="https://moneytrail-nine.vercel.app"
              className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Try MoneyTrail Free
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">DT</span>
                </div>
                <span className="text-xl font-bold">DataTranquil</span>
              </div>
              <p className="text-gray-400 text-sm">
                Transforming businesses with AI-powered solutions and intelligent automation.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="https://moneytrail-nine.vercel.app" className="hover:text-white transition-colors">MoneyTrail</Link></li>
                <li><span className="opacity-50">DataMind (Coming Soon)</span></li>
                <li><span className="opacity-50">AutoFlow (Coming Soon)</span></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#services" className="hover:text-white transition-colors">AI Development</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Data Analytics</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Consulting</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Automation</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>support@datatranquil.com</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 DataTranquil. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}