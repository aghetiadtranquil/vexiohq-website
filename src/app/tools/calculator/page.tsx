import Link from 'next/link';

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">AI ROI Calculator</h1>
        <p className="text-gray-600 mb-8">Calculate your potential return on AI investment.</p>
        <div className="bg-white rounded-lg shadow p-8">
          <p className="text-gray-600 mb-4">Interactive calculator coming soon.</p>
          <p className="text-gray-500 text-sm mb-6">Contact us for a personalized ROI assessment.</p>
          <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Get Custom Assessment
          </Link>
        </div>
      </div>
    </div>
  );
}
