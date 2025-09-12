'use client';

import { useState } from 'react';
import { CheckCircle, Download, ArrowRight, Building, Users, TrendingUp, Shield, Clock, Star } from 'lucide-react';
import LeadCapture from '@/components/LeadCapture';

export default function AIReadinessChecklistPage() {
  const [showLeadCapture, setShowLeadCapture] = useState(false);

  const benefits = [
    {
      icon: CheckCircle,
      title: "Enterprise-Tested Framework",
      description: "Based on 150+ successful AI implementations across Fortune 500 companies"
    },
    {
      icon: TrendingUp,
      title: "Actionable Insights",
      description: "Get specific recommendations with priority levels and implementation timelines"
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Identify potential challenges before they become costly problems"
    },
    {
      icon: Clock,
      title: "30-Minute Assessment",
      description: "Complete evaluation of your organization's AI readiness in under 30 minutes"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "CTO, TechCorp",
      company: "Fortune 500 Technology Company",
      content: "This checklist saved us months of planning. We identified critical gaps early and achieved 340% ROI on our first AI project.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      title: "VP of Innovation",
      company: "Financial Services Leader",
      content: "The comprehensive framework helped us prioritize our AI initiatives. We're now seeing 25% efficiency gains across operations.",
      rating: 5
    }
  ];

  const checklistPreview = [
    "Data Infrastructure Assessment (15 critical checkpoints)",
    "Organizational Readiness Evaluation (20+ cultural factors)",
    "Technical Capability Audit (Hardware, software, skills gap analysis)",
    "Compliance & Governance Framework (Regulatory requirements)",
    "ROI Potential Calculator (Custom to your industry)",
    "Implementation Roadmap Template (90-day action plan)"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 rounded-full text-blue-300 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Trusted by 50+ Fortune 500 Companies
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                The Complete <span className="text-blue-400">AI Readiness</span> Checklist
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Discover if your organization is ready for AI transformation. Get a comprehensive 47-point assessment framework used by Fortune 500 companies to achieve 312% average ROI on their AI initiatives.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => setShowLeadCapture(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Get Your Free Checklist
                </button>
                <div className="flex items-center text-slate-300 text-sm">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  No spam. Instant download.
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">150+</div>
                  <div className="text-sm text-slate-400">Implementations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">312%</div>
                  <div className="text-sm text-slate-400">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">87%</div>
                  <div className="text-sm text-slate-400">Success Rate</div>
                </div>
              </div>
            </div>
            
            <div className="lg:pl-8">
              <div className="bg-white rounded-2xl shadow-2xl p-8 text-slate-900">
                <h3 className="text-2xl font-bold mb-6">What You'll Get:</h3>
                <div className="space-y-4">
                  {checklistPreview.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <div className="flex items-center text-sm text-slate-600">
                    <Clock className="w-4 h-4 mr-2" />
                    Instant PDF download • 24-page comprehensive guide
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why This Checklist Is Essential
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Don't risk a failed AI implementation. Use our proven framework to identify opportunities and avoid costly mistakes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-slate-600">
              See how other organizations used this checklist to accelerate their AI success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-700 mb-6 text-lg leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-slate-600">{testimonial.title}</div>
                  <div className="text-sm text-slate-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-slate-900">50+</div>
              <div className="text-slate-600">Fortune 500 Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">$2.4B+</div>
              <div className="text-slate-600">In AI ROI Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">99.7%</div>
              <div className="text-slate-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">36K+</div>
              <div className="text-slate-600">Implementation Hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content Preview */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Complete Assessment Framework
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our 47-point checklist covers every critical aspect of AI readiness assessment
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-xl mb-6">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Organizational Assessment</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Leadership buy-in evaluation
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Cultural readiness matrix
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Change management capacity
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Budget allocation framework
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-xl mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Technical Capability</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Data infrastructure audit
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Skills gap analysis
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Technology stack evaluation
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Security assessment
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-xl mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Strategic Planning</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  ROI opportunity mapping
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Use case prioritization
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Implementation roadmap
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Risk mitigation planning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Assess Your AI Readiness?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join 5,000+ executives who have used this checklist to successfully launch their AI initiatives. Download now and get immediate insights into your organization's AI potential.
          </p>
          
          <div className="space-y-6">
            <button
              onClick={() => setShowLeadCapture(true)}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center mx-auto transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Download className="w-5 h-5 mr-2" />
              Get Your Free AI Readiness Checklist
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            
            <div className="flex items-center justify-center text-blue-200 text-sm">
              <CheckCircle className="w-4 h-4 mr-2" />
              Instant PDF download • No credit card required • 100% free
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-blue-500">
            <p className="text-blue-200 text-sm">
              Questions? Contact our AI specialists at{' '}
              <a href="mailto:ai-experts@datatranquil.com" className="text-white underline hover:no-underline">
                ai-experts@datatranquil.com
              </a>
              {' '}or{' '}
              <a href="tel:415-255-5501" className="text-white underline hover:no-underline">
                415-255-5501
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Lead Capture Modal */}
      {showLeadCapture && (
        <LeadCapture
          title="Get Your AI Readiness Checklist"
          description="Enter your details to instantly download the complete 24-page AI Readiness Assessment Framework used by Fortune 500 companies."
          resourceName="AI Readiness Checklist"
          onClose={() => setShowLeadCapture(false)}
        />
      )}
    </div>
  );
}