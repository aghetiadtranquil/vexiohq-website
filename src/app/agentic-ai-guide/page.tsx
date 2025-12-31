import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Download, Clock, ArrowRight, CheckCircle, Lightbulb, Target, Layers, Brain, Zap, Shield, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Complete Guide to Agentic AI Systems | VexioHQ',
  description: 'Comprehensive guide to understanding, implementing, and scaling agentic AI systems. Learn about autonomous agents, multi-agent systems, and enterprise AI orchestration.',
  keywords: 'agentic AI, autonomous agents, AI agents, multi-agent systems, AI orchestration, enterprise AI, agent framework',
};

export default function AgenticAIGuide() {
  const tableOfContents = [
    { id: 'introduction', title: '1. Introduction to Agentic AI', icon: <Brain className="w-4 h-4" /> },
    { id: 'fundamentals', title: '2. Core Fundamentals', icon: <Layers className="w-4 h-4" /> },
    { id: 'architecture', title: '3. System Architecture', icon: <Target className="w-4 h-4" /> },
    { id: 'implementation', title: '4. Implementation Strategy', icon: <Zap className="w-4 h-4" /> },
    { id: 'usecases', title: '5. Enterprise Use Cases', icon: <Lightbulb className="w-4 h-4" /> },
    { id: 'bestpractices', title: '6. Best Practices', icon: <Shield className="w-4 h-4" /> },
    { id: 'future', title: '7. Future of Agentic AI', icon: <TrendingUp className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex items-center gap-2 text-blue-200 mb-4">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm font-medium">COMPREHENSIVE GUIDE</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            The Complete Guide to Agentic AI Systems
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl">
            Everything you need to know about autonomous AI agents, multi-agent systems, and enterprise-scale AI orchestration
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download PDF Version
            </button>
            <div className="flex items-center gap-2 text-blue-200">
              <Clock className="w-5 h-5" />
              <span>25 min read</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents - Sticky Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Table of Contents</h3>
              <nav className="space-y-2">
                {tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-3 text-gray-600 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-white transition"
                  >
                    <span className="text-blue-500">{item.icon}</span>
                    <span className="text-sm">{item.title}</span>
                  </a>
                ))}
              </nav>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link 
                  href="/agentic-ai-assessment"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Take Assessment
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 prose prose-lg max-w-none">
            {/* Executive Summary */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-12 not-prose">
              <h2 className="text-lg font-bold text-blue-900 mb-3">Executive Summary</h2>
              <p className="text-blue-800 mb-4">
                Agentic AI represents the next frontier in artificial intelligence, where autonomous agents can perceive, 
                reason, and act independently to achieve complex goals. This guide provides a comprehensive framework 
                for understanding and implementing agentic AI systems in enterprise environments.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">87%</div>
                  <div className="text-sm text-gray-600">Efficiency Gain</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">3.2x</div>
                  <div className="text-sm text-gray-600">ROI Average</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">45%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
              </div>
            </div>

            {/* Section 1: Introduction */}
            <section id="introduction" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Brain className="w-8 h-8 text-blue-600" />
                1. Introduction to Agentic AI
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">What is Agentic AI?</h3>
              <p className="text-gray-700 mb-4">
                Agentic AI refers to artificial intelligence systems that exhibit agency—the ability to act autonomously 
                in pursuit of goals. Unlike traditional AI that responds to specific prompts, agentic AI systems can:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Independently identify and pursue objectives</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Adapt strategies based on environmental feedback</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Collaborate with other agents and humans</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Learn and improve from experience</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">The Evolution from Reactive to Agentic</h3>
              <div className="bg-gray-50 rounded-xl p-6 mb-6 not-prose">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-sm font-semibold text-gray-600">Stage 1</div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">Rule-Based Systems</div>
                      <div className="text-sm text-gray-600">If-then logic, deterministic responses</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-sm font-semibold text-gray-600">Stage 2</div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">Machine Learning</div>
                      <div className="text-sm text-gray-600">Pattern recognition, predictive models</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-sm font-semibold text-gray-600">Stage 3</div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">Generative AI</div>
                      <div className="text-sm text-gray-600">Content creation, conversational interfaces</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-blue-100 rounded-lg">
                    <div className="w-24 text-sm font-semibold text-blue-700">Stage 4</div>
                    <div className="flex-1">
                      <div className="font-semibold text-blue-900">Agentic AI</div>
                      <div className="text-sm text-blue-700">Autonomous goal pursuit, multi-agent orchestration</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Core Fundamentals */}
            <section id="fundamentals" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Layers className="w-8 h-8 text-blue-600" />
                2. Core Fundamentals
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Key Components of Agentic Systems</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 not-prose">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Perception Module</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Enables agents to understand and interpret their environment through various data sources.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Sensor integration</li>
                    <li>• Data preprocessing</li>
                    <li>• Context awareness</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Reasoning Engine</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Processes information and makes decisions based on goals and constraints.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Goal planning</li>
                    <li>• Decision trees</li>
                    <li>• Constraint solving</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Action Executor</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Implements decisions through various interfaces and APIs.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• API orchestration</li>
                    <li>• Tool usage</li>
                    <li>• Response generation</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Memory System</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Stores and retrieves information for learning and context.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Short-term memory</li>
                    <li>• Long-term storage</li>
                    <li>• Knowledge graphs</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Agent Communication Protocols</h3>
              <p className="text-gray-700 mb-4">
                Multi-agent systems require sophisticated communication protocols to coordinate effectively:
              </p>
              
              <div className="bg-gray-50 rounded-xl p-6 mb-6 not-prose">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-2 font-semibold text-gray-900">Protocol</th>
                      <th className="text-left py-2 font-semibold text-gray-900">Use Case</th>
                      <th className="text-left py-2 font-semibold text-gray-900">Complexity</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-800">Direct Messaging</td>
                      <td className="py-3 text-gray-600">Simple agent-to-agent communication</td>
                      <td className="py-3"><span className="text-green-600">Low</span></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-800">Publish-Subscribe</td>
                      <td className="py-3 text-gray-600">Event-driven coordination</td>
                      <td className="py-3"><span className="text-yellow-600">Medium</span></td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 text-gray-800">Blackboard Systems</td>
                      <td className="py-3 text-gray-600">Shared knowledge workspace</td>
                      <td className="py-3"><span className="text-yellow-600">Medium</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 text-gray-800">Contract Net</td>
                      <td className="py-3 text-gray-600">Task delegation and bidding</td>
                      <td className="py-3"><span className="text-red-600">High</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: System Architecture */}
            <section id="architecture" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-blue-600" />
                3. System Architecture
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Architectural Patterns</h3>
              
              <div className="space-y-6 mb-8">
                <div className="bg-white border-l-4 border-blue-500 p-6 rounded-r-lg not-prose">
                  <h4 className="font-bold text-gray-900 mb-2">Hierarchical Architecture</h4>
                  <p className="text-gray-600 mb-3">
                    Agents organized in layers with clear command chains. Suitable for well-defined processes with clear authority structures.
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-gray-500">Best for:</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded">Enterprise workflows</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded">Compliance-heavy domains</span>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-green-500 p-6 rounded-r-lg not-prose">
                  <h4 className="font-bold text-gray-900 mb-2">Peer-to-Peer Architecture</h4>
                  <p className="text-gray-600 mb-3">
                    Decentralized agents with equal authority, negotiating and collaborating dynamically.
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-gray-500">Best for:</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded">Creative tasks</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded">Research & exploration</span>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-purple-500 p-6 rounded-r-lg not-prose">
                  <h4 className="font-bold text-gray-900 mb-2">Hybrid Architecture</h4>
                  <p className="text-gray-600 mb-3">
                    Combines hierarchical control with peer collaboration for maximum flexibility.
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-gray-500">Best for:</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded">Complex enterprises</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded">Adaptive systems</span>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Infrastructure Requirements</h3>
              
              <div className="bg-gray-50 rounded-xl p-6 mb-6 not-prose">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Compute Resources</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        GPU clusters for model inference
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Distributed processing capabilities
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Auto-scaling infrastructure
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Data Infrastructure</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Vector databases for embeddings
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Real-time streaming pipelines
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Knowledge graph systems
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Implementation Strategy */}
            <section id="implementation" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-blue-600" />
                4. Implementation Strategy
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Phased Implementation Approach</h3>
              
              <div className="space-y-4 mb-8">
                <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border border-blue-200 not-prose">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2">Phase 1: Foundation (Months 1-3)</h4>
                      <p className="text-gray-600 text-sm mb-3">Establish core infrastructure and single-agent capabilities</p>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>• Infrastructure setup</div>
                        <div>• Data pipeline creation</div>
                        <div>• Single agent POC</div>
                        <div>• Team training</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-xl border border-green-200 not-prose">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2">Phase 2: Expansion (Months 4-6)</h4>
                      <p className="text-gray-600 text-sm mb-3">Scale to multi-agent systems and department-wide deployment</p>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>• Multi-agent coordination</div>
                        <div>• Process automation</div>
                        <div>• Integration with systems</div>
                        <div>• Performance optimization</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-xl border border-purple-200 not-prose">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2">Phase 3: Enterprise Scale (Months 7-12)</h4>
                      <p className="text-gray-600 text-sm mb-3">Full enterprise deployment with advanced capabilities</p>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>• Enterprise orchestration</div>
                        <div>• Cross-functional agents</div>
                        <div>• Continuous learning</div>
                        <div>• ROI measurement</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Technology Stack Recommendations</h3>
              
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6 not-prose">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-6 py-3 font-semibold text-gray-900">Layer</th>
                      <th className="text-left px-6 py-3 font-semibold text-gray-900">Technologies</th>
                      <th className="text-left px-6 py-3 font-semibold text-gray-900">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Foundation Models</td>
                      <td className="px-6 py-4 text-gray-600">GPT-4, Claude, Llama 3</td>
                      <td className="px-6 py-4 text-gray-600">Core reasoning capabilities</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Orchestration</td>
                      <td className="px-6 py-4 text-gray-600">LangChain, AutoGen, CrewAI</td>
                      <td className="px-6 py-4 text-gray-600">Agent coordination</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Vector Storage</td>
                      <td className="px-6 py-4 text-gray-600">Pinecone, Weaviate, Qdrant</td>
                      <td className="px-6 py-4 text-gray-600">Semantic memory</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Monitoring</td>
                      <td className="px-6 py-4 text-gray-600">Weights & Biases, LangSmith</td>
                      <td className="px-6 py-4 text-gray-600">Performance tracking</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: Use Cases */}
            <section id="usecases" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Lightbulb className="w-8 h-8 text-blue-600" />
                5. Enterprise Use Cases
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 not-prose">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold">CS</span>
                    </div>
                    <h4 className="font-bold text-gray-900">Customer Service Automation</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    Autonomous agents handling multi-channel customer inquiries with escalation capabilities.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Response Time:</span>
                      <span className="font-semibold text-green-600">↓ 85%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Satisfaction:</span>
                      <span className="font-semibold text-green-600">↑ 42%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Cost Savings:</span>
                      <span className="font-semibold text-green-600">$2.3M/year</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-bold">SC</span>
                    </div>
                    <h4 className="font-bold text-gray-900">Supply Chain Optimization</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    Multi-agent system coordinating inventory, logistics, and demand forecasting.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Inventory Costs:</span>
                      <span className="font-semibold text-green-600">↓ 31%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Delivery Time:</span>
                      <span className="font-semibold text-green-600">↓ 23%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Accuracy:</span>
                      <span className="font-semibold text-green-600">↑ 94%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 font-bold">IT</span>
                    </div>
                    <h4 className="font-bold text-gray-900">IT Operations Management</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    Autonomous monitoring, incident response, and system optimization agents.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">MTTR:</span>
                      <span className="font-semibold text-green-600">↓ 67%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Incidents:</span>
                      <span className="font-semibold text-green-600">↓ 45%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Automation:</span>
                      <span className="font-semibold text-green-600">78%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-orange-600 font-bold">HR</span>
                    </div>
                    <h4 className="font-bold text-gray-900">Human Resources</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    Recruitment, onboarding, and employee engagement through intelligent agents.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Time to Hire:</span>
                      <span className="font-semibold text-green-600">↓ 54%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Quality of Hire:</span>
                      <span className="font-semibold text-green-600">↑ 38%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">HR Efficiency:</span>
                      <span className="font-semibold text-green-600">↑ 3x</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Best Practices */}
            <section id="bestpractices" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-blue-600" />
                6. Best Practices
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Security & Governance</h3>
              
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6 not-prose">
                <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Critical Security Considerations
                </h4>
                <ul className="space-y-2 text-sm text-red-800">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">1.</span>
                    <span>Implement strict access controls and authentication for all agent interactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">2.</span>
                    <span>Establish clear data privacy boundaries and compliance frameworks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">3.</span>
                    <span>Regular security audits and penetration testing of agent systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">4.</span>
                    <span>Implement agent behavior monitoring and anomaly detection</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Performance Optimization</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 not-prose">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Response Time</h4>
                  <p className="text-blue-700 text-sm mb-2">Target: &lt;2 seconds</p>
                  <ul className="text-xs text-blue-600 space-y-1">
                    <li>• Cache frequent queries</li>
                    <li>• Optimize model selection</li>
                    <li>• Implement async processing</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Accuracy</h4>
                  <p className="text-green-700 text-sm mb-2">Target: &gt;95%</p>
                  <ul className="text-xs text-green-600 space-y-1">
                    <li>• Continuous training</li>
                    <li>• Human feedback loops</li>
                    <li>• A/B testing strategies</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Cost Efficiency</h4>
                  <p className="text-purple-700 text-sm mb-2">Target: 30% reduction</p>
                  <ul className="text-xs text-purple-600 space-y-1">
                    <li>• Smart model routing</li>
                    <li>• Batch processing</li>
                    <li>• Resource pooling</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Ethical Considerations</h3>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6 not-prose">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Transparency Requirements</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Clear AI disclosure to users
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Explainable decision processes
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Audit trails for all actions
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Bias Mitigation</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Diverse training datasets
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Regular bias testing
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Human oversight protocols
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Future */}
            <section id="future" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-blue-600" />
                7. Future of Agentic AI
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Emerging Trends</h3>
              
              <div className="space-y-4 mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl not-prose">
                  <h4 className="font-bold mb-2">🚀 Autonomous Business Units</h4>
                  <p className="text-blue-100 mb-3">
                    Entire business functions managed by coordinated agent swarms with minimal human oversight.
                  </p>
                  <div className="text-sm opacity-90">Timeline: 2025-2027</div>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-xl not-prose">
                  <h4 className="font-bold mb-2">🧠 Cognitive Architecture Evolution</h4>
                  <p className="text-green-100 mb-3">
                    Agents with human-like reasoning, emotional intelligence, and creative problem-solving.
                  </p>
                  <div className="text-sm opacity-90">Timeline: 2026-2028</div>
                </div>

                <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-6 rounded-xl not-prose">
                  <h4 className="font-bold mb-2">🌐 Inter-organizational Agent Networks</h4>
                  <p className="text-orange-100 mb-3">
                    Cross-company agent collaboration for supply chains, partnerships, and ecosystems.
                  </p>
                  <div className="text-sm opacity-90">Timeline: 2025-2030</div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Market Projections</h3>
              
              <div className="bg-gray-50 rounded-xl p-6 mb-6 not-prose">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">$68.2B</div>
                    <div className="text-sm text-gray-600">Market Size by 2028</div>
                    <div className="text-xs text-gray-500 mt-1">CAGR: 42.3%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">73%</div>
                    <div className="text-sm text-gray-600">Enterprise Adoption</div>
                    <div className="text-xs text-gray-500 mt-1">By 2027</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">4.2M</div>
                    <div className="text-sm text-gray-600">Jobs Transformed</div>
                    <div className="text-xs text-gray-500 mt-1">Not replaced</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12 bg-blue-50 rounded-xl p-8 not-prose">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
              <p className="text-gray-700 mb-6">
                Agentic AI represents a fundamental shift in how organizations operate, automate, and innovate. 
                Success requires thoughtful planning, robust infrastructure, and a commitment to ethical deployment. 
                Organizations that master agentic AI today will define the competitive landscape of tomorrow.
              </p>
              
              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-3">Key Takeaways</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">1.</span>
                    <span>Start with clear objectives and measurable success criteria</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">2.</span>
                    <span>Invest in robust infrastructure and security from day one</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">3.</span>
                    <span>Focus on human-agent collaboration, not replacement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">4.</span>
                    <span>Implement iteratively with continuous learning and improvement</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/agentic-ai-assessment"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
                >
                  Take Readiness Assessment
                </Link>
                <Link 
                  href="/consultation"
                  className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition font-semibold"
                >
                  Schedule Expert Consultation
                </Link>
              </div>
            </section>

            {/* Additional Resources */}
            <section className="border-t pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Additional Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                <Link 
                  href="/resources/whitepapers"
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <span className="font-medium text-gray-900">Technical Whitepapers</span>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </Link>
                <Link 
                  href="/resources/case-studies"
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <span className="font-medium text-gray-900">Implementation Case Studies</span>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </Link>
                <Link 
                  href="/resources/roi-calculator"
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <span className="font-medium text-gray-900">ROI Calculator</span>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </Link>
                <Link 
                  href="/blog"
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <span className="font-medium text-gray-900">Latest AI Insights</span>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </Link>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Implement Agentic AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a personalized roadmap for your organization
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/get-started"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-semibold"
            >
              Start Your Journey
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition font-semibold"
            >
              Contact Our Experts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}