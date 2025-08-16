import { Metadata } from 'next'
import Link from 'next/link'

const icons = {
  arrowRight: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14m-7-7 7 7-7 7"/>
    </svg>
  ),
  checkCircle: (
    <svg className="h-5 w-5 mr-3 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22,4 12,14.01 9,11.01"/>
    </svg>
  ),
  checkCircleSmall: (
    <svg className="h-4 w-4 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22,4 12,14.01 9,11.01"/>
    </svg>
  ),
  brain: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A2.5 2.5 0 0 0 12 17.5a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5"/>
      <path d="M9 11V9a2 2 0 0 1 4 0v2"/>
      <path d="M15 13V11a2 2 0 0 1 4 0v2"/>
      <path d="M3 13V11a2 2 0 0 1 4 0v2"/>
    </svg>
  ),
  bot: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8V4H8"/>
      <rect width="16" height="12" x="4" y="8" rx="2"/>
      <path d="M2 14h2"/>
      <path d="M20 14h2"/>
      <path d="M15 13v2"/>
      <path d="M9 13v2"/>
    </svg>
  ),
  cpu: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="16" x="4" y="4" rx="2"/>
      <rect width="6" height="6" x="9" y="9" rx="1"/>
      <path d="M15 2v2"/>
      <path d="M15 20v2"/>
      <path d="M2 15h2"/>
      <path d="M2 9h2"/>
      <path d="M20 15h2"/>
      <path d="M20 9h2"/>
      <path d="M9 2v2"/>
      <path d="M9 20v2"/>
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
    </svg>
  ),
  zap: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
    </svg>
  ),
  users: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  barChart3: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18"/>
      <path d="M18 17V9"/>
      <path d="M13 17V5"/>
      <path d="M8 17v-3"/>
    </svg>
  ),
  settings: (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  network: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="16" y="16" width="6" height="6" rx="1"/>
      <rect x="2" y="16" width="6" height="6" rx="1"/>
      <rect x="9" y="2" width="6" height="6" rx="1"/>
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/>
      <path d="M12 12V8"/>
    </svg>
  ),
  activity: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  ),
  target: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  layers: (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12,2 2,7 12,12 22,7"/>
      <polyline points="2,17 12,22 22,17"/>
      <polyline points="2,12 12,17 22,12"/>
    </svg>
  ),
  globe: (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" x2="22" y1="12" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  award: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"/>
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  ),
  clock: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12,6 12,12 16,14"/>
    </svg>
  ),
  trendingUp: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/>
      <polyline points="16,7 22,7 22,13"/>
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Agentic AI Platform | Autonomous AI Agents for Enterprise - Vantage AI',
  description: 'Deploy autonomous AI agents that act independently, make complex decisions, and transform enterprise operations. Build the future with our next-gen agentic AI platform.',
  keywords: 'agentic AI platform, autonomous AI agents, agentic AI, enterprise AI agents, autonomous AI, AI automation, intelligent agents, self-directed AI, decision-making AI, agentic systems',
  openGraph: {
    title: 'Agentic AI Platform - Autonomous AI Agents for Enterprise',
    description: 'Transform your enterprise with autonomous AI agents that think, decide, and act independently. Next-gen AI platform.',
    url: 'https://datatranquil.com/agentic-ai-platform',
    type: 'website',
    images: [{
      url: '/images/agentic-ai-platform.jpg',
      width: 1200,
      height: 630,
      alt: 'Agentic AI Platform by Vantage AI'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentic AI Platform - Autonomous AI Agents',
    description: 'Deploy autonomous AI agents that transform enterprise operations. Next-generation agentic AI platform.',
    images: ['/images/agentic-ai-platform.jpg']
  },
  alternates: {
    canonical: 'https://datatranquil.com/agentic-ai-platform'
  }
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Vantage Agentic AI Platform",
  "applicationCategory": "BusinessApplication",
  "description": "Enterprise platform for deploying autonomous AI agents that make decisions and complete complex tasks independently",
  "offers": {
    "@type": "Offer",
    "price": "Contact for pricing",
    "priceCurrency": "USD"
  },
  "provider": {
    "@type": "Organization",
    "name": "Vantage AI",
    "url": "https://datatranquil.com"
  },
  "featureList": [
    "Autonomous decision-making",
    "Multi-agent orchestration",
    "Enterprise integration",
    "Real-time learning",
    "Goal-driven execution",
    "Natural language interface"
  ],
  "softwareRequirements": "Enterprise cloud infrastructure",
  "operatingSystem": "Cloud-based platform"
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is agentic AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Agentic AI refers to artificial intelligence systems that can act autonomously, make decisions independently, and complete complex tasks without constant human supervision. These AI agents have goals, can plan actions, and adapt their behavior based on outcomes."
      }
    },
    {
      "@type": "Question",
      "name": "How do autonomous AI agents differ from traditional AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unlike traditional AI that responds to specific prompts, autonomous AI agents can set their own sub-goals, choose tools and methods, learn from results, and continuously work toward objectives. They exhibit agency, decision-making capabilities, and can handle unexpected situations."
      }
    },
    {
      "@type": "Question",
      "name": "What can enterprises do with agentic AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enterprises use agentic AI for complex automation, autonomous customer service, intelligent process optimization, predictive maintenance, supply chain orchestration, financial trading, and any scenario requiring continuous decision-making and action without human intervention."
      }
    }
  ]
}

