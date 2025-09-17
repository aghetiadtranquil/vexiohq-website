import Link from 'next/link';
import { Clock, Bell, ArrowRight, Mail } from 'lucide-react';

interface ComingSoonTemplateProps {
  title: string;
  description: string;
  category?: string;
  launchDate?: string;
  features?: string[];
}

export default function ComingSoonTemplate({
  title,
  description,
  category = "Page",
  launchDate = "Q1 2025",
  features = []
}: ComingSoonTemplateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-semibold">Coming Soon • {launchDate}</span>
          </div>
          
          {/* Title and Description */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {description}
          </p>

          {/* Preview Features if provided */}
          {features.length > 0 && (
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">What to Expect:</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {features.map((feature, index) => (
                  <span key={index} className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Notification Signup */}
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto mb-12">
            <div className="flex items-center justify-center mb-4">
              <Bell className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Get Notified When We Launch</h3>
            <p className="text-gray-600 mb-6">
              Be the first to know when this {category.toLowerCase()} becomes available.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Notify Me
              </button>
            </form>
          </div>

          {/* Alternative Actions */}
          <div className="space-y-4">
            <p className="text-gray-600">While you wait, you can:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/ai-consulting-services" 
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/consultation" 
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                Read Our Blog
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Indicator */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-gray-700">Development Progress</h3>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Progress</span>
              <span className="text-sm font-semibold text-gray-900">75% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <div className="grid grid-cols-4 gap-2 mt-4">
              <div className="text-center">
                <div className="text-xs text-gray-500">Planning</div>
                <div className="text-xs font-semibold text-green-600">✓ Complete</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-500">Design</div>
                <div className="text-xs font-semibold text-green-600">✓ Complete</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-500">Development</div>
                <div className="text-xs font-semibold text-blue-600">In Progress</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-500">Testing</div>
                <div className="text-xs font-semibold text-gray-400">Pending</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 mb-4">
            Need this {category.toLowerCase()} sooner? Have specific requirements?
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Contact Our Team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}