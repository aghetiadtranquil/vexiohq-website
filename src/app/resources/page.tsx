'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Download, FileText, Video, Headphones, BookOpen, ArrowRight, Lock, X, CheckCircle, Building2, TrendingUp } from 'lucide-react';

const resources = {
  whitepapers: [
    {
      title: "The Enterprise Guide to Agentic AI Implementation",
      description: "Comprehensive 40-page guide covering architecture, use cases, and ROI metrics from 50+ implementations.",
      pages: "40 pages",
      format: "PDF",
      gated: true,
      slug: "enterprise-agentic-ai-guide",
      category: "Strategy"
    },
    {
      title: "From Oracle BI to Modern AI: Migration Playbook",
      description: "Step-by-step migration guide based on 16+ Oracle implementations and successful AI transformations.",
      pages: "32 pages",
      format: "PDF",
      gated: true,
      slug: "oracle-to-ai-migration",
      category: "Technical"
    },
    {
      title: "Data Quality for AI Success: The 500M Record Case Study",
      description: "How we achieved high data quality for enterprise AI readiness.",
      pages: "28 pages",
      format: "PDF",
      gated: true,
      slug: "data-quality-ai-success",
      category: "Case Study"
    },
    {
      title: "ROI Calculator: Measuring AI Impact",
      description: "Interactive framework for calculating and tracking AI implementation ROI with real benchmarks.",
      pages: "Excel Template",
      format: "XLSX",
      gated: false,
      slug: "ai-roi-calculator",
      category: "Tools"
    }
  ],
  ebooks: [
    {
      title: "The CEO's Guide to AI Transformation",
      description: "Executive-level insights on leading AI initiatives, change management, and avoiding common pitfalls.",
      pages: "120 pages",
      format: "PDF/EPUB",
      gated: true,
      slug: "ceo-ai-transformation-guide",
      category: "Leadership"
    },
    {
      title: "Vibe Coding: Building Software That Thinks",
      description: "Introduction to the revolutionary Vibe Coding methodology and its applications in enterprise development.",
      pages: "85 pages",
      format: "PDF",
      gated: true,
      slug: "vibe-coding-methodology",
      category: "Innovation"
    }
  ],
  webinars: [
    {
      title: "Live Demo: Building Your First Agentic AI System",
      description: "90-minute hands-on workshop showing real implementation of an autonomous AI agent.",
      duration: "90 min",
      date: "Jan 15, 2025",
      type: "Upcoming Live",
      slug: "agentic-ai-live-demo"
    },
    {
      title: "AI Strategy Roundtable: Fortune 500 Leaders Share Insights",
      description: "Panel discussion with AI leaders from Sunrun, Wind River, and other enterprises.",
      duration: "60 min",
      date: "On Demand",
      type: "Recorded",
      slug: "fortune-500-ai-roundtable"
    },
    {
      title: "Data Platform Modernization: GCP vs AWS Deep Dive",
      description: "Technical comparison based on real implementations, with cost analysis and performance metrics.",
      duration: "75 min",
      date: "On Demand",
      type: "Recorded",
      slug: "gcp-aws-comparison"
    }
  ],
  caseStudies: [
    {
      title: "Sunrun: 500M Records to AI-Ready in 90 Days",
      client: "Sunrun",
      industry: "Solar Energy",
      description: "How we transformed 500M+ customer records into a unified AI-ready data platform, enabling predictive maintenance and customer insights.",
      results: ["High data quality", "Faster processing time", "Cost savings"],
      slug: "sunrun-data-transformation",
      gated: true,
      logo: "/logos/sunrun.svg"
    },
    {
      title: "Wind River: From Oracle BI to Modern AI Analytics",
      client: "Wind River Systems",
      industry: "Technology",
      description: "Complete migration from legacy Oracle BI to cloud-native AI analytics platform, enabling real-time insights and autonomous reporting.",
      results: ["85% faster reporting", "Zero downtime migration", "40% cost reduction"],
      slug: "wind-river-ai-migration",
      gated: true,
      logo: "/logos/wind-river.svg"
    },
    {
      title: "Insurance Giant: AI-Powered Claims Processing",
      client: "Fortune 500 Insurer",
      industry: "Insurance",
      description: "Implemented agentic AI system for automated claims processing, reducing processing time from days to minutes.",
      results: ["95% automation rate", "72-hour to 2-hour TAT", "99.2% accuracy"],
      slug: "insurance-claims-ai",
      gated: false,
      logo: "/logos/insurance.svg"
    },
    {
      title: "Retail Chain: Inventory Optimization with Predictive AI",
      client: "National Retailer",
      industry: "Retail",
      description: "Built predictive AI system for inventory management across 200+ stores, reducing stockouts and overstock situations.",
      results: ["30% inventory reduction", "25% increase in sales", "ROI in 6 months"],
      slug: "retail-inventory-ai",
      gated: false,
      logo: "/logos/retail.svg"
    }
  ],
  templates: [
    {
      title: "AI Readiness Assessment Template",
      description: "Comprehensive checklist to evaluate your organization's preparedness for AI adoption.",
      format: "Notion/Excel",
      gated: false,
      slug: "ai-readiness-template"
    },
    {
      title: "Data Governance Framework for AI",
      description: "Complete framework including policies, procedures, and RACI matrices for AI data governance.",
      format: "Word/PDF",
      gated: true,
      slug: "ai-governance-framework"
    },
    {
      title: "AI Project Charter Template",
      description: "Battle-tested template for defining AI projects with clear success metrics and stakeholder alignment.",
      format: "Word/Google Docs",
      gated: false,
      slug: "ai-project-charter"
    }
  ]
};

