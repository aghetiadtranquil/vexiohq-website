import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "VexioExpense - Smart Expense Management (Coming Soon)",
  description: "AI-powered expense tracking and management. Automate receipts, enforce policies, and gain spending insights.",
};

export default function VexioExpensePage() {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="text-center px-4">
        <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
          Coming Soon
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            VexioExpense
          </span>
        </h1>

        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          AI-powered expense tracking that eliminates the hassle.
          Snap receipts, automate approvals, and gain real-time spending insights.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          {[
            { icon: "📸", title: "Smart Receipt Scanning", desc: "AI extracts data from receipts instantly" },
            { icon: "✅", title: "Auto Policy Enforcement", desc: "Ensure compliance automatically" },
            { icon: "📊", title: "Spending Analytics", desc: "Real-time budget visibility" }
          ].map((feature, idx) => (
            <div key={idx} className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl mb-2">{feature.icon}</div>
              <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
              <p className="text-sm text-blue-200">{feature.desc}</p>
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className="inline-flex px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all"
        >
          Get Notified When We Launch
        </Link>
      </div>
    </div>
  );
}
