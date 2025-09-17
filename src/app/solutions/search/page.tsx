import { Metadata } from 'next'
import Link from 'next/link'
import { Search, ArrowRight, Brain, Zap, BarChart3, Shield, Users, TrendingUp, Database, FileSearch, Globe, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI-Powered Search Solutions | DataTranquil',
  description: 'Transform your enterprise search with AI. Semantic search, natural language processing, and intelligent information retrieval for better business decisions.',
  keywords: 'AI search, semantic search, enterprise search, NLP search, intelligent search, search solutions',
  openGraph: {
    title: 'AI-Powered Enterprise Search Solutions',
    description: 'Revolutionize information discovery with intelligent search capabilities',
    type: 'website',
  },
}

export default function SearchSolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 font-semibold mb-6">
              <Search className="h-4 w-4 mr-2" />
              Enterprise Search Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              AI-Powered Search
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                That Understands Context
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Move beyond keyword matching. Our AI search solutions understand intent, context, and relationships 
              to deliver precisely what your users need, when they need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation" className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-105">
                Get AI Search Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="#demo" className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-600 rounded-lg hover:bg-indigo-50 transition-all">
                See Live Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">85%</div>
              <div className="text-gray-600">Faster Information Discovery</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">60%</div>
              <div className="text-gray-600">Reduced Search Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">95%</div>
              <div className="text-gray-600">Search Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">3x</div>
              <div className="text-gray-600">Employee Productivity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Traditional Search Problems */}
              <div className="bg-red-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Traditional Search Limitations</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Keyword Dependency</strong>
                      <p className="text-gray-600 text-sm mt-1">Users must know exact terms to find information</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">No Context Understanding</strong>
                      <p className="text-gray-600 text-sm mt-1">Can't interpret user intent or relationships</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Information Silos</strong>
                      <p className="text-gray-600 text-sm mt-1">Can't search across different data sources</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Poor Relevance</strong>
                      <p className="text-gray-600 text-sm mt-1">Results often miss the mark</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* AI Search Solutions */}
              <div className="bg-green-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">AI-Powered Search Advantages</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Natural Language Understanding</strong>
                      <p className="text-gray-600 text-sm mt-1">Ask questions in plain English</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Semantic Search</strong>
                      <p className="text-gray-600 text-sm mt-1">Understands meaning and context</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Unified Search</strong>
                      <p className="text-gray-600 text-sm mt-1">Search across all data sources simultaneously</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Intelligent Ranking</strong>
                      <p className="text-gray-600 text-sm mt-1">AI-powered relevance scoring</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Search Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive features that transform how your organization discovers and uses information
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <Brain className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cognitive Search</h3>
              <p className="text-gray-600 mb-4">
                Understands concepts, synonyms, and relationships between entities
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Entity recognition</li>
                <li>• Concept mapping</li>
                <li>• Contextual understanding</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <FileSearch className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Modal Search</h3>
              <p className="text-gray-600 mb-4">
                Search across text, images, documents, and structured data
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Document analysis</li>
                <li>• Image recognition</li>
                <li>• Video content search</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <Zap className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-Time Processing</h3>
              <p className="text-gray-600 mb-4">
                Instant results with sub-second response times
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Live indexing</li>
                <li>• Stream processing</li>
                <li>• Dynamic updates</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <Database className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Federated Search</h3>
              <p className="text-gray-600 mb-4">
                Unified search across multiple databases and systems
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• API integration</li>
                <li>• Database connectors</li>
                <li>• Cloud storage search</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <Shield className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Compliant</h3>
              <p className="text-gray-600 mb-4">
                Enterprise-grade security with role-based access control
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Encryption at rest</li>
                <li>• Access controls</li>
                <li>• Audit logging</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <BarChart3 className="h-12 w-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics & Insights</h3>
              <p className="text-gray-600 mb-4">
                Track search patterns and optimize information architecture
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Search analytics</li>
                <li>• User behavior tracking</li>
                <li>• Performance metrics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600">
              Transforming search across every sector
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Service</h3>
                  <p className="text-gray-600 mb-4">
                    Empower agents with instant access to knowledge bases, past interactions, and solutions
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Knowledge Management</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Case Resolution</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">FAQ Search</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">E-Commerce</h3>
                  <p className="text-gray-600 mb-4">
                    Deliver personalized product discovery with semantic understanding of customer intent
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Product Discovery</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Visual Search</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Recommendations</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileSearch className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Legal & Compliance</h3>
                  <p className="text-gray-600 mb-4">
                    Search through contracts, regulations, and case law with contextual understanding
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Document Search</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Contract Analysis</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Compliance Check</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-8 w-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Research & Development</h3>
                  <p className="text-gray-600 mb-4">
                    Accelerate innovation by finding relevant research, patents, and technical documentation
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Patent Search</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Research Papers</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Technical Docs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Implementation Roadmap
            </h2>
            <p className="text-xl text-gray-600">
              A proven approach to deploying enterprise AI search
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                <div className="relative flex items-start gap-8">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 z-10">
                    1
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Discovery & Assessment</h3>
                    <p className="text-gray-600 mb-3">Analyze your current search infrastructure and identify opportunities</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>1-2 weeks</span>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-start gap-8">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 z-10">
                    2
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Data Integration</h3>
                    <p className="text-gray-600 mb-3">Connect and index your data sources with AI-powered processing</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>2-4 weeks</span>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-start gap-8">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 z-10">
                    3
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Model Training</h3>
                    <p className="text-gray-600 mb-3">Customize AI models for your specific domain and use cases</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>3-4 weeks</span>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-start gap-8">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 z-10">
                    4
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Deployment & Optimization</h3>
                    <p className="text-gray-600 mb-3">Launch your AI search solution and continuously improve performance</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>2-3 weeks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transform Your Enterprise Search Today
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Join leading organizations using AI to revolutionize how they discover and leverage information
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation" className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold">
                Get Search Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/resources" className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all font-semibold">
                Download Whitepaper
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}