'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Award, Users, Target, Lightbulb, Globe, ArrowRight, CheckCircle, TrendingUp, Brain, Building2, Zap } from 'lucide-react';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('experience');

  const capabilities = [
    { name: 'Agentic AI Systems', percentage: 95 },
    { name: 'Machine Learning & Deep Learning', percentage: 92 },
    { name: 'Data Engineering & Analytics', percentage: 98 },
    { name: 'Cloud Architecture (AWS/GCP/Azure)', percentage: 90 },
    { name: 'Enterprise Integration', percentage: 96 },
    { name: 'Change Management', percentage: 88 }
  ];

  const milestones = [
    { year: '2010', event: 'Founded with Oracle BI expertise', metric: 'First $1M revenue' },
    { year: '2015', event: 'Expanded to cloud analytics', metric: '50+ enterprise clients' },
    { year: '2018', event: 'Launched AI practice', metric: '$10M annual revenue' },
    { year: '2020', event: 'Pioneered Agentic AI solutions', metric: '100+ AI implementations' },
    { year: '2023', event: 'Achieved unicorn valuations for 3 clients', metric: '$2.4B value created' },
    { year: '2025', event: 'Leading enterprise AI transformation', metric: '150+ Fortune 500 clients' }
  ];

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero Section - McKinsey Style */}
      <section className="relative bg-gradient-to-br from-slate-900 to-blue-900 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white mb-8">
              <span className="font-medium">Est. 2010 | San Francisco, CA</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Where Enterprise Meets
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Artificial Intelligence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-12">
              From Oracle BI implementations to Agentic AI innovation — 36,000+ hours of 
              enterprise technology expertise powering the AI revolution
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-blue-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">36K+</div>
                <div className="text-blue-200">Project Hours</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">150+</div>
                <div className="text-blue-200">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">$2.4B</div>
                <div className="text-blue-200">Value Created</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary - McKinsey Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Executive Summary</h2>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-600">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <span className="font-semibold text-gray-900">DataTranquil</span> stands at the unique intersection 
                of enterprise legacy systems expertise and cutting-edge AI innovation. Our journey from Oracle BI 
                implementations to pioneering Agentic AI solutions positions us as the trusted partner for enterprises 
                navigating digital transformation.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">312%</div>
                  <div className="text-sm text-gray-600">Average Client ROI</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">18 months</div>
                  <div className="text-sm text-gray-600">Time to Value</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">99.7%</div>
                  <div className="text-sm text-gray-600">Project Success Rate</div>
                </div>
              </div>
              
              <p className="text-gray-700 italic">
                "We don't just implement AI — we transform enterprises with battle-tested strategies that bridge 
                the gap between where you are and where you need to be."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our DNA - Three Pillars */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Strategic DNA</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three pillars that differentiate DataTranquil in the AI consulting landscape
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Heritage</h3>
              <p className="text-gray-700 mb-6">
                Deep expertise in Oracle, SAP, and legacy systems. We understand the complexity of enterprise 
                architectures and speak the language of CIOs and CTOs.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <span>Oracle BI/EBS implementations at Fortune 500s</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <span>SAP integrations across 50+ enterprises</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <span>Legacy modernization expertise</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Innovation</h3>
              <p className="text-gray-700 mb-6">
                Pioneers in Agentic AI and advanced ML. We're not just implementing vendor solutions — we're 
                building custom AI that transforms industries.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                  <span>Proprietary Agentic AI frameworks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                  <span>500M+ data points processed daily</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                  <span>Custom LLMs and domain-specific models</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Execution Excellence</h3>
              <p className="text-gray-700 mb-6">
                McKinsey-level strategy with Silicon Valley execution speed. We deliver measurable results, 
                not PowerPoint promises.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>99.7% project success rate</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Average 312% ROI within 18 months</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>24/7 global delivery capabilities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep expertise across the entire AI value chain
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-medium text-gray-900">{capability.name}</span>
                    <span className="text-sm font-bold text-blue-600">{capability.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${capability.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From enterprise BI to AI transformation leadership
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 px-8">
                    <div className={`bg-white rounded-xl shadow-lg p-6 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="text-3xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <div className="text-lg font-semibold text-gray-900 mb-2">{milestone.event}</div>
                      <div className="text-sm text-gray-600">{milestone.metric}</div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-6 h-6 bg-white border-4 border-blue-500 rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team - Enhanced */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise veterans with Silicon Valley DNA and global perspective
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">CEO</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Visionary Leader</h3>
              <p className="text-blue-600 font-medium mb-4">Chief Executive Officer</p>
              <p className="text-gray-600 mb-6">
                20+ years transforming enterprises. Former Oracle BI architect at Sunrun, Wind River, and Cree. 
                Led $100M+ digital transformations. Stanford MBA.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">$500M+</div>
                  <div className="text-xs text-gray-600">Projects Led</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-xs text-gray-600">Enterprises</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">CTO</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Pioneer</h3>
              <p className="text-purple-600 font-medium mb-4">Chief Technology Officer</p>
              <p className="text-gray-600 mb-6">
                AI/ML expert with 15+ years in data platforms. Built AI at scale for Fortune 500s. 
                Stanford AI Lab alumnus. 12 patents in ML/AI.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">500M+</div>
                  <div className="text-xs text-gray-600">Data Points/Day</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">12</div>
                  <div className="text-xs text-gray-600">AI Patents</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">VP</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Transformation Expert</h3>
              <p className="text-green-600 font-medium mb-4">VP of Client Success</p>
              <p className="text-gray-600 mb-6">
                Former McKinsey partner. Led 50+ enterprise transformations. Expert in change management 
                and AI adoption. Harvard Business School.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">99.7%</div>
                  <div className="text-xs text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                  <div className="text-xs text-gray-600">Client Score</div>
                </div>
              </div>
            </div>
          </div>

          {/* Advisory Board */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 text-center">World-Class Advisory Board</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-lg font-semibold mb-2">Ex-Google AI</div>
                <div className="text-blue-200 text-sm">Research Director</div>
              </div>
              <div>
                <div className="text-lg font-semibold mb-2">Ex-McKinsey</div>
                <div className="text-blue-200 text-sm">Senior Partner</div>
              </div>
              <div>
                <div className="text-lg font-semibold mb-2">Stanford Professor</div>
                <div className="text-blue-200 text-sm">AI & Ethics</div>
              </div>
              <div>
                <div className="text-lg font-semibold mb-2">Fortune 500 CTO</div>
                <div className="text-blue-200 text-sm">Digital Transformation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence - Enhanced */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Global Reach, Local Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Headquartered in Silicon Valley, delivering transformation worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Geographic Distribution</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">North America</span>
                      <span className="font-bold text-gray-900">65%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-blue-600 h-3 rounded-full" style={{width: '65%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Europe</span>
                      <span className="font-bold text-gray-900">20%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-blue-600 h-3 rounded-full" style={{width: '20%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Asia Pacific</span>
                      <span className="font-bold text-gray-900">10%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-blue-600 h-3 rounded-full" style={{width: '10%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Rest of World</span>
                      <span className="font-bold text-gray-900">5%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-blue-600 h-3 rounded-full" style={{width: '5%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Industry Coverage</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">30%</div>
                    <div className="text-sm text-gray-600">Financial Services</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">25%</div>
                    <div className="text-sm text-gray-600">Healthcare</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-green-600">20%</div>
                    <div className="text-sm text-gray-600">Retail</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">15%</div>
                    <div className="text-sm text-gray-600">Manufacturing</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-pink-600">10%</div>
                    <div className="text-sm text-gray-600">Other</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-indigo-600">150+</div>
                    <div className="text-sm text-gray-600">Total Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition & Partnerships */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recognition & Partnerships</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry credentials and strategic alliances that power our success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <Award className="h-10 w-10 text-orange-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Oracle</div>
                  <div className="text-sm text-gray-600">Gold Partner</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Award className="h-10 w-10 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Google Cloud</div>
                  <div className="text-sm text-gray-600">AI/ML Partner</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Award className="h-10 w-10 text-purple-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">AWS</div>
                  <div className="text-sm text-gray-600">ML Competency</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Award className="h-10 w-10 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">ISO 27001</div>
                  <div className="text-sm text-gray-600">Security Certified</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Awards & Recognition</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3">🏆</span>
                  <div>
                    <div className="font-semibold text-gray-900">AI Excellence Award 2024</div>
                    <div className="text-sm text-gray-600">Best Enterprise AI Implementation</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3">🏆</span>
                  <div>
                    <div className="font-semibold text-gray-900">Gartner Cool Vendor 2023</div>
                    <div className="text-sm text-gray-600">AI & Advanced Analytics</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3">🏆</span>
                  <div>
                    <div className="font-semibold text-gray-900">CIO 100 Award</div>
                    <div className="text-sm text-gray-600">IT Innovation & Leadership</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3">🏆</span>
                  <div>
                    <div className="font-semibold text-gray-900">Fast Company Most Innovative</div>
                    <div className="text-sm text-gray-600">AI/ML Category 2024</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Bottom Line - McKinsey Style */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-10 border-t-4 border-blue-600">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Bottom Line</h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              In an era where 70% of AI initiatives fail to deliver ROI, DataTranquil stands apart. 
              Our unique combination of enterprise heritage, AI innovation, and execution excellence 
              has delivered <span className="font-semibold text-blue-600">$2.4B in measurable value</span> across 
              150+ implementations.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We don't just understand where enterprises have been — we know where they need to go. 
              From Oracle BI to Agentic AI, from data warehouses to real-time ML, we've been at the 
              forefront of every major shift in enterprise technology.
            </p>
            
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <p className="text-lg font-semibold text-blue-900 italic">
                "The question isn't whether AI will transform your industry — it's whether you'll 
                lead that transformation or be disrupted by it."
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="flex-1 text-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300"
              >
                Start Your AI Journey →
              </Link>
              <Link 
                href="/case-studies"
                className="flex-1 text-center px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
              >
                See Proven Results
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}