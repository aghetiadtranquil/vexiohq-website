'use client';

import Link from 'next/link';
import { Calendar, Clock, Video, Users, CheckCircle, Star, MessageSquare, Phone, Globe, Building2 } from 'lucide-react';

export default function Consultation() {
  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
  ];

  const consultationTypes = [
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Strategy Session',
      duration: '60 minutes',
      description: 'Deep dive into your AI needs and roadmap planning',
      popular: true,
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Quick Demo',
      duration: '30 minutes',
      description: 'Platform overview and key features demonstration',
      popular: false,
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Workshop',
      duration: '2 hours',
      description: 'Hands-on session with your entire team',
      popular: false,
    },
  ];

  const experts = [
    { name: 'Dr. Sarah Chen', role: 'AI Strategy Lead', expertise: 'Enterprise AI', rating: 4.9 },
    { name: 'Michael Rodriguez', role: 'Solutions Architect', expertise: 'ML Operations', rating: 4.8 },
    { name: 'Emily Thompson', role: 'Industry Expert', expertise: 'Healthcare AI', rating: 5.0 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Book Your Free AI Consultation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get personalized guidance from our AI experts. Discover how DataTranquil can transform your business.
          </p>
          
          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">100% Free</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Expert Guidance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Booking Form */}
            <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold mb-6">Schedule Your Consultation</h2>
              
              <form className="space-y-6">
                {/* Consultation Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Consultation Type
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {consultationTypes.map((type, index) => (
                      <label
                        key={index}
                        className={`relative flex flex-col items-center p-4 border-2 rounded-lg cursor-pointer transition ${
                          type.popular
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        {type.popular && (
                          <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                        <input
                          type="radio"
                          name="consultationType"
                          value={type.title}
                          className="sr-only"
                          defaultChecked={type.popular}
                        />
                        <div className="text-blue-600 mb-2">{type.icon}</div>
                        <h4 className="font-semibold text-sm">{type.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">{type.duration}</p>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Calendar Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>

                {/* Time Slots */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Available Time Slots (PST)
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    {timeSlots.map((time, index) => (
                      <label
                        key={index}
                        className="flex items-center justify-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition"
                      >
                        <input
                          type="radio"
                          name="timeSlot"
                          value={time}
                          className="sr-only"
                        />
                        <span className="text-sm">{time}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Your Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What would you like to discuss?
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us about your AI goals and challenges..."
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Book Consultation
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* What to Expect */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Discovery</p>
                      <p className="text-gray-600 text-xs">Understand your unique challenges</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Solution Mapping</p>
                      <p className="text-gray-600 text-xs">Identify the right AI solutions</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Roadmap</p>
                      <p className="text-gray-600 text-xs">Create your AI implementation plan</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Next Steps</p>
                      <p className="text-gray-600 text-xs">Clear action items and timeline</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Meet Your Expert */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-4">Meet Our Experts</h3>
                <div className="space-y-4">
                  {experts.map((expert, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">
                          {expert.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{expert.name}</p>
                        <p className="text-gray-600 text-xs">{expert.role}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-semibold">{expert.rating}</span>
                        </div>
                        <p className="text-gray-500 text-xs">{expert.expertise}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Options */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-4">Other Ways to Connect</h3>
                <div className="space-y-3">
                  <a href="tel:+1-415-555-0100" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
                    <Phone className="w-5 h-5" />
                    <span className="text-sm">+1 (415) 555-0100</span>
                  </a>
                  <a href="mailto:hello@datatranquil.com" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
                    <MessageSquare className="w-5 h-5" />
                    <span className="text-sm">hello@datatranquil.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Clock className="w-5 h-5" />
                    <span className="text-sm">Mon-Fri, 9 AM - 6 PM PST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say About Our Consultations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The consultation exceeded our expectations. We left with a clear roadmap and started implementation the next week."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <p className="font-semibold text-sm">David Park</p>
                  <p className="text-gray-600 text-xs">CTO, FinTech Innovations</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "DataTranquil's experts understood our industry challenges and provided practical, actionable solutions."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <p className="font-semibold text-sm">Lisa Chen</p>
                  <p className="text-gray-600 text-xs">VP Operations, HealthCare Plus</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Best hour we've invested. The insights we gained shaped our entire AI strategy for the next 3 years."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <p className="font-semibold text-sm">Mark Johnson</p>
                  <p className="text-gray-600 text-xs">CEO, RetailNext</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book your free consultation today and take the first step
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold"
          >
            Schedule Now
          </button>
        </div>
      </section>
    </div>
  );
}