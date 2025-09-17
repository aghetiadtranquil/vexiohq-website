'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { useState } from 'react';

const caseStudies = [
  {
    id: 'fortune-500-retail',
    title: 'Fortune 500 Retailer Achieves 40% Revenue Growth',
    subtitle: 'AI-Powered Supply Chain Transformation',
    industry: 'Retail & Consumer Goods',
    client: 'Global Retail Corporation',
    employees: '250,000+',
    revenue: '$75B Annual Revenue',
    challenge: {
      title: 'The $2.3B Inventory Challenge',
      points: [
        'Excess inventory costs of $2.3B annually due to poor demand forecasting',
        '18% stockout rate on high-margin products during peak seasons',
        'Manual processes taking 3,000+ hours monthly across 1,200 stores',
        'Customer satisfaction declining 12% YoY due to availability issues'
      ],
      impact: 'Risk of losing $500M in market share to digital-native competitors'
    },
    approach: {
      discovery: '8-week comprehensive analysis of 5 years of transaction data across 50M+ customers',
      strategy: 'Developed AI-driven demand forecasting with 97% accuracy at SKU level',
      implementation: 'Phased rollout across regions, starting with 100 pilot stores',
      technology: ['TensorFlow', 'Apache Spark', 'AWS SageMaker', 'Real-time streaming analytics']
    },
    results: {
      revenue: { metric: '40%', description: 'Revenue increase within 18 months' },
      cost: { metric: '$650M', description: 'Annual cost savings from inventory optimization' },
      efficiency: { metric: '73%', description: 'Reduction in manual forecasting time' },
      satisfaction: { metric: '+28 NPS', description: 'Customer satisfaction improvement' },
      roi: { metric: '312%', description: 'ROI achieved in first year' }
    },
    insights: [
      'Cross-functional data integration was critical - combining POS, weather, social trends',
      'Phased rollout allowed for continuous learning and model refinement',
      'Change management required C-suite sponsorship and 200+ training sessions'
    ],
    timeline: '18 months from pilot to full deployment',
    testimonial: {
      quote: 'DataTranquil didn\'t just give us AI - they transformed how we think about inventory. The results exceeded even our most optimistic projections.',
      author: 'Chief Supply Chain Officer',
      company: 'Fortune 500 Retailer'
    }
  },
  {
    id: 'healthcare-provider',
    title: 'Healthcare Network Reduces Diagnostic Time by 60%',
    subtitle: 'Clinical Decision Support Through Deep Learning',
    industry: 'Healthcare & Life Sciences',
    client: 'Regional Healthcare System',
    employees: '45,000+',
    revenue: '$8.5B Annual Revenue',
    challenge: {
      title: 'The Diagnostic Efficiency Crisis',
      points: [
        'Average diagnostic time of 4.2 days causing patient dissatisfaction',
        '23% misdiagnosis rate in complex cases leading to $180M in annual liability',
        'Radiologist burnout with 70+ images per hour workload',
        'Specialist referral delays averaging 28 days'
      ],
      impact: '$340M annual revenue at risk from patient attrition'
    },
    approach: {
      discovery: 'Analysis of 2M+ patient records and 10M+ diagnostic images',
      strategy: 'Built proprietary deep learning models for 15 common conditions',
      implementation: 'Integration with existing PACS and EMR systems',
      technology: ['PyTorch', 'NVIDIA Clara', 'HL7 FHIR', 'Kubernetes', 'Edge computing']
    },
    results: {
      revenue: { metric: '60%', description: 'Reduction in average diagnostic time' },
      cost: { metric: '$48M', description: 'Annual savings from reduced readmissions' },
      efficiency: { metric: '35%', description: 'Increase in radiologist productivity' },
      satisfaction: { metric: '94%', description: 'Physician adoption rate' },
      roi: { metric: '$3.20', description: 'Return for every $1 invested' }
    },
    insights: [
      'Physician trust required transparent AI decision explanations',
      'Edge computing crucial for sub-second response times',
      'Regulatory compliance achieved through interpretable AI models'
    ],
    timeline: '14 months including FDA clearance process',
    testimonial: {
      quote: 'This AI system has become an invaluable partner in our diagnostic process, catching subtle patterns that even experienced physicians might miss.',
      author: 'Chief Medical Officer',
      company: 'Regional Healthcare System'
    }
  },
  {
    id: 'financial-services',
    title: 'Global Bank Saves $10M Through AI Fraud Detection',
    subtitle: 'Real-time Transaction Intelligence at Scale',
    industry: 'Financial Services',
    client: 'Top 10 Global Bank',
    employees: '180,000+',
    revenue: '$89B Annual Revenue',
    challenge: {
      title: 'The $450M Fraud Problem',
      points: [
        '$450M annual fraud losses across 50M+ active accounts',
        '78% false positive rate causing 2M+ legitimate transactions blocked daily',
        'Manual review teams of 1,200+ analysts overwhelmed',
        'Regulatory fines of $30M for inadequate fraud controls'
      ],
      impact: 'Customer churn rate 3x industry average due to false declines'
    },
    approach: {
      discovery: 'Analyzed 5 years of transaction data - 10B+ transactions',
      strategy: 'Ensemble ML approach combining 12 different algorithms',
      implementation: 'Real-time scoring of 50,000 transactions per second',
      technology: ['Apache Kafka', 'Redis', 'TensorFlow', 'Spark Streaming', 'GraphDB']
    },
    results: {
      revenue: { metric: '$10M', description: 'Annual fraud losses prevented' },
      cost: { metric: '85%', description: 'Reduction in false positive rate' },
      efficiency: { metric: '92%', description: 'Automated decision rate' },
      satisfaction: { metric: '4.7/5', description: 'Customer satisfaction score' },
      roi: { metric: '8 weeks', description: 'Time to positive ROI' }
    },
    insights: [
      'Graph neural networks crucial for detecting organized fraud rings',
      'Real-time feature engineering reduced latency by 80%',
      'Explainable AI essential for regulatory compliance'
    ],
    timeline: '6 months from POC to production deployment',
    testimonial: {
      quote: 'The sophistication of this fraud detection system has fundamentally changed our risk management capabilities.',
      author: 'Chief Risk Officer',
      company: 'Top 10 Global Bank'
    }
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing Giant Achieves 35% Efficiency Gain',
    subtitle: 'Predictive Maintenance & Quality Control Revolution',
    industry: 'Manufacturing & Industrial',
    client: 'Global Industrial Manufacturer',
    employees: '120,000+',
    revenue: '$42B Annual Revenue',
    challenge: {
      title: 'The Cost of Unplanned Downtime',
      points: [
        '$180M annual losses from unplanned equipment downtime',
        '12% defect rate causing $320M in quality-related costs',
        '40% of maintenance activities were reactive vs. preventive',
        'Supply chain disruptions affecting 30% of production schedules'
      ],
      impact: 'Losing 2% market share annually to more efficient competitors'
    },
    approach: {
      discovery: 'IoT sensor deployment across 10,000+ pieces of equipment',
      strategy: 'Digital twin creation for predictive maintenance and optimization',
      implementation: 'Edge AI deployment for real-time quality inspection',
      technology: ['Azure IoT', 'Digital Twins', 'Computer Vision', 'Time Series Analysis']
    },
    results: {
      revenue: { metric: '35%', description: 'Overall equipment effectiveness improvement' },
      cost: { metric: '$127M', description: 'Annual savings from reduced downtime' },
      efficiency: { metric: '50%', description: 'Reduction in unplanned downtime' },
      satisfaction: { metric: '99.7%', description: 'Quality rate achieved' },
      roi: { metric: '247%', description: 'First-year return on investment' }
    },
    insights: [
      'Edge computing essential for sub-millisecond response times',
      'Digital twins enabled what-if scenario planning',
      'Worker training critical - invested $2M in upskilling programs'
    ],
    timeline: '12 months for full facility implementation',
    testimonial: {
      quote: 'This predictive maintenance system has transformed our operations from reactive to proactive, delivering savings we didn\'t think possible.',
      author: 'VP of Operations',
      company: 'Global Industrial Manufacturer'
    }
  }
];

