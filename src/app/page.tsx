'use client';

import Link from 'next/link';
import { ArrowRight, Brain, BarChart3, Sparkles, Users, Zap, CheckCircle, Globe, Shield, TrendingUp, Award, Target, Lightbulb, BookOpen } from 'lucide-react';

export default function CompanyHomepage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DT</span>
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-900">DataTranquil</div>
                  <div className="text-xs text-slate-500 -mt-1">Strategic AI Advisory</div>
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#expertise" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">Expertise</Link>
              <Link href="#solutions" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">Solutions</Link>
              <Link href="#insights" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">Insights</Link>
              <Link href="#about" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">About</Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link 
                href="https://moneytrail.datatranquil.com"
                className="px-5 py-2 text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors font-medium"
              >
                MoneyTrail Platform
              </Link>
              <Link 
                href="#contact"
                className="px-5 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-8">
              <Award className="h-4 w-4 mr-2" />
              Trusted by Forward-Thinking Organizations
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              Strategic AI
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {' '}Transformation
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              We partner with executive teams to unlock transformative value through intelligent automation, 
              advanced analytics, and strategic AI implementation. Drive sustainable growth with data-driven insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link 
                href="#expertise"
                className="px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center font-semibold"
              >
                Explore Our Expertise <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="#case-studies"
                className="px-8 py-4 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-semibold"
              >
                View Case Studies
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-slate-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">500M+</div>
                <div className="text-slate-600">Data Points Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">150+</div>
                <div className="text-slate-600">AI Models Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">40%</div>
                <div className="text-slate-600">Average Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">99.7%</div>
                <div className="text-slate-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section id="expertise" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Core Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Deep domain knowledge across critical business functions, powered by cutting-edge AI and analytics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Strategy & Implementation */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">AI Strategy & Implementation</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Enterprise-grade AI transformation strategies. From roadmap development to full-scale deployment, 
                we ensure sustainable competitive advantage.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Strategic AI Roadmapping
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Custom ML Model Development
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Ethical AI Governance
                </div>
              </div>
              <Link 
                href="#contact"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Data & Analytics Excellence */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Data & Analytics Excellence</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Transform raw data into strategic assets. Advanced analytics, predictive modeling, and 
                real-time intelligence for informed decision-making.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Predictive Analytics
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Real-time Dashboards
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Data Governance
                </div>
              </div>
              <Link 
                href="#contact"
                className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-semibold"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Digital Transformation */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Digital Transformation</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                End-to-end digital transformation programs. Process optimization, technology integration, 
                and organizational change management.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Process Automation
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  System Integration
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Change Management
                </div>
              </div>
              <Link 
                href="#contact"
                className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Portfolio */}
      <section id="solutions" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Solutions Portfolio
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Proven solutions that deliver measurable business impact across industries
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* MoneyTrail Showcase */}
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">MoneyTrail Platform</h3>
                  <p className="text-slate-600">Intelligent Financial Management</p>
                </div>
              </div>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our flagship AI-powered expense management platform demonstrates the transformative power 
                of intelligent automation. Built for modern enterprises seeking financial clarity and control.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-slate-900 mb-1">90%</div>
                  <div className="text-sm text-slate-600">Processing Time Reduction</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-slate-900 mb-1">99.7%</div>
                  <div className="text-sm text-slate-600">OCR Accuracy Rate</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-slate-900 mb-1">$2.4M</div>
                  <div className="text-sm text-slate-600">Annual Savings (Avg Client)</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-slate-900 mb-1">15min</div>
                  <div className="text-sm text-slate-600">Implementation Time</div>
                </div>
              </div>
              
              <Link 
                href="https://moneytrail.datatranquil.com"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Experience MoneyTrail <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Enterprise Solutions */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Target className="h-5 w-5 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Strategic Intelligence Platform</h4>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Real-time business intelligence with predictive analytics for executive decision-making.
                </p>
                <div className="text-sm text-slate-500">Available Q2 2025</div>
              </div>

              <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Workforce Analytics Suite</h4>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  AI-driven human capital optimization and performance management solutions.
                </p>
                <div className="text-sm text-slate-500">In Development</div>
              </div>

              <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <Globe className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Supply Chain Intelligence</h4>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  End-to-end supply chain optimization with predictive risk management.
                </p>
                <div className="text-sm text-slate-500">Beta Program Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Insights Blog */}
      <section id="insights" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Strategic Insights
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Thought leadership on AI transformation, data strategy, and the future of intelligent business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Featured Article */}
            <div className="md:col-span-2 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <Lightbulb className="h-16 w-16 mx-auto mb-4 opacity-80" />
                  <div className="text-lg font-semibold">Featured Insight</div>
                </div>
              </div>
              <div className="p-8">
                <div className="text-sm text-blue-600 font-semibold mb-2">AI STRATEGY</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  The CEO's Guide to AI-Driven Transformation: Beyond the Hype
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  How forward-thinking executives are leveraging AI to create sustainable competitive advantages. 
                  Our analysis of 200+ enterprise implementations reveals critical success factors and common pitfalls.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-500">8 min read • Jan 15, 2025</div>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Read More</Link>
                </div>
              </div>
            </div>

            {/* Recent Articles */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6">
                <div className="text-xs text-emerald-600 font-semibold mb-2">DATA ANALYTICS</div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">
                  Real-Time Analytics: The New Competitive Imperative
                </h4>
                <p className="text-slate-600 text-sm mb-4">
                  Why milliseconds matter in modern business decision-making and how to build responsive data architectures.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-slate-500">5 min read</div>
                  <Link href="#" className="text-emerald-600 hover:text-emerald-800 font-semibold text-sm">Read</Link>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6">
                <div className="text-xs text-purple-600 font-semibold mb-2">DIGITAL TRANSFORMATION</div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">
                  The Human Element in AI Implementation
                </h4>
                <p className="text-slate-600 text-sm mb-4">
                  Change management strategies that ensure successful AI adoption across enterprise organizations.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-slate-500">7 min read</div>
                  <Link href="#" className="text-purple-600 hover:text-purple-800 font-semibold text-sm">Read</Link>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6">
                <div className="text-xs text-orange-600 font-semibold mb-2">INDUSTRY INSIGHTS</div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">
                  Financial Services: AI's Next Frontier
                </h4>
                <p className="text-slate-600 text-sm mb-4">
                  How intelligent automation is reshaping risk management, compliance, and customer experience.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-slate-500">6 min read</div>
                  <Link href="#" className="text-orange-600 hover:text-orange-800 font-semibold text-sm">Read</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/insights"
              className="inline-flex items-center px-8 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-semibold"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              View All Insights
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Partner with DataTranquil to unlock the transformative power of AI and data. 
            Let's build your competitive advantage together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="#contact"
              className="px-8 py-4 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors font-bold"
            >
              Start Your Transformation
            </Link>
            <Link 
              href="https://moneytrail.datatranquil.com"
              className="px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-colors font-semibold"
            >
              Explore MoneyTrail
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DT</span>
                </div>
                <div>
                  <div className="text-xl font-bold">DataTranquil</div>
                  <div className="text-sm text-slate-400">Strategic AI Advisory</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                Transforming enterprises through strategic AI implementation, advanced analytics, 
                and intelligent automation solutions.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-6 text-white">Solutions</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link href="https://moneytrail.datatranquil.com" className="hover:text-white transition-colors">MoneyTrail Platform</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Strategic Intelligence</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Workforce Analytics</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Supply Chain Intelligence</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-white">Expertise</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link href="#" className="hover:text-white transition-colors">AI Strategy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Data Analytics</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Digital Transformation</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Process Automation</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-slate-400 mb-4 md:mb-0">
                &copy; 2025 DataTranquil Strategic AI Advisory. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm text-slate-400">
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}