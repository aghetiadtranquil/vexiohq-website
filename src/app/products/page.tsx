import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Brain, 
  BarChart3, 
  Shield, 
  Zap, 
  Users, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Award,
  Target,
  Lightbulb,
  Globe,
  Database,
  Cloud,
  GitBranch,
  Settings,
  Lock,
  Cpu
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Products & Solutions | Enterprise AI Platform - VexioHQ',
  description: 'Comprehensive AI platform for enterprise transformation. MLOps, Analytics, and Transformation solutions. 70+ projects delivered.',
  keywords: 'AI platform, enterprise AI, MLOps platform, AI analytics, digital transformation, machine learning platform',
  openGraph: {
    title: 'Enterprise AI Products & Solutions - VexioHQ',
    description: 'Transform your enterprise with our comprehensive AI platform. Proven ROI, Fortune 500 trusted.',
    url: 'https://vexiohq.com/products',
    type: 'website',
  }
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "VexioHQ AI Platform",
  "applicationCategory": "BusinessApplication",
  "description": "Enterprise AI platform for digital transformation",
  "offers": {
    "@type": "Offer",
    "price": "Contact for pricing",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  }
}

export default function ProductsPage() {
  const products = [
    {
      id: 'mlops',
      name: 'MLOps Platform',
      tagline: 'Production ML at Enterprise Scale',
      description: 'End-to-end machine learning operations platform for building, deploying, and managing ML models in production.',
      icon: <GitBranch className="h-8 w-8" />,
      features: [
        'Automated ML pipelines',
        'Model versioning & governance',
        'Real-time monitoring & alerts',
        'A/B testing & experimentation'
      ],
      benefits: {
        efficiency: '87% faster deployment',
        reliability: '4.2x model reliability',
        scale: '10,000+ models managed'
      },
      link: '/products/mlops',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'analytics',
      name: 'AI Analytics Suite',
      tagline: 'Intelligence from Data',
      description: 'Advanced analytics platform powered by AI for real-time insights, predictive analytics, and decision intelligence.',
      icon: <BarChart3 className="h-8 w-8" />,
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Natural language queries',
        'Automated insights generation'
      ],
      benefits: {
        speed: '10x faster insights',
        accuracy: '95% prediction accuracy',
        automation: '70% automated reporting'
      },
      link: '/products/analytics',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 'transformation',
      name: 'Digital Transformation Suite',
      tagline: 'Enterprise-Wide AI Adoption',
      description: 'Comprehensive solution for organization-wide AI transformation, from strategy to implementation.',
      icon: <Zap className="h-8 w-8" />,
      features: [
        'AI readiness assessment',
        'Custom AI strategy',
        'Change management',
        'ROI tracking & optimization'
      ],
      benefits: {
        roi: 'Proven results',
        time: 'Fast implementation',
        adoption: 'High user adoption'
      },
      link: '/products/transformation',
      color: 'from-green-600 to-emerald-600'
    }
  ]

  const platformCapabilities = [
    {
      title: 'Enterprise-Grade Security',
      description: 'SOC 2 Type II, HIPAA, GDPR compliant with end-to-end encryption',
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: 'Seamless Integration',
      description: 'Pre-built connectors for 200+ enterprise systems and data sources',
      icon: <Database className="h-6 w-6" />
    },
    {
      title: 'Scalable Infrastructure',
      description: 'Cloud-native architecture supporting millions of predictions daily',
      icon: <Cloud className="h-6 w-6" />
    },
    {
      title: 'Governance & Compliance',
      description: 'Built-in model governance, audit trails, and regulatory compliance',
      icon: <Lock className="h-6 w-6" />
    }
  ]

  const stats = [
    { value: '70+', label: 'Projects Delivered' },
    { value: '4', label: 'AI Products' },
    { value: 'SF', label: 'Based in San Francisco' }
  ]

  const industries = [
    'Financial Services',
    'Healthcare',
    'Retail & E-commerce',
    'Manufacturing',
    'Telecommunications',
    'Energy & Utilities'
  ]

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full mb-6">
              <Award className="h-5 w-5 text-blue-400" />
              <span className="text-blue-300 font-semibold">Gartner Leader in AI Platforms 2025</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Enterprise AI Platform
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                That Delivers Results
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              The only AI platform you need to transform your enterprise. From strategy to implementation, 
              we deliver measurable business outcomes with proven ROI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-xl">
                Start Your Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/consultation" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl transition-all border border-white/20">
                Request Demo
                <Brain className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three powerful products that work together to deliver end-to-end AI transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${product.color}`} />
                <div className="p-8">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${product.color} text-white mb-6`}>
                    {product.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm font-semibold text-gray-500 mb-4">{product.tagline}</p>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-6 mb-6">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {Object.entries(product.benefits).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-lg font-bold text-gray-900">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link href={product.link} className={`block text-center py-3 px-6 rounded-xl bg-gradient-to-r ${product.color} text-white font-semibold hover:opacity-90 transition-all`}>
                    Learn More
                    <ArrowRight className="inline-block ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Ready Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for scale, security, and compliance from day one
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformCapabilities.map((capability, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mb-4">
                  {capability.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-gray-600 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* McKinsey-Style Value Framework */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The VexioHQ Value Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology delivers measurable business impact across three dimensions
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-4">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Alignment</h3>
                <p className="text-gray-600 mb-6">
                  Align AI initiatives with business objectives to ensure every project drives measurable value
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Business case development</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">ROI modeling & tracking</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Executive stakeholder alignment</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Operational Excellence</h3>
                <p className="text-gray-600 mb-6">
                  Implement best practices and frameworks to ensure sustainable, scalable AI operations
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <Settings className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">MLOps best practices</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Settings className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Governance frameworks</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Settings className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Continuous improvement</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-4">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation Acceleration</h3>
                <p className="text-gray-600 mb-6">
                  Foster a culture of innovation and continuous learning to stay ahead of the competition
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Innovation workshops</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Proof of concept development</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Knowledge transfer programs</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-blue-50 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Ready to transform your enterprise?</h4>
                  <p className="text-gray-600">Get your personalized AI transformation roadmap</p>
                </div>
                <Link href="/consultation" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all">
                  Get Started
                  <ArrowRight className="inline-block ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep domain knowledge across key industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all cursor-pointer">
                <Globe className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <p className="text-sm font-semibold text-gray-900">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Transform Your Business with AI
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Start your AI transformation journey today with a free assessment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
              Get Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/resources" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/30">
              Download Whitepaper
              <Brain className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}