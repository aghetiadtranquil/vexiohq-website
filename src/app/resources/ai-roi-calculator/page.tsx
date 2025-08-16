'use client';

import { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, BarChart3, Download, CheckCircle, ArrowRight } from 'lucide-react';
import LeadCapture from '@/components/LeadCapture';

export default function AIROICalculator() {
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [calcValues, setCalcValues] = useState({
    employees: 1000,
    avgSalary: 80000,
    processTime: 30,
    errorRate: 5
  });

  const calculateROI = () => {
    const timesSaved = calcValues.processTime * 0.4; // 40% reduction
    const errorReduction = calcValues.errorRate * 0.6; // 60% error reduction
    const productivityGain = calcValues.employees * 0.15; // 15% productivity gain
    const annualSavings = (productivityGain * calcValues.avgSalary * 0.2) + 
                         (errorReduction * calcValues.employees * 1000);
    return {
      timesSaved,
      errorReduction,
      productivityGain,
      annualSavings: Math.round(annualSavings)
    };
  };

  const roi = calculateROI();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
              <Calculator className="h-4 w-4 mr-2" />
              INTERACTIVE AI ROI CALCULATOR + EXCEL TEMPLATE
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Calculate Your AI ROI in 2 Minutes
            </h1>
            
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              See exactly how much your organization can save with AI implementation. 
              Based on data from 150+ enterprise deployments with proven 300%+ ROI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowLeadForm(true)}
                className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors font-bold text-lg inline-flex items-center"
              >
                Get Full ROI Report <Download className="ml-3 h-5 w-5" />
              </button>
              <a 
                href="#calculator"
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-colors font-bold text-lg"
              >
                Try Calculator First
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Calculator */}
      <section id="calculator" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Quick ROI Calculator
          </h2>

          <div className="bg-slate-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Your Organization</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Number of Employees
                    </label>
                    <input
                      type="number"
                      value={calcValues.employees}
                      onChange={(e) => setCalcValues({...calcValues, employees: parseInt(e.target.value) || 0})}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Average Salary ($)
                    </label>
                    <input
                      type="number"
                      value={calcValues.avgSalary}
                      onChange={(e) => setCalcValues({...calcValues, avgSalary: parseInt(e.target.value) || 0})}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Avg Process Time (hours/week)
                    </label>
                    <input
                      type="number"
                      value={calcValues.processTime}
                      onChange={(e) => setCalcValues({...calcValues, processTime: parseInt(e.target.value) || 0})}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Current Error Rate (%)
                    </label>
                    <input
                      type="number"
                      value={calcValues.errorRate}
                      onChange={(e) => setCalcValues({...calcValues, errorRate: parseInt(e.target.value) || 0})}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Projected AI Impact</h3>
                
                <div className="bg-white rounded-xl p-6 space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-600">Time Saved Weekly</span>
                      <span className="text-2xl font-bold text-green-600">
                        {roi.timesSaved.toFixed(1)} hours
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '40%'}}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-600">Error Reduction</span>
                      <span className="text-2xl font-bold text-blue-600">
                        {roi.errorReduction.toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-600">Productivity Gain</span>
                      <span className="text-2xl font-bold text-purple-600">
                        +{roi.productivityGain.toFixed(0)} FTEs
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: '15%'}}></div>
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <div className="text-center">
                      <p className="text-sm text-slate-600 mb-2">Estimated Annual Savings</p>
                      <p className="text-4xl font-bold text-green-600">
                        ${roi.annualSavings.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-slate-600 mb-4">
                This is just a simplified preview. Get the full Excel model with 50+ variables.
              </p>
              <button
                onClick={() => setShowLeadForm(true)}
                className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-bold inline-flex items-center"
              >
                Download Complete ROI Model <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            What's Included in the Full ROI Package
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Calculator className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Excel ROI Calculator
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>50+ customizable variables</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>5-year projection model</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Risk adjustment factors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Department-level breakdown</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Industry Benchmarks
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Financial Services metrics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Healthcare ROI data</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Manufacturing standards</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Retail performance data</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Implementation Guide
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>ROI tracking framework</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>KPI dashboard templates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Board presentation deck</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Success metrics guide</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Results */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Real ROI Results from Our Clients
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Financial Services Client</h3>
              <p className="text-slate-600 mb-6">Major Regional Bank</p>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700">Investment</span>
                    <span className="font-bold">$2.5M</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700">Annual Savings</span>
                    <span className="font-bold text-green-600">$8.7M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-700">Payback Period</span>
                    <span className="font-bold">3.4 months</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-600">348% ROI</p>
                    <p className="text-sm text-slate-600">Year 1</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Healthcare System</h3>
              <p className="text-slate-600 mb-6">12-Hospital Network</p>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700">Investment</span>
                    <span className="font-bold">$4.1M</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700">Annual Savings</span>
                    <span className="font-bold text-green-600">$15.3M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-700">Payback Period</span>
                    <span className="font-bold">3.2 months</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-600">373% ROI</p>
                    <p className="text-sm text-slate-600">Year 1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-slate-600 mb-6">
              Average across all implementations: <span className="font-bold text-green-600">312% ROI</span> in Year 1
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            CFOs Love Our ROI Model
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <p className="text-slate-600 italic mb-4">
                "This ROI model helped us secure $5M in AI funding from the board. 
                The industry benchmarks were especially valuable for setting realistic expectations."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-slate-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-slate-900">Jennifer Wu</p>
                  <p className="text-sm text-slate-600">CFO, Retail Chain</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <p className="text-slate-600 italic mb-4">
                "Finally, a realistic AI ROI calculator that accounts for implementation 
                costs and ramp-up time. We hit 95% of projected savings."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-slate-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-slate-900">Robert Martinez</p>
                  <p className="text-sm text-slate-600">VP Finance, Manufacturing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Calculate Your AI ROI Today
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get the complete Excel model with 50+ variables, industry benchmarks, 
            and implementation guide. Used by 100+ Fortune 500 companies.
          </p>
          
          <button
            onClick={() => setShowLeadForm(true)}
            className="px-12 py-5 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors font-bold text-xl inline-flex items-center"
          >
            Download ROI Calculator <Calculator className="ml-3 h-6 w-6" />
          </button>
          
          <div className="mt-8 flex items-center justify-center gap-8 text-green-100">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Instant Download</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>No Credit Card</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Free Updates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Modal */}
      {showLeadForm && (
        <LeadCapture
          title="Download: AI ROI Calculator & Model"
          description="Get instant access to our comprehensive Excel ROI model with industry benchmarks and implementation guide."
          resourceName="AI ROI Calculator"
          onClose={() => setShowLeadForm(false)}
        />
      )}
    </main>
  );
}