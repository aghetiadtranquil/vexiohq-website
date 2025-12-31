'use client';

import { useState } from 'react';
import { Mail, Check, ArrowRight } from 'lucide-react';

interface NewsletterSignupProps {
  variant?: 'inline' | 'sidebar' | 'footer';
  title?: string;
  description?: string;
  placeholder?: string;
  className?: string;
  context?: string; // For analytics tracking
}

export default function NewsletterSignup({
  variant = 'inline',
  title,
  description,
  placeholder = 'Enter your email address',
  className = '',
  context = 'unknown'
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  // #COMPLETION_DRIVE_IMPL: Default content based on variant
  const defaultContent = {
    inline: {
      title: 'Stay Informed with AI Insights',
      description: 'Get weekly insights on AI transformation, case studies, and industry trends delivered to your inbox.'
    },
    sidebar: {
      title: 'Newsletter',
      description: 'Weekly AI insights and industry updates.'
    },
    footer: {
      title: 'Stay Updated',
      description: 'Get the latest insights delivered to your inbox.'
    }
  };

  const content = {
    title: title || defaultContent[variant].title,
    description: description || defaultContent[variant].description
  };

  // #COMPLETION_DRIVE_IMPL: Email validation
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Email is required');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // #COMPLETION_DRIVE_INTEGRATION: Connect to existing lead capture infrastructure
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: context,
          timestamp: new Date().toISOString(),
          url: window.location.href,
          utm_source: new URLSearchParams(window.location.search).get('utm_source'),
          utm_medium: new URLSearchParams(window.location.search).get('utm_medium'),
          utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign'),
        }),
      });

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      setIsSubscribed(true);
      setEmail('');

      // #COMPLETION_DRIVE_IMPL: Track subscription in analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'newsletter_signup', {
          event_category: 'engagement',
          event_label: context,
          value: 1
        });
      }

    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setError('Something went wrong. Please try again or contact hello@vexiohq.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  // #COMPLETION_DRIVE_IMPL: Reset subscription state after showing success
  if (isSubscribed) {
    setTimeout(() => setIsSubscribed(false), 5000);
  }

  // Render based on variant
  if (variant === 'sidebar') {
    return (
      <div className={`bg-slate-50 rounded-xl p-6 ${className}`}>
        <div className="flex items-center mb-4">
          <Mail className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="font-bold text-slate-900">{content.title}</h3>
        </div>
        <p className="text-sm text-slate-600 mb-4">{content.description}</p>
        
        {isSubscribed ? (
          <div className="flex items-center text-green-600 bg-green-50 p-3 rounded-lg">
            <Check className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Successfully subscribed!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                  error ? 'border-red-300 bg-red-50' : 'border-slate-300'
                }`}
                disabled={isSubmitting}
                aria-label="Email address for newsletter"
              />
              {error && (
                <p className="mt-1 text-xs text-red-600">{error}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}
        <p className="text-xs text-slate-500 mt-3">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={className}>
        <h3 className="font-bold text-white mb-4">{content.title}</h3>
        <p className="text-slate-300 text-sm mb-4">{content.description}</p>
        
        {isSubscribed ? (
          <div className="flex items-center text-green-400 bg-green-900/20 p-3 rounded-lg">
            <Check className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Thanks for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                className={`w-full px-3 py-2 text-sm bg-slate-800 border text-white placeholder-slate-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                  error ? 'border-red-400 bg-red-900/20' : 'border-slate-600'
                }`}
                disabled={isSubmitting}
                aria-label="Email address for newsletter"
              />
              {error && (
                <p className="mt-1 text-xs text-red-400">{error}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}
        <p className="text-xs text-slate-400 mt-3">
          Weekly insights • No spam • Unsubscribe anytime
        </p>
      </div>
    );
  }

  // Default: inline variant
  return (
    <section className={`py-12 bg-gradient-to-r from-blue-600 to-indigo-700 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <Mail className="h-12 w-12 text-blue-200 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">{content.title}</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">{content.description}</p>
        </div>

        {isSubscribed ? (
          <div className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-lg text-lg">
            <Check className="h-6 w-6 mr-3" />
            <span className="font-semibold">Thank you for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={placeholder}
                  className={`w-full px-4 py-3 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors ${
                    error ? 'ring-2 ring-red-400 bg-red-50' : ''
                  }`}
                  disabled={isSubmitting}
                  aria-label="Email address for newsletter"
                />
                {error && (
                  <p className="mt-2 text-sm text-red-200">{error}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold disabled:opacity-50 inline-flex items-center justify-center"
              >
                {isSubmitting ? 'Subscribing...' : (
                  <>
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        <p className="text-blue-200 text-sm mt-6">
          Get AI insights delivered to your inbox • No spam • Unsubscribe anytime
        </p>
      </div>
    </section>
  );
}