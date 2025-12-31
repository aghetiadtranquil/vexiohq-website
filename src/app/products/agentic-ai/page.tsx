'use client'

import { useState, useEffect } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Bot, ArrowRight, Sparkles, Brain, Zap, Shield, MessageSquare, Settings, Play, Pause, RefreshCw, CheckCircle, XCircle, Clock, TrendingUp, Users, Database, Globe, ChevronRight, Code, Cpu, Network, Activity } from 'lucide-react'

// Metadata would normally be exported but client components can't export metadata
// export const metadata: Metadata = {
//   title: 'Agentic AI Platform - Autonomous AI Agents | VexioHQ',
//   description: 'Build, deploy, and manage autonomous AI agents that work 24/7. Enterprise-grade platform for intelligent automation and decision-making.',
// }

// Demo Agent Types
const agentTypes = [
  { id: 'customer-service', name: 'Customer Service', icon: Users, status: 'active', tasks: 1247, accuracy: 94 },
  { id: 'data-analyst', name: 'Data Analyst', icon: TrendingUp, status: 'active', tasks: 892, accuracy: 97 },
  { id: 'content-writer', name: 'Content Writer', icon: MessageSquare, status: 'idle', tasks: 456, accuracy: 91 },
  { id: 'code-reviewer', name: 'Code Reviewer', icon: Code, status: 'active', tasks: 2103, accuracy: 96 },
  { id: 'security-monitor', name: 'Security Monitor', icon: Shield, status: 'active', tasks: 5421, accuracy: 99 },
]

// Simulated Agent Activity
const activities = [
  { time: '2 min ago', agent: 'Customer Service', action: 'Resolved ticket #4521', status: 'success' },
  { time: '5 min ago', agent: 'Data Analyst', action: 'Generated quarterly report', status: 'success' },
  { time: '8 min ago', agent: 'Security Monitor', action: 'Blocked suspicious activity', status: 'warning' },
  { time: '12 min ago', agent: 'Code Reviewer', action: 'Reviewed PR #234', status: 'success' },
  { time: '15 min ago', agent: 'Content Writer', action: 'Created blog post draft', status: 'success' },
]