export default function AgenticAIPlatformPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full filter blur-3xl" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-purple-400 mb-4">
                {icons.bot}
                <span className="text-sm font-semibold uppercase tracking-wider">Next-Generation AI</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Agentic AI Platform for Autonomous Enterprise Transformation
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8">
                Deploy AI agents that think, decide, and act independently. Transform your enterprise with autonomous AI that completes complex tasks, makes intelligent decisions, and continuously learns.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/demo" className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-lg text-white transition-all transform hover:scale-105">
                  See Agents in Action
                  {icons.arrowRight}
                </Link>
                <Link href="/agentic-ai-guide" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg font-semibold text-lg text-white transition-colors border border-white/20">
                  Download Agentic AI Guide
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">10x</p>
                  <p className="text-sm text-slate-400">Task Automation</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">24/7</p>
                  <p className="text-sm text-slate-400">Autonomous Operation</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">95%</p>
                  <p className="text-sm text-slate-400">Decision Accuracy</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">80%</p>
                  <p className="text-sm text-slate-400">Cost Reduction</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Agentic AI Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                What is Agentic AI?
              </h2>
              <p className="text-xl text-slate-600">
                Agentic AI represents the next evolution in artificial intelligence - systems that possess agency, autonomy, and the ability to act independently toward complex goals.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Beyond Traditional AI
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      {icons.brain}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Self-Directed Intelligence</h4>
                      <p className="text-slate-600">Agents set their own sub-goals and strategies to achieve complex objectives without step-by-step instructions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      {icons.target}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Goal-Oriented Behavior</h4>
                      <p className="text-slate-600">Continuously work toward objectives, adapting strategies based on outcomes and changing conditions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      {icons.activity}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Autonomous Decision Making</h4>
                      <p className="text-slate-600">Make complex decisions independently, weighing options and selecting optimal paths without human intervention</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      {icons.network}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Multi-Agent Collaboration</h4>
                      <p className="text-slate-600">Work with other AI agents and systems to accomplish tasks that require coordination and teamwork</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-slate-900 mb-6">Traditional AI vs Agentic AI</h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-2">Traditional AI</h5>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-slate-400 rounded-full mr-2"></span>
                        Responds to specific prompts
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-slate-400 rounded-full mr-2"></span>
                        Requires detailed instructions
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-slate-400 rounded-full mr-2"></span>
                        Single-task focused
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-slate-400 rounded-full mr-2"></span>
                        Static capabilities
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-purple-900 mb-2">Agentic AI</h5>
                    <ul className="space-y-2 text-sm text-purple-700">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                        Acts autonomously toward goals
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                        Determines own approach
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                        Handles complex workflows
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                        Learns and adapts continuously
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Agent Capabilities Grid */}
            <div className="bg-slate-900 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Core Capabilities of Autonomous AI Agents
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  {icons.settings}
                  <h4 className="font-semibold text-white mb-2">Tool Selection</h4>
                  <p className="text-slate-300 text-sm">
                    Automatically choose and use the right tools, APIs, and resources to accomplish tasks
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  {icons.layers}
                  <h4 className="font-semibold text-white mb-2">Task Decomposition</h4>
                  <p className="text-slate-300 text-sm">
                    Break complex objectives into manageable sub-tasks and execute them systematically
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  {icons.activity}
                  <h4 className="font-semibold text-white mb-2">Real-time Adaptation</h4>
                  <p className="text-slate-300 text-sm">
                    Adjust strategies based on feedback, errors, and changing conditions
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  {icons.globe}
                  <h4 className="font-semibold text-white mb-2">Context Awareness</h4>
                  <p className="text-slate-300 text-sm">
                    Understand and operate within complex business contexts and constraints
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  {icons.shield}
                  <h4 className="font-semibold text-white mb-2">Safe Boundaries</h4>
                  <p className="text-slate-300 text-sm">
                    Operate within defined safety parameters and governance frameworks
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  {icons.users}
                  <h4 className="font-semibold text-white mb-2">Human Collaboration</h4>
                  <p className="text-slate-300 text-sm">
                    Work alongside humans, seeking input when needed and providing status updates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Use Cases */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                How Enterprises Use Agentic AI for Transformation
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Real-world applications where autonomous AI agents are revolutionizing business operations
              </p>
            </div>

            <div className="space-y-16">
              {/* Financial Services */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        {icons.barChart3}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Financial Services</h3>
                    </div>
                    <p className="text-lg text-slate-600 mb-6">
                      Autonomous trading agents that analyze markets, execute strategies, and manage risk in real-time
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        {icons.checkCircle}
                        <div>
                          <h4 className="font-semibold text-slate-900">Algorithmic Trading</h4>
                          <p className="text-slate-600 text-sm">Agents execute complex trading strategies across multiple markets simultaneously</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        {icons.checkCircle}
                        <div>
                          <h4 className="font-semibold text-slate-900">Risk Management</h4>
                          <p className="text-slate-600 text-sm">Continuous monitoring and automatic portfolio rebalancing based on risk thresholds</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        {icons.checkCircle}
                        <div>
                          <h4 className="font-semibold text-slate-900">Fraud Detection</h4>
                          <p className="text-slate-600 text-sm">Autonomous agents that identify and respond to fraudulent activities in real-time</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 p-4 bg-green-50 rounded-lg">
                      <p className="text-sm font-medium text-green-900">Average Results</p>
                      <p className="text-2xl font-bold text-green-900">43% faster trade execution</p>
                      <p className="text-sm text-green-700">67% reduction in risk exposure</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-8 lg:p-12 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        {icons.barChart3}
                      </div>
                      <p className="text-lg font-semibold text-slate-900 mb-2">24/7 Market Coverage</p>
                      <p className="text-slate-600">Agents never sleep, capturing opportunities across global markets</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Supply Chain */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-8 lg:p-12 flex items-center justify-center order-2 lg:order-1">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        {icons.network}
                      </div>
                      <p className="text-lg font-semibold text-slate-900 mb-2">End-to-End Orchestration</p>
                      <p className="text-slate-600">Agents coordinate complex supply chains autonomously</p>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 order-1 lg:order-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        {icons.network}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Supply Chain & Logistics</h3>
                    </div>
                    <p className="text-lg text-slate-600 mb-6">
                      Intelligent agents that optimize routes, manage inventory, and coordinate global operations
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        {icons.checkCircle}
                        <div>
                          <h4 className="font-semibold text-slate-900">Dynamic Route Optimization</h4>
                          <p className="text-slate-600 text-sm">Real-time adjustment of delivery routes based on traffic, weather, and priorities</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        {icons.checkCircle}
                        <div>
                          <h4 className="font-semibold text-slate-900">Inventory Management</h4>
                          <p className="text-slate-600 text-sm">Predictive restocking and warehouse optimization across multiple locations</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        {icons.checkCircle}
                        <div>
                          <h4 className="font-semibold text-slate-900">Supplier Coordination</h4>
                          <p className="text-slate-600 text-sm">Automated negotiation and order management with global suppliers</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm font-medium text-blue-900">Average Results</p>
                      <p className="text-2xl font-bold text-blue-900">35% cost reduction</p>
                      <p className="text-sm text-blue-700">52% improvement in delivery times</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Service */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        {icons.users}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Customer Experience</h3>
                    </div>
                    <p className="text-lg text-slate-600 mb-6">
                      AI agents that handle complex customer interactions from start to resolution
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        {icons.checkCircle}
                        <div>
                          <h4 className="font-semibold text-slate-900">Omnichannel Support</h4>
                          <p className="text-slate-600 text-sm">Seamless handoff across chat, email, phone, and social media</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        {icons.checkCircle}
                        <div>
                          <h4 className="font-semibold text-slate-900">Complex Problem Solving</h4>
                          <p className="text-slate-600 text-sm">Handle multi-step issues requiring research and coordination</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        {icons.checkCircle}
                        <div>
                          <h4 className="font-semibold text-slate-900">Proactive Engagement</h4>
                          <p className="text-slate-600 text-sm">Identify and resolve issues before customers notice them</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 p-4 bg-purple-50 rounded-lg">
                      <p className="text-sm font-medium text-purple-900">Average Results</p>
                      <p className="text-2xl font-bold text-purple-900">87% first-contact resolution</p>
                      <p className="text-sm text-purple-700">4.8/5 customer satisfaction score</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 lg:p-12 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        {icons.users}
                      </div>
                      <p className="text-lg font-semibold text-slate-900 mb-2">Human-Like Interactions</p>
                      <p className="text-slate-600">Agents understand context and emotion for personalized support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Vantage Agentic AI Platform Features
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Enterprise-grade platform for building, deploying, and managing autonomous AI agents at scale
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
                {icons.bot}
                <h3 className="text-xl font-bold text-slate-900 mb-3">Agent Development Studio</h3>
                <p className="text-slate-600 mb-4">
                  Visual builder for creating sophisticated AI agents without extensive coding
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    {icons.checkCircleSmall}
                    <span>Drag-and-drop workflow designer</span>
                  </li>
                  <li className="flex items-center">
                    {icons.checkCircleSmall}
                    <span>Pre-built agent templates</span>
                  </li>
                  <li className="flex items-center">
                    {icons.checkCircleSmall}
                    <span>Natural language goal setting</span>
                  </li>
                  <li className="flex items-center">
                    {icons.checkCircleSmall}
                    <span>Real-time testing environment</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
                {icons.network}
                <h3 className="text-xl font-bold text-slate-900 mb-3">Multi-Agent Orchestration</h3>
                <p className="text-slate-600 mb-4">
                  Coordinate teams of specialized agents working toward common objectives
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    {icons.checkCircleSmall}
                    <span>Agent communication protocols</span>
                  </li>
                  <li className="flex items-center">
                    {icons.checkCircleSmall}
                    <span>Task delegation engine</span>
                  </li>
                  <li className="flex items-center">
                    {icons.checkCircleSmall}
                    <span>Consensus mechanisms</span>
                  </li>
                  <li className="flex items-center">
                    {icons.checkCircleSmall}
                    <span>Swarm intelligence capabilities</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
                {icons.shield}
                <h3 className="text-xl font-bold text-slate-900 mb-3">Enterprise Control & Safety</h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive governance framework for safe autonomous operations
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    {icons.checkCircleSmall}
                    <span>Action boundary controls</span>
                  </li>
                  <li className="flex items-center">
                    {icons.checkCircleSmall}
                    <span>Human approval workflows</span>
                  </li>
                  <li className="flex items-center">
                    {icons.checkCircleSmall}
                    <span>Audit trail & explainability</span>
                  </li>
                  <li className="flex items-center">
                    {icons.checkCircleSmall}
                    <span>Emergency stop mechanisms</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8">
                {icons.cpu}
                <h3 className="text-xl font-bold text-slate-900 mb-3">Integration Hub</h3>
                <p className="text-slate-600 mb-4">
                  Connect agents to your entire technology ecosystem
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    {icons.checkCircleSmall}
                    <span>1000+ pre-built connectors</span>
                  </li>
                  <li className="flex items-center">
                    {icons.checkCircleSmall}
                    <span>API gateway & management</span>
                  </li>
                  <li className="flex items-center">
                    {icons.checkCircleSmall}
                    <span>Database integration</span>
                  </li>
                  <li className="flex items-center">
                    {icons.checkCircleSmall}
                    <span>Legacy system adapters</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8">
                {icons.brain}
                <h3 className="text-xl font-bold text-slate-900 mb-3">Learning & Evolution</h3>
                <p className="text-slate-600 mb-4">
                  Agents that improve performance through experience
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    {icons.checkCircleSmall}
                    <span>Reinforcement learning engine</span>
                  </li>
                  <li className="flex items-center">
                    {icons.checkCircleSmall}
                    <span>Performance optimization</span>
                  </li>
                  <li className="flex items-center">
                    {icons.checkCircleSmall}
                    <span>Knowledge accumulation</span>
                  </li>
                  <li className="flex items-center">
                    {icons.checkCircleSmall}
                    <span>Behavioral adaptation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-100 to-gray-100 rounded-xl p-8">
                {icons.barChart3}
                <h3 className="text-xl font-bold text-slate-900 mb-3">Analytics & Monitoring</h3>
                <p className="text-slate-600 mb-4">
                  Complete visibility into agent behavior and performance
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    {icons.checkCircleSmall}
                    <span>Real-time agent dashboards</span>
                  </li>
                  <li className="flex items-center">
                    {icons.checkCircleSmall}
                    <span>Decision path visualization</span>
                  </li>
                  <li className="flex items-center">
                    {icons.checkCircleSmall}
                    <span>Performance metrics & KPIs</span>
                  </li>
                  <li className="flex items-center">
                    {icons.checkCircleSmall}
                    <span>Anomaly detection</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Approach */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Your Journey to Autonomous AI
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Structured approach to implementing agentic AI in your enterprise
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-300"></div>
              
              <div className="space-y-12">
                <div className="relative flex items-start">
                  <div className="absolute left-8 w-4 h-4 bg-purple-600 rounded-full -translate-x-1/2"></div>
                  <div className="ml-20">
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-2">Phase 1: Discovery & Assessment</h3>
                      <p className="text-slate-600 mb-4">Identify high-impact use cases for autonomous agents</p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center">
                          {icons.checkCircleSmall}
                          <span>Process analysis</span>
                        </div>
                        <div className="flex items-center">
                          {icons.checkCircleSmall}
                          <span>Automation potential</span>
                        </div>
                        <div className="flex items-center">
                          {icons.checkCircleSmall}
                          <span>ROI projections</span>
                        </div>
                        <div className="flex items-center">
                          {icons.checkCircleSmall}
                          <span>Risk assessment</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="absolute left-8 w-4 h-4 bg-purple-600 rounded-full -translate-x-1/2"></div>
                  <div className="ml-20">
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-2">Phase 2: Pilot Development</h3>
                      <p className="text-slate-600 mb-4">Build and test your first autonomous agents</p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center">
                          {icons.checkCircleSmall}
                          <span>Agent design</span>
                        </div>
                        <div className="flex items-center">
                          {icons.checkCircleSmall}
                          <span>Goal configuration</span>
                        </div>
                        <div className="flex items-center">
                          {icons.checkCircleSmall}
                          <span>Safety boundaries</span>
                        </div>
                        <div className="flex items-center">
                          {icons.checkCircleSmall}
                          <span>Controlled testing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="absolute left-8 w-4 h-4 bg-purple-600 rounded-full -translate-x-1/2"></div>
                  <div className="ml-20">
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-2">Phase 3: Production Deployment</h3>
                      <p className="text-slate-600 mb-4">Launch agents in live environments with monitoring</p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center">
                          {icons.checkCircleSmall}
                          <span>Gradual rollout</span>
                        </div>
                        <div className="flex items-center">
                          {icons.checkCircleSmall}
                          <span>Performance tracking</span>
                        </div>
                        <div className="flex items-center">
                          {icons.checkCircleSmall}
                          <span>Human oversight</span>
                        </div>
                        <div className="flex items-center">
                          {icons.checkCircleSmall}
                          <span>Continuous optimization</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="absolute left-8 w-4 h-4 bg-purple-600 rounded-full -translate-x-1/2"></div>
                  <div className="ml-20">
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-2">Phase 4: Scale & Expand</h3>
                      <p className="text-slate-600 mb-4">Deploy agent teams across the enterprise</p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center">
                          {icons.checkCircleSmall}
                          <span>Multi-agent systems</span>
                        </div>
                        <div className="flex items-center">
                          {icons.checkCircleSmall}
                          <span>Cross-functional integration</span>
                        </div>
                        <div className="flex items-center">
                          {icons.checkCircleSmall}
                          <span>Advanced orchestration</span>
                        </div>
                        <div className="flex items-center">
                          {icons.checkCircleSmall}
                          <span>Enterprise transformation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Measurable Impact of Agentic AI
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Real results from enterprises deploying autonomous AI agents
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {icons.zap}
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-2">85%</h3>
                <p className="text-lg font-semibold text-slate-900 mb-1">Process Automation</p>
                <p className="text-sm text-slate-600">Of repetitive tasks handled autonomously</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {icons.clock}
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-2">10x</h3>
                <p className="text-lg font-semibold text-slate-900 mb-1">Speed Increase</p>
                <p className="text-sm text-slate-600">In decision-making and execution</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {icons.trendingUp}
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-2">312%</h3>
                <p className="text-lg font-semibold text-slate-900 mb-1">ROI Average</p>
                <p className="text-sm text-slate-600">Within first 18 months</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {icons.award}
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-2">99.7%</h3>
                <p className="text-lg font-semibold text-slate-900 mb-1">Accuracy Rate</p>
                <p className="text-sm text-slate-600">In autonomous decision making</p>
              </div>
            </div>

            <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Deploy Autonomous AI Agents?
                </h3>
                <p className="text-lg text-purple-100 mb-8">
                  Join the enterprises transforming their operations with agentic AI
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/demo" className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 hover:bg-purple-50 rounded-lg font-semibold text-lg transition-colors">
                    Request Live Demo
                    {icons.arrowRight}
                  </Link>
                  <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white hover:bg-white/10 rounded-lg font-semibold text-lg transition-colors">
                    Talk to AI Expert
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-slate-600">
                Common questions about agentic AI and autonomous agents
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  What is agentic AI?
                </h3>
                <p className="text-slate-600">
                  Agentic AI refers to artificial intelligence systems that can act autonomously, make decisions independently, and complete complex tasks without constant human supervision. These AI agents have goals, can plan actions, and adapt their behavior based on outcomes.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  How do autonomous AI agents differ from traditional AI?
                </h3>
                <p className="text-slate-600">
                  Unlike traditional AI that responds to specific prompts, autonomous AI agents can set their own sub-goals, choose tools and methods, learn from results, and continuously work toward objectives. They exhibit agency, decision-making capabilities, and can handle unexpected situations.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  What can enterprises do with agentic AI?
                </h3>
                <p className="text-slate-600">
                  Enterprises use agentic AI for complex automation, autonomous customer service, intelligent process optimization, predictive maintenance, supply chain orchestration, financial trading, and any scenario requiring continuous decision-making and action without human intervention.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  How do you ensure AI agents operate safely?
                </h3>
                <p className="text-slate-600">
                  Our platform includes comprehensive safety features: action boundary controls, human approval workflows for critical decisions, real-time monitoring, emergency stop mechanisms, and complete audit trails. Agents operate within defined parameters and can escalate to humans when needed.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  What's required to implement agentic AI?
                </h3>
                <p className="text-slate-600">
                  Implementation requires clear business objectives, quality data access, integration capabilities with existing systems, and a phased approach starting with pilot projects. Our platform handles the technical complexity, allowing you to focus on defining goals and monitoring outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Autonomous AI Journey Today
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Deploy intelligent agents that transform how work gets done
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-900 hover:bg-purple-50 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
                Schedule Platform Demo
                {icons.arrowRight}
              </Link>
              <Link href="/agentic-ai-assessment" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white hover:bg-white/10 rounded-lg font-semibold text-lg transition-colors">
                Take Readiness Assessment
              </Link>
            </div>
            <p className="mt-8 text-purple-200">
              Join 150+ enterprises already transforming with autonomous AI
            </p>
          </div>
        </section>
      </main>
    </>
  )
}