// Schema markup generators
const generateResourceSchema = (resource: any, type: string) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type === "whitepaper" || type === "ebook" ? "Report" : 
            type === "webinar" ? "Event" : 
            type === "template" ? "CreativeWork" :
            type === "casestudy" ? "Article" : "CreativeWork",
    "name": resource.title,
    "description": resource.description,
    "author": {
      "@type": "Organization",
      "name": "VexioHQ"
    },
    "publisher": {
      "@type": "Organization",
      "name": "VexioHQ",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vexiohq.com/logo.png"
      }
    },
    "datePublished": "2025-01-01",
    "inLanguage": "en-US"
  };

  if (type === "whitepaper" || type === "ebook") {
    return {
      ...baseSchema,
      "reportNumber": resource.pages,
      "encoding": {
        "@type": "MediaObject",
        "contentUrl": `/resources/${resource.slug}`,
        "encodingFormat": resource.format
      }
    };
  }

  if (type === "webinar") {
    return {
      ...baseSchema,
      "@type": "Event",
      "eventStatus": resource.type === "Upcoming Live" ? "EventScheduled" : "EventCompleted",
      "startDate": resource.date !== "On Demand" ? resource.date : undefined,
      "duration": resource.duration,
      "eventAttendanceMode": "OnlineEventAttendanceMode",
      "location": {
        "@type": "VirtualLocation",
        "url": `/resources/webinars/${resource.slug}`
      }
    };
  }

  if (type === "casestudy") {
    return {
      ...baseSchema,
      "@type": "Article",
      "articleSection": "Case Studies",
      "about": {
        "@type": "Organization",
        "name": resource.client
      },
      "keywords": [resource.industry, "AI", "Case Study", "Digital Transformation"]
    };
  }

  return baseSchema;
};