const industries = ['All Industries', 'Retail & Consumer Goods', 'Healthcare & Life Sciences', 'Financial Services', 'Manufacturing & Industrial'];

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedStudy, setSelectedStudy] = useState<typeof caseStudies[0] | null>(null);

  const filteredStudies = selectedIndustry === 'All Industries' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-20">
      {/* Hero Section - McKinsey Style */}
      <section className="relative bg-gradient-to-br from-slate-900 to-blue-900 py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Proven Impact at Scale
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
              How industry leaders achieve transformational results through strategic AI implementation
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              <span className="text-white font-medium">Read Time: 12 minutes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Bar */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">$2.4B+</div>
              <div className="text-sm text-gray-600 mt-1">Value Created</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">150+</div>
              <div className="text-sm text-gray-600 mt-1">Enterprises Transformed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">312%</div>
              <div className="text-sm text-gray-600 mt-1">Average ROI</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">18 mo</div>
              <div className="text-sm text-gray-600 mt-1">Avg. Time to Value</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">99.7%</div>
              <div className="text-sm text-gray-600 mt-1">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedIndustry === industry
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid - McKinsey Style */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredStudies.map((study) => (
              <div 
                key={study.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer group"
                onClick={() => setSelectedStudy(study)}
              >
                {/* Header with Gradient */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
                  <div className="text-white">
                    <div className="text-sm font-medium uppercase tracking-wider mb-2 opacity-90">
                      {study.industry}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                    <p className="text-blue-100">{study.subtitle}</p>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{study.results.revenue.metric}</div>
                      <div className="text-xs text-gray-600 mt-1">Revenue Impact</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{study.results.roi.metric}</div>
                      <div className="text-xs text-gray-600 mt-1">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{study.timeline}</div>
                      <div className="text-xs text-gray-600 mt-1">Timeline</div>
                    </div>
                  </div>

                  {/* Challenge Summary */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <span className="w-1 h-4 bg-red-500 mr-2"></span>
                      The Challenge
                    </h4>
                    <p className="text-gray-700 font-medium mb-2">{study.challenge.title}</p>
                    <p className="text-sm text-gray-600">{study.challenge.impact}</p>
                  </div>

                  {/* Results Summary */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <span className="w-1 h-4 bg-green-500 mr-2"></span>
                      The Impact
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start text-sm">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">{study.results.cost.description}</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">{study.results.efficiency.description}</span>
                      </li>
                    </ul>
                  </div>

                  {/* CTA */}
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold group-hover:shadow-lg transition-all duration-300">
                    View Detailed Analysis →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Study Modal */}
      {selectedStudy && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedStudy(null)}>
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-t-2xl">
              <button 
                onClick={() => setSelectedStudy(null)}
                className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="text-white">
                <div className="text-sm font-medium uppercase tracking-wider mb-2 opacity-90">
                  {selectedStudy.industry} | Case Study
                </div>
                <h2 className="text-3xl font-bold mb-2">{selectedStudy.title}</h2>
                <p className="text-xl text-blue-100">{selectedStudy.subtitle}</p>
              </div>
            </div>

            <div className="p-8">
              {/* Client Overview */}
              <div className="grid md:grid-cols-3 gap-6 mb-8 p-6 bg-gray-50 rounded-xl">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Client</div>
                  <div className="font-semibold text-gray-900">{selectedStudy.client}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Scale</div>
                  <div className="font-semibold text-gray-900">{selectedStudy.employees} employees</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Revenue</div>
                  <div className="font-semibold text-gray-900">{selectedStudy.revenue}</div>
                </div>
              </div>

              {/* The Challenge */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-1 h-6 bg-red-500 mr-3"></span>
                  The Challenge
                </h3>
                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-4">
                  <p className="text-lg font-semibold text-red-900 mb-3">{selectedStudy.challenge.title}</p>
                  <p className="text-red-800 italic">{selectedStudy.challenge.impact}</p>
                </div>
                <ul className="space-y-3">
                  {selectedStudy.challenge.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Approach */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-1 h-6 bg-blue-500 mr-3"></span>
                  Our Approach
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-blue-900 mb-2">Discovery Phase</h4>
                    <p className="text-gray-700">{selectedStudy.approach.discovery}</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-blue-900 mb-2">Strategy Development</h4>
                    <p className="text-gray-700">{selectedStudy.approach.strategy}</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-blue-900 mb-2">Implementation</h4>
                    <p className="text-gray-700">{selectedStudy.approach.implementation}</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-blue-900 mb-2">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedStudy.approach.technology.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Measurable Impact */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-1 h-6 bg-green-500 mr-3"></span>
                  Measurable Impact
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(selectedStudy.results).map(([key, value]) => (
                    <div key={key} className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
                      <div className="text-3xl font-bold text-green-600 mb-2">{value.metric}</div>
                      <div className="text-gray-700">{value.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Insights */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-1 h-6 bg-purple-500 mr-3"></span>
                  Key Insights
                </h3>
                <div className="space-y-4">
                  {selectedStudy.insights.map((insight, idx) => (
                    <div key={idx} className="flex items-start p-4 bg-purple-50 rounded-lg">
                      <span className="text-purple-600 font-bold mr-3">{idx + 1}.</span>
                      <span className="text-gray-700">{insight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl text-white">
                <svg className="w-10 h-10 mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-xl italic mb-4">{selectedStudy.testimonial.quote}</p>
                <div>
                  <div className="font-semibold">{selectedStudy.testimonial.author}</div>
                  <div className="text-blue-200">{selectedStudy.testimonial.company}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Line Section - McKinsey Style */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Bottom Line</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our case studies demonstrate a consistent pattern: organizations that embrace AI transformation 
              with the right strategy, technology, and implementation partner achieve extraordinary results. 
              The average ROI of 312% and value creation exceeding $2.4B across our client base speaks to 
              the transformative power of well-executed AI initiatives.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              The question isn't whether to implement AI, but how quickly you can mobilize to capture 
              the competitive advantage before your competitors do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 text-center"
              >
                Start Your Transformation →
              </Link>
              <Link 
                href="/consultation"
                className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 text-center"
              >
                Schedule Executive Briefing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}