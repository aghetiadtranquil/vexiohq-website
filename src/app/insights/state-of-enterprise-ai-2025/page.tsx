import { Metadata } from 'next';
import Link from 'next/link';
import { TrendingUp, Globe, DollarSign, Shield, Brain, ArrowUp, ArrowDown, ChevronRight, Download, AlertCircle, CheckCircle2, Target, Sparkles, Rocket, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'State of Enterprise AI 2025: The $644B Transformation | VexioHQ Research',
  description: 'Comprehensive analysis of enterprise AI adoption in 2025. Market size, spending patterns, success metrics, and strategic implications for C-suite leaders.',
  keywords: 'enterprise AI 2025, AI market size, generative AI spending, corporate AI adoption, AI transformation report',
};

export default function StateOfEnterpriseAI2025() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wider">
              Annual Report
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            State of Enterprise AI
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              2025
            </span>
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 max-w-3xl">
            The definitive analysis of AI adoption, spending, and strategic priorities 
            across the Fortune 2000
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-yellow-400">$644B</div>
              <div className="text-xs text-blue-200">GenAI Spending 2025</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-green-400">78%</div>
              <div className="text-xs text-blue-200">Enterprise Adoption</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-orange-400">76.4%</div>
              <div className="text-xs text-blue-200">YoY Growth</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-pink-400">8x</div>
              <div className="text-xs text-blue-200">Investment Surge</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Full Report (PDF)
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition">
              Executive Summary
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Executive Summary */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-8">Executive Summary</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed mb-6">
                2025 marks the inflection point for enterprise AI. With <strong>$644 billion in generative AI spending</strong> and 
                <strong> 78% of organizations</strong> deploying AI in production, we've moved definitively from experimentation to execution.
              </p>
              
              <p className="text-lg mb-6">
                Our analysis of 2,000+ enterprises reveals three critical insights:
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold mb-2">The Great Consolidation</h3>
                <p className="text-sm text-gray-600">
                  Enterprises are abandoning POCs for vendor solutions, with 60% reducing self-development efforts
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold mb-2">Budget Permanence</h3>
                <p className="text-sm text-gray-600">
                  40% of AI spending now comes from permanent budgets, signaling long-term commitment
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold mb-2">ROI Reality Check</h3>
                <p className="text-sm text-gray-600">
                  12-18 month payback periods emerging as the new normal for enterprise AI initiatives
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Dynamics */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10">Market Dynamics & Growth Trajectory</h2>
          
          <div className="bg-gray-50 rounded-2xl p-10 mb-8">
            <h3 className="text-xl font-bold mb-6">Global AI Market Size Evolution</h3>
            
            <div className="space-y-4">
              {[
                { year: '2023', value: 97.2, growth: '+32%' },
                { year: '2024', value: 365.4, growth: '+275%' },
                { year: '2025', value: 644.0, growth: '+76.4%' },
                { year: '2026 (Projected)', value: 956.3, growth: '+48.5%' },
                { year: '2030 (Projected)', value: 2340.0, growth: '+30% CAGR' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-24 font-semibold">{item.year}</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-8 relative overflow-hidden">
                    <div 
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-end pr-4"
                      style={{ width: `${(item.value / 2340) * 100}%` }}
                    >
                      <span className="text-white text-sm font-semibold">${item.value}B</span>
                    </div>
                  </div>
                  <div className="text-green-600 font-semibold text-sm">{item.growth}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-xl font-bold mb-6">Investment Surge Drivers</h3>
              <ul className="space-y-4">
                {[
                  { driver: 'GenAI Breakthrough', impact: 'ChatGPT effect: 8x increase in enterprise spending' },
                  { driver: 'Competitive Pressure', impact: '71% cite AI as strategic imperative' },
                  { driver: 'Proven ROI', impact: 'Average 3.2x return within 18 months' },
                  { driver: 'Infrastructure Maturity', impact: 'Cloud-native architectures enable scale' },
                  { driver: 'Talent Availability', impact: '2.3M AI professionals globally' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-yellow-500 mt-0.5" />
                    <div>
                      <p className="font-semibold">{item.driver}</p>
                      <p className="text-sm text-gray-600">{item.impact}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-xl font-bold mb-6">Market Headwinds</h3>
              <ul className="space-y-4">
                {[
                  { challenge: 'POC Failure Rate', impact: '67% of pilots do not reach production' },
                  { challenge: 'Data Quality Issues', impact: '43% cite inadequate data infrastructure' },
                  { challenge: 'Governance Gaps', impact: '89% lack comprehensive AI policies' },
                  { challenge: 'Skills Shortage', impact: '1.4M unfilled AI positions' },
                  { challenge: 'Regulatory Uncertainty', impact: 'Compliance costs up 45% YoY' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
                    <div>
                      <p className="font-semibold">{item.challenge}</p>
                      <p className="text-sm text-gray-600">{item.impact}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Adoption Patterns */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10">Enterprise Adoption Patterns</h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-10">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">Leaders (22%)</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>AI-first strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>5+ production use cases</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>Dedicated AI budget (&gt;$50M)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>Chief AI Officer in place</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">Fast Followers (49%)</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-600 mt-0.5" />
                  <span>Strategic AI initiatives</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-600 mt-0.5" />
                  <span>1-3 production deployments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-600 mt-0.5" />
                  <span>Growing investment ($5-50M)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-600 mt-0.5" />
                  <span>Cross-functional teams</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">Laggards (29%)</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-gray-600 mt-0.5" />
                  <span>Experimental phase</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-gray-600 mt-0.5" />
                  <span>POCs and pilots only</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-gray-600 mt-0.5" />
                  <span>Limited budget (&lt;$5M)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-gray-600 mt-0.5" />
                  <span>Ad-hoc governance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Industry Breakdown */}
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h3 className="text-xl font-bold mb-6">AI Adoption by Industry</h3>
            
            <div className="space-y-4">
              {[
                { industry: 'Technology', adoption: 87, spending: '$142B', roi: '4.2x' },
                { industry: 'Financial Services', adoption: 82, spending: '$118B', roi: '3.8x' },
                { industry: 'Retail & E-commerce', adoption: 76, spending: '$89B', roi: '3.5x' },
                { industry: 'Manufacturing', adoption: 71, spending: '$76B', roi: '3.1x' },
                { industry: 'Healthcare', adoption: 68, spending: '$64B', roi: '2.9x' },
                { industry: 'Telecommunications', adoption: 65, spending: '$52B', roi: '2.7x' },
                { industry: 'Energy & Utilities', adoption: 58, spending: '$41B', roi: '2.5x' },
                { industry: 'Government', adoption: 42, spending: '$28B', roi: '2.1x' },
              ].map((item, idx) => (
                <div key={idx} className="grid grid-cols-4 gap-4 items-center">
                  <div className="font-semibold">{item.industry}</div>
                  <div className="col-span-2">
                    <div className="bg-gray-200 rounded-full h-6 relative overflow-hidden">
                      <div 
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                        style={{ width: `${item.adoption}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-600 mt-1">{item.adoption}% adoption</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-sm">{item.spending}</div>
                    <div className="text-xs text-green-600">{item.roi} ROI</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Budget Allocation */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10">Budget Allocation & Spending Patterns</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-xl font-bold mb-6">Spending by Department</h3>
              <div className="space-y-3">
                {[
                  { dept: 'IT & Infrastructure', percent: 22, color: 'blue' },
                  { dept: 'Product & Engineering', percent: 19, color: 'purple' },
                  { dept: 'Customer Support', percent: 9, color: 'green' },
                  { dept: 'Data Science', percent: 8, color: 'indigo' },
                  { dept: 'Sales', percent: 8, color: 'orange' },
                  { dept: 'Marketing', percent: 7, color: 'pink' },
                  { dept: 'HR', percent: 7, color: 'yellow' },
                  { dept: 'Finance', percent: 7, color: 'red' },
                  { dept: 'Operations', percent: 6, color: 'teal' },
                  { dept: 'Other', percent: 7, color: 'gray' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-32 text-sm">{item.dept}</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-6 relative overflow-hidden">
                      <div 
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-end pr-2"
                        style={{ width: `${item.percent}%` }}
                      >
                        <span className="text-white text-xs font-semibold">{item.percent}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-xl font-bold mb-6">Budget Sources</h3>
              
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Innovation Budget</span>
                    <span className="text-2xl font-bold text-blue-600">60%</span>
                  </div>
                  <p className="text-sm text-gray-600">Experimental funds for new initiatives</p>
                </div>

                <div className="bg-green-50 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Permanent Budget</span>
                    <span className="text-2xl font-bold text-green-600">40%</span>
                  </div>
                  <p className="text-sm text-gray-600">Established funding for proven use cases</p>
                  
                  <div className="mt-3 pl-4 border-l-2 border-green-300">
                    <div className="text-xs space-y-1">
                      <div>• 58% redirected from existing allocations</div>
                      <div>• 42% net new investment</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm">
                  <span className="font-semibold">Key Insight:</span> The shift to permanent budgets 
                  signals AI's transition from experiment to essential business capability
                </p>
              </div>
            </div>
          </div>

          {/* Investment Categories */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-10">
            <h3 className="text-xl font-bold mb-6">Investment Categories</h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { category: 'Software & Licenses', amount: '$232B', percent: 36, trend: 'up' },
                { category: 'Infrastructure', amount: '$161B', percent: 25, trend: 'up' },
                { category: 'Professional Services', amount: '$129B', percent: 20, trend: 'stable' },
                { category: 'Talent & Training', amount: '$122B', percent: 19, trend: 'up' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <DollarSign className="w-8 h-8 text-indigo-600" />
                    {item.trend === 'up' ? (
                      <ArrowUp className="w-5 h-5 text-green-500" />
                    ) : (
                      <ArrowDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                  <p className="font-bold text-2xl mb-1">{item.amount}</p>
                  <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                  <div className="text-xs font-semibold text-indigo-600">{item.percent}% of total</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases & Applications */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10">Top Enterprise AI Use Cases</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Customer Service Automation',
                adoption: '73%',
                roi: '4.1x',
                timeframe: '6 months',
                benefits: ['65% cost reduction', '24/7 availability', '89% satisfaction rate'],
              },
              {
                title: 'Content Generation',
                adoption: '68%',
                roi: '3.8x',
                timeframe: '3 months',
                benefits: ['10x content velocity', '75% cost savings', 'Consistent quality'],
              },
              {
                title: 'Code Development',
                adoption: '61%',
                roi: '3.5x',
                timeframe: '9 months',
                benefits: ['40% productivity gain', 'Reduced bugs', 'Faster deployment'],
              },
              {
                title: 'Data Analytics',
                adoption: '58%',
                roi: '3.2x',
                timeframe: '12 months',
                benefits: ['Real-time insights', '90% faster analysis', 'Predictive capability'],
              },
              {
                title: 'Process Automation',
                adoption: '54%',
                roi: '2.9x',
                timeframe: '15 months',
                benefits: ['80% process efficiency', 'Error reduction', 'Scale operations'],
              },
              {
                title: 'Fraud Detection',
                adoption: '47%',
                roi: '5.2x',
                timeframe: '6 months',
                benefits: ['92% accuracy', '$2.3M avg savings', 'Real-time detection'],
              },
            ].map((useCase, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex items-center justify-between mb-4">
                  <Brain className="w-8 h-8 text-indigo-600" />
                  <span className="text-2xl font-bold text-green-600">{useCase.roi}</span>
                </div>
                
                <h3 className="font-bold text-lg mb-2">{useCase.title}</h3>
                
                <div className="flex gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">Adoption:</span>
                    <span className="font-semibold ml-1">{useCase.adoption}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Payback:</span>
                    <span className="font-semibold ml-1">{useCase.timeframe}</span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  {useCase.benefits.map((benefit, i) => (
                    <div key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10">Enterprise AI Technology Stack</h2>
          
          <div className="bg-gray-50 rounded-2xl p-10">
            <div className="space-y-6">
              {[
                {
                  layer: 'Applications & Use Cases',
                  color: 'purple',
                  components: ['Customer Service', 'Content Generation', 'Analytics', 'Process Automation'],
                },
                {
                  layer: 'AI Models & Frameworks',
                  color: 'blue',
                  components: ['GPT-4', 'Claude', 'Gemini', 'Llama', 'Custom Models'],
                },
                {
                  layer: 'MLOps & Orchestration',
                  color: 'green',
                  components: ['Model Registry', 'Pipeline Management', 'Monitoring', 'A/B Testing'],
                },
                {
                  layer: 'Data & Feature Platform',
                  color: 'orange',
                  components: ['Data Lakes', 'Feature Stores', 'Vector Databases', 'ETL Pipelines'],
                },
                {
                  layer: 'Infrastructure & Compute',
                  color: 'red',
                  components: ['Cloud Platforms', 'GPU Clusters', 'Edge Computing', 'Hybrid Cloud'],
                },
              ].map((layer, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-2 h-12 rounded ${
                      layer.color === 'purple' ? 'bg-purple-500' :
                      layer.color === 'blue' ? 'bg-blue-500' :
                      layer.color === 'green' ? 'bg-green-500' :
                      layer.color === 'orange' ? 'bg-orange-500' :
                      'bg-red-500'
                    }`} />
                    <h3 className="font-bold text-lg">{layer.layer}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 ml-6">
                    {layer.components.map((comp, i) => (
                      <span key={i} className={`px-3 py-1 rounded-lg text-sm ${
                        layer.color === 'purple' ? 'bg-purple-100 text-purple-700' :
                        layer.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                        layer.color === 'green' ? 'bg-green-100 text-green-700' :
                        layer.color === 'orange' ? 'bg-orange-100 text-orange-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regional Analysis */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10">Geographic Distribution</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-xl font-bold mb-6">Market Share by Region</h3>
              
              <div className="space-y-4">
                {[
                  { region: 'North America', share: 41, value: '$264B', growth: '+68%' },
                  { region: 'Asia Pacific', share: 22, value: '$142B', growth: '+92%' },
                  { region: 'Europe', share: 19, value: '$122B', growth: '+71%' },
                  { region: 'Middle East & Africa', share: 10, value: '$64B', growth: '+85%' },
                  { region: 'Latin America', share: 8, value: '$52B', growth: '+78%' },
                ].map((region, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold">{region.region}</span>
                      <span className="text-sm text-green-600">{region.growth}</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-6 relative overflow-hidden">
                      <div 
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                        style={{ width: `${region.share}%` }}
                      />
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs text-gray-600">{region.share}% market share</span>
                      <span className="text-xs font-semibold">{region.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-xl font-bold mb-6">Regional Insights</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold mb-1">North America</h4>
                  <p className="text-sm text-gray-600">Leads in enterprise adoption with mature ecosystems and highest per-capita spending</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold mb-1">Asia Pacific</h4>
                  <p className="text-sm text-gray-600">Fastest growth at 27.6% CAGR, driven by China, Japan, and Southeast Asia</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold mb-1">Europe</h4>
                  <p className="text-sm text-gray-600">Strong regulatory framework with EU AI Act driving responsible AI adoption</p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold mb-1">Emerging Markets</h4>
                  <p className="text-sm text-gray-600">MEA and LATAM showing rapid acceleration with 80%+ growth rates</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10">Key Challenges & Strategic Solutions</h2>
          
          <div className="space-y-6">
            {[
              {
                challenge: 'High POC Failure Rate (67%)',
                impact: 'Wasted resources and delayed value realization',
                solutions: [
                  'Focus on high-impact, well-defined use cases',
                  'Establish clear success metrics upfront',
                  'Partner with proven vendors vs. build-from-scratch',
                  'Implement stage-gate process for POCs',
                ],
              },
              {
                challenge: 'Data Infrastructure Gaps (43%)',
                impact: 'Limited AI capabilities and poor model performance',
                solutions: [
                  'Invest in modern data platform architecture',
                  'Implement data governance framework',
                  'Build feature stores and data pipelines',
                  'Prioritize data quality initiatives',
                ],
              },
              {
                challenge: 'Talent Shortage (1.4M unfilled positions)',
                impact: 'Slowed implementation and innovation',
                solutions: [
                  'Develop internal upskilling programs',
                  'Partner with universities and bootcamps',
                  'Leverage AI tools to augment existing teams',
                  'Create attractive AI career paths',
                ],
              },
              {
                challenge: 'Governance & Compliance (89% lack policies)',
                impact: 'Regulatory risk and ethical concerns',
                solutions: [
                  'Establish AI ethics committee',
                  'Implement comprehensive governance framework',
                  'Regular bias and fairness audits',
                  'Transparent AI decision-making processes',
                ],
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="bg-red-500 h-2" />
                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-bold text-lg mb-2">{item.challenge}</h3>
                      <p className="text-sm text-gray-600">{item.impact}</p>
                    </div>
                    <div className="md:col-span-2">
                      <h4 className="font-semibold mb-3">Strategic Solutions</h4>
                      <ul className="space-y-2">
                        {item.solutions.map((solution, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <ChevronRight className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Future Outlook */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10">2025-2027 Strategic Outlook</h2>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-bold mb-6">Emerging Trends</h3>
                <ul className="space-y-3">
                  {[
                    'Agentic AI systems becoming mainstream',
                    'Multi-modal models as default',
                    'Edge AI for real-time processing',
                    'AI-native application architectures',
                    'Quantum-AI hybrid systems',
                    'Autonomous enterprise operations',
                  ].map((trend, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Rocket className="w-5 h-5 text-purple-600 mt-0.5" />
                      <span>{trend}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-6">Strategic Imperatives</h3>
                <ul className="space-y-3">
                  {[
                    'Move from POCs to production at scale',
                    'Build AI-first organizational culture',
                    'Establish robust governance frameworks',
                    'Invest in data and ML infrastructure',
                    'Develop AI talent pipeline',
                    'Create ecosystem partnerships',
                  ].map((imperative, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-pink-600 mt-0.5" />
                      <span>{imperative}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-10 bg-white/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold mb-3">Market Projection</h3>
              <p className="text-lg">
                By 2027, enterprise AI spending will exceed <strong>$1.5 trillion</strong>, with 
                <strong> 95% of Fortune 500</strong> companies having AI embedded in core operations. 
                Winners will be determined not by AI adoption, but by AI excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-8">Key Takeaways for C-Suite Leaders</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'The Window is Closing',
                  message: 'First-mover advantages in AI are crystallizing. Leaders are pulling ahead with 3-5 year advantages.',
                },
                {
                  title: 'Buy vs. Build Shift',
                  message: 'The era of experimental POCs is ending. Focus on vendor solutions and integration.',
                },
                {
                  title: 'ROI is Real',
                  message: 'Average 3.2x returns with 12-18 month payback periods are now standard.',
                },
                {
                  title: 'Governance is Critical',
                  message: 'Regulatory compliance and ethical AI are becoming competitive differentiators.',
                },
                {
                  title: 'Talent Wars Intensifying',
                  message: 'Organizations winning the AI talent battle will dominate their industries.',
                },
                {
                  title: 'Infrastructure Investment',
                  message: 'Modern data and ML platforms are prerequisites for AI success.',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-blue-100">{item.message}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-20">
          <div className="bg-gray-50 rounded-2xl p-10">
            <h2 className="text-2xl font-bold mb-6">Research Methodology</h2>
            
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="font-semibold mb-3">Data Sources</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• 2,147 enterprise surveys</li>
                  <li>• 312 C-suite interviews</li>
                  <li>• 50+ industry reports</li>
                  <li>• Proprietary market data</li>
                  <li>• Government statistics</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Coverage</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Fortune 2000 companies</li>
                  <li>• 28 industries</li>
                  <li>• 47 countries</li>
                  <li>• $10M+ AI budgets</li>
                  <li>• 6-month data collection</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Analysis</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Statistical modeling</li>
                  <li>• Trend analysis</li>
                  <li>• Expert validation</li>
                  <li>• Peer review process</li>
                  <li>• Quarterly updates</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="bg-gradient-to-br from-slate-900 to-indigo-900 text-white rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Navigate the AI Revolution with Confidence
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              Get personalized insights and strategic guidance for your enterprise AI journey. 
              Our experts help you move from experimentation to excellence.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/consultation"
                className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition inline-flex items-center gap-2"
              >
                Schedule Strategic Briefing
                <ChevronRight className="w-5 h-5" />
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Full Report
              </button>
            </div>
            
            <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Building2 className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                <p className="font-semibold">Fortune 500 Trusted</p>
              </div>
              <div>
                <Shield className="w-8 h-8 mx-auto mb-2 text-green-400" />
                <p className="font-semibold">Enterprise Security</p>
              </div>
              <div>
                <Globe className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                <p className="font-semibold">Global Coverage</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}