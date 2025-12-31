'use client';

import { useState } from 'react';
import { FileText, Download, CheckCircle, TrendingUp, Users, Clock, ArrowRight } from 'lucide-react';
import LeadCapture from '@/components/LeadCapture';

export default function EnterpriseAgenticAIGuide() {
  const [showLeadForm, setShowLeadForm] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium mb-6">
                <FileText className="h-4 w-4 mr-2" />
                FREE 40-PAGE WHITEPAPER
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                The Enterprise Guide to Agentic AI Implementation
              </h1>
              
              <p className="text-xl text-slate-300 mb-8">
                Learn how companies are achieving significant cost reduction and productivity
                gains with autonomous AI agents. Based on our 70+ project experience.
              </p>

              <button
                onClick={() => setShowLeadForm(true)}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-bold text-lg inline-flex items-center"
              >
                Download Your Free Copy <Download className="ml-3 h-5 w-5" />
              </button>

              <div className="mt-8 flex items-center gap-6 text-slate-300">
                <div className="flex items-center">
                  <Download className="h-5 w-5 mr-2" />
                  <span>Free Download</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  <span>CXO Level</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl p-8 transform rotate-3">
                <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  2024 Edition
                </div>
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <FileText className="h-16 w-16 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    AGENTIC AI
                  </h2>
                  <p className="text-slate-600">Enterprise Implementation Guide</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>40 Pages of Actionable Insights</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>15 Real Case Studies</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>ROI Calculator Template</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Implementation Roadmap</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why 87% of AI Projects Fail (And How to Be in the 13% That Succeed)
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              This whitepaper reveals the exact framework we use to deliver successful
              AI implementations with satisfied clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">40% Cost Reduction</h3>
              <p className="text-slate-600">
                Average savings achieved by enterprises following our implementation framework
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">12-Week Deployment</h3>
              <p className="text-slate-600">
                From strategy to production-ready AI agents using our proven methodology
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fortune 500 Proven</h3>
              <p className="text-slate-600">
                Trusted by Sunrun, Wind River, Cree, and 50+ enterprise clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            What You'll Learn Inside This 40-Page Guide
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Strategic Insights</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <span className="font-bold text-blue-600">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      The Agentic AI Maturity Model
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Assess where your organization stands and create a roadmap to AI excellence
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <span className="font-bold text-blue-600">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      ROI Calculation Framework
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Quantify AI impact with our proven metrics and Excel templates
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <span className="font-bold text-blue-600">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Change Management Playbook
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Get your organization ready for AI transformation (70% of success)
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Technical Deep-Dives</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <span className="font-bold text-purple-600">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Architecture Patterns That Work
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Production-ready designs for multi-agent systems with guardrails
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <span className="font-bold text-purple-600">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Data Preparation Checklist
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Ensure your data is AI-ready (40% of project time saved)
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <span className="font-bold text-purple-600">6</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Security & Compliance Guide
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Build trustworthy AI with enterprise-grade security controls
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Case Studies Preview */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              15 Real-World Case Studies Included
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
                <p className="text-sm text-slate-600">Fraud reduction at major bank</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">3.2x</div>
                <p className="text-sm text-slate-600">Productivity gain in healthcare</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">$12M</div>
                <p className="text-sm text-slate-600">Annual savings in manufacturing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            What Industry Leaders Are Saying
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-slate-900">Sarah Chen</p>
                  <p className="text-sm text-slate-600">CTO, Fortune 500 Retailer</p>
                </div>
              </div>
              <p className="text-slate-600 italic">
                "This guide saved us 6 months of trial and error. The ROI framework alone 
                justified our entire AI investment to the board."
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-slate-900">Michael Torres</p>
                  <p className="text-sm text-slate-600">VP Innovation, Healthcare System</p>
                </div>
              </div>
              <p className="text-slate-600 italic">
                "Finally, a practical guide that bridges strategy and implementation. 
                We're now deploying AI agents across 12 hospitals."
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-slate-900">David Park</p>
                  <p className="text-sm text-slate-600">Chief Data Officer, Financial Services</p>
                </div>
              </div>
              <p className="text-slate-600 italic">
                "The architecture patterns are production-ready. We implemented them 
                directly and saw results in weeks, not months."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Authors */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            About the Authors
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">VexioHQ Team</h3>
            <p className="text-slate-600 mb-6">
              With deep enterprise technology experience, we bring real-world expertise
              to every page. Based in San Francisco, we've delivered 70+ AI projects
              across multiple industries.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">70+</div>
                <p className="text-slate-600">Projects Delivered</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">4</div>
                <p className="text-slate-600">AI Products</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">SF</div>
                <p className="text-slate-600">Based in San Francisco</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Your Free Copy Now
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your AI transformation with confidence.
          </p>
          
          <button
            onClick={() => setShowLeadForm(true)}
            className="px-12 py-5 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-bold text-xl inline-flex items-center"
          >
            Download the Complete Guide <ArrowRight className="ml-3 h-6 w-6" />
          </button>
          
          <p className="text-sm text-blue-200 mt-6">
            No spam. Unsubscribe anytime. Your data is secure.
          </p>
        </div>
      </section>

      {/* Lead Capture Modal */}
      {showLeadForm && (
        <LeadCapture
          title="Download: Enterprise Guide to Agentic AI"
          description="Get instant access to 40 pages of actionable insights, case studies, and implementation frameworks."
          resourceName="Enterprise Agentic AI Guide"
          onClose={() => setShowLeadForm(false)}
        />
      )}
    </main>
  );
}