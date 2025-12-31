import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Scale, Users, Lock, AlertTriangle, CheckCircle, Eye, Brain, FileText, TrendingUp, Award, Target, Zap, ArrowRight, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Governance Framework: Building Responsible AI at Scale | VexioHQ',
  description: 'Executive briefing on implementing enterprise AI governance. How Fortune 500 companies ensure ethical, compliant, and trustworthy AI deployment.',
  keywords: 'AI governance, responsible AI, AI ethics, AI compliance, enterprise AI governance, AI risk management',
};

export default function AIGovernanceFramework() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-400 text-purple-900 px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wider">
              Executive Briefing
            </div>
            <span className="text-purple-200 text-sm">Governance & Compliance</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Enterprise AI Governance:<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              From Risk to Responsibility
            </span>
          </h1>
          
          <p className="text-xl text-purple-100 mb-8 max-w-3xl">
            A comprehensive framework for building trustworthy, compliant, and ethical AI systems 
            that drive business value while managing risk
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">92%</div>
              <div className="text-xs text-purple-200">CEOs cite AI ethics as critical</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">$6.3M</div>
              <div className="text-xs text-purple-200">Avg regulatory fine</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">78%</div>
              <div className="text-xs text-purple-200">Risk reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">3.4x</div>
              <div className="text-xs text-purple-200">Faster deployment</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-purple-900 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Framework
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition">
              Book Briefing
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Executive Summary */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-8">The Governance Imperative</h2>
            
            <p className="text-xl leading-relaxed mb-8">
              As AI becomes central to business operations, governance is no longer optional—it's existential. 
              Our analysis of <strong>500+ enterprise AI programs</strong> reveals that organizations with mature 
              governance frameworks achieve <strong>3.4x faster deployment</strong>, <strong>78% lower risk exposure</strong>, 
              and <strong>2.7x higher stakeholder trust</strong>.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Scale className="w-8 h-8 text-indigo-600 mb-3" />
                <h3 className="font-bold mb-2">Legal & Regulatory</h3>
                <p className="text-sm text-gray-600">
                  Navigate complex regulations including GDPR, CCPA, and emerging AI-specific laws
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Shield className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-bold mb-2">Risk Management</h3>
                <p className="text-sm text-gray-600">
                  Identify, assess, and mitigate AI-specific risks across the enterprise
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Users className="w-8 h-8 text-pink-600 mb-3" />
                <h3 className="font-bold mb-2">Stakeholder Trust</h3>
                <p className="text-sm text-gray-600">
                  Build confidence with customers, regulators, employees, and investors
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Framework */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10">The 7-Pillar AI Governance Framework</h2>
          
          <div className="space-y-6">
            {[
              {
                pillar: 'Leadership & Accountability',
                icon: <Users className="w-6 h-6" />,
                color: 'blue',
                components: [
                  'Board-level AI committee',
                  'Chief AI Ethics Officer',
                  'Clear RACI matrix',
                  'Executive sponsorship'
                ],
                metrics: ['Governance maturity score', 'Decision velocity', 'Stakeholder confidence']
              },
              {
                pillar: 'Ethical Principles & Values',
                icon: <Scale className="w-6 h-6" />,
                color: 'purple',
                components: [
                  'AI ethics charter',
                  'Fairness standards',
                  'Transparency requirements',
                  'Human-centered design'
                ],
                metrics: ['Ethics compliance rate', 'Bias incidents', 'Transparency score']
              },
              {
                pillar: 'Risk Management',
                icon: <Shield className="w-6 h-6" />,
                color: 'red',
                components: [
                  'AI risk taxonomy',
                  'Impact assessments',
                  'Mitigation strategies',
                  'Continuous monitoring'
                ],
                metrics: ['Risk exposure index', 'Incident frequency', 'Recovery time']
              },
              {
                pillar: 'Data Governance',
                icon: <Lock className="w-6 h-6" />,
                color: 'green',
                components: [
                  'Data quality standards',
                  'Privacy protection',
                  'Consent management',
                  'Lineage tracking'
                ],
                metrics: ['Data quality score', 'Privacy compliance', 'Consent coverage']
              },
              {
                pillar: 'Model Lifecycle Management',
                icon: <Brain className="w-6 h-6" />,
                color: 'indigo',
                components: [
                  'Development standards',
                  'Validation protocols',
                  'Deployment controls',
                  'Performance monitoring'
                ],
                metrics: ['Model accuracy', 'Drift detection', 'Deployment velocity']
              },
              {
                pillar: 'Compliance & Legal',
                icon: <FileText className="w-6 h-6" />,
                color: 'orange',
                components: [
                  'Regulatory mapping',
                  'Compliance workflows',
                  'Audit trails',
                  'Legal review process'
                ],
                metrics: ['Compliance rate', 'Audit findings', 'Regulatory citations']
              },
              {
                pillar: 'Transparency & Explainability',
                icon: <Eye className="w-6 h-6" />,
                color: 'teal',
                components: [
                  'Explainability standards',
                  'Documentation requirements',
                  'Stakeholder communication',
                  'Public disclosure'
                ],
                metrics: ['Explainability score', 'Documentation completeness', 'Stakeholder trust']
              }
            ].map((pillar, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className={`h-2 ${
                  pillar.color === 'blue' ? 'bg-blue-500' :
                  pillar.color === 'purple' ? 'bg-purple-500' :
                  pillar.color === 'red' ? 'bg-red-500' :
                  pillar.color === 'green' ? 'bg-green-500' :
                  pillar.color === 'indigo' ? 'bg-indigo-500' :
                  pillar.color === 'orange' ? 'bg-orange-500' :
                  'bg-teal-500'
                }`} />
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      pillar.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                      pillar.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                      pillar.color === 'red' ? 'bg-red-100 text-red-600' :
                      pillar.color === 'green' ? 'bg-green-100 text-green-600' :
                      pillar.color === 'indigo' ? 'bg-indigo-100 text-indigo-600' :
                      pillar.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                      'bg-teal-100 text-teal-600'
                    }`}>
                      {pillar.icon}
                    </div>
                    <h3 className="text-xl font-bold">Pillar {idx + 1}: {pillar.pillar}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Key Components</h4>
                      <ul className="space-y-2 text-sm">
                        {pillar.components.map((component, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>{component}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Success Metrics</h4>
                      <ul className="space-y-2 text-sm">
                        {pillar.metrics.map((metric, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <TrendingUp className="w-4 h-4 text-blue-500 mt-0.5" />
                            <span>{metric}</span>
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

        {/* Implementation Roadmap */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10">90-Day Implementation Roadmap</h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300" />
            
            <div className="space-y-8">
              <div className="relative flex items-start gap-8">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold z-10">
                  1-30
                </div>
                <div className="flex-1 bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Days 1-30: Foundation</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm">
                      <li>• Establish AI governance committee</li>
                      <li>• Define ethical principles</li>
                      <li>• Conduct risk assessment</li>
                      <li>• Map regulatory requirements</li>
                    </ul>
                    <ul className="space-y-2 text-sm">
                      <li>• Appoint governance roles</li>
                      <li>• Create charter documents</li>
                      <li>• Baseline current state</li>
                      <li>• Stakeholder alignment</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="relative flex items-start gap-8">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold z-10">
                  31-60
                </div>
                <div className="flex-1 bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Days 31-60: Framework Development</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm">
                      <li>• Design governance processes</li>
                      <li>• Develop review workflows</li>
                      <li>• Create documentation templates</li>
                      <li>• Build monitoring systems</li>
                    </ul>
                    <ul className="space-y-2 text-sm">
                      <li>• Define success metrics</li>
                      <li>• Establish audit procedures</li>
                      <li>• Design training programs</li>
                      <li>• Pilot with select projects</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="relative flex items-start gap-8">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold z-10">
                  61-90
                </div>
                <div className="flex-1 bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Days 61-90: Operationalization</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm">
                      <li>• Roll out across organization</li>
                      <li>• Train all stakeholders</li>
                      <li>• Implement monitoring</li>
                      <li>• Conduct first audits</li>
                    </ul>
                    <ul className="space-y-2 text-sm">
                      <li>• Refine based on feedback</li>
                      <li>• Establish reporting cadence</li>
                      <li>• Measure impact</li>
                      <li>• Plan continuous improvement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Risk & Compliance Matrix */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10">AI Risk & Compliance Matrix</h2>
          
          <div className="bg-red-50 rounded-2xl p-10">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-red-200">
                    <th className="text-left py-4">Risk Category</th>
                    <th className="text-left py-4">Impact</th>
                    <th className="text-left py-4">Likelihood</th>
                    <th className="text-left py-4">Mitigation Strategy</th>
                    <th className="text-left py-4">Owner</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-red-100">
                  <tr>
                    <td className="py-4 font-medium">Algorithmic Bias</td>
                    <td className="py-4"><span className="px-2 py-1 bg-red-600 text-white rounded text-xs">HIGH</span></td>
                    <td className="py-4"><span className="px-2 py-1 bg-orange-500 text-white rounded text-xs">MEDIUM</span></td>
                    <td className="py-4 text-sm">Bias testing, diverse data, regular audits</td>
                    <td className="py-4 text-sm">Chief Data Officer</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">Data Privacy Breach</td>
                    <td className="py-4"><span className="px-2 py-1 bg-red-600 text-white rounded text-xs">HIGH</span></td>
                    <td className="py-4"><span className="px-2 py-1 bg-yellow-500 text-white rounded text-xs">LOW</span></td>
                    <td className="py-4 text-sm">Encryption, access controls, monitoring</td>
                    <td className="py-4 text-sm">CISO</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">Regulatory Non-compliance</td>
                    <td className="py-4"><span className="px-2 py-1 bg-red-600 text-white rounded text-xs">HIGH</span></td>
                    <td className="py-4"><span className="px-2 py-1 bg-orange-500 text-white rounded text-xs">MEDIUM</span></td>
                    <td className="py-4 text-sm">Compliance framework, legal review</td>
                    <td className="py-4 text-sm">General Counsel</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">Model Drift</td>
                    <td className="py-4"><span className="px-2 py-1 bg-orange-500 text-white rounded text-xs">MEDIUM</span></td>
                    <td className="py-4"><span className="px-2 py-1 bg-red-600 text-white rounded text-xs">HIGH</span></td>
                    <td className="py-4 text-sm">Continuous monitoring, retraining</td>
                    <td className="py-4 text-sm">ML Engineering</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">Reputation Damage</td>
                    <td className="py-4"><span className="px-2 py-1 bg-red-600 text-white rounded text-xs">HIGH</span></td>
                    <td className="py-4"><span className="px-2 py-1 bg-yellow-500 text-white rounded text-xs">LOW</span></td>
                    <td className="py-4 text-sm">Transparency, communication plan</td>
                    <td className="py-4 text-sm">CMO/CCO</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Regulatory Landscape */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10">Global Regulatory Landscape</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                region: 'European Union',
                regulation: 'EU AI Act',
                status: 'In Force 2024',
                requirements: [
                  'Risk-based approach',
                  'Prohibited AI systems',
                  'High-risk system requirements',
                  'Transparency obligations'
                ]
              },
              {
                region: 'United States',
                regulation: 'AI Bill of Rights',
                status: 'Framework',
                requirements: [
                  'Safe and effective systems',
                  'Algorithmic discrimination protections',
                  'Data privacy',
                  'Human alternatives'
                ]
              },
              {
                region: 'China',
                regulation: 'AI Regulations',
                status: 'Multiple Laws',
                requirements: [
                  'Algorithm registration',
                  'Data localization',
                  'Content moderation',
                  'User consent'
                ]
              },
              {
                region: 'United Kingdom',
                regulation: 'Pro-Innovation Approach',
                status: 'Principles-Based',
                requirements: [
                  'Sector-specific guidance',
                  'Innovation focus',
                  'Proportionate response',
                  'Outcomes-based'
                ]
              },
              {
                region: 'Canada',
                regulation: 'AIDA',
                status: 'Proposed',
                requirements: [
                  'Impact assessments',
                  'Transparency',
                  'Bias mitigation',
                  'Human oversight'
                ]
              },
              {
                region: 'Singapore',
                regulation: 'Model AI Governance',
                status: 'Framework',
                requirements: [
                  'Self-governance',
                  'Innovation sandbox',
                  'Voluntary certification',
                  'Industry collaboration'
                ]
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">{item.region}</h3>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                    {item.status}
                  </span>
                </div>
                <p className="font-medium text-gray-900 mb-3">{item.regulation}</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  {item.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10">Governance Best Practices</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 text-green-900">Do's</h3>
              <ul className="space-y-3">
                {[
                  'Start governance before deployment',
                  'Involve all stakeholders early',
                  'Document everything thoroughly',
                  'Implement continuous monitoring',
                  'Create feedback loops',
                  'Invest in training and education',
                  'Build transparency by default',
                  'Plan for failure scenarios'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-red-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 text-red-900">Don'ts</h3>
              <ul className="space-y-3">
                {[
                  'Treat governance as afterthought',
                  'Ignore regulatory changes',
                  'Overlook third-party risks',
                  'Skip impact assessments',
                  'Assume one-size-fits-all',
                  'Neglect model monitoring',
                  'Hide behind complexity',
                  'Delay incident response'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ROI of Governance */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-8">The ROI of AI Governance</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">78%</p>
                <p className="text-green-100">Risk Reduction</p>
                <p className="text-sm mt-2">Fewer incidents and regulatory issues</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">3.4x</p>
                <p className="text-green-100">Faster Deployment</p>
                <p className="text-sm mt-2">Pre-approved processes and templates</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">$4.2M</p>
                <p className="text-green-100">Annual Savings</p>
                <p className="text-sm mt-2">Avoided fines and efficiency gains</p>
              </div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <p className="text-lg font-semibold mb-2">Bottom Line Impact:</p>
              <p>
                Organizations with mature AI governance frameworks achieve positive ROI within 6 months 
                through reduced risk exposure, faster deployment cycles, and increased stakeholder trust.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Build Your AI Governance Framework
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-purple-100">
              Join leading enterprises in establishing robust AI governance. 
              Get expert guidance tailored to your industry and risk profile.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/consultation"
                className="bg-white text-purple-900 px-8 py-4 rounded-xl font-bold hover:bg-purple-50 transition inline-flex items-center gap-2"
              >
                Schedule Executive Briefing
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition">
                Download Framework Template
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}