import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "VexioMarketing - AI Marketing Automation (Planned)",
  description: "AI-powered marketing automation. Create campaigns, optimize content, and grow your audience intelligently.",
};

export default function VexioMarketingPage() {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-slate-900 via-pink-900 to-rose-900">
      <div className="text-center px-4">
        <div className="inline-flex items-center px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-300 text-sm font-medium mb-6">
          Planned
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
            VexioMarketing
          </span>
        </h1>

        <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
          Marketing automation reimagined with AI.
          Create compelling campaigns, optimize content, and scale your growth.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          {[
            { icon: "✨", title: "AI Content Creation", desc: "Generate engaging copy in seconds" },
            { icon: "🎨", title: "Campaign Builder", desc: "Drag-and-drop campaign design" },
            { icon: "📈", title: "Smart Optimization", desc: "AI A/B testing and optimization" }
          ].map((feature, idx) => (
            <div key={idx} className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl mb-2">{feature.icon}</div>
              <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
              <p className="text-sm text-pink-200">{feature.desc}</p>
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className="inline-flex px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-pink-500/25 transition-all"
        >
          Get Notified When We Launch
        </Link>
      </div>
    </div>
  );
}
