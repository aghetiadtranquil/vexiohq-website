'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface LeadCaptureProps {
  title?: string;
  description?: string;
  resourceName?: string;
  onClose?: () => void;
}

export default function LeadCapture({ 
  title = "Get Your Free Resource", 
  description = "Enter your details to access this resource",
  resourceName = "resource",
  onClose 
}: LeadCaptureProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    phoneNumber: '',
    companySize: '',
    currentChallenge: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // First, save lead to CRM/database
      const leadResponse = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          resource: resourceName,
          timestamp: new Date().toISOString(),
          source: window.location.href,
          utm_source: new URLSearchParams(window.location.search).get('utm_source'),
          utm_medium: new URLSearchParams(window.location.search).get('utm_medium'),
          utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign'),
        }),
      });

      if (!leadResponse.ok) throw new Error('Failed to save lead');

      // Then generate secure download link
      const downloadResponse = await fetch('/api/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          resourceId: resourceName.toLowerCase().replace(/\s+/g, '-'),
          leadData: formData,
        }),
      });

      if (!downloadResponse.ok) throw new Error('Failed to generate download');

      const { downloadUrl } = await downloadResponse.json();

      // Show success message
      if (onClose) {
        // In production, this would show a success modal
        alert('Success! Check your email for the download link. You should receive it within 2 minutes.');
        onClose();
      }

      // Track conversion in analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          currency: 'USD',
          value: 100, // Estimated lead value
          resource_name: resourceName,
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Sorry, there was an error. Please try again or contact support@datatranquil.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          {onClose && (
            <button
              onClick={onClose}
              className="float-right text-slate-400 hover:text-slate-600"
            >
              <X className="h-6 w-6" />
            </button>
          )}
          
          <h2 className="text-3xl font-bold text-slate-900 mb-2">{title}</h2>
          <p className="text-slate-600 mb-8">{description}</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="jobTitle" className="block text-sm font-medium text-slate-700 mb-2">
                  Job Title *
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.jobTitle}
                  onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="companySize" className="block text-sm font-medium text-slate-700 mb-2">
                  Company Size *
                </label>
                <select
                  id="companySize"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.companySize}
                  onChange={(e) => setFormData({...formData, companySize: e.target.value})}
                >
                  <option value="">Select company size</option>
                  <option value="1-50">1-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-1000">201-1,000 employees</option>
                  <option value="1001-5000">1,001-5,000 employees</option>
                  <option value="5001+">5,001+ employees</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="currentChallenge" className="block text-sm font-medium text-slate-700 mb-2">
                  What's your biggest AI/Data challenge right now?
                </label>
                <textarea
                  id="currentChallenge"
                  rows={3}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.currentChallenge}
                  onChange={(e) => setFormData({...formData, currentChallenge: e.target.value})}
                />
              </div>
            </div>

            <div className="border-t pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Get Your Resource'}
              </button>
              <p className="text-xs text-slate-500 mt-4 text-center">
                By submitting this form, you agree to receive communications from DataTranquil. 
                We respect your privacy and will never share your information.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}