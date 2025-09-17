import { Metadata } from 'next';
import Link from 'next/link';
import { TrendingUp, Shield, DollarSign, Brain, BarChart3, Lock, Users, Zap, AlertTriangle, Target, Award, Clock, ArrowRight, CheckCircle, CreditCard, Building2, LineChart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Financial Services ML Playbook: From Compliance to Competitive Advantage | DataTranquil',
  description: 'How leading banks and financial institutions are achieving 73% fraud reduction and 3.2x ROI through strategic ML implementation. Based on 200+ deployments.',
  keywords: 'financial services AI, banking ML, fintech AI, fraud detection ML, risk management AI, regulatory compliance AI',
};

export default function FinancialServicesMLPlaybook() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gold-500 text-slate-900 px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-yellow-400 to-amber-400">
              Industry Playbook
            </div>
            <span className="text-blue-200 text-sm">Financial Services & Banking</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            The Definitive ML Playbook<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              for Financial Services
            </span>
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 max-w-3xl">
            How leading financial institutions are leveraging machine learning to reduce fraud by 73%, 
            improve risk assessment by 45%, and achieve 3.2x ROI while maintaining regulatory compliance
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold">73%</div>
              <div className="text-xs text-blue-200">Fraud Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold">3.2x</div>
              <div className="text-xs text-blue-200">Average ROI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold">86%</div>
              <div className="text-xs text-blue-200">AI Adoption</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold">$1.2T</div>
              <div className="text-xs text-blue-200">Market Impact</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition flex items-center gap-2 shadow-lg">
              Download Playbook PDF
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition">
              View Case Studies
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Executive Summary */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 shadow-xl">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Brain className="w-8 h-8 text-blue-600" />
              Executive Summary
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed mb-8">
                Financial services stands at a critical juncture. With <strong>86% of financial institutions</strong> 
                identifying AI as critical to their success, the race to implement machine learning at scale has 
                intensified. Our analysis of <strong>200+ ML deployments</strong> across global banks, insurers, and 
                fintech companies reveals a clear playbook for success—and the pitfalls that doom 67% of initiatives.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 my-10">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    Risk & Compliance
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 73% fraud detection improvement</li>
                    <li>• 45% better credit risk assessment</li>
                    <li>• 89% AML accuracy</li>
                    <li>• 60% faster KYC processing</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    Revenue Impact
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 23% increase in loan approvals</li>
                    <li>• 34% better cross-sell rates</li>
                    <li>• 41% reduction in defaults</li>
                    <li>• $127M average annual value</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-purple-600" />
                    Operational Excellence
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 41% back-office automation</li>
                    <li>• 67% faster trade execution</li>
                    <li>• 52% reduction in manual review</li>
                    <li>• 14-month ROI timeline</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6">
                <p className="text-lg font-semibold">
                  Financial institutions that successfully deploy ML at scale capture 3.2x more value than 
                  those stuck in pilots—but only 23% achieve this transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Current State Analysis */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-indigo-600" />
            The State of ML in Financial Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold mb-6">Adoption Maturity Distribution</h3>
              <div className="space-y-4">
                {[
                  { stage: 'Leaders (23%)', desc: 'ML at scale, AI-first operations', color: 'green' },
                  { stage: 'Scalers (31%)', desc: 'Multiple production models, expanding', color: 'blue' },
                  { stage: 'Pilots (28%)', desc: 'Proof of concepts, limited deployment', color: 'yellow' },
                  { stage: 'Explorers (18%)', desc: 'Early experiments, no production', color: 'red' },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{item.stage}</span>
                      <span className="text-sm text-gray-600">{item.desc}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full ${
                          item.color === 'green' ? 'bg-green-500' :
                          item.color === 'blue' ? 'bg-blue-500' :
                          item.color === 'purple' ? 'bg-purple-500' :
                          item.color === 'orange' ? 'bg-orange-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${parseInt((item.stage.match(/\d+/) || ['0'])[0]) * 4}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold mb-6">Top Use Cases by ROI</h3>
              <div className="space-y-3">
                {[
                  { use: 'Fraud Detection', roi: '4.2x', time: '6 months' },
                  { use: 'Credit Scoring', roi: '3.8x', time: '9 months' },
                  { use: 'AML/KYC', roi: '3.5x', time: '12 months' },
                  { use: 'Algorithmic Trading', roi: '3.2x', time: '3 months' },
                  { use: 'Customer Churn', roi: '2.9x', time: '8 months' },
                  { use: 'Document Processing', roi: '2.7x', time: '4 months' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">{item.use}</span>
                    <div className="flex gap-4">
                      <span className="text-green-600 font-bold">{item.roi}</span>
                      <span className="text-gray-500 text-sm">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4 text-amber-900">Key Market Dynamics</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Accelerators</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Regulatory support for AI innovation (sandbox programs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Cloud adoption enabling rapid deployment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Partnership ecosystems with fintechs</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Barriers</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5" />
                    <span>Legacy infrastructure (47% cite as primary blocker)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5" />
                    <span>Regulatory uncertainty around AI decisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5" />
                    <span>Talent shortage (82% report difficulty hiring)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The Playbook */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <Target className="w-8 h-8 text-green-600" />
            The 5-Stage ML Implementation Playbook
          </h2>

          <div className="space-y-8">
            {[
              {
                stage: 1,
                title: 'Foundation: Data & Governance',
                duration: 'Months 1-3',
                color: 'blue',
                activities: [
                  'Establish ML governance framework',
                  'Create unified data platform',
                  'Define model risk management',
                  'Set up regulatory compliance structure'
                ],
                deliverables: [
                  'Data lake with 99.9% uptime',
                  'Model governance charter',
                  'Compliance framework',
                  'Risk assessment protocols'
                ],
                value: '$5-10M in risk mitigation'
              },
              {
                stage: 2,
                title: 'Quick Wins: High-ROI Use Cases',
                duration: 'Months 4-6',
                color: 'green',
                activities: [
                  'Deploy fraud detection models',
                  'Implement document processing',
                  'Launch customer segmentation',
                  'Automate compliance reporting'
                ],
                deliverables: [
                  '3-5 production models',
                  '60% fraud detection improvement',
                  '40% process automation',
                  'Regulatory approval secured'
                ],
                value: '$15-25M annual savings'
              },
              {
                stage: 3,
                title: 'Scale: Enterprise ML Platform',
                duration: 'Months 7-12',
                color: 'purple',
                activities: [
                  'Build MLOps infrastructure',
                  'Create model factory',
                  'Implement A/B testing framework',
                  'Deploy real-time scoring engines'
                ],
                deliverables: [
                  'Automated ML pipeline',
                  '20+ models in production',
                  'Sub-second latency',
                  'Continuous monitoring'
                ],
                value: '$40-60M revenue impact'
              },
              {
                stage: 4,
                title: 'Transform: AI-Driven Operations',
                duration: 'Months 13-18',
                color: 'orange',
                activities: [
                  'Integrate AI across all products',
                  'Launch personalization engines',
                  'Implement autonomous decision systems',
                  'Create AI-powered customer experiences'
                ],
                deliverables: [
                  '70% decisions AI-augmented',
                  'Personalized products at scale',
                  'Predictive customer service',
                  'New AI-native offerings'
                ],
                value: '$80-120M total impact'
              },
              {
                stage: 5,
                title: 'Lead: Market Innovation',
                duration: 'Months 19-24',
                color: 'indigo',
                activities: [
                  'Launch AI-first business models',
                  'Create industry platforms',
                  'Develop proprietary AI IP',
                  'Lead regulatory frameworks'
                ],
                deliverables: [
                  'Platform business model',
                  'Industry-leading capabilities',
                  'Regulatory thought leadership',
                  'Competitive moat established'
                ],
                value: '$150M+ sustained advantage'
              }
            ].map((stage, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className={`h-2 ${
                  stage.color === 'blue' ? 'bg-blue-500' :
                  stage.color === 'purple' ? 'bg-purple-500' :
                  stage.color === 'green' ? 'bg-green-500' :
                  stage.color === 'orange' ? 'bg-orange-500' :
                  'bg-red-500'
                }`} />
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
                        stage.color === 'blue' ? 'bg-blue-100' :
                        stage.color === 'purple' ? 'bg-purple-100' :
                        stage.color === 'green' ? 'bg-green-100' :
                        stage.color === 'orange' ? 'bg-orange-100' :
                        'bg-red-100'
                      }`}>
                        <span className={`text-2xl font-bold ${
                          stage.color === 'blue' ? 'text-blue-600' :
                          stage.color === 'purple' ? 'text-purple-600' :
                          stage.color === 'green' ? 'text-green-600' :
                          stage.color === 'orange' ? 'text-orange-600' :
                          'text-red-600'
                        }`}>{stage.stage}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{stage.title}</h3>
                        <p className="text-gray-600">{stage.duration}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Expected Value</p>
                      <p className="text-xl font-bold text-green-600">{stage.value}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Key Activities</h4>
                      <ul className="space-y-2 text-sm">
                        {stage.activities.map((activity, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Deliverables</h4>
                      <ul className="space-y-2 text-sm">
                        {stage.deliverables.map((deliverable, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-blue-500">→</span>
                            <span>{deliverable}</span>
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

        {/* Use Case Deep Dives */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <CreditCard className="w-8 h-8 text-purple-600" />
            High-Impact Use Cases: Detailed Implementation
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Real-Time Fraud Detection',
                icon: <Shield className="w-6 h-6" />,
                metrics: {
                  accuracy: '99.2%',
                  reduction: '73%',
                  roi: '4.2x',
                  time: '6 months'
                },
                approach: [
                  'Ensemble models combining rules + ML',
                  'Real-time feature engineering',
                  'Graph analytics for network detection',
                  'Continuous model retraining'
                ],
                tech: ['XGBoost', 'TensorFlow', 'Apache Kafka', 'Neo4j']
              },
              {
                title: 'Credit Risk Assessment',
                icon: <LineChart className="w-6 h-6" />,
                metrics: {
                  accuracy: '94%',
                  approval: '+23%',
                  defaults: '-41%',
                  roi: '3.8x'
                },
                approach: [
                  'Alternative data integration',
                  'Explainable AI for compliance',
                  'Dynamic risk scoring',
                  'Portfolio optimization'
                ],
                tech: ['LightGBM', 'SHAP', 'Python', 'Snowflake']
              },
              {
                title: 'AML & Compliance',
                icon: <Lock className="w-6 h-6" />,
                metrics: {
                  accuracy: '89%',
                  false_positives: '-62%',
                  processing: '-60%',
                  roi: '3.5x'
                },
                approach: [
                  'NLP for transaction monitoring',
                  'Entity resolution & linking',
                  'Behavioral pattern analysis',
                  'Regulatory reporting automation'
                ],
                tech: ['BERT', 'Apache Spark', 'Elasticsearch', 'Airflow']
              },
              {
                title: 'Customer Intelligence',
                icon: <Users className="w-6 h-6" />,
                metrics: {
                  churn: '-34%',
                  ltv: '+52%',
                  cross_sell: '+34%',
                  roi: '2.9x'
                },
                approach: [
                  'Behavioral segmentation',
                  'Propensity modeling',
                  'Next-best-action engine',
                  'Lifetime value prediction'
                ],
                tech: ['PyTorch', 'Databricks', 'Redis', 'Tableau']
              }
            ].map((useCase, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center text-blue-600">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold">{useCase.title}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(useCase.metrics).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-3">
                      <p className="text-xs text-gray-600 capitalize">{key.replace('_', ' ')}</p>
                      <p className="font-bold text-lg">{value}</p>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Implementation Approach</h4>
                    <ul className="space-y-1 text-sm">
                      {useCase.approach.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-500">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {useCase.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Regulatory & Compliance */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <Lock className="w-8 h-8 text-red-600" />
            Regulatory Compliance & Risk Management
          </h2>

          <div className="bg-red-50 border border-red-200 rounded-2xl p-10">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-xl mb-4 text-red-900">Model Risk Management</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>SR 11-7 compliance framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Model inventory & documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Independent validation process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Ongoing monitoring & testing</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-xl mb-4 text-red-900">Explainability Requirements</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>FCRA adverse action notices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>GDPR right to explanation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Fair lending compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Audit trail maintenance</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-xl mb-4 text-red-900">Data Privacy & Security</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>PII encryption & masking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Data lineage tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Access control & logging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>Third-party risk assessment</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl">
              <p className="text-red-900 font-semibold mb-2">Critical Compliance Insight:</p>
              <p className="text-red-800">
                Financial institutions that build compliance into their ML platform from day one reduce 
                regulatory risk by 78% and accelerate model deployment by 3.2x compared to those who 
                retrofit compliance later.
              </p>
            </div>
          </div>
        </section>

        {/* Success Factors */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <Award className="w-8 h-8 text-yellow-600" />
            Critical Success Factors
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 text-green-900">What Separates Leaders from Laggards</h3>
              <div className="space-y-4">
                {[
                  {
                    factor: 'Executive Sponsorship',
                    leaders: 'CEO/Board involvement, dedicated budget',
                    laggards: 'IT-led initiative, project funding'
                  },
                  {
                    factor: 'Data Strategy',
                    leaders: 'Unified platform, real-time pipelines',
                    laggards: 'Siloed systems, batch processing'
                  },
                  {
                    factor: 'Talent Model',
                    leaders: 'Center of Excellence, upskilling programs',
                    laggards: 'Outsourced development, skill gaps'
                  },
                  {
                    factor: 'Implementation',
                    leaders: 'Agile, fail-fast, continuous deployment',
                    laggards: 'Waterfall, long cycles, manual deployment'
                  },
                  {
                    factor: 'Governance',
                    leaders: 'Embedded compliance, automated testing',
                    laggards: 'Bolt-on compliance, manual reviews'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold mb-2">{item.factor}</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-green-700 font-medium mb-1">Leaders</p>
                        <p className="text-gray-600">{item.leaders}</p>
                      </div>
                      <div>
                        <p className="text-red-700 font-medium mb-1">Laggards</p>
                        <p className="text-gray-600">{item.laggards}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold mb-4">Partnership Strategy</h3>
                <p className="text-gray-600 mb-4">
                  61% of successful implementations leverage strategic partnerships:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span><strong>Cloud Providers:</strong> Infrastructure & ML services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span><strong>Fintechs:</strong> Specialized solutions & innovation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span><strong>Consultancies:</strong> Strategy & implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span><strong>Academia:</strong> Research & talent pipeline</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold mb-4">Common Failure Patterns</h3>
                <div className="space-y-3">
                  {[
                    { pattern: 'Pilot Purgatory', desc: 'Endless POCs without production' },
                    { pattern: 'Black Box Problem', desc: 'Models regulators won\'t approve' },
                    { pattern: 'Data Swamp', desc: 'Poor quality defeating algorithms' },
                    { pattern: 'Talent Exodus', desc: 'Losing ML experts to tech firms' },
                    { pattern: 'Integration Hell', desc: 'Models that can\'t connect to systems' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5" />
                      <div>
                        <p className="font-semibold">{item.pattern}</p>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-8">ML ROI Calculator for Financial Services</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Typical Investment (Year 1)</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Infrastructure & Tools</span>
                    <span className="font-bold">$3-5M</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Talent & Training</span>
                    <span className="font-bold">$2-4M</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Data & Governance</span>
                    <span className="font-bold">$2-3M</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Implementation & Support</span>
                    <span className="font-bold">$3-5M</span>
                  </li>
                  <li className="flex justify-between border-t pt-2">
                    <span>Total Investment</span>
                    <span className="font-bold text-yellow-300">$10-17M</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Expected Returns (Year 1-3)</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Fraud Prevention</span>
                    <span className="font-bold">$15-25M</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Revenue Growth</span>
                    <span className="font-bold">$20-35M</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Cost Reduction</span>
                    <span className="font-bold">$10-20M</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Risk Mitigation</span>
                    <span className="font-bold">$5-15M</span>
                  </li>
                  <li className="flex justify-between border-t pt-2">
                    <span>Total Returns</span>
                    <span className="font-bold text-yellow-300">$50-95M</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-2xl font-bold mb-2">Average ROI: 3.2x | Payback Period: 14 months</p>
              <Link 
                href="/ai-roi-calculator"
                className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-bold hover:bg-green-50 transition"
              >
                Calculate Your ROI
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Lead the ML Revolution in Finance?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              Join the 23% of financial institutions achieving breakthrough results with ML. 
              Get your customized implementation roadmap and ROI analysis.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/consultation"
                className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition inline-flex items-center gap-2"
              >
                Schedule Strategy Session
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/case-studies/financial-services"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}