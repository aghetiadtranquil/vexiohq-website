'use client';

import Link from 'next/link';
import { ProfessionalIcons } from './ProfessionalIcons';

const features = [
  {
    title: 'Intelligent Automation',
    description: 'Automate complex workflows with AI agents that learn and adapt to your business processes.',
    icon: ProfessionalIcons.automation,
    gradient: 'from-blue-500 to-cyan-500',
    image: '/api/placeholder/400/300'
  },
  {
    title: 'Predictive Analytics',
    description: 'Leverage machine learning to forecast trends and make data-driven decisions.',
    icon: ProfessionalIcons.analytics,
    gradient: 'from-purple-500 to-pink-500',
    image: '/api/placeholder/400/300'
  },
  {
    title: 'Neural Networks',
    description: 'Deep learning models that process complex patterns and deliver breakthrough insights.',
    icon: ProfessionalIcons.mlPlatform,
    gradient: 'from-green-500 to-teal-500',
    image: '/api/placeholder/400/300'
  },
  {
    title: 'Cloud AI Platform',
    description: 'Scalable infrastructure that grows with your needs, deployed across global regions.',
    icon: ProfessionalIcons.cloudDeploy,
    gradient: 'from-orange-500 to-red-500',
    image: '/api/placeholder/400/300'
  }
];

export default function AIFeatureSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
            <span className="text-sm font-semibold text-blue-600">FEATURES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cutting-Edge AI Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines the latest advances in artificial intelligence to deliver 
            unparalleled business value and transformation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative p-8">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`p-3 bg-gradient-to-br ${feature.gradient} rounded-xl text-white shadow-lg`}>
                    <div className="w-8 h-8 flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <Link href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                      Learn more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="mt-6">
                  <div className={`h-2 bg-gradient-to-r ${feature.gradient} rounded-full opacity-20`}>
                    <div className={`h-2 bg-gradient-to-r ${feature.gradient} rounded-full w-2/3 animate-pulse`} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Visualization Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900 to-purple-900 p-12">
          {/* Neural Network Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="neural-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="2" fill="white" />
                  <circle cx="90" cy="10" r="2" fill="white" />
                  <circle cx="50" cy="50" r="3" fill="white" />
                  <circle cx="10" cy="90" r="2" fill="white" />
                  <circle cx="90" cy="90" r="2" fill="white" />
                  <line x1="10" y1="10" x2="50" y2="50" stroke="white" strokeWidth="0.5" />
                  <line x1="90" y1="10" x2="50" y2="50" stroke="white" strokeWidth="0.5" />
                  <line x1="10" y1="90" x2="50" y2="50" stroke="white" strokeWidth="0.5" />
                  <line x1="90" y1="90" x2="50" y2="50" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#neural-pattern)" />
            </svg>
          </div>

          <div className="relative z-10 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Experience the Power of AI
            </h3>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Join thousands of companies already transforming their operations with our 
              advanced AI platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="px-8 py-4 bg-white text-blue-900 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Request Demo
              </Link>
              <Link href="/case-studies" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}