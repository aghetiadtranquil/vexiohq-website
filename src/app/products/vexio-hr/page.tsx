import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "VexioHR - AI-Powered Human Resources Platform (Planned)",
  description: "Transform HR with AI. Streamline recruiting, onboarding, performance management, and employee engagement.",
};

export default function VexioHRPage() {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-violet-900">
      <div className="text-center px-4">
        <div className="inline-flex items-center px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-medium mb-6">
          Planned
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
            VexioHR
          </span>
        </h1>

        <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
          Your AI-powered HR platform. Streamline recruiting, automate onboarding,
          and empower your team with intelligent people management.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          {[
            { icon: "👥", title: "Smart Recruiting", desc: "AI-powered candidate screening & matching" },
            { icon: "🚀", title: "Seamless Onboarding", desc: "Automated workflows for new hires" },
            { icon: "📊", title: "Performance Insights", desc: "Data-driven team analytics" }
          ].map((feature, idx) => (
            <div key={idx} className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl mb-2">{feature.icon}</div>
              <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
              <p className="text-sm text-indigo-200">{feature.desc}</p>
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className="inline-flex px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-indigo-500/25 transition-all"
        >
          Get Notified When We Launch
        </Link>
      </div>
    </div>
  );
}
