import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  ChevronRight,
  MessageSquareText,
  Search,
  Shield,
  Target,
  Users,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'VexioSales | Agentic AI Sales Platform for B2B Teams',
  description:
    'VexioSales is an agentic AI sales platform that automates lead qualification, account research, follow-up drafting, and pipeline management for B2B sales teams.',
  alternates: {
    canonical: 'https://vexiohq.com/products/vexiosales',
  },
  openGraph: {
    title: 'VexioSales | Agentic AI Sales Platform',
    description:
      'Agentic AI that qualifies leads, researches accounts, drafts follow-ups, and keeps your pipeline moving — built for B2B sales teams.',
    url: 'https://vexiohq.com/products/vexiosales',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'VexioSales',
  applicationCategory: 'BusinessApplication',
  description:
    'Agentic AI sales platform for lead qualification, account research, follow-up drafting, and pipeline management',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    availability: 'LimitedAvailability',
  },
  creator: {
    '@type': 'Organization',
    name: 'VexioHQ',
  },
  featureList: [
    'AI lead qualification',
    'Account research',
    'Follow-up drafting',
    'Pipeline management',
    'Inbound voice context',
  ],
};

const faqs = [
  {
    question: 'Is VexioSales generally available?',
    answer:
      "VexioSales is in private beta. We\u2019re onboarding a small group of teams to validate workflow fit and refine the product before general availability.",
  },
  {
    question: 'What CRM integrations are supported?',
    answer:
      'Salesforce and HubSpot connections are available through guided onboarding during beta. Our team handles setup as part of the onboarding process. Broader self-serve integrations are planned for general availability.',
  },
  {
    question: 'Does VexioSales make calls or send emails autonomously?',
    answer:
      "No. VexioSales drafts follow-ups and surfaces call intelligence, but all customer-facing actions stay under your team\u2019s control.",
  },
  {
    question: 'What is agentic AI for sales?',
    answer:
      'Agentic AI goes beyond chatbots and copilots. It takes multi-step actions \u2014 qualifying leads, researching accounts, drafting follow-ups \u2014 while keeping humans in control of customer-facing decisions. VexioSales is built on this approach.',
  },
  {
    question: 'Who is the best fit for the beta?',
    answer:
      'B2B teams with 5\u201350 reps that already have leads and pipeline activity, but need help reducing manual research, keeping follow-up moving, and improving pipeline visibility.',
  },
  {
    question: 'How long does onboarding take?',
    answer:
      'Most teams are running within a week. We handle data import, CRM connection, and initial AI tuning during a guided onboarding.',
  },
];

const betaFeatures = [
  'AI-assisted lead qualification and prioritization',
  'Account and contact research with company enrichment',
  'Follow-up drafting with human review before send',
  'Pipeline board with deal tracking and stage management',
  'Natural-language access to sales data and patterns',
  'Inbound call and message intelligence',
  'Guided Salesforce and HubSpot onboarding during beta; broader self-serve integrations planned for GA',
];

