import { Metadata } from 'next';
import Link from 'next/link';
import { TrendingUp, ShoppingCart, Users, Cpu, Package, BarChart3, Clock, DollarSign, Award, ArrowRight, CheckCircle, AlertTriangle, Target, Zap, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How a Fortune 500 Retailer Achieved 47% Revenue Growth with AI | VexioHQ Case Study',
  description: 'Detailed case study on enterprise AI transformation delivering $2.3B incremental revenue through personalization, supply chain optimization, and predictive analytics.',
  keywords: 'retail AI case study, enterprise AI transformation, AI ROI, retail personalization, supply chain AI',
};

export default function RetailTransformationCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:30px_30px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-emerald-400 text-emerald-900 px-3 py-1 rounded font-bold text-sm">
              CASE STUDY
            </div>
            <span className="text-emerald-200 text-sm">Retail & E-commerce</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            From Legacy to Leader:<br/>
            <span className="text-emerald-400">A $48B Retailer's AI Journey</span>
          </h1>
          
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl">
            How one of America's largest retailers transformed from digital laggard to 
            AI-powered market leader in 18 months—generating $2.3B in new revenue
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-white">47%</div>
              <div className="text-sm text-emerald-200">Revenue Growth</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-white">$2.3B</div>
              <div className="text-sm text-emerald-200">New Revenue</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-white">31%</div>
              <div className="text-sm text-emerald-200">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-white">18mo</div>
              <div className="text-sm text-emerald-200">Transformation</div>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Facts Bar */}
      <section className="bg-emerald-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-8 overflow-x-auto text-sm">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Building2 className="w-4 h-4 text-emerald-600" />
              <span><strong>Industry:</strong> Retail & E-commerce</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Users className="w-4 h-4 text-emerald-600" />
              <span><strong>Employees:</strong> 450,000+</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <ShoppingCart className="w-4 h-4 text-emerald-600" />
              <span><strong>Stores:</strong> 4,700 locations</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span><strong>Timeline:</strong> Jan 2023 - Jun 2024</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Executive Summary */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Executive Summary</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Facing intense competition from digital-native retailers and changing consumer behaviors, 
                this Fortune 500 retailer partnered with VexioHQ to execute one of the most ambitious 
                AI transformations in retail history. The result: <strong>$2.3 billion in incremental revenue</strong>, 
                <strong>31% reduction in operational costs</strong>, and emergence as an industry leader in AI-powered retail.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-white rounded-xl p-6 border-l-4 border-green-500">
                  <h3 className="font-bold text-gray-900 mb-2">Revenue Impact</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 47% e-commerce growth</li>
                    <li>• 23% same-store sales increase</li>
                    <li>• $2.3B incremental revenue</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500">
                  <h3 className="font-bold text-gray-900 mb-2">Operational Excellence</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 31% cost reduction</li>
                    <li>• 62% faster inventory turns</li>
                    <li>• 89% forecast accuracy</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500">
                  <h3 className="font-bold text-gray-900 mb-2">Customer Success</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 34-point NPS increase</li>
                    <li>• 52% repeat purchase rate</li>
                    <li>• 3.2x customer lifetime value</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-orange-600" />
            The Challenge: Disruption on All Fronts
          </h2>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-xl mb-4 text-red-600">Market Pressures</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">▼</span>
                    <div>
                      <strong>Digital competition:</strong> Lost 18% market share to online retailers in 3 years
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">▼</span>
                    <div>
                      <strong>Customer expectations:</strong> 73% demanded personalized experiences they weren't delivering
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">▼</span>
                    <div>
                      <strong>Margin pressure:</strong> Operating margins declined from 8.2% to 4.7%
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-xl mb-4 text-orange-600">Operational Challenges</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 mt-1">⚠</span>
                    <div>
                      <strong>Inventory issues:</strong> $3.2B in excess inventory, 23% stockout rate
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 mt-1">⚠</span>
                    <div>
                      <strong>Siloed data:</strong> 47 separate systems with no integration
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 mt-1">⚠</span>
                    <div>
                      <strong>Manual processes:</strong> 60% of operations still paper-based
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <p className="text-lg font-semibold text-red-900 mb-2">The Burning Platform:</p>
              <p className="text-red-800">
                "We were 18 months away from irrelevance. Our board gave us one mandate: 
                transform or be transformed by the market." 
                <span className="block mt-2 text-sm italic">— CEO, January 2023</span>
              </p>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Zap className="w-8 h-8 text-blue-600" />
            The Solution: AI-First Transformation
          </h2>

          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Phase 1: Foundation (Months 1-6)</h3>
                  <p className="text-gray-600">Data unification and infrastructure modernization</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-blue-600" />
                    Data Lake Creation
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Unified 47 systems into single source</li>
                    <li>• 15 petabytes of historical data</li>
                    <li>• Real-time streaming pipelines</li>
                    <li>• 99.99% availability SLA</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <Package className="w-5 h-5 text-blue-600" />
                    ML Platform
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Cloud-native architecture</li>
                    <li>• AutoML capabilities</li>
                    <li>• Model registry & versioning</li>
                    <li>• A/B testing framework</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    Team Building
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• 120-person AI CoE</li>
                    <li>• 2,000 employees trained</li>
                    <li>• Agile transformation</li>
                    <li>• Executive sponsorship</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                <p className="text-sm font-semibold text-blue-900">
                  Phase 1 Result: Foundation for AI at scale with unified data and modern infrastructure
                </p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Phase 2: Intelligence Layer (Months 7-12)</h3>
                  <p className="text-gray-600">AI model deployment across critical business functions</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-4">Deployed AI Solutions</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-purple-600 mb-2">Customer Intelligence</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• 360° customer profiles (142M customers)</li>
                        <li>• Real-time personalization engine</li>
                        <li>• Next-best-action recommendations</li>
                        <li>• Churn prediction models</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-purple-600 mb-2">Supply Chain Optimization</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Demand forecasting (SKU level)</li>
                        <li>• Dynamic inventory allocation</li>
                        <li>• Route optimization</li>
                        <li>• Supplier risk scoring</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-purple-600 mb-2">Pricing & Promotion</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Dynamic pricing algorithms</li>
                        <li>• Promotion effectiveness</li>
                        <li>• Markdown optimization</li>
                        <li>• Competitive intelligence</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-purple-600 mb-2">Store Operations</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Labor scheduling optimization</li>
                        <li>• Shelf availability monitoring</li>
                        <li>• Loss prevention AI</li>
                        <li>• Energy management</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-purple-100 rounded-lg">
                  <p className="text-sm font-semibold text-purple-900">
                    Phase 2 Result: 127 AI models in production, processing 2.3B predictions daily
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Phase 3: Scale & Optimize (Months 13-18)</h3>
                  <p className="text-gray-600">Enterprise-wide deployment and continuous improvement</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-bold text-lg mb-4">Scaling Impact</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <span className="font-medium">AI-Powered Decisions</span>
                    <span className="font-bold text-green-600">73% of all operational decisions</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <span className="font-medium">Process Automation</span>
                    <span className="font-bold text-green-600">456 processes fully automated</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <span className="font-medium">Employee Augmentation</span>
                    <span className="font-bold text-green-600">89% of workforce AI-enabled</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <span className="font-medium">Customer Interactions</span>
                    <span className="font-bold text-green-600">94% AI-enhanced</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Deep Dive */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-green-600" />
            Results: Transformation Delivered
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Financial Impact */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-green-600">Financial Impact</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-gray-600">Revenue Growth</span>
                    <span className="text-2xl font-bold text-green-600">+47%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-400 to-emerald-600 h-3 rounded-full" style={{ width: '94%' }} />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">$32.4B → $47.6B annually</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-gray-600">Operating Margin</span>
                    <span className="text-2xl font-bold text-green-600">+340bps</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-400 to-emerald-600 h-3 rounded-full" style={{ width: '72%' }} />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">4.7% → 8.1% EBITDA margin</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-gray-600">Cost Reduction</span>
                    <span className="text-2xl font-bold text-green-600">-31%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-400 to-emerald-600 h-3 rounded-full" style={{ width: '62%' }} />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">$1.8B annual savings</p>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">ROI</span>
                    <span className="text-3xl font-bold text-green-600">847%</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">18-month payback period</p>
                </div>
              </div>
            </div>

            {/* Operational Metrics */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Operational Excellence</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Inventory Turnover</p>
                    <p className="text-sm text-gray-600">4.2x → 6.8x</p>
                  </div>
                  <span className="text-xl font-bold text-blue-600">+62%</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Forecast Accuracy</p>
                    <p className="text-sm text-gray-600">52% → 89%</p>
                  </div>
                  <span className="text-xl font-bold text-blue-600">+37pp</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Stockout Rate</p>
                    <p className="text-sm text-gray-600">23% → 3.2%</p>
                  </div>
                  <span className="text-xl font-bold text-green-600">-86%</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Order Fulfillment</p>
                    <p className="text-sm text-gray-600">5.3 days → 1.7 days</p>
                  </div>
                  <span className="text-xl font-bold text-green-600">-68%</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Labor Productivity</p>
                    <p className="text-sm text-gray-600">$142/hr → $218/hr</p>
                  </div>
                  <span className="text-xl font-bold text-blue-600">+54%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Impact */}
          <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Customer Experience Revolution</h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">+34</div>
                <p className="text-sm font-medium">NPS Increase</p>
                <p className="text-xs text-gray-600 mt-1">12 → 46 score</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">52%</div>
                <p className="text-sm font-medium">Repeat Rate</p>
                <p className="text-xs text-gray-600 mt-1">vs 31% before</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">3.2x</div>
                <p className="text-sm font-medium">CLV Increase</p>
                <p className="text-xs text-gray-600 mt-1">$312 → $998</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">73%</div>
                <p className="text-sm font-medium">Digital Adoption</p>
                <p className="text-xs text-gray-600 mt-1">vs 28% before</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-purple-100 rounded-lg">
              <p className="text-purple-900">
                <strong>"Revolutionary personalization"</strong> — Customer feedback shows 91% feel the retailer 
                "understands their needs better than any competitor"
              </p>
            </div>
          </div>
        </section>

        {/* Key Success Factors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Award className="w-8 h-8 text-yellow-600" />
            Key Success Factors
          </h2>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-xl mb-4 text-blue-600">What Worked</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <strong>CEO sponsorship:</strong> Direct involvement and weekly reviews
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <strong>Agile approach:</strong> 2-week sprints with continuous delivery
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <strong>Change management:</strong> 2,000+ employees trained and certified
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <strong>Quick wins:</strong> $50M value in first 90 days built momentum
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <strong>Data first:</strong> 6 months on foundation before AI deployment
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-xl mb-4 text-orange-600">Lessons Learned</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5" />
                    <div>
                      <strong>Data quality:</strong> Underestimated time for data cleaning (3→6 months)
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5" />
                    <div>
                      <strong>Cultural resistance:</strong> Middle management required extra attention
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5" />
                    <div>
                      <strong>Technical debt:</strong> Legacy system migration took 2x planned time
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5" />
                    <div>
                      <strong>Talent gap:</strong> Had to 3x hiring budget for AI specialists
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5" />
                    <div>
                      <strong>Governance:</strong> Needed stronger AI ethics framework earlier
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <p className="text-lg font-semibold text-blue-900 mb-2">Critical Success Factor:</p>
              <p className="text-blue-800">
                "The combination of executive commitment, employee engagement, and VexioHQ's expertise 
                created unstoppable momentum. This wasn't just a technology project—it was a complete 
                business transformation."
                <span className="block mt-2 text-sm italic">— Chief Digital Officer</span>
              </p>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Cpu className="w-8 h-8 text-indigo-600" />
            Technology Architecture
          </h2>

          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-bold mb-3 text-indigo-600">Data Platform</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                    <span>Snowflake Data Cloud</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                    <span>Apache Kafka (streaming)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                    <span>DBT (transformation)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                    <span>Fivetran (ingestion)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-bold mb-3 text-indigo-600">AI/ML Stack</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                    <span>Azure ML Platform</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                    <span>MLflow (experiment tracking)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                    <span>Kubernetes (deployment)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                    <span>TensorFlow & PyTorch</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-bold mb-3 text-indigo-600">Applications</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                    <span>Custom React frontends</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                    <span>GraphQL APIs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                    <span>Tableau dashboards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                    <span>Mobile apps (iOS/Android)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-indigo-600">15PB</p>
                <p className="text-sm text-gray-600">Data processed</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-indigo-600">127</p>
                <p className="text-sm text-gray-600">Models in production</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-indigo-600">2.3B</p>
                <p className="text-sm text-gray-600">Daily predictions</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-indigo-600">99.99%</p>
                <p className="text-sm text-gray-600">Uptime SLA</p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Next */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Target className="w-8 h-8 text-purple-600" />
            The Road Ahead
          </h2>

          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6">Next Frontier: Autonomous Commerce</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-yellow-300 mb-3">2025 Initiatives</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300">→</span>
                    <span>Generative AI for product design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300">→</span>
                    <span>Autonomous supply chain management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300">→</span>
                    <span>AI-powered store of the future</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300">→</span>
                    <span>Predictive customer service</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-yellow-300 mb-3">Expected Impact</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300">→</span>
                    <span>Additional $3B revenue opportunity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300">→</span>
                    <span>50% reduction in working capital</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300">→</span>
                    <span>Net-zero operations by 2027</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300">→</span>
                    <span>Industry leadership position</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl font-semibold mb-2">
                "This is just the beginning. AI has given us superpowers we're only starting to understand."
              </p>
              <p className="text-purple-200">— CEO, Annual Shareholder Meeting 2024</p>
            </div>
          </div>
        </section>

        {/* Client Quote */}
        <section className="mb-16">
          <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-2xl p-8">
            <blockquote className="text-xl font-medium text-gray-800 mb-4">
              "VexioHQ didn't just implement AI—they transformed our entire business. 
              In 18 months, we went from industry laggard to leader. The $2.3B in new revenue 
              speaks for itself, but the real value is in our newfound ability to innovate at 
              the speed of thought. This partnership saved our company."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-emerald-700">JH</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">John Harrison</p>
                <p className="text-gray-600">CEO, Fortune 500 Retailer</p>
                <p className="text-sm text-gray-500">June 2024</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              This retailer's success story could be yours. Let's discuss how AI can drive 
              similar results for your organization.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/consultation"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition inline-flex items-center gap-2"
              >
                Schedule Executive Briefing
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition"
              >
                View More Success Stories
              </Link>
            </div>
          </div>
        </section>

        {/* Related Case Studies */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Case Studies</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/case-studies/financial-services-transformation" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500" />
                <div className="p-6">
                  <p className="text-xs text-gray-600 mb-2">FINANCIAL SERVICES</p>
                  <h3 className="font-bold mb-2 group-hover:text-blue-600 transition">
                    Global Bank: 73% Fraud Reduction
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    How AI transformed risk management and customer experience
                  </p>
                  <span className="text-blue-600 text-sm font-semibold">
                    Read Case Study →
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/healthcare-ai-diagnostics" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-2 bg-gradient-to-r from-green-500 to-teal-500" />
                <div className="p-6">
                  <p className="text-xs text-gray-600 mb-2">HEALTHCARE</p>
                  <h3 className="font-bold mb-2 group-hover:text-blue-600 transition">
                    Hospital Network: 42% Better Outcomes
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    AI-powered diagnostics saving lives and reducing costs
                  </p>
                  <span className="text-blue-600 text-sm font-semibold">
                    Read Case Study →
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/manufacturing-predictive-maintenance" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-2 bg-gradient-to-r from-orange-500 to-red-500" />
                <div className="p-6">
                  <p className="text-xs text-gray-600 mb-2">MANUFACTURING</p>
                  <h3 className="font-bold mb-2 group-hover:text-blue-600 transition">
                    Auto Manufacturer: 94% Uptime
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Predictive maintenance eliminating unplanned downtime
                  </p>
                  <span className="text-blue-600 text-sm font-semibold">
                    Read Case Study →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}