export default function AgenticAIPlatformPage() {
  const [selectedAgent, setSelectedAgent] = useState('customer-service')
  const [isRunning, setIsRunning] = useState(true)
  const [metrics, setMetrics] = useState({
    totalAgents: 12,
    activeTasks: 47,
    successRate: 95.7,
    timeSaved: 1240,
  })
  const [demoMessages, setDemoMessages] = useState<string[]>([])
  const [agentResponse, setAgentResponse] = useState('')

  // Simulate real-time metrics update
  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning) {
        setMetrics(prev => ({
          totalAgents: prev.totalAgents,
          activeTasks: Math.max(0, prev.activeTasks + Math.floor(Math.random() * 5 - 2)),
          successRate: Math.min(100, Math.max(90, prev.successRate + (Math.random() - 0.5) * 0.5)),
          timeSaved: prev.timeSaved + Math.floor(Math.random() * 10),
        }))
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [isRunning])

  // Simulate agent responses
  const handleSendMessage = (message: string) => {
    setDemoMessages(prev => [...prev, `You: ${message}`])
    setAgentResponse('Processing...')
    
    setTimeout(() => {
      const responses = [
        "I've analyzed your request and prepared a comprehensive solution. The implementation will take approximately 2 hours.",
        "Based on the data patterns, I recommend optimizing the workflow to increase efficiency by 40%.",
        "I've identified 3 potential issues and created automated fixes. Would you like me to apply them?",
        "Task completed successfully. I've also documented the process for future reference.",
        "Analysis complete. I found 5 optimization opportunities that could save 20 hours per week.",
      ]
      const response = responses[Math.floor(Math.random() * responses.length)]
      setDemoMessages(prev => [...prev, `Agent: ${response}`])
      setAgentResponse('')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Live Demo */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-20 animate-pulse" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-semibold mb-6">
                <Bot className="h-4 w-4 mr-2" />
                Agentic AI Platform
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Autonomous AI Agents
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  Working 24/7 For You
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Deploy intelligent agents that think, learn, and act autonomously. 
                <span className="font-semibold"> 10x productivity</span> with 
                <span className="font-semibold"> 95% accuracy</span>.
              </p>
            </div>

            {/* Live Demo Dashboard */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Activity className="h-5 w-5 text-green-500" />
                  Live Agent Dashboard
                </h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsRunning(!isRunning)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      isRunning ? 'bg-red-100 text-red-700 hover:bg-red-200' : 'bg-green-100 text-green-700 hover:bg-green-200'
                    }`}
                  >
                    {isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    {isRunning ? 'Pause' : 'Resume'}
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
                    <RefreshCw className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Real-time Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Bot className="h-5 w-5 text-purple-600" />
                    <span className="text-xs text-purple-600 font-semibold">LIVE</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{metrics.totalAgents}</div>
                  <div className="text-sm text-gray-600">Active Agents</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Activity className="h-5 w-5 text-blue-600" />
                    <span className="text-xs text-blue-600 font-semibold animate-pulse">•</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{metrics.activeTasks}</div>
                  <div className="text-sm text-gray-600">Running Tasks</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{metrics.successRate.toFixed(1)}%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Clock className="h-5 w-5 text-orange-600" />
                    <span className="text-xs text-orange-600">hrs</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{metrics.timeSaved.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Time Saved</div>
                </div>
              </div>

              {/* Agent Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Agent List */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Active Agents</h4>
                  <div className="space-y-2">
                    {agentTypes.map((agent) => (
                      <div
                        key={agent.id}
                        onClick={() => setSelectedAgent(agent.id)}
                        className={`p-3 rounded-lg border cursor-pointer transition-all ${
                          selectedAgent === agent.id
                            ? 'border-purple-500 bg-purple-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${
                              agent.status === 'active' ? 'bg-green-100' : 'bg-gray-100'
                            }`}>
                              <agent.icon className={`h-5 w-5 ${
                                agent.status === 'active' ? 'text-green-600' : 'text-gray-600'
                              }`} />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">{agent.name}</div>
                              <div className="text-xs text-gray-500">
                                {agent.tasks} tasks • {agent.accuracy}% accuracy
                              </div>
                            </div>
                          </div>
                          <div className={`w-2 h-2 rounded-full ${
                            agent.status === 'active' ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
                          }`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activity Feed */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Recent Activity</h4>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {activities.map((activity, idx) => (
                      <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full mt-2 ${
                            activity.status === 'success' ? 'bg-green-500' :
                            activity.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                          }`} />
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900">{activity.agent}</div>
                            <div className="text-sm text-gray-600">{activity.action}</div>
                            <div className="text-xs text-gray-500 mt-1">{activity.time}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interactive Demo */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Try It Yourself</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Ask the agent to perform a task..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && e.currentTarget.value) {
                          handleSendMessage(e.currentTarget.value)
                          e.currentTarget.value = ''
                        }
                      }}
                    />
                    <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all">
                      Send
                    </button>
                  </div>
                  {demoMessages.length > 0 && (
                    <div className="mt-4 space-y-2 max-h-32 overflow-y-auto">
                      {demoMessages.map((msg, idx) => (
                        <div key={idx} className={`text-sm ${msg.startsWith('You:') ? 'text-gray-700' : 'text-purple-700 font-medium'}`}>
                          {msg}
                        </div>
                      ))}
                      {agentResponse && (
                        <div className="text-sm text-gray-500 italic">{agentResponse}</div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation" className="inline-flex items-center px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all transform hover:scale-105 shadow-lg">
                Deploy Your First Agent
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="#features" className="inline-flex items-center px-8 py-4 bg-white text-purple-600 border-2 border-purple-600 rounded-lg hover:bg-purple-50 transition-all">
                Explore Features
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Enterprise-Ready Agent Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Build, train, and deploy AI agents that understand your business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 hover:shadow-xl transition-all">
                <Brain className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Self-Learning Agents</h3>
                <p className="text-gray-600 mb-4">
                  Agents that improve through experience, learning from every interaction
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Reinforcement learning</li>
                  <li>• Continuous optimization</li>
                  <li>• Pattern recognition</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 hover:shadow-xl transition-all">
                <Network className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Agent Orchestration</h3>
                <p className="text-gray-600 mb-4">
                  Coordinate teams of specialized agents working together
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Task delegation</li>
                  <li>• Agent collaboration</li>
                  <li>• Workflow automation</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-xl transition-all">
                <Zap className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Real-Time Processing</h3>
                <p className="text-gray-600 mb-4">
                  Instant decision-making with millisecond response times
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Event-driven actions</li>
                  <li>• Stream processing</li>
                  <li>• Parallel execution</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 hover:shadow-xl transition-all">
                <MessageSquare className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Natural Language</h3>
                <p className="text-gray-600 mb-4">
                  Communicate with agents using plain English
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Conversational AI</li>
                  <li>• Context understanding</li>
                  <li>• Multi-language support</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 hover:shadow-xl transition-all">
                <Shield className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Security</h3>
                <p className="text-gray-600 mb-4">
                  Bank-grade security with complete audit trails
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Role-based access</li>
                  <li>• Encryption at rest</li>
                  <li>• Compliance ready</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 hover:shadow-xl transition-all">
                <Cpu className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Training</h3>
                <p className="text-gray-600 mb-4">
                  Train agents on your specific data and processes
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Domain adaptation</li>
                  <li>• Custom models</li>
                  <li>• Transfer learning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Agents for Every Department
              </h2>
              <p className="text-xl text-gray-600">
                Pre-trained agents ready to transform your operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Service Agents</h3>
                    <p className="text-gray-600 mb-4">
                      Handle customer inquiries 24/7 with human-like conversations
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">90% first-contact resolution</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">Multi-channel support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">Sentiment analysis</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Sales & Marketing Agents</h3>
                    <p className="text-gray-600 mb-4">
                      Qualify leads, personalize outreach, and optimize campaigns
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">Lead scoring & qualification</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">Personalized content generation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">Campaign optimization</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Development Agents</h3>
                    <p className="text-gray-600 mb-4">
                      Accelerate development with AI-powered coding assistants
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">Code review & optimization</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">Bug detection & fixing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">Documentation generation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Data Analysis Agents</h3>
                    <p className="text-gray-600 mb-4">
                      Extract insights from complex data automatically
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">Pattern recognition</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">Predictive analytics</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">Automated reporting</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Built for Scale & Reliability
              </h2>
              <p className="text-xl text-gray-600">
                Enterprise-grade infrastructure powering millions of agent interactions
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Architecture Highlights</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Globe className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Global Distribution</div>
                        <div className="text-sm text-gray-600">Multi-region deployment with &lt;100ms latency</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Cpu className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">GPU-Accelerated</div>
                        <div className="text-sm text-gray-600">NVIDIA A100 clusters for ML workloads</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Zero-Trust Security</div>
                        <div className="text-sm text-gray-600">End-to-end encryption, SOC 2 compliant</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Activity className="h-4 w-4 text-orange-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">99.99% Uptime</div>
                        <div className="text-sm text-gray-600">Auto-scaling with failover protection</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Performance Metrics</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">Response Time</span>
                        <span className="text-sm font-semibold text-gray-900">&lt;50ms</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">Throughput</span>
                        <span className="text-sm font-semibold text-gray-900">1M req/sec</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">Accuracy</span>
                        <span className="text-sm font-semibold text-gray-900">97.5%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '97.5%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">Availability</span>
                        <span className="text-sm font-semibold text-gray-900">99.99%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-orange-500 to-amber-500 h-2 rounded-full" style={{ width: '99.99%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Flexible Pricing for Every Scale
              </h2>
              <p className="text-xl text-gray-600">
                Start small, scale infinitely. Pay only for what you use.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Developer */}
              <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Developer</h3>
                <p className="text-gray-600 mb-6">Perfect for testing and prototypes</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">Free</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">1 agent instance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">1,000 tasks/month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Community support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Basic templates</span>
                  </li>
                </ul>
                <Link href="/get-started" className="block w-full text-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all">
                  Start Free
                </Link>
              </div>

              {/* Business */}
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-2xl p-8 shadow-xl transform scale-105">
                <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-white text-sm font-semibold mb-4">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold mb-2">Business</h3>
                <p className="text-purple-100 mb-6">For production workloads</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$999</span>
                  <span className="text-purple-100">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                    <span>10 agent instances</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                    <span>100,000 tasks/month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                    <span>Custom training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                    <span>API access</span>
                  </li>
                </ul>
                <Link href="/consultation" className="block w-full text-center px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all font-semibold">
                  Start Trial
                </Link>
              </div>

              {/* Enterprise */}
              <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-6">Unlimited scale & support</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">Custom</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Unlimited agents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Unlimited tasks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Dedicated support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">On-premise option</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">SLA guarantee</span>
                  </li>
                </ul>
                <Link href="/consultation" className="block w-full text-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Deploy Your AI Workforce?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of companies automating with intelligent agents
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation" className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold">
                Start Building Agents
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/resources" className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-purple-600 transition-all font-semibold">
                View Documentation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}