export default function VexioSalesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://vexiohq.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: 'https://vexiohq.com/products',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'VexioSales',
        item: 'https://vexiohq.com/products/vexiosales',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#06121f] pt-16 text-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Section 1: Hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_28%),radial-gradient(circle_at_80%_10%,_rgba(14,165,233,0.18),_transparent_24%),linear-gradient(180deg,_#06121f_0%,_#0c1725_50%,_#0b1320_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
        <div className="absolute left-10 top-28 h-48 w-48 rounded-full bg-sky-400/15 blur-3xl" />
        <div className="absolute right-10 top-16 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-sky-300/25 bg-sky-300/10 px-4 py-2 text-sm text-sky-100">
                <Bot className="h-4 w-4" />
                Private Beta
              </div>

              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                VexioSales is the agentic AI platform that runs your sales workflow.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Qualify leads, research accounts, draft follow-ups, and manage pipeline — all from one AI-powered
                workspace. Built for B2B teams that want to sell more, admin less.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/consultation"
                  className="inline-flex items-center justify-center rounded-full bg-sky-300 px-7 py-4 text-base font-semibold text-slate-950 hover:bg-sky-200"
                >
                  Request a Private Beta Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white hover:bg-white/10"
                >
                  Talk to the Team
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
                <div className="overflow-hidden rounded-xl border border-white/10 bg-[#f8fafc]">
                  <Image
                    src="/images/landing/01-dashboard.jpeg"
                    alt="VexioSales dashboard with lead, pipeline, revenue, and quick action panels"
                    width={2800}
                    height={1448}
                    className="h-[420px] w-full object-cover object-left-top sm:h-[480px] lg:h-[560px]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stat cards */}
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <p className="text-4xl font-semibold text-sky-300">28%</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                of rep time is spent selling. VexioSales automates the busywork so reps can focus on selling.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <p className="text-4xl font-semibold text-sky-300">Up to 6 hrs</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                saved per rep per week on research and admin.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <p className="text-4xl font-semibold text-sky-300">Up to 3x</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                faster lead qualification with AI enrichment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Pain → Solution */}
      <section className="bg-[#f5f8fc] py-20 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">THE PROBLEM</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Your reps are drowning in busywork instead of closing deals.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.25)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Hours wasted researching every lead manually</h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">Sales reps spend 17% of time on data entry</p>
              <p className="mt-4 text-base leading-7 text-slate-600">VexioSales auto-enriches every lead with AI.</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.25)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                <MessageSquareText className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Follow-ups are generic because reps lack context</h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">80% of deals require 5+ follow-ups</p>
              <p className="mt-4 text-base leading-7 text-slate-600">AI drafts personalized follow-ups based on full context.</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.25)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Pipeline reviews are guesswork without real-time data</h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">57% of forecasted deals don&apos;t close</p>
              <p className="mt-4 text-base leading-7 text-slate-600">Live pipeline board with AI-flagged stalled deals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How It Works */}
      <section className="bg-white py-24 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">HOW IT WORKS</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              From lead to closed deal in three steps.
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-300 text-lg font-semibold text-slate-950">
                1
              </div>
              <h3 className="mt-6 text-xl font-semibold">Lead comes in</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Import from CSV, guided CRM connection, or inbound. VexioSales scores and qualifies automatically.
              </p>
              <div className="absolute right-0 top-6 hidden md:block">
                <ChevronRight className="h-6 w-6 text-slate-300" />
              </div>
            </div>

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-300 text-lg font-semibold text-slate-950">
                2
              </div>
              <h3 className="mt-6 text-xl font-semibold">AI researches and drafts</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Company context, personalization hooks, and follow-up drafts — ready for rep review.
              </p>
              <div className="absolute right-0 top-6 hidden md:block">
                <ChevronRight className="h-6 w-6 text-slate-300" />
              </div>
            </div>

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-300 text-lg font-semibold text-slate-950">
                3
              </div>
              <h3 className="mt-6 text-xl font-semibold">Rep takes action, pipeline updates</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                One-click send, convert to deal, update stage. Managers see everything in real time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4a: Feature 1 — Pipeline Management (white, text left, screenshot right) */}
      <section className="bg-white py-24 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">PIPELINE MANAGEMENT</p>
              <h3 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                See every deal, every stage, every signal — in real time.
              </h3>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                Drag-and-drop kanban board with deal values, contact info, and AI-flagged stalled opportunities. No more
                surprises in pipeline reviews.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-3 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.30)]">
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <Image
                  src="/images/landing/02-pipeline-kanban.png"
                  alt="VexioSales pipeline kanban board with four deal stages and real deal values"
                  width={980}
                  height={1320}
                  className="h-[320px] w-full object-cover object-center sm:h-[380px] lg:h-[420px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4b: Feature 2 — AI Lead Enrichment (light, screenshot left, text right) */}
      <section className="bg-[#f5f8fc] py-24 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.30)]">
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <Image
                  src="/images/landing/04-lead-intelligence.jpg"
                  alt="VexioSales AI enrichment panel showing qualification score, personalization hooks, and company details"
                  width={980}
                  height={1320}
                  className="h-[380px] w-full object-contain object-center sm:h-[440px] lg:h-[480px]"
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">AI LEAD ENRICHMENT</p>
              <h3 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Know everything about a lead before the first call.
              </h3>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                AI qualification score, best approach recommendation, personalization hooks, company details, and contact
                info — all in one panel. Stop Googling before every meeting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4c: Feature 3 — Conversation Tracking (white, text left, screenshot right) — KEY DIFFERENTIATOR */}
      <section className="bg-white py-24 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">ALL CHANNELS, ONE VIEW</p>
              <h3 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Every call, email, and text — tracked in one place per lead.
              </h3>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                When a lead calls, you see their full email history. When they reply to an SMS, you see the voice
                transcript. VexioSales unifies SMS, email, and voice conversations into a single timeline per contact —
                so your rep never asks &quot;wait, have we talked to them before?&quot;
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-3 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.30)]">
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <Image
                  src="/images/landing/03-email-communication.jpg"
                  alt="VexioSales unified conversation panel with Communication Analytics, channel buttons, and email timeline"
                  width={980}
                  height={1320}
                  className="h-[400px] w-full object-contain object-center sm:h-[480px] lg:h-[520px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: What's Included in the Beta */}
      <section className="bg-[#0b1320] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">PRIVATE BETA</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
                Everything you need to start selling smarter.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                VexioSales keeps your team in control of every customer interaction. AI handles the research and
                drafting — your reps make the calls.
              </p>
            </div>

            <div>
              <ul className="space-y-4">
                {betaFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Product Principles */}
      <section className="bg-white py-24 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">OUR APPROACH</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              AI that helps your team sell — not one that replaces them.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.25)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">Humans in the loop</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Every customer-facing action is reviewed by a human. AI suggests — reps decide.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.25)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">Works with your CRM</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Guided Salesforce and HubSpot connection during beta. Fits around your existing process — no rip-and-replace.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.25)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">No vaporware</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                This page reflects capabilities available in the current beta experience.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.25)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">Your data stays yours</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                SOC 2 certification in progress. Data encrypted in transit and at rest. Customer data is not used to train shared models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: FAQ */}
      <section className="bg-[#f5f8fc] py-24 text-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">FAQ</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">Frequently Asked Questions</h2>
          </div>

          <div className="mt-12 space-y-5">
            {faqs.map((item) => (
              <div key={item.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                <h3 className="text-xl font-semibold text-slate-950">{item.question}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: CTA */}
      <section className="border-t border-white/10 bg-[#06121f] py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">GET STARTED</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            See VexioSales in action.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Book a 30-minute walkthrough and find out if agentic AI fits your sales motion.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center rounded-full bg-sky-300 px-7 py-4 text-base font-semibold text-slate-950 hover:bg-sky-200"
            >
              Request a Private Beta Demo
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white hover:bg-white/10"
            >
              Contact VexioHQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
