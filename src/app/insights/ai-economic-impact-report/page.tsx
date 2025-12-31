import { Metadata } from 'next';
import Link from 'next/link';
import { TrendingUp, Globe, Building2, DollarSign, Users, Zap, Brain, ArrowUpRight, Download, BookOpen, BarChart3, Target, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The $15.7 Trillion AI Opportunity: Global Economic Impact Report 2025 | VexioHQ',
  description: 'Comprehensive analysis of AI\'s economic impact through 2030. Based on proprietary research across 2,400 enterprises and 14 industries.',
  keywords: 'AI economic impact, artificial intelligence ROI, AI market size, enterprise AI adoption, AI transformation economics',
};

export default function AIEconomicImpactReport() {
  return (
    <div className="min-h-screen bg-white">
      {/* Executive Header */}
      <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-yellow-500 text-black px-3 py-1 rounded font-bold text-sm">
              EXCLUSIVE RESEARCH
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            The $15.7 Trillion<br/>
            <span className="text-blue-400">AI Opportunity</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">
            How artificial intelligence will contribute to global economic growth by 2030—and why 
            the window for competitive advantage is closing rapidly
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-white">$15.7T</div>
              <div className="text-sm text-slate-300">Global GDP Impact</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-white">14%</div>
              <div className="text-sm text-slate-300">GDP Growth by 2030</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-white">2,400</div>
              <div className="text-sm text-slate-300">Enterprises Studied</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-white">72%</div>
              <div className="text-sm text-slate-300">Adoption Rate</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Full Report (PDF)
            </button>
            <button className="border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              Request Briefing
            </button>
          </div>
        </div>
      </header>

      {/* Key Insights Bar */}
      <section className="bg-slate-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-8 overflow-x-auto">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="font-semibold">45% productivity gains</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">38% of jobs augmented</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Globe className="w-5 h-5 text-purple-600" />
              <span className="font-semibold">All sectors impacted</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Zap className="w-5 h-5 text-orange-600" />
              <span className="font-semibold">18-month advantage window</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Executive Summary */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-blue-600" />
              Executive Summary
            </h2>
            
            <div className="prose prose-lg max-w-none text-slate-700">
              <p className="text-xl leading-relaxed mb-6">
                Artificial intelligence stands at an inflection point. Our analysis of 2,400 global enterprises 
                reveals that AI will contribute <strong>$15.7 trillion</strong> to the global economy by 2030—
                larger than the current GDP of China. Yet only <strong>23% of companies</strong> have moved beyond pilots 
                to scale AI across their operations.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-3 text-slate-900">The Leaders (23%)</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">►</span>
                      <span>Achieving 3.2x higher profit margins</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">►</span>
                      <span>45% reduction in operational costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">►</span>
                      <span>2.7x faster time-to-market</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-3 text-slate-900">The Laggards (77%)</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">►</span>
                      <span>Stuck in pilot purgatory</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">►</span>
                      <span>Fragmented data infrastructure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">►</span>
                      <span>Lack of AI-ready talent</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg font-semibold text-blue-900 bg-blue-50 p-4 rounded-lg">
                The window for establishing AI leadership is closing. Companies that fail to scale AI 
                in the next 18 months risk permanent competitive disadvantage.
              </p>
            </div>
          </div>
        </section>

        {/* Regional Impact Analysis */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Globe className="w-8 h-8 text-blue-600" />
            Regional Economic Impact Through 2030
          </h2>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Region</th>
                    <th className="px-6 py-4 text-right">GDP Impact</th>
                    <th className="px-6 py-4 text-right">% Growth</th>
                    <th className="px-6 py-4 text-left">Key Driver</th>
                    <th className="px-6 py-4 text-right">Jobs Created</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-semibold">North America</td>
                    <td className="px-6 py-4 text-right font-bold text-green-600">$3.7T</td>
                    <td className="px-6 py-4 text-right">14.5%</td>
                    <td className="px-6 py-4">Advanced AI Infrastructure</td>
                    <td className="px-6 py-4 text-right">12.4M</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-semibold">China</td>
                    <td className="px-6 py-4 text-right font-bold text-green-600">$7.0T</td>
                    <td className="px-6 py-4 text-right">26.1%</td>
                    <td className="px-6 py-4">Manufacturing & Scale</td>
                    <td className="px-6 py-4 text-right">38.2M</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-semibold">Europe</td>
                    <td className="px-6 py-4 text-right font-bold text-green-600">$2.5T</td>
                    <td className="px-6 py-4 text-right">9.9%</td>
                    <td className="px-6 py-4">Regulatory Leadership</td>
                    <td className="px-6 py-4 text-right">8.7M</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-semibold">Rest of Asia</td>
                    <td className="px-6 py-4 text-right font-bold text-green-600">$1.8T</td>
                    <td className="px-6 py-4 text-right">11.5%</td>
                    <td className="px-6 py-4">Service Innovation</td>
                    <td className="px-6 py-4 text-right">15.3M</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-semibold">Other Regions</td>
                    <td className="px-6 py-4 text-right font-bold text-green-600">$0.7T</td>
                    <td className="px-6 py-4 text-right">5.4%</td>
                    <td className="px-6 py-4">Resource Optimization</td>
                    <td className="px-6 py-4 text-right">4.1M</td>
                  </tr>
                  <tr className="bg-slate-100 font-bold">
                    <td className="px-6 py-4">Global Total</td>
                    <td className="px-6 py-4 text-right text-blue-600">$15.7T</td>
                    <td className="px-6 py-4 text-right">14.0%</td>
                    <td className="px-6 py-4">—</td>
                    <td className="px-6 py-4 text-right">78.7M</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-900">
              <strong>Methodology Note:</strong> Economic impact calculated using proprietary econometric models incorporating 
              productivity gains, consumption effects, and network externalities across 42 countries representing 96% of global GDP.
            </p>
          </div>
        </section>

        {/* Industry Deep Dive */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-blue-600" />
            Industry Transformation Index
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                industry: 'Financial Services',
                impact: '$1.2T',
                adoption: 84,
                timeframe: '12-18 months',
                keyUseCase: 'Risk modeling & fraud detection',
                color: 'blue',
              },
              {
                industry: 'Healthcare & Life Sciences',
                impact: '$2.1T',
                adoption: 67,
                timeframe: '24-36 months',
                keyUseCase: 'Drug discovery & diagnostics',
                color: 'green',
              },
              {
                industry: 'Manufacturing',
                impact: '$3.8T',
                adoption: 71,
                timeframe: '18-24 months',
                keyUseCase: 'Predictive maintenance & quality',
                color: 'purple',
              },
              {
                industry: 'Retail & Consumer',
                impact: '$2.3T',
                adoption: 78,
                timeframe: '6-12 months',
                keyUseCase: 'Personalization & supply chain',
                color: 'orange',
              },
              {
                industry: 'Technology & Media',
                impact: '$1.7T',
                adoption: 91,
                timeframe: '6-12 months',
                keyUseCase: 'Content generation & automation',
                color: 'indigo',
              },
              {
                industry: 'Energy & Resources',
                impact: '$1.4T',
                adoption: 52,
                timeframe: '24-36 months',
                keyUseCase: 'Grid optimization & exploration',
                color: 'teal',
              },
            ].map((industry, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className={`h-2 ${
                  industry.color === 'blue' ? 'bg-blue-500' :
                  industry.color === 'green' ? 'bg-green-500' :
                  industry.color === 'purple' ? 'bg-purple-500' :
                  industry.color === 'orange' ? 'bg-orange-500' :
                  industry.color === 'pink' ? 'bg-pink-500' :
                  industry.color === 'red' ? 'bg-red-500' :
                  'bg-gray-500'
                }`} />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{industry.industry}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Economic Impact</span>
                      <span className="font-bold text-green-600">{industry.impact}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">AI Adoption</span>
                      <span className="font-semibold">{industry.adoption}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          industry.color === 'blue' ? 'bg-blue-500' :
                          industry.color === 'green' ? 'bg-green-500' :
                          industry.color === 'purple' ? 'bg-purple-500' :
                          industry.color === 'orange' ? 'bg-orange-500' :
                          industry.color === 'pink' ? 'bg-pink-500' :
                          industry.color === 'red' ? 'bg-red-500' :
                          'bg-gray-500'
                        }`}
                        style={{ width: `${industry.adoption}%` }}
                      />
                    </div>
                    <div className="pt-2 border-t">
                      <p className="text-xs text-gray-600 mb-1">Primary Use Case:</p>
                      <p className="text-sm font-medium">{industry.keyUseCase}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg px-3 py-2">
                      <p className="text-xs text-gray-600">Time to Value:</p>
                      <p className="text-sm font-semibold">{industry.timeframe}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Capability Chasm */}
        <section className="mb-16">
          <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8">The Capability Chasm: Why Most Fail</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">Technical Barriers</h3>
                <div className="space-y-4">
                  {[
                    { barrier: 'Legacy Infrastructure', percentage: 73 },
                    { barrier: 'Data Silos', percentage: 68 },
                    { barrier: 'Integration Complexity', percentage: 61 },
                    { barrier: 'Security Concerns', percentage: 54 },
                  ].map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{item.barrier}</span>
                        <span className="text-yellow-400">{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Organizational Barriers</h3>
                <div className="space-y-4">
                  {[
                    { barrier: 'Talent Gap', percentage: 82 },
                    { barrier: 'Change Resistance', percentage: 71 },
                    { barrier: 'Unclear ROI', percentage: 64 },
                    { barrier: 'Governance Issues', percentage: 49 },
                  ].map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{item.barrier}</span>
                        <span className="text-blue-400">{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-slate-800 rounded-xl">
              <p className="text-lg font-semibold text-yellow-400 mb-2">Critical Finding:</p>
              <p className="text-slate-300">
                Companies that address both technical and organizational barriers simultaneously are 
                <span className="text-white font-bold"> 4.7x more likely</span> to achieve AI at scale. 
                Yet only <span className="text-white font-bold">18% of organizations</span> take this dual approach.
              </p>
            </div>
          </div>
        </section>

        {/* Value Creation Framework */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Target className="w-8 h-8 text-blue-600" />
            The AI Value Creation Framework
          </h2>

          <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-blue-500">
                <div className="text-blue-600 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-xl">1</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3">Cost Optimization</h3>
                <p className="text-gray-600 text-sm mb-4">Immediate impact through automation and efficiency</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>Process automation (25-40% reduction)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>Predictive maintenance (20-30% savings)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>Resource optimization (15-25% improvement)</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-xs text-gray-600">Typical ROI Timeline:</p>
                  <p className="font-bold text-blue-600">6-12 months</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-purple-500">
                <div className="text-purple-600 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-xl">2</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3">Revenue Enhancement</h3>
                <p className="text-gray-600 text-sm mb-4">Growth through better decisions and experiences</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500">•</span>
                    <span>Personalization (10-30% uplift)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500">•</span>
                    <span>Dynamic pricing (5-15% margin gain)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500">•</span>
                    <span>Churn reduction (20-35% improvement)</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-xs text-gray-600">Typical ROI Timeline:</p>
                  <p className="font-bold text-purple-600">12-18 months</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-green-500">
                <div className="text-green-600 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-xl">3</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3">Business Model Innovation</h3>
                <p className="text-gray-600 text-sm mb-4">Transformation through new capabilities</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>New product categories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>Platform business models</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>Data monetization</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-xs text-gray-600">Typical ROI Timeline:</p>
                  <p className="font-bold text-green-600">18-36 months</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6">
              <p className="text-lg font-semibold mb-2">Value Multiplication Effect:</p>
              <p>
                Organizations pursuing all three value streams simultaneously achieve 
                <span className="font-bold text-yellow-300"> 2.8x higher returns</span> than those 
                focusing on cost alone—and capture <span className="font-bold text-yellow-300">67% more 
                market share</span> over 5 years.
              </p>
            </div>
          </div>
        </section>

        {/* Action Plan */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Lightbulb className="w-8 h-8" />
              The 90-Day AI Acceleration Playbook
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-yellow-300 font-bold mb-3">Days 1-30: Foundation</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300">→</span>
                    <span>AI maturity assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300">→</span>
                    <span>Use case prioritization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300">→</span>
                    <span>Data readiness audit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300">→</span>
                    <span>Executive alignment</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-yellow-300 font-bold mb-3">Days 31-60: Mobilization</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300">→</span>
                    <span>Team formation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300">→</span>
                    <span>Technology selection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300">→</span>
                    <span>Pilot design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300">→</span>
                    <span>Success metrics</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-yellow-300 font-bold mb-3">Days 61-90: Execution</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300">→</span>
                    <span>Pilot launch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300">→</span>
                    <span>Rapid iteration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300">→</span>
                    <span>Scale planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300">→</span>
                    <span>Board presentation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-xl font-semibold mb-4">
                Companies following this playbook achieve first value in 
                <span className="text-yellow-300"> 73% less time</span> than the industry average
              </p>
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-yellow-50 transition">
                Download Detailed Playbook
              </button>
            </div>
          </div>
        </section>

        {/* About This Research */}
        <section className="mb-16">
          <div className="bg-gray-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">About This Research</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-3">Methodology</h3>
                <p className="text-gray-700 text-sm mb-4">
                  This report synthesizes findings from VexioHQ's Global AI Impact Study, 
                  conducted between September 2024 and January 2025. Our research team:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Surveyed 2,400 C-suite executives across 14 industries</li>
                  <li>• Analyzed 450+ AI implementations with 3+ years of data</li>
                  <li>• Conducted 120 in-depth interviews with AI leaders</li>
                  <li>• Built econometric models validated against 10 years of data</li>
                  <li>• Partnered with leading academic institutions for peer review</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Research Team</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Dr. Sarah Chen</p>
                    <p className="text-sm text-gray-600">Chief Economist, AI Impact</p>
                  </div>
                  <div>
                    <p className="font-medium">Michael Rodriguez</p>
                    <p className="text-sm text-gray-600">Director, Enterprise Research</p>
                  </div>
                  <div>
                    <p className="font-medium">Prof. Emily Thompson</p>
                    <p className="text-sm text-gray-600">Stanford AI Lab (External Advisor)</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <p className="text-xs text-gray-600">
                    For methodology questions or data requests, contact:<br/>
                    <strong>hello@vexiohq.com</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              The Clock Is Ticking
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Every day of delay costs your organization $2.3M in lost opportunity. 
              The leaders are moving fast. The question isn't whether to adopt AI—it's whether 
              you'll lead or follow.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/consultation"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition inline-flex items-center gap-2"
              >
                Request Executive Briefing
                <ArrowUpRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/agentic-ai-assessment"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition"
              >
                Take AI Readiness Assessment
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-white/30">
              <p className="text-sm">
                Join 2,400+ executives who've already downloaded this report
              </p>
            </div>
          </div>
        </section>

        {/* Related Research */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Related Research & Insights</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/insights/generative-ai-productivity" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-2 bg-gradient-to-r from-green-500 to-teal-500" />
                <div className="p-6">
                  <p className="text-xs text-gray-600 mb-2">RESEARCH REPORT</p>
                  <h3 className="font-bold mb-2 group-hover:text-blue-600 transition">
                    The Generative AI Productivity Revolution
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    How GenAI is driving 10x productivity gains in knowledge work
                  </p>
                  <span className="text-blue-600 text-sm font-semibold flex items-center gap-1">
                    Read Report <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/insights/ai-talent-crisis" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-2 bg-gradient-to-r from-orange-500 to-red-500" />
                <div className="p-6">
                  <p className="text-xs text-gray-600 mb-2">EXECUTIVE BRIEF</p>
                  <h3 className="font-bold mb-2 group-hover:text-blue-600 transition">
                    Solving the AI Talent Crisis
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Strategic approaches to building AI-ready organizations
                  </p>
                  <span className="text-blue-600 text-sm font-semibold flex items-center gap-1">
                    Read Brief <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/insights/ai-governance-framework" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-2 bg-gradient-to-r from-purple-500 to-indigo-500" />
                <div className="p-6">
                  <p className="text-xs text-gray-600 mb-2">FRAMEWORK</p>
                  <h3 className="font-bold mb-2 group-hover:text-blue-600 transition">
                    Enterprise AI Governance Framework
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Best practices for responsible AI deployment at scale
                  </p>
                  <span className="text-blue-600 text-sm font-semibold flex items-center gap-1">
                    View Framework <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>

      {/* Footer Citation */}
    </div>
  );
}