'use client';

import { useState } from 'react';
import { Database, AlertTriangle, CheckCircle, TrendingUp, Download, ArrowRight, Shield } from 'lucide-react';
import LeadCapture from '@/components/LeadCapture';

export default function DataQualityAISuccess() {
  const [showLeadForm, setShowLeadForm] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-yellow-400 text-purple-900 rounded-full text-sm font-bold mb-6">
                <AlertTriangle className="h-4 w-4 mr-2" />
                WARNING: 87% of AI Projects Fail Due to Bad Data
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                The 500M Record Case Study: Achieving 99.7% Data Quality for AI
              </h1>
              
              <p className="text-xl text-purple-100 mb-8">
                How we transformed chaotic enterprise data into AI-ready assets, 
                processing 500M+ records with military-grade precision. Learn the 
                exact framework that saved $12M in AI implementation costs.
              </p>

              <button
                onClick={() => setShowLeadForm(true)}
                className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-bold text-lg inline-flex items-center"
              >
                Get the Complete Case Study <Download className="ml-3 h-5 w-5" />
              </button>

              <div className="mt-6 flex items-center gap-4 text-purple-200 text-sm">
                <span className="flex items-center">
                  <Shield className="h-4 w-4 mr-1" />
                  GDPR Compliant
                </span>
                <span>•</span>
                <span>28 Pages</span>
                <span>•</span>
                <span>Actionable Framework</span>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">The Data Quality Crisis</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">$3.1 Trillion Annual Loss</p>
                      <p className="text-purple-200 text-sm">IBM estimate of bad data cost to US economy</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">60% of AI Budget Wasted</p>
                      <p className="text-purple-200 text-sm">Average spent on data preparation vs modeling</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">27% Annual Data Decay</p>
                      <p className="text-purple-200 text-sm">Your data quality degrades every day</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            The Challenge: Fortune 500 Retailer's Data Nightmare
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Initial State</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                  <span className="text-slate-600">500M+ customer records across 47 systems</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                  <span className="text-slate-600">23% duplicate records (115M duplicates!)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                  <span className="text-slate-600">67% incomplete customer profiles</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                  <span className="text-slate-600">No standardized data formats</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                  <span className="text-slate-600">$8M annual cost of bad data decisions</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Business Impact</h3>
              <div className="bg-red-50 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  Their AI personalization project was failing spectacularly:
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li>• Wrong product recommendations to 40% of customers</li>
                  <li>• Marketing campaigns targeting deceased customers</li>
                  <li>• Inventory AI making decisions on corrupted data</li>
                  <li>• Customer churn prediction accuracy below 30%</li>
                </ul>
                <div className="mt-4 p-4 bg-red-100 rounded-lg">
                  <p className="text-red-900 font-semibold">
                    AI vendor threatened to abandon $5M project
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Our Data Quality Framework in Action
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  phase: 'Week 1-2: Data Discovery & Profiling',
                  results: 'Mapped all 47 systems, identified 1,247 data quality issues',
                  metrics: ['100% system coverage', '8.3M anomalies detected', '127 critical fields identified']
                },
                {
                  phase: 'Week 3-6: Automated Cleansing Pipeline',
                  results: 'Built ML-powered deduplication and standardization system',
                  metrics: ['115M duplicates merged', '99.3% match accuracy', '24/7 automated processing']
                },
                {
                  phase: 'Week 7-10: Quality Monitoring System',
                  results: 'Deployed real-time data quality dashboards and alerts',
                  metrics: ['6 quality dimensions tracked', '500+ automated rules', 'Sub-second anomaly detection']
                },
                {
                  phase: 'Week 11-12: AI Model Retraining',
                  results: 'Fed clean data to AI models and measured impact',
                  metrics: ['89% prediction accuracy', '3.2x model performance', '$12M saved annually']
                }
              ].map((phase, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{phase.phase}</h3>
                      <p className="text-slate-600 mb-4">{phase.results}</p>
                      <div className="grid md:grid-cols-3 gap-4">
                        {phase.metrics.map((metric, mIdx) => (
                          <div key={mIdx} className="text-center p-3 bg-purple-50 rounded-lg">
                            <p className="text-sm font-semibold text-purple-900">{metric}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            The Transformation: From 67% to 99.7% Data Quality
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Data Quality Metrics</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700">Completeness</span>
                    <span className="font-bold text-green-600">99.7%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '99.7%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700">Accuracy</span>
                    <span className="font-bold text-green-600">99.3%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '99.3%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700">Consistency</span>
                    <span className="font-bold text-green-600">98.9%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '98.9%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700">Timeliness</span>
                    <span className="font-bold text-green-600">Real-time</span>
                  </div>
                  <div className="w-full bg-green-600 rounded-full h-2"></div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Business Impact</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="text-slate-700">AI Model Accuracy</span>
                  <span className="text-xl font-bold text-blue-600">+189%</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="text-slate-700">Cost Savings</span>
                  <span className="text-xl font-bold text-green-600">$12M/year</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="text-slate-700">Processing Time</span>
                  <span className="text-xl font-bold text-purple-600">-94%</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="text-slate-700">Customer Satisfaction</span>
                  <span className="text-xl font-bold text-orange-600">+42 NPS</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-900 text-white rounded-2xl p-8 text-center">
            <p className="text-2xl font-bold mb-2">
              "This data quality transformation saved our entire AI program. 
              The ROI exceeded 400% in the first year alone."
            </p>
            <p className="text-purple-200">
              — Chief Data Officer, Fortune 500 Retailer
            </p>
          </div>
        </div>
      </section>

      {/* Framework Preview */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            The DataTranquil Data Quality Framework
          </h2>
          <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Get the exact framework we used, including templates, code samples, and automation scripts
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: 'Assessment Toolkit',
                items: ['47-point checklist', 'Quality scorecards', 'ROI calculator', 'Risk matrix']
              },
              {
                title: 'Cleansing Playbook',
                items: ['Python scripts', 'ML algorithms', 'Dedup strategies', 'Validation rules']
              },
              {
                title: 'Monitoring System',
                items: ['Dashboard templates', 'Alert configs', 'Quality metrics', 'SLA frameworks']
              },
              {
                title: 'Governance Guide',
                items: ['RACI matrices', 'Process flows', 'Training materials', 'Audit procedures']
              }
            ].map((section, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-slate-900 mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stop Letting Bad Data Kill Your AI Dreams
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get the complete 28-page case study with our proven framework, 
            automation scripts, and implementation guide.
          </p>
          
          <button
            onClick={() => setShowLeadForm(true)}
            className="px-12 py-5 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-bold text-xl inline-flex items-center"
          >
            Download the Case Study <Database className="ml-3 h-6 w-6" />
          </button>
          
          <div className="mt-8 grid md:grid-cols-3 gap-4 max-w-2xl mx-auto text-purple-100">
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Proven Framework</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Code Templates</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Implementation Guide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Modal */}
      {showLeadForm && (
        <LeadCapture
          title="Download: 500M Record Data Quality Case Study"
          description="Get instant access to our complete framework, automation scripts, and implementation guide."
          resourceName="Data Quality Case Study"
          onClose={() => setShowLeadForm(false)}
        />
      )}
    </main>
  );
}