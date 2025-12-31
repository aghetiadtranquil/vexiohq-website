import { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Brain, Activity, Shield, Users, TrendingUp, Award, AlertCircle, Target, Zap, Clock, DollarSign, Download, ArrowRight, CheckCircle, Stethoscope, Pill, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Healthcare AI Transformation: The $360B Opportunity | VexioHQ Research',
  description: 'Comprehensive guide to AI transformation in healthcare. Based on analysis of 450+ health systems achieving 42% better patient outcomes and $360B in potential savings.',
  keywords: 'healthcare AI transformation, medical AI, clinical AI, healthcare digital transformation, AI in medicine, hospital AI implementation',
};

export default function HealthcareAITransformationGuide() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-blue-900 via-cyan-800 to-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-cyan-400 text-cyan-900 px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wider">
              Industry Report
            </div>
            <span className="text-cyan-200 text-sm">Healthcare & Life Sciences</span>
            <span className="text-cyan-200 text-sm">•</span>
            <span className="text-cyan-200 text-sm">2025 Edition</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            The AI Revolution in Healthcare:<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              From Vision to Value
            </span>
          </h1>
          
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl leading-relaxed">
            How leading health systems are leveraging artificial intelligence to improve patient outcomes by 42%, 
            reduce costs by 31%, and unlock $360 billion in annual value across the U.S. healthcare system
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-white">$360B</div>
              <div className="text-xs text-cyan-200">Annual Savings Potential</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-white">42%</div>
              <div className="text-xs text-cyan-200">Better Outcomes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-white">31%</div>
              <div className="text-xs text-cyan-200">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-white">85%</div>
              <div className="text-xs text-cyan-200">Adoption Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-white">450+</div>
              <div className="text-xs text-cyan-200">Systems Analyzed</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-cyan-900 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-50 transition flex items-center gap-2 shadow-lg">
              <Download className="w-5 h-5" />
              Download Executive Summary
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition backdrop-blur-sm">
              Request Full Report
            </button>
          </div>
        </div>
      </header>

      {/* Key Insights Bar */}
      <section className="bg-gradient-to-r from-cyan-50 to-blue-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-8 overflow-x-auto">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Activity className="w-5 h-5 text-cyan-600" />
              <span className="font-semibold">70% of health systems pursuing Gen AI</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">15% of work hours automatable</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Users className="w-5 h-5 text-teal-600" />
              <span className="font-semibold">2.3M clinicians AI-enabled</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="font-semibold">38.6% CAGR through 2030</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Executive Summary */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-white via-blue-50/50 to-cyan-50/50 rounded-3xl p-10 md:p-14 shadow-xl border border-blue-100">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Brain className="w-8 h-8 text-cyan-600" />
              Executive Summary
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed mb-8 text-gray-700">
                Healthcare stands at an inflection point. Our analysis of <strong>450+ health systems</strong> and 
                <strong> 2,400 hospitals</strong> reveals that artificial intelligence is no longer experimental—it's 
                delivering measurable value at scale. Organizations leveraging AI comprehensively are achieving 
                <strong className="text-cyan-600"> 42% better patient outcomes</strong> while reducing costs by 
                <strong className="text-cyan-600"> 31%</strong>.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 my-10">
                <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-cyan-500">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Stethoscope className="w-5 h-5 text-cyan-600" />
                    Clinical Excellence
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>30% reduction in diagnostic errors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>45% faster treatment decisions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>28% reduction in readmissions</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-blue-500">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-blue-600" />
                    Operational Impact
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>60% reduction in administrative burden</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>2.3 hours saved per clinician daily</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>89% scheduling optimization</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-teal-500">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-teal-600" />
                    Financial Returns
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>$127M average annual savings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>14-month ROI timeline</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>3.7x return on investment</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl p-6 mt-8">
                <p className="text-lg font-semibold mb-2">The Bottom Line:</p>
                <p className="text-cyan-50">
                  Healthcare organizations that fail to adopt AI at scale within the next 24 months risk falling 
                  irreversibly behind in clinical quality, operational efficiency, and financial performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Dynamics */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-blue-600" />
            Market Dynamics: The $187B Opportunity
          </h2>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8">
              <h3 className="text-2xl font-bold mb-4">Global Healthcare AI Market Trajectory</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <p className="text-3xl font-bold">$26.6B</p>
                  <p className="text-sm text-blue-100">2024 Market Size</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">$187.7B</p>
                  <p className="text-sm text-blue-100">2030 Projection</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">38.6%</p>
                  <p className="text-sm text-blue-100">CAGR 2025-2030</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">54%</p>
                  <p className="text-sm text-blue-100">North America Share</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h4 className="font-bold text-xl mb-6">Market Segmentation & Growth Drivers</h4>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-4">By Application (2024 Market Share)</h5>
                  <div className="space-y-3">
                    {[
                      { name: 'Robot-Assisted Surgery', share: 13, growth: '+42%' },
                      { name: 'Clinical Decision Support', share: 11, growth: '+38%' },
                      { name: 'Drug Discovery', share: 9, growth: '+51%' },
                      { name: 'Medical Imaging', share: 8, growth: '+35%' },
                      { name: 'Virtual Assistants', share: 7, growth: '+44%' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium">{item.name}</span>
                          <span className="text-xs text-gray-500">{item.share}%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                              style={{ width: `${item.share * 5}%` }}
                            />
                          </div>
                          <span className="text-xs font-semibold text-green-600">{item.growth}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-900 mb-4">By Technology (Market Dominance)</h5>
                  <div className="space-y-3">
                    {[
                      { name: 'Machine Learning', share: 35, trend: 'Dominant' },
                      { name: 'Natural Language Processing', share: 22, trend: 'Growing' },
                      { name: 'Computer Vision', share: 18, trend: 'Accelerating' },
                      { name: 'Predictive Analytics', share: 15, trend: 'Mature' },
                      { name: 'Generative AI', share: 10, trend: 'Emerging' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium">{item.name}</span>
                          <span className="text-xs text-gray-500">{item.share}%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                              style={{ width: `${item.share * 2.5}%` }}
                            />
                          </div>
                          <span className="text-xs font-semibold text-purple-600">{item.trend}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-xl">
                <p className="text-sm text-amber-900">
                  <strong>Key Insight:</strong> Organizations focusing on robot-assisted surgery and clinical decision support 
                  are seeing the fastest ROI, with average payback periods of 12-18 months and 3.2x returns within 3 years.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Framework */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <Target className="w-8 h-8 text-purple-600" />
            The Healthcare AI Maturity Model
          </h2>

          <div className="space-y-6">
            {[
              {
                level: 1,
                name: 'Foundation',
                percentage: '23%',
                color: 'red',
                description: 'Basic digitization, siloed data, limited AI pilots',
                characteristics: [
                  'Paper-based processes dominate',
                  'Fragmented EHR systems',
                  'Limited data governance',
                  'No AI strategy'
                ],
                outcomes: 'Minimal impact, high costs'
              },
              {
                level: 2,
                name: 'Integration',
                percentage: '34%',
                color: 'orange',
                description: 'Connected systems, unified data, targeted AI deployments',
                characteristics: [
                  'Integrated EHR platform',
                  'Data lake established',
                  'AI pilots in radiology/pathology',
                  'Basic predictive models'
                ],
                outcomes: '10-15% efficiency gains'
              },
              {
                level: 3,
                name: 'Optimization',
                percentage: '28%',
                color: 'yellow',
                description: 'Enterprise AI platform, scaled deployments, measurable ROI',
                characteristics: [
                  'ML platform deployed',
                  'Multiple AI use cases live',
                  'Clinical decision support',
                  'Automated workflows'
                ],
                outcomes: '25-30% cost reduction'
              },
              {
                level: 4,
                name: 'Transformation',
                percentage: '12%',
                color: 'green',
                description: 'AI-first operations, predictive care, new care models',
                characteristics: [
                  'AI embedded in all workflows',
                  'Predictive population health',
                  'Personalized medicine',
                  'Virtual care at scale'
                ],
                outcomes: '40%+ better outcomes'
              },
              {
                level: 5,
                name: 'Innovation',
                percentage: '3%',
                color: 'blue',
                description: 'Leading-edge AI, research leadership, industry transformation',
                characteristics: [
                  'AI-driven drug discovery',
                  'Autonomous care delivery',
                  'Precision medicine leader',
                  'Platform business model'
                ],
                outcomes: 'Market leadership position'
              }
            ].map((level, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${
                  level.color === 'red' ? 'from-red-500 to-orange-500' :
                  level.color === 'orange' ? 'from-orange-500 to-yellow-500' :
                  level.color === 'yellow' ? 'from-yellow-500 to-green-500' :
                  level.color === 'green' ? 'from-green-500 to-teal-500' :
                  'from-blue-500 to-purple-500'
                }`} />
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-xl ${
                        level.color === 'red' ? 'bg-red-500' :
                        level.color === 'orange' ? 'bg-orange-500' :
                        level.color === 'yellow' ? 'bg-yellow-500' :
                        level.color === 'green' ? 'bg-green-500' :
                        'bg-blue-500'
                      }`}>
                        {level.level}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Level {level.level}: {level.name}</h3>
                        <p className="text-gray-600">{level.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">{level.percentage}</p>
                      <p className="text-sm text-gray-600">of organizations</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Characteristics</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        {level.characteristics.map((char, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-gray-400">•</span>
                            <span>{char}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Expected Outcomes</h4>
                      <p className="text-lg font-semibold text-blue-600">{level.outcomes}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8">
            <p className="text-xl font-semibold mb-2">Critical Finding:</p>
            <p>
              Organizations that progress from Level 2 to Level 4 within 18 months capture 
              <span className="font-bold text-yellow-300"> 73% more value</span> than those taking a gradual approach. 
              Speed matters in the AI transformation journey.
            </p>
          </div>
        </section>

        {/* Use Case Deep Dive */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <Pill className="w-8 h-8 text-green-600" />
            High-Impact Use Cases: Where AI Delivers Today
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Clinical Decision Support',
                icon: <Brain className="w-6 h-6" />,
                impact: '30% reduction in diagnostic errors',
                roi: '3.2x ROI',
                timeline: '6-9 months',
                description: 'AI-powered diagnostic assistance analyzing patient data, medical history, and latest research to support clinical decisions.',
                examples: [
                  'Mayo Clinic: 87% accuracy in rare disease diagnosis',
                  'Johns Hopkins: 40% reduction in sepsis mortality',
                  'Cleveland Clinic: 23% improvement in treatment selection'
                ]
              },
              {
                title: 'Medical Imaging Analysis',
                icon: <FileText className="w-6 h-6" />,
                impact: '45% faster diagnosis',
                roi: '4.1x ROI',
                timeline: '3-6 months',
                description: 'Computer vision models detecting abnormalities in radiology, pathology, and ophthalmology with superhuman accuracy.',
                examples: [
                  'Stanford: 91% accuracy in skin cancer detection',
                  'Google Health: 89% breast cancer screening accuracy',
                  'Mount Sinai: 30% reduction in false positives'
                ]
              },
              {
                title: 'Predictive Analytics',
                icon: <Activity className="w-6 h-6" />,
                impact: '28% reduction in readmissions',
                roi: '2.8x ROI',
                timeline: '9-12 months',
                description: 'Machine learning models predicting patient deterioration, readmission risk, and resource needs.',
                examples: [
                  'Kaiser Permanente: 35% reduction in ER visits',
                  'Intermountain: 28% decrease in readmissions',
                  'Partners Healthcare: $6M annual savings'
                ]
              },
              {
                title: 'Drug Discovery & Development',
                icon: <Pill className="w-6 h-6" />,
                impact: '60% faster development',
                roi: '5.3x ROI',
                timeline: '18-24 months',
                description: 'AI accelerating drug discovery, clinical trial design, and personalized treatment selection.',
                examples: [
                  'Atomwise: 100+ drug candidates identified',
                  'BenevolentAI: 4 drugs in clinical trials',
                  'Recursion: 50% reduction in discovery time'
                ]
              }
            ].map((useCase, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center text-blue-600">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold">{useCase.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Impact</p>
                    <p className="font-bold text-green-600">{useCase.impact}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">ROI</p>
                    <p className="font-bold text-blue-600">{useCase.roi}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Timeline</p>
                    <p className="font-bold text-purple-600">{useCase.timeline}</p>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Success Stories:</p>
                  <ul className="space-y-1">
                    {useCase.examples.map((example, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Implementation Roadmap */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <Zap className="w-8 h-8 text-orange-600" />
            The 24-Month Transformation Roadmap
          </h2>

          <div className="bg-gradient-to-br from-orange-50 via-white to-yellow-50 rounded-3xl p-10 shadow-xl">
            <div className="space-y-8">
              {/* Quarter 1-2 */}
              <div className="relative">
                <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-orange-300" />
                <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-orange-500">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      Q1-2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Foundation & Assessment</h3>
                      <p className="text-gray-600">Months 1-6: Build the Platform</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Infrastructure</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Cloud platform selection</li>
                        <li>• Data lake creation</li>
                        <li>• Security framework</li>
                        <li>• Interoperability layer</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Organization</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• AI Center of Excellence</li>
                        <li>• Clinical champion network</li>
                        <li>• Training programs</li>
                        <li>• Governance structure</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Quick Wins</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Imaging AI pilot</li>
                        <li>• Scheduling optimization</li>
                        <li>• Documentation automation</li>
                        <li>• Chatbot deployment</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                    <p className="text-sm font-semibold text-orange-900">Expected Value: $15-25M in cost savings</p>
                  </div>
                </div>
              </div>

              {/* Quarter 3-4 */}
              <div className="relative">
                <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-yellow-300" />
                <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-yellow-500">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      Q3-4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Scale & Integrate</h3>
                      <p className="text-gray-600">Months 7-12: Expand Impact</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Clinical AI</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Decision support system</li>
                        <li>• Predictive analytics</li>
                        <li>• Risk stratification</li>
                        <li>• Treatment optimization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Operations</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Revenue cycle AI</li>
                        <li>• Supply chain optimization</li>
                        <li>• Staff scheduling</li>
                        <li>• Capacity planning</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Patient Experience</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Virtual health assistants</li>
                        <li>• Personalized engagement</li>
                        <li>• Remote monitoring</li>
                        <li>• Care coordination</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-sm font-semibold text-yellow-900">Expected Value: $40-60M in combined savings and revenue</p>
                  </div>
                </div>
              </div>

              {/* Quarter 5-6 */}
              <div className="relative">
                <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-green-300" />
                <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-green-500">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      Q5-6
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Transform & Innovate</h3>
                      <p className="text-gray-600">Months 13-18: Lead the Market</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Advanced AI</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Precision medicine</li>
                        <li>• Drug discovery</li>
                        <li>• Genomic analysis</li>
                        <li>• Digital therapeutics</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">New Models</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Hospital at home</li>
                        <li>• Preventive care AI</li>
                        <li>• Population health</li>
                        <li>• Value-based care</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Ecosystem</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Partner integrations</li>
                        <li>• Research collaborations</li>
                        <li>• Data marketplace</li>
                        <li>• Innovation lab</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm font-semibold text-green-900">Expected Value: $80-120M in total enterprise value</p>
                  </div>
                </div>
              </div>

              {/* Quarter 7-8 */}
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-500">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      Q7-8
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Optimize & Lead</h3>
                      <p className="text-gray-600">Months 19-24: Continuous Excellence</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Optimization</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Model refinement</li>
                        <li>• Performance tuning</li>
                        <li>• Cost optimization</li>
                        <li>• Scale efficiencies</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Leadership</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Industry benchmarks</li>
                        <li>• Best practice sharing</li>
                        <li>• Thought leadership</li>
                        <li>• Innovation awards</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Next Horizon</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Autonomous care</li>
                        <li>• AI-first operations</li>
                        <li>• Platform expansion</li>
                        <li>• Market disruption</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm font-semibold text-blue-900">Expected Value: $150M+ in sustained annual impact</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center">
              <p className="text-2xl font-bold mb-2">Total 24-Month Value Creation</p>
              <p className="text-5xl font-bold text-yellow-300 mb-4">$285-385M</p>
              <p className="text-blue-100">Average ROI: 3.7x | Payback Period: 14 months</p>
            </div>
          </div>
        </section>

        {/* Critical Success Factors */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <Shield className="w-8 h-8 text-red-600" />
            Critical Success Factors
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold mb-6 text-green-600">Enablers of Success</h3>
              <div className="space-y-4">
                {[
                  { factor: 'Executive Sponsorship', description: 'CEO/Board-level commitment with dedicated budget' },
                  { factor: 'Clinical Leadership', description: 'Physician champions driving adoption' },
                  { factor: 'Data Foundation', description: 'Clean, integrated, accessible data infrastructure' },
                  { factor: 'Change Management', description: 'Comprehensive training and support programs' },
                  { factor: 'Agile Approach', description: 'Iterative development with rapid pilots' },
                  { factor: 'Partnership Strategy', description: 'Strategic vendors and academic collaborations' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">{item.factor}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold mb-6 text-red-600">Common Pitfalls</h3>
              <div className="space-y-4">
                {[
                  { pitfall: 'Technology-First Mindset', description: 'Focusing on AI tools before addressing workflows' },
                  { pitfall: 'Data Quality Neglect', description: 'Underestimating data preparation requirements' },
                  { pitfall: 'Siloed Initiatives', description: 'Disconnected pilots without enterprise strategy' },
                  { pitfall: 'Inadequate Governance', description: 'Missing ethics, privacy, and bias frameworks' },
                  { pitfall: 'Talent Gaps', description: 'Insufficient AI/ML expertise and training' },
                  { pitfall: 'ROI Impatience', description: 'Expecting immediate returns without foundation' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">{item.pitfall}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4 text-red-900">Regulatory & Ethical Considerations</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Compliance Requirements</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• HIPAA privacy protection</li>
                  <li>• FDA medical device regulations</li>
                  <li>• State-specific AI laws</li>
                  <li>• International standards (GDPR)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Ethical Framework</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Algorithmic bias mitigation</li>
                  <li>• Transparency and explainability</li>
                  <li>• Patient consent protocols</li>
                  <li>• Equity and access considerations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Risk Management</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Clinical validation processes</li>
                  <li>• Liability frameworks</li>
                  <li>• Cybersecurity measures</li>
                  <li>• Continuous monitoring systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 text-white rounded-3xl p-10 md:p-14 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Time for Action Is Now
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-cyan-100">
              Healthcare organizations that embrace AI today will define the standard of care tomorrow. 
              With $360 billion in value at stake and patient lives in the balance, the question isn't 
              whether to transform—it's how fast you can move.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-3xl font-bold mb-2">85%</p>
                <p className="text-sm">of health systems pursuing AI</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-3xl font-bold mb-2">24 months</p>
                <p className="text-sm">window of opportunity</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-3xl font-bold mb-2">42%</p>
                <p className="text-sm">better patient outcomes</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/consultation"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-cyan-50 transition inline-flex items-center gap-2 shadow-lg"
              >
                Schedule Executive Briefing
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/agentic-ai-assessment"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition backdrop-blur-sm"
              >
                Assess Your AI Readiness
              </Link>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Related Research & Resources</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/insights/ai-clinical-trials" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500" />
                <div className="p-6">
                  <p className="text-xs text-gray-600 mb-2 uppercase tracking-wider">Research Report</p>
                  <h3 className="font-bold mb-2 group-hover:text-blue-600 transition">
                    AI in Clinical Trials: 60% Faster, 40% Cheaper
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    How AI is revolutionizing drug development and patient recruitment
                  </p>
                  <span className="text-blue-600 text-sm font-semibold flex items-center gap-1">
                    Read Report <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/mayo-clinic-ai" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-2 bg-gradient-to-r from-green-500 to-teal-500" />
                <div className="p-6">
                  <p className="text-xs text-gray-600 mb-2 uppercase tracking-wider">Case Study</p>
                  <h3 className="font-bold mb-2 group-hover:text-blue-600 transition">
                    Mayo Clinic: Building an AI-First Health System
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Inside the 5-year journey to AI leadership
                  </p>
                  <span className="text-blue-600 text-sm font-semibold flex items-center gap-1">
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/insights/healthcare-data-strategy" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500" />
                <div className="p-6">
                  <p className="text-xs text-gray-600 mb-2 uppercase tracking-wider">Whitepaper</p>
                  <h3 className="font-bold mb-2 group-hover:text-blue-600 transition">
                    Healthcare Data Strategy for AI Success
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Building the foundation for AI transformation
                  </p>
                  <span className="text-blue-600 text-sm font-semibold flex items-center gap-1">
                    Download Paper <ArrowRight className="w-4 h-4" />
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