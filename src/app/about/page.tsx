'use client';

import Link from 'next/link';
import { Award, Users, Target, Lightbulb, Globe, ArrowRight, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              About DataTranquil
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From Oracle BI implementations to Agentic AI innovation — we bring 36,000+ hours 
              of enterprise technology experience to every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Story</h2>
          
          <div className="prose prose-lg max-w-none text-slate-600">
            <p>
              DataTranquil was born from a simple observation: enterprises need partners who 
              understand both where they've been and where they're going. With decades of 
              experience implementing Oracle BI, Informatica, and enterprise data platforms, 
              we've witnessed every phase of the data revolution.
            </p>
            
            <p>
              Our journey spans from building data warehouses at Wind River to implementing 
              cloud analytics at Sunrun, from Oracle EBS transformations at Cree to AI-powered 
              solutions for Fortune 500 companies. This deep enterprise DNA sets us apart in 
              the AI consulting landscape.
            </p>
            
            <p>
              Today, we're pioneering the next frontier: Agentic AI. We're not just consultants 
              who read about AI in whitepapers — we're practitioners who've built real systems 
              that process 500M+ data points, reduce costs by 40%, and transform how businesses 
              operate.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Guided by experience, driven by innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-lg text-slate-600">
                To bridge the gap between enterprise legacy and AI future, helping organizations 
                transform with confidence. We make AI accessible, practical, and profitable for 
                enterprises ready to lead their industries.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Values</h3>
              <ul className="space-y-3 text-lg text-slate-600">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Practical Innovation:</span>
                  Real solutions, not PowerPoint promises
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Deep Expertise:</span>
                  36,000+ hours of hands-on experience
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Client Success:</span>
                  Your wins are our wins, period
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Ethical AI:</span>
                  Building responsible, transparent systems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Enterprise veterans with Silicon Valley innovation mindset
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Chief Executive Officer</h3>
              <p className="text-slate-600 mb-4">
                20+ years enterprise technology leadership. Former roles at Sunrun, Wind River, 
                and Cree. Oracle BI certified expert.
              </p>
              <div className="flex justify-center space-x-4">
                <Link href="#" className="text-slate-400 hover:text-slate-600">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Chief Technology Officer</h3>
              <p className="text-slate-600 mb-4">
                AI/ML expert with 15+ years in data platforms. Led AI initiatives at Fortune 500 
                companies. Stanford AI Lab collaborator.
              </p>
              <div className="flex justify-center space-x-4">
                <Link href="#" className="text-slate-400 hover:text-slate-600">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">VP of Client Success</h3>
              <p className="text-slate-600 mb-4">
                Former Deloitte consultant. Managed 50+ enterprise transformations. Expert in 
                change management and AI adoption.
              </p>
              <div className="flex justify-center space-x-4">
                <Link href="#" className="text-slate-400 hover:text-slate-600">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Extended Team of Experts
            </h3>
            <p className="text-lg text-slate-600 mb-6 max-w-3xl mx-auto">
              We maintain a network of 50+ specialized consultants, data scientists, and 
              engineers. Each project gets the exact expertise it needs, when it needs it.
            </p>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-slate-600">AI/ML Engineers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">20+</div>
                <div className="text-slate-600">Data Engineers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-slate-600">Domain Experts</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">8+</div>
                <div className="text-slate-600">Project Managers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Global Reach, Local Expertise</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Headquartered in San Francisco, serving enterprises worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-20 h-20 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Globe className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Silicon Valley Innovation, Enterprise Scale
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                Our San Francisco headquarters keeps us at the forefront of AI innovation, 
                while our global team ensures 24/7 support and local market understanding.
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Primary offices in San Francisco Bay Area
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Remote team across 15+ countries
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  24/7 support for global enterprises
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  On-site engagements worldwide
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h4 className="text-xl font-bold text-slate-900 mb-6">Key Markets Served</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">North America</span>
                  <div className="w-32 bg-slate-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '65%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Europe</span>
                  <div className="w-32 bg-slate-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '20%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Asia Pacific</span>
                  <div className="w-32 bg-slate-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '10%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Middle East</span>
                  <div className="w-32 bg-slate-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '5%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Recognition & Certifications</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Industry recognition for excellence in AI and data transformation
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-12 w-12 text-orange-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Oracle Certified</h4>
              <p className="text-sm text-slate-600">OBIEE 10g Professional</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-12 w-12 text-blue-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Google Cloud Partner</h4>
              <p className="text-sm text-slate-600">AI/ML Specialization</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-12 w-12 text-purple-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">AWS Partner</h4>
              <p className="text-sm text-slate-600">Machine Learning Competency</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-12 w-12 text-green-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">ISO 27001</h4>
              <p className="text-sm text-slate-600">Information Security</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work with Enterprise AI Experts?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our experience can accelerate your AI journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-bold"
            >
              Schedule a Consultation
            </Link>
            <Link 
              href="/case-studies"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-bold"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}