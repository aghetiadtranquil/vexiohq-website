import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "VexioSales - AI-Powered Sales Intelligence Platform",
  description: "Transform your sales with AI. Lead scoring, AI voice calls, smart enrichment, pipeline analytics, and natural language data queries. Automate outreach, close more deals.",
  openGraph: {
    title: "VexioSales - AI-Powered Sales Intelligence",
    description: "AI agents that score leads, make calls, draft emails, and answer questions in natural language.",
  },
};

const features = [
  {
    category: "Lead Intelligence",
    items: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        ),
        title: "AI Lead Scoring",
        desc: "0-100 score based on profile, company fit, engagement, and timing. Know exactly which leads to prioritize."
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        ),
        title: "Smart Enrichment",
        desc: "Auto-research company data, LinkedIn profiles, news, and buying signals. B2B and B2C modes available."
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
        title: "Audience Builder",
        desc: "Dynamic segments with AND/OR logic. Filter by score, source, status, company, tags, and activity."
      }
    ]
  },
  {
    category: "AI Agents",
    items: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        ),
        title: "Voice Agent",
        desc: "AI makes outbound calls, has natural conversations, handles objections, and books meetings automatically."
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        ),
        title: "Response Agent",
        desc: "AI drafts personalized emails and SMS. Analyzes conversation history, matches tone, suggests next steps."
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        ),
        title: "Follow-up Agent",
        desc: "Generates personalized strategies with email templates, call scripts, SMS drafts, and optimal timing."
      }
    ]
  },
  {
    category: "Data Agent",
    items: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
        title: "Natural Language Queries",
        desc: '"Show me hot leads from LinkedIn" - Ask questions in plain English, get instant answers.'
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
        title: "Two-Track Speed",
        desc: "80% of queries use pre-approved templates (instant). Complex queries use AI-generated SQL (flexible)."
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        ),
        title: "Built-in Safety",
        desc: "SQL validation, org_id filtering, query timeouts, and row limits. Your data stays secure."
      }
    ]
  },
  {
    category: "Pipeline & Analytics",
    items: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
          </svg>
        ),
        title: "Kanban Pipeline",
        desc: "Drag-and-drop deal management. Customizable stages, multiple pipelines, deal cards with quick view."
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        ),
        title: "Deep Analytics",
        desc: "Win rate, sales cycle, stage conversion, channel performance. Email, SMS, and voice metrics."
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        ),
        title: "Proactive Alerts",
        desc: "Daily alerts for hot leads, stalled deals, and follow-up reminders. CEO and SDR coach insights."
      }
    ]
  }
];

const stats = [
  { value: "45%", label: "More Deals Closed" },
  { value: "3x", label: "Faster Lead Response" },
  { value: "15hrs", label: "Saved Per Week" },
  { value: "92%", label: "Call Completion Rate" }
];

export default function VexioSalesPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Now Available
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                VexioSales
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">
              AI-powered sales platform with agents that score leads, make calls,
              draft messages, and answer questions in natural language.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 mb-16">
              <a
                href="https://vexiosales.vexiohq.com/auth/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all"
              >
                Get Started with VexioSales
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
              >
                Request Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { role: "SDRs", value: "AI handles research, scoring, and follow-up suggestions - focus on closing" },
              { role: "Sales Managers", value: "Real-time pipeline visibility, proactive alerts on stalled deals" },
              { role: "RevOps", value: "Multi-channel automation, detailed analytics, API integrations" },
              { role: "Executives", value: "AI-generated insights, revenue forecasting, team performance" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">For {item.role}</div>
                <p className="text-gray-600">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      {features.map((section, sectionIdx) => (
        <section key={sectionIdx} className={`py-20 ${sectionIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{section.category}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {section.items.map((feature, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Multi-Channel Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Multi-Channel Outreach</h2>
            <p className="text-xl text-blue-200">Reach prospects on every channel, powered by AI</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { channel: "Email", features: ["Gmail/Outlook sync", "AI drafting", "Templates", "Tracking"] },
              { channel: "SMS", features: ["Direct messaging", "AI-optimized", "140-160 chars", "Bulk campaigns"] },
              { channel: "Voice", features: ["AI phone calls", "Natural conversation", "Calendar booking", "Transcripts"] },
              { channel: "Calendar", features: ["Availability check", "Auto-booking", "Meeting invites", "Multi-timezone"] }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold mb-4">{item.channel}</h3>
                <ul className="space-y-2">
                  {item.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-blue-100">
                      <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Sales?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join teams using AI to close more deals, faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://vexiosales.vexiohq.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:shadow-xl transition-all"
            >
              Start with VexioSales
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/10 border border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
