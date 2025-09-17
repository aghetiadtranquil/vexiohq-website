import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Rocket, Users, Zap, Shield, Calendar, CreditCard, Building2, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Get Started with AI - Free 30-Day Trial | DataTranquil',
  description: 'Start your AI transformation with a free 30-day trial. Quick 3-step onboarding, dedicated success manager, and custom implementation plan. Deploy AI in weeks, not months. No credit card required.',
  keywords: 'get started with AI, AI free trial, enterprise AI trial, sign up, DataTranquil onboarding, start free trial, AI implementation, AI deployment, quick start AI, AI POC',
  openGraph: {
    title: 'Get Started with Enterprise AI - Free 30-Day Trial',
    description: 'Start your AI transformation today. Quick onboarding, dedicated support, and proven ROI in 30 days. No credit card required.',
    url: 'https://datatranquil.com/get-started',
    type: 'website',
  },
  alternates: {
    canonical: 'https://datatranquil.com/get-started',
  },
};

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Start Your AI Journey Today
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of companies transforming their business with DataTranquil's AI platform. 
              Get started in minutes with our 30-day free trial.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <span className="ml-3 font-semibold text-gray-900">Choose Plan</span>
              </div>
              <div className="flex-1 h-1 bg-gray-300 mx-4"></div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <span className="ml-3 text-gray-600">Create Account</span>
              </div>
              <div className="flex-1 h-1 bg-gray-300 mx-4"></div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <span className="ml-3 text-gray-600">Setup Complete</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Form Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold mb-6">Create Your Account</h2>
              
              <form className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="john@company.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Acme Corporation"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Size *
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option>1-10 employees</option>
                      <option>11-50 employees</option>
                      <option>51-200 employees</option>
                      <option>201-500 employees</option>
                      <option>500+ employees</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password *
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Min. 8 characters"
                      required
                    />
                  </div>
                </div>

                {/* Plan Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Your Plan
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition">
                      <input type="radio" name="plan" value="starter" className="mr-3" />
                      <div className="flex-1">
                        <span className="font-semibold">Starter</span>
                        <span className="text-gray-600 ml-2">$999/month</span>
                      </div>
                    </label>
                    <label className="flex items-center p-4 border-2 border-blue-500 bg-blue-50 rounded-lg cursor-pointer">
                      <input type="radio" name="plan" value="professional" className="mr-3" defaultChecked />
                      <div className="flex-1">
                        <span className="font-semibold">Professional</span>
                        <span className="text-gray-600 ml-2">$4,999/month</span>
                        <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-1 rounded">Recommended</span>
                      </div>
                    </label>
                    <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition">
                      <input type="radio" name="plan" value="enterprise" className="mr-3" />
                      <div className="flex-1">
                        <span className="font-semibold">Enterprise</span>
                        <span className="text-gray-600 ml-2">Custom pricing</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Terms */}
                <div className="space-y-3">
                  <label className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" required />
                    <span className="text-sm text-gray-600">
                      I agree to the <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
                    </span>
                  </label>
                  <label className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <span className="text-sm text-gray-600">
                      Send me product updates and newsletters
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-center text-sm text-gray-600">
                  Already have an account? <Link href="/login" className="text-blue-600 hover:underline">Sign in</Link>
                </p>
              </form>
            </div>

            {/* Benefits */}
            <div className="space-y-8">
              {/* Trial Benefits */}
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold mb-6">What's Included in Your Free Trial</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Full Platform Access</h4>
                      <p className="text-gray-600 text-sm">Explore all features without limitations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">No Credit Card Required</h4>
                      <p className="text-gray-600 text-sm">Start your trial without payment details</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Onboarding Support</h4>
                      <p className="text-gray-600 text-sm">Get help from our expert team</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Cancel Anytime</h4>
                      <p className="text-gray-600 text-sm">No commitments or contracts</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Badge */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                  <h3 className="text-lg font-semibold">Enterprise Security</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• SOC 2 Type II Certified</li>
                  <li>• GDPR & CCPA Compliant</li>
                  <li>• 256-bit SSL Encryption</li>
                  <li>• 99.9% Uptime SLA</li>
                </ul>
              </div>

              {/* Testimonial */}
              <div className="bg-blue-50 p-6 rounded-xl">
                <p className="text-gray-700 italic mb-4">
                  "DataTranquil transformed our data operations. The onboarding was seamless, 
                  and we saw ROI within the first month."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    JD
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Jane Doe</p>
                    <p className="text-gray-600 text-xs">CTO, TechCorp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Happens Next?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Confirmation Email</h3>
              <p className="text-gray-600">
                You'll receive login credentials and onboarding materials immediately
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Onboarding Call</h3>
              <p className="text-gray-600">
                Our team will schedule a personalized onboarding session within 24 hours
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Start Building</h3>
              <p className="text-gray-600">
                Access the platform immediately and start your AI transformation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Common Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Do I need technical expertise?</h3>
              <p className="text-gray-600">
                No, our platform is designed for business users. We provide training and support.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Can I import existing data?</h3>
              <p className="text-gray-600">
                Yes, we support imports from 100+ data sources and formats.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What happens after the trial?</h3>
              <p className="text-gray-600">
                You can continue with a paid plan or export your data. No automatic charges.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Is my data secure?</h3>
              <p className="text-gray-600">
                Yes, we use enterprise-grade encryption and are SOC 2 certified.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Need Help Getting Started?
          </h3>
          <p className="text-blue-100 mb-6">
            Our team is here to help you every step of the way
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation" className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
              Schedule a Demo
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}