// Lead Capture Modal Component
const LeadCaptureModal = ({ isOpen, onClose, resource, onSubmit }: any) => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: '',
    phone: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          resourceId: resource.slug,
          leadData: formData
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setIsSuccess(true);
        onSubmit(data);
        
        // Close modal after 3 seconds
        setTimeout(() => {
          onClose();
          setIsSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Success!</h3>
            <p className="text-slate-600">
              Check your email for the download link. It should arrive within a few minutes.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Get Your Free Resource
            </h2>
            <p className="text-slate-600 mb-6">
              Fill out the form below to access: <strong>{resource?.title}</strong>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name *"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <input
                type="email"
                placeholder="Work Email *"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Company *"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Job Title"
                value={formData.jobTitle}
                onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="tel"
                placeholder="Phone (Optional)"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  required
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1"
                />
                <span className="text-sm text-slate-600">
                  I agree to receive communications from VexioHQ about our services and resources. 
                  I can unsubscribe at any time.
                </span>
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50"
              >
                {isSubmitting ? 'Processing...' : 'Download Resource'}
              </button>
            </form>

            <p className="text-xs text-slate-500 mt-4 text-center">
              We respect your privacy. Your information will never be shared.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default function ResourcesPage() {
  const [selectedResource, setSelectedResource] = useState(null);
  const [showLeadModal, setShowLeadModal] = useState(false);

  const handleResourceClick = (resource: any, isGated: boolean) => {
    if (isGated) {
      setSelectedResource(resource);
      setShowLeadModal(true);
    } else {
      // Direct download for non-gated resources
      window.location.href = `/resources/${resource.slug}`;
    }
  };

  const handleLeadSubmit = (data: any) => {
    // In development, use the returned URL
    if (data.downloadUrl) {
      window.open(data.downloadUrl, '_blank');
    }
  };
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              AI Transformation Resources
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Practical guides, templates, and tools from 36,000+ hours of enterprise 
              implementations. Real insights, not theory.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">15+</div>
              <div className="text-slate-600">Whitepapers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">8</div>
              <div className="text-slate-600">E-books</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">20+</div>
              <div className="text-slate-600">Templates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">12</div>
              <div className="text-slate-600">Webinars</div>
            </div>
          </div>
        </div>
      </section>

      {/* Whitepapers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-900">Whitepapers & Reports</h2>
            <Link href="/resources/whitepapers" className="text-blue-600 hover:text-blue-800 font-semibold">
              View All →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {resources.whitepapers.map((paper) => (
              <div key={paper.slug} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  {paper.gated && (
                    <span className="flex items-center text-sm text-slate-500">
                      <Lock className="h-4 w-4 mr-1" />
                      Gated
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">{paper.title}</h3>
                <p className="text-slate-600 mb-4">{paper.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span>{paper.pages}</span>
                    <span>•</span>
                    <span>{paper.format}</span>
                    <span>•</span>
                    <span className="px-2 py-1 bg-slate-100 rounded">{paper.category}</span>
                  </div>
                  
                  <button
                    onClick={() => handleResourceClick(paper, paper.gated)}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Download <Download className="ml-2 h-4 w-4" />
                  </button>
                </div>

                {/* Schema Markup for Whitepaper */}
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ 
                    __html: JSON.stringify(generateResourceSchema(paper, 'whitepaper')) 
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-books */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">E-books</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {resources.ebooks.map((book) => (
              <div key={book.slug} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-8">
                  <BookOpen className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white">{book.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-4">{book.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-500">
                      <span>{book.pages}</span>
                      <span className="mx-2">•</span>
                      <span>{book.format}</span>
                    </div>
                    <button
                      onClick={() => handleResourceClick(book, book.gated)}
                      className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold"
                    >
                      Get E-book <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Schema Markup for E-book */}
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ 
                    __html: JSON.stringify(generateResourceSchema(book, 'ebook')) 
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Webinars & Workshops</h2>

          <div className="space-y-6">
            {resources.webinars.map((webinar) => (
              <div key={webinar.slug} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <Video className="h-8 w-8 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl font-bold text-slate-900">{webinar.title}</h3>
                      {webinar.type === "Upcoming Live" ? (
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                          Live Soon
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                          On Demand
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600 mb-4">{webinar.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span>{webinar.duration}</span>
                        <span>•</span>
                        <span>{webinar.date}</span>
                      </div>
                      <Link 
                        href={`/resources/webinars/${webinar.slug}`}
                        className="inline-flex items-center text-red-600 hover:text-red-800 font-semibold"
                      >
                        {webinar.type === "Upcoming Live" ? "Register" : "Watch Now"} 
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Schema Markup for Webinar */}
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ 
                    __html: JSON.stringify(generateResourceSchema(webinar, 'webinar')) 
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-900">Case Studies</h2>
            <Link href="/case-studies" className="text-purple-600 hover:text-purple-800 font-semibold">
              View All →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {resources.caseStudies.map((study) => (
              <div key={study.slug} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Building2 className="h-8 w-8 text-purple-600" />
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">{study.client}</h3>
                          <p className="text-sm text-slate-500">{study.industry}</p>
                        </div>
                      </div>
                    </div>
                    {study.gated && (
                      <span className="flex items-center text-sm text-slate-500">
                        <Lock className="h-4 w-4 mr-1" />
                        Gated
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-semibold text-slate-800 mb-2">{study.title}</h4>
                  <p className="text-slate-600 mb-4">{study.description}</p>

                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-slate-700 mb-2">Key Results:</h5>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-600">
                          <TrendingUp className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleResourceClick(study, study.gated)}
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold"
                  >
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>

                {/* Schema Markup for Case Study */}
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ 
                    __html: JSON.stringify(generateResourceSchema(study, 'casestudy')) 
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Templates & Tools</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {resources.templates.map((template) => (
              <div key={template.slug} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{template.title}</h3>
                <p className="text-slate-600 mb-4 text-sm">{template.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{template.format}</span>
                  <Link 
                    href={`/resources/templates/${template.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                  >
                    Get Template →
                  </Link>
                </div>

                {/* Schema Markup for Template */}
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ 
                    __html: JSON.stringify(generateResourceSchema(template, 'template')) 
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Exclusive Access to Premium Resources
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get weekly AI insights and exclusive content delivered to your inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your work email"
              className="flex-1 px-4 py-3 rounded-lg text-slate-900 placeholder-slate-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
            >
              Get Access
            </button>
          </form>
          <p className="text-sm text-blue-200 mt-4">
            No spam. Unsubscribe anytime. Premium content for enterprise leaders only.
          </p>
        </div>
      </section>

      {/* Lead Capture Modal */}
      <LeadCaptureModal
        isOpen={showLeadModal}
        onClose={() => setShowLeadModal(false)}
        resource={selectedResource}
        onSubmit={handleLeadSubmit}
      />

      {/* Schema Markup for Collections */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "AI Transformation Resources",
            "description": "Practical guides, templates, and tools from 36,000+ hours of enterprise implementations",
            "url": "https://vexiohq.com/resources",
            "hasPart": [
              ...resources.whitepapers.map(paper => generateResourceSchema(paper, 'whitepaper')),
              ...resources.ebooks.map(book => generateResourceSchema(book, 'ebook')),
              ...resources.webinars.map(webinar => generateResourceSchema(webinar, 'webinar')),
              ...resources.templates.map(template => generateResourceSchema(template, 'template'))
            ]
          })
        }}
      />
    </main>
  );
}