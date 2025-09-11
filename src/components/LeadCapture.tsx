'use client';

import { useState, useRef, useEffect } from 'react';
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
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const firstErrorRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  
  // Focus management for modal
  useEffect(() => {
    if (modalRef.current) {
      // Focus the close button when modal opens
      closeButtonRef.current?.focus();
      
      // Trap focus within modal
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose?.();
        }
        
        if (e.key === 'Tab') {
          const focusableElements = modalRef.current?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements?.[0] as HTMLElement;
          const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement;
          
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      };
      
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [onClose]);
  
  // Validation function
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }
    
    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = 'Job title is required';
    }
    
    if (!formData.companySize) {
      newErrors.companySize = 'Company size is required';
    }
    
    return newErrors;
  };
  
  // Focus first error field
  useEffect(() => {
    if (Object.keys(errors).length > 0 && submitAttempted) {
      const firstErrorField = Object.keys(errors)[0];
      const element = document.getElementById(firstErrorField);
      element?.focus();
    }
  }, [errors, submitAttempted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);
    
    const validationErrors = validateForm();
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length > 0) {
      // #COMPLETION_DRIVE_IMPL: Announcing validation errors to screen readers
      const errorMessage = `Please fix ${Object.keys(validationErrors).length} error${Object.keys(validationErrors).length > 1 ? 's' : ''}`;
      // This would be announced by the live region
      return;
    }
    
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
      setErrors({ submit: 'Sorry, there was an error. Please try again or contact support@datatranquil.com' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-capture-title"
      aria-describedby="lead-capture-description"
    >
      {/* Screen reader announcements */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {Object.keys(errors).length > 0 && submitAttempted && 
          `Please fix ${Object.keys(errors).length} error${Object.keys(errors).length > 1 ? 's' : ''} in the form`
        }
        {isSubmitting && 'Submitting form, please wait'}
      </div>
      
      <div 
        ref={modalRef}
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto focus:outline-none"
        tabIndex={-1}
      >
        <div className="p-8">
          {onClose && (
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="float-right text-slate-400 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded p-1"
              aria-label="Close dialog"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          )}
          
          <h2 id="lead-capture-title" className="text-3xl font-bold text-slate-900 mb-2">{title}</h2>
          <p id="lead-capture-description" className="text-slate-600 mb-8">{description}</p>
          
          {/* Form-level error message */}
          {errors.submit && (
            <div 
              className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
              role="alert"
              aria-live="polite"
            >
              <div className="flex">
                <div className="text-red-800">
                  <strong>Error:</strong> {errors.submit}
                </div>
              </div>
            </div>
          )}

          <form 
            onSubmit={handleSubmit} 
            className="space-y-6"
            noValidate
            aria-describedby={errors.submit ? 'form-error' : undefined}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  aria-required="true"
                  aria-invalid={errors.firstName ? 'true' : 'false'}
                  aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    errors.firstName ? 'border-red-300 bg-red-50' : 'border-slate-300'
                  }`}
                  value={formData.firstName}
                  onChange={(e) => {
                    setFormData({...formData, firstName: e.target.value});
                    if (errors.firstName) {
                      setErrors({...errors, firstName: ''});
                    }
                  }}
                />
                {errors.firstName && (
                  <div id="firstName-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.firstName}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  aria-required="true"
                  aria-invalid={errors.lastName ? 'true' : 'false'}
                  aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    errors.lastName ? 'border-red-300 bg-red-50' : 'border-slate-300'
                  }`}
                  value={formData.lastName}
                  onChange={(e) => {
                    setFormData({...formData, lastName: e.target.value});
                    if (errors.lastName) {
                      setErrors({...errors, lastName: ''});
                    }
                  }}
                />
                {errors.lastName && (
                  <div id="lastName-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.lastName}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-required="true"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error email-hint' : 'email-hint'}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    errors.email ? 'border-red-300 bg-red-50' : 'border-slate-300'
                  }`}
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({...formData, email: e.target.value});
                    if (errors.email) {
                      setErrors({...errors, email: ''});
                    }
                  }}
                />
                <div id="email-hint" className="mt-1 text-xs text-slate-500">
                  We'll use this to send you the resource
                </div>
                {errors.email && (
                  <div id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.email}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  aria-required="true"
                  aria-invalid={errors.company ? 'true' : 'false'}
                  aria-describedby={errors.company ? 'company-error' : undefined}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    errors.company ? 'border-red-300 bg-red-50' : 'border-slate-300'
                  }`}
                  value={formData.company}
                  onChange={(e) => {
                    setFormData({...formData, company: e.target.value});
                    if (errors.company) {
                      setErrors({...errors, company: ''});
                    }
                  }}
                />
                {errors.company && (
                  <div id="company-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.company}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="jobTitle" className="block text-sm font-medium text-slate-700 mb-2">
                  Job Title *
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  required
                  aria-required="true"
                  aria-invalid={errors.jobTitle ? 'true' : 'false'}
                  aria-describedby={errors.jobTitle ? 'jobTitle-error' : undefined}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    errors.jobTitle ? 'border-red-300 bg-red-50' : 'border-slate-300'
                  }`}
                  value={formData.jobTitle}
                  onChange={(e) => {
                    setFormData({...formData, jobTitle: e.target.value});
                    if (errors.jobTitle) {
                      setErrors({...errors, jobTitle: ''});
                    }
                  }}
                />
                {errors.jobTitle && (
                  <div id="jobTitle-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.jobTitle}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  aria-describedby="phoneNumber-hint"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                />
                <div id="phoneNumber-hint" className="mt-1 text-xs text-slate-500">
                  Optional - for follow-up calls
                </div>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="companySize" className="block text-sm font-medium text-slate-700 mb-2">
                  Company Size *
                </label>
                <select
                  id="companySize"
                  name="companySize"
                  required
                  aria-required="true"
                  aria-invalid={errors.companySize ? 'true' : 'false'}
                  aria-describedby={errors.companySize ? 'companySize-error' : undefined}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    errors.companySize ? 'border-red-300 bg-red-50' : 'border-slate-300'
                  }`}
                  value={formData.companySize}
                  onChange={(e) => {
                    setFormData({...formData, companySize: e.target.value});
                    if (errors.companySize) {
                      setErrors({...errors, companySize: ''});
                    }
                  }}
                >
                  <option value="">Select company size</option>
                  <option value="1-50">1-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-1000">201-1,000 employees</option>
                  <option value="1001-5000">1,001-5,000 employees</option>
                  <option value="5001+">5,001+ employees</option>
                </select>
                {errors.companySize && (
                  <div id="companySize-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.companySize}
                  </div>
                )}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="currentChallenge" className="block text-sm font-medium text-slate-700 mb-2">
                  What's your biggest AI/Data challenge right now?
                </label>
                <textarea
                  id="currentChallenge"
                  name="currentChallenge"
                  rows={3}
                  aria-describedby="currentChallenge-hint"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  value={formData.currentChallenge}
                  onChange={(e) => setFormData({...formData, currentChallenge: e.target.value})}
                />
                <div id="currentChallenge-hint" className="mt-1 text-xs text-slate-500">
                  Optional - helps us provide more relevant content
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                aria-describedby="submit-button-description"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span aria-hidden="true">Submitting...</span>
                    <span className="sr-only">Please wait, submitting form</span>
                  </>
                ) : (
                  'Get Your Resource'
                )}
              </button>
              <div id="submit-button-description" className="sr-only">
                Submit the form to receive your free resource via email
              </div>
              <p className="text-xs text-slate-500 mt-4 text-center">
                By submitting this form, you agree to receive communications from DataTranquil. 
                We respect your privacy and will never share your information.
              </p>
              <p className="text-xs text-slate-400 mt-2 text-center">
                <span className="sr-only">Form help: </span>
                Required fields are marked with an asterisk (*). 
                <a href="/privacy" className="underline hover:text-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500">Privacy Policy</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}