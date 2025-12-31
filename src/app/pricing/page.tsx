'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, X, Zap, Building2, Rocket, ArrowRight, Shield, Users, Cpu, HeadphonesIcon, Calculator, TrendingUp, DollarSign, BarChart3, Sparkles, Award, Globe, Lock } from 'lucide-react';

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('annual');
  const [selectedPlan, setSelectedPlan] = useState('growth');
  
  // ROI Calculator States
  const [employees, setEmployees] = useState(100);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [avgHourlyCost, setAvgHourlyCost] = useState(75);
  const [currentAccuracy, setCurrentAccuracy] = useState(70);

  // Calculate ROI
  const calculateROI = () => {
    const weeklyTimeSaved = hoursPerWeek * 0.4; // 40% time savings
    const weeklyCostSaved = weeklyTimeSaved * employees * avgHourlyCost;
    const annualSavings = weeklyCostSaved * 52;
    const accuracyImprovement = 95 - currentAccuracy; // Target 95% accuracy
    const errorReductionSavings = (accuracyImprovement / 100) * annualSavings * 0.5;
    const totalAnnualSavings = annualSavings + errorReductionSavings;
    const monthlyROI = totalAnnualSavings / 12;
    
    return {
      monthlyROI: Math.round(monthlyROI),
      annualSavings: Math.round(totalAnnualSavings),
      timeSaved: Math.round(weeklyTimeSaved * employees * 52),
      accuracyGain: accuracyImprovement,
      paybackPeriod: Math.round((49999 / monthlyROI) * 10) / 10 // months
    };
  };

  const roi = calculateROI();

  const plans = [
    {
      id: 'pilot',
      name: 'Pilot',
      subtitle: 'Proof of Concept',
      price: billingPeriod === 'monthly' ? 9999 : 7999,
      originalPrice: billingPeriod === 'monthly' ? null : 9999,
      period: '/month',
      description: 'Perfect for validating AI use cases',
      color: 'gray',
      popular: false,
      badge: null,
      metrics: {
        users: 'Up to 10',
        dataProcessing: '100GB/month',
        apiCalls: '100K/month',
        support: 'Business hours',
        sla: '99.5%'
      },
      features: [
        { text: '3 pre-built AI models', included: true },
        { text: 'Basic data connectors', included: true },
        { text: 'Standard security', included: true },
        { text: 'Email support', included: true },
        { text: 'Quarterly business reviews', included: true },
        { text: 'Basic analytics dashboard', included: true },
        { text: 'Custom model training', included: false },
        { text: 'Dedicated success manager', included: false },
        { text: 'White-label options', included: false },
        { text: 'On-premise deployment', included: false },
        { text: 'Advanced governance', included: false }
      ]
    },
    {
      id: 'growth',
      name: 'Growth',
      subtitle: 'Scale Your AI',
      price: billingPeriod === 'monthly' ? 49999 : 39999,
      originalPrice: billingPeriod === 'monthly' ? null : 49999,
      period: '/month',
      description: 'For businesses ready to scale AI across teams',
      color: 'blue',
      popular: true,
      badge: 'MOST POPULAR',
      metrics: {
        users: 'Up to 100',
        dataProcessing: '5TB/month',
        apiCalls: '10M/month',
        support: 'Priority 24/5',
        sla: '99.9%'
      },
      features: [
        { text: '15+ pre-built AI models', included: true },
        { text: 'All data connectors', included: true },
        { text: 'Advanced security & compliance', included: true },
        { text: 'Priority phone & email support', included: true },
        { text: 'Monthly business reviews', included: true },
        { text: 'Advanced analytics & insights', included: true },
        { text: 'Custom model training (5/month)', included: true },
        { text: 'Dedicated success manager', included: true },
        { text: 'API access & webhooks', included: true },
        { text: 'Role-based access control', included: true },
        { text: 'On-premise deployment', included: false }
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      subtitle: 'Transform at Scale',
      price: 'Custom',
      originalPrice: null,
      period: '',
      description: 'Complete AI transformation for large organizations',
      color: 'purple',
      popular: false,
      badge: 'TAILORED',
      metrics: {
        users: 'Unlimited',
        dataProcessing: 'Unlimited',
        apiCalls: 'Unlimited',
        support: '24/7 Dedicated',
        sla: '99.99%'
      },
      features: [
        { text: 'Unlimited AI models & custom builds', included: true },
        { text: 'Custom integrations & connectors', included: true },
        { text: 'Enterprise security & compliance', included: true },
        { text: '24/7 dedicated support team', included: true },
        { text: 'Weekly executive briefings', included: true },
        { text: 'Custom dashboards & reporting', included: true },
        { text: 'Unlimited custom model training', included: true },
        { text: 'Strategic advisory services', included: true },
        { text: 'White-label & embedded options', included: true },
        { text: 'Multi-cloud & on-premise', included: true },
        { text: 'Advanced governance & MLOps', included: true }
      ]
    }
  ];

  const comparisonCategories = [
    {
      name: 'AI Capabilities',
      features: [
        { name: 'Pre-built Models', pilot: '3', growth: '15+', enterprise: 'Unlimited' },
        { name: 'Custom Models', pilot: '—', growth: '5/month', enterprise: 'Unlimited' },
        { name: 'Model Accuracy', pilot: '85%', growth: '92%', enterprise: '99%+' },
        { name: 'Processing Speed', pilot: 'Standard', growth: 'Fast', enterprise: 'Ultra-fast' },
        { name: 'AutoML Features', pilot: 'Basic', growth: 'Advanced', enterprise: 'Full Suite' }
      ]
    },
    {
      name: 'Data & Integration',
      features: [
        { name: 'Data Processing', pilot: '100GB/mo', growth: '5TB/mo', enterprise: 'Unlimited' },
        { name: 'Data Sources', pilot: '5', growth: '50+', enterprise: 'Unlimited' },
        { name: 'API Calls', pilot: '100K/mo', growth: '10M/mo', enterprise: 'Unlimited' },
        { name: 'Real-time Processing', pilot: '—', growth: '✓', enterprise: '✓' },
        { name: 'Batch Processing', pilot: '✓', growth: '✓', enterprise: '✓' }
      ]
    },
    {
      name: 'Support & Services',
      features: [
        { name: 'Support Hours', pilot: 'Business', growth: '24/5', enterprise: '24/7' },
        { name: 'Response Time', pilot: '24 hours', growth: '2 hours', enterprise: '15 minutes' },
        { name: 'Success Manager', pilot: '—', growth: '✓', enterprise: 'Team' },
        { name: 'Training Sessions', pilot: '2/year', growth: 'Monthly', enterprise: 'Weekly' },
        { name: 'Strategic Advisory', pilot: '—', growth: 'Quarterly', enterprise: 'On-demand' }
      ]
    },
    {
      name: 'Security & Compliance',
      features: [
        { name: 'Data Encryption', pilot: 'Standard', growth: 'Advanced', enterprise: 'Military-grade' },
        { name: 'Compliance', pilot: 'GDPR', growth: 'GDPR, HIPAA', enterprise: 'All major' },
        { name: 'Audit Logs', pilot: '30 days', growth: '1 year', enterprise: 'Unlimited' },
        { name: 'SSO/SAML', pilot: '—', growth: '✓', enterprise: '✓' },
        { name: 'Private Cloud Option', pilot: '—', growth: '—', enterprise: '✓' }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero Section - McKinsey Style */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="font-medium">Transparent pricing. No hidden fees. Proven ROI.</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Investment That
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Pays for Itself
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-12">
            Flexible pricing for businesses of all sizes.
            Every plan includes implementation support and dedicated account management.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-white mb-1">70+</div>
              <div className="text-sm text-blue-200">Projects Delivered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-white mb-1">4</div>
              <div className="text-sm text-blue-200">AI Products</div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Calculate Your ROI</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how much you could save with VexioHQ's AI platform
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Your Current State</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Employees Using AI
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    value={employees}
                    onChange={(e) => setEmployees(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>10</span>
                    <span className="font-bold text-blue-600">{employees}</span>
                    <span>1000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hours per Week on Manual Tasks
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>5</span>
                    <span className="font-bold text-blue-600">{hoursPerWeek}</span>
                    <span>40</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Average Hourly Cost per Employee ($)
                  </label>
                  <input
                    type="range"
                    min="25"
                    max="200"
                    value={avgHourlyCost}
                    onChange={(e) => setAvgHourlyCost(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>$25</span>
                    <span className="font-bold text-blue-600">${avgHourlyCost}</span>
                    <span>$200</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Process Accuracy (%)
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="90"
                    value={currentAccuracy}
                    onChange={(e) => setCurrentAccuracy(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>50%</span>
                    <span className="font-bold text-blue-600">{currentAccuracy}%</span>
                    <span>90%</span>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Your Projected Returns</h3>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-gray-600">Monthly ROI</div>
                        <div className="text-3xl font-bold text-green-600">
                          ${roi.monthlyROI.toLocaleString()}
                        </div>
                      </div>
                      <TrendingUp className="w-10 h-10 text-green-500" />
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-gray-600">Annual Savings</div>
                        <div className="text-2xl font-bold text-blue-600">
                          ${roi.annualSavings.toLocaleString()}
                        </div>
                      </div>
                      <DollarSign className="w-8 h-8 text-blue-500" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-3">
                      <div className="text-sm text-gray-600">Time Saved/Year</div>
                      <div className="text-xl font-bold text-purple-600">
                        {roi.timeSaved.toLocaleString()} hrs
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="text-sm text-gray-600">Accuracy Gain</div>
                      <div className="text-xl font-bold text-purple-600">
                        +{roi.accuracyGain}%
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-4 text-white">
                    <div className="text-sm font-medium mb-1">Payback Period</div>
                    <div className="text-2xl font-bold">{roi.paybackPeriod} months</div>
                    <div className="text-sm opacity-90 mt-1">
                      Based on Growth plan investment
                    </div>
                  </div>
                </div>

                <Link href="/consultation" className="mt-6 w-full block text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get Detailed ROI Analysis →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4">
            <span className={`text-lg ${billingPeriod === 'monthly' ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button 
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
              className="relative w-20 h-10 bg-blue-600 rounded-full transition-colors"
            >
              <span className={`absolute top-1 ${billingPeriod === 'annual' ? 'left-11' : 'left-1'} w-8 h-8 bg-white rounded-full transition-all duration-300 shadow-lg`}></span>
            </button>
            <span className={`text-lg ${billingPeriod === 'annual' ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Annual
              <span className="ml-2 inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Save 20%
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Plans - McKinsey Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl transition-all duration-300 ${
                  plan.popular 
                    ? 'ring-2 ring-blue-600 shadow-2xl transform scale-105' 
                    : 'border border-gray-200 shadow-lg hover:shadow-xl'
                }`}
                onMouseEnter={() => setSelectedPlan(plan.id)}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-lg text-gray-600">{plan.subtitle}</p>
                    <p className="text-sm text-gray-500 mt-2">{plan.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-8">
                    {plan.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">
                        ${plan.originalPrice.toLocaleString()}/month
                      </div>
                    )}
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-gray-900">
                        {typeof plan.price === 'number' ? `$${plan.price.toLocaleString()}` : plan.price}
                      </span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                    {billingPeriod === 'annual' && typeof plan.price === 'number' && (
                      <div className="text-sm text-green-600 font-medium mt-2">
                        Save ${((plan.originalPrice || plan.price) - plan.price) * 12} annually
                      </div>
                    )}
                  </div>

                  {/* Key Metrics */}
                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <div className="text-gray-600">Users</div>
                        <div className="font-semibold text-gray-900">{plan.metrics.users}</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Data</div>
                        <div className="font-semibold text-gray-900">{plan.metrics.dataProcessing}</div>
                      </div>
                      <div>
                        <div className="text-gray-600">API Calls</div>
                        <div className="font-semibold text-gray-900">{plan.metrics.apiCalls}</div>
                      </div>
                      <div>
                        <div className="text-gray-600">SLA</div>
                        <div className="font-semibold text-gray-900">{plan.metrics.sla}</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={plan.id === 'enterprise' ? '/contact' : '/get-started'}
                    className={`block text-center py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:-translate-y-0.5'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.id === 'enterprise' ? 'Schedule Consultation' : 'Start 30-Day Trial'}
                  </Link>

                  {/* Features List */}
                  <div className="mt-8 space-y-3">
                    <div className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                      What's Included
                    </div>
                    {plan.features.slice(0, 8).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mt-0.5 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enterprise CTA */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our enterprise plans are tailored to your specific needs with unlimited scale, 
              custom SLAs, and dedicated support teams.
            </p>
            <Link href="/contact" className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Talk to Enterprise Sales
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Feature Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Detailed Feature Comparison</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every plan is designed to deliver value. Choose based on your scale and complexity.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {comparisonCategories.map((category, catIdx) => (
              <div key={catIdx}>
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4">
                  <h3 className="text-lg font-bold text-gray-900">{category.name}</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-6 font-medium text-gray-600">Feature</th>
                        <th className="text-center p-6 font-medium text-gray-600">Pilot</th>
                        <th className="text-center p-6 font-medium text-gray-600 bg-blue-50">Growth</th>
                        <th className="text-center p-6 font-medium text-gray-600">Enterprise</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.features.map((feature, idx) => (
                        <tr key={idx} className="border-b hover:bg-gray-50">
                          <td className="p-6 font-medium text-gray-900">{feature.name}</td>
                          <td className="text-center p-6 text-gray-600">{feature.pilot}</td>
                          <td className="text-center p-6 bg-blue-50 font-medium text-gray-900">{feature.growth}</td>
                          <td className="text-center p-6 text-gray-600">{feature.enterprise}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Guarantee */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-12 text-center">
            <Award className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Success Guarantee
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              We're so confident in our platform that we guarantee measurable ROI within 6 months 
              or we'll work for free until you achieve your targets.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6">
                <Shield className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">30-Day Trial</h3>
                <p className="text-sm text-gray-600">Full access, no credit card required</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <TrendingUp className="w-10 h-10 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">ROI Guarantee</h3>
                <p className="text-sm text-gray-600">Measurable returns or money back</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <HeadphonesIcon className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Success Support</h3>
                <p className="text-sm text-gray-600">Dedicated team ensures your success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <details className="bg-white rounded-xl shadow-md group">
              <summary className="p-6 cursor-pointer list-none">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    How quickly can we see ROI?
                  </h3>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </div>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Most clients see initial returns within 3-6 months. Our Growth plan customers 
                report an average payback period of 6 months, with full ROI typically achieved 
                within 12-18 months. Enterprise clients often see faster returns due to scale.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-md group">
              <summary className="p-6 cursor-pointer list-none">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    What's included in the 30-day trial?
                  </h3>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </div>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Full access to all features of your selected plan, including implementation support, 
                training sessions, and success management. No credit card required. You can upgrade, 
                downgrade, or cancel anytime during the trial.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-md group">
              <summary className="p-6 cursor-pointer list-none">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Can we switch plans later?
                  </h3>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </div>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Absolutely. You can upgrade or downgrade your plan at any time. Upgrades take 
                effect immediately with prorated billing. Downgrades take effect at the next 
                billing cycle. No penalties or fees for plan changes.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-md group">
              <summary className="p-6 cursor-pointer list-none">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    What about data security and compliance?
                  </h3>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </div>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                All plans include enterprise-grade security with end-to-end encryption, SOC 2 
                Type II compliance, and GDPR compliance. Growth and Enterprise plans add HIPAA 
                compliance, advanced threat detection, and custom security policies. Enterprise 
                plans can include on-premise deployment for maximum control.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-md group">
              <summary className="p-6 cursor-pointer list-none">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    How does implementation work?
                  </h3>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </div>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Every plan includes guided implementation. Pilot plans get self-service resources 
                and 2 training sessions. Growth plans receive dedicated onboarding with weekly 
                check-ins for the first month. Enterprise plans get white-glove implementation 
                with a dedicated team, custom training programs, and change management support.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Bottom Line CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get started with VexioHQ and transform your business with AI.
            Start your 30-day trial today with no credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/get-started" 
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Start Free Trial →
            </Link>
            <Link 
              href="/consultation" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>

          <div className="flex items-center justify-center gap-8 text-blue-100">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>30-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}