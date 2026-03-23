# VexioSales — Complete Execution Plan for Codex
**Date:** 2026-03-22
**File:** `src/app/products/vexio-sales/page.tsx`
**Status:** Ready for implementation
**Priority:** Copy hardening first, then design/animation, then missing sections

---

## PART 1: COPY HARDENING (Critical — Do First)

The page reads like an internal delivery document. Every line below must be rewritten to customer-facing language. The tone should SELL, not DEFEND.

### 1.1 Internal Copy → Customer-Facing Rewrites

| Line | Current (Internal/Defensive) | Rewrite To |
|---|---|---|
| L82 (featureStories[3].title) | "Use conversation signals without pretending the product is fully autonomous." | "Turn inbound calls and messages into qualified next actions." |
| L93 (principles[1]) | "Focus on practical workflow acceleration before autonomy claims." | "Accelerate every stage of the sales workflow." |
| L94 (principles[2]) | "Use launch-stage messaging that matches actual product readiness." | "Ship only what's ready — no vaporware, no overpromises." |
| L144 (H1) | "VexioSales turns sales busywork into a clearer operating system." | "VexioSales — the agentic AI platform that runs your sales workflow." (add "agentic" keyword) |
| L270 (H2) | "The launch page now shows the actual product surfaces instead of describing them abstractly." | "See How VexioSales Works — Agentic AI Sales Features" |
| L319 (eyebrow) | "Why this launch direction works" | "Why Sales Teams Choose VexioSales" |
| L321 (H2) | "The page is stronger when it shows real workflow value and keeps launch claims disciplined." | "Real workflow value, not slideware." |
| L323-326 (paragraph) | "The repo research points in one direction: position VexioSales as a practical workflow layer, prove it with product surfaces, and avoid claiming a fully autonomous sales engine before the launch details are actually settled." | "VexioSales focuses on what actually moves deals: faster qualification, better research, consistent follow-up, and pipeline visibility your team can act on." |
| L354 (H2) | "What this page can credibly promise right now." | "What's Included in the Private Beta" |
| L369-370 (disclaimer) | "This page intentionally avoids positioning VexioSales as an autonomous outbound calling system. The launch-safe story is workflow acceleration, better context, and better operational visibility." | "VexioSales keeps your team in control of every customer interaction. AI handles the research and drafting — your reps make the calls." |
| L383 (H2) | "Questions a launch-page visitor is likely to ask." | "Frequently Asked Questions" |
| L405 (CTA H2) | "Start with a private beta demo, then decide whether VexioSales fits your motion." | "See VexioSales in action." |
| L408-409 (CTA paragraph) | "The page now combines launch-safe positioning with the actual product surfaces you provided, so visitors can see the workflow without being pushed into an overclaimed signup path." | "Book a 30-minute walkthrough and find out if agentic AI fits your sales motion." |

### 1.2 FAQ Answers — Remove Self-Referential Language

| Line | Current | Rewrite To |
|---|---|---|
| L110 | "This page presents VexioSales as a private beta so workflow fit, onboarding, and product scope can be validated with a smaller group first." | "VexioSales is in private beta. We're onboarding a small group of teams to validate workflow fit and refine the product before general availability." |
| L115 | "The launch positioning here focuses on qualification, research, drafting, pipeline visibility, and inbound communication context. Customer-facing actions should remain under team control during beta." | "No. VexioSales focuses on qualification, research, drafting, pipeline visibility, and inbound context. All customer-facing actions stay under your team's control." |

### 1.3 Floating Card Copy — Remove Internal Language

| Line | Current | Rewrite To |
|---|---|---|
| L216 (card label) | "Launch focus" | "Built for" |
| L219 (card text) | "Practical sales workflow acceleration, not overclaimed autonomy." | "Sales teams that want AI doing the research, not replacing the rep." |
| L226 (card label) | "What this shows" | "Live product" |
| L228 (card text) | "A working product surface with dashboard metrics, quick actions, and an opinionated workflow setup." | "Dashboard with pipeline metrics, lead scoring, and one-click actions." |

### 1.4 Meta & SEO

| Item | Current | Rewrite To |
|---|---|---|
| Meta title (L20) | Already updated to "Agentic AI Sales Platform" | Keep |
| Meta description (L22) | Already updated | Keep |
| H1 | Missing "agentic" keyword | Add (see L144 above) |
| Unused import (L10) | `Database` imported but never used | Remove |

### 1.5 Add New FAQ

Add this question to the `faqs` array (SEO + LLM discoverability):
```
{
  question: 'What is agentic AI for sales?',
  answer: 'Agentic AI goes beyond chatbots and copilots. It takes multi-step actions — qualifying leads, researching accounts, drafting follow-ups — while keeping humans in control of customer-facing decisions. VexioSales is built on this approach.'
}
```

---

## PART 2: ANIMATION & INTERACTION (Rethink Required)

### 2.1 What Was Tried (and Didn't Work)

A `ScrollReveal` component was added using IntersectionObserver + CSS transitions. It wraps every section with fade-up, slide-left/right, and scale-in animations. **The result felt generic and distracting — too much movement, not focused on the product.**

**Current state:** ScrollReveal is imported (L17) and wraps most sections. The component exists at `src/components/ScrollReveal.tsx` and CSS is in `globals.css`.

**Decision needed:** Either remove all ScrollReveal wrappers and take a different approach, or refine them significantly.

### 2.2 Research Findings: How Linear.app Does It

We inspected Linear's homepage via Chrome DevTools. Key findings:

**Linear uses NO animation libraries** — no Framer Motion, no GSAP, no Lottie, no video, no canvas.

**Their technique:**
- 179 animated elements on homepage
- 279 elements with `transition: all` in the hero product demo
- Hero product demo is **built as HTML/CSS components** (not screenshots) — sidebar, issue view, activity feed, kanban board are all real DOM elements
- CSS transitions animate opacity + transform when JS toggles classes
- `IntersectionObserver` triggers scroll-based reveals
- Specific subtle animations: cursor blink (1.25s), logo marquee (30s infinite scroll), SVG dot grid pulse (2.8s staggered)

**What makes it feel "live":**
1. The hero is not a screenshot — it's an animated HTML recreation of the product
2. Messages appear in sequence (scripted timeline)
3. A cursor blinks, simulating active typing
4. AI agent panel shows a progression (examining → changing → merging)
5. Background SVG dots pulse subtly

### 2.3 Animation Options (Pick One or Combine)

#### Option A: Remove All Animations
- Strip ScrollReveal, keep the page static
- Simplest, lowest risk
- Still looks professional — the layout and screenshots already work

#### Option B: Minimal Scroll Reveals (Refined)
- Keep ScrollReveal but ONLY on below-fold sections
- Remove from hero entirely (hero should load instantly, no animation)
- Use only `fade-up` with subtle movement (16px instead of 32px)
- Reduce duration to 500ms
- Remove slide-left/slide-right (too distracting)
- Remove staggered delays on cards (feels slow)

#### Option C: Product-Focused Animation (Recommended)
Instead of animating the page layout, animate **inside the product screenshots** to make them feel alive:
- **Counting numbers:** Add animated counters for metrics (Total Leads: 50, Pipeline Value: $45K) that count up when scrolled into view
- **Pulsing badge:** The "Private Beta" badge gets a subtle pulse/glow animation
- **Hero screenshot glow:** Subtle radial gradient animation behind the dashboard screenshot
- **Logo marquee:** Add a scrolling trust logo bar (like Linear's — 30s infinite scroll)
- Leave all section layouts static — no fade/slide on sections

#### Option D: Animated HTML Product Demo (Linear-Level)
- Replace the hero dashboard screenshot with an HTML recreation
- Build pipeline cards that slide into kanban columns
- Show AI enrichment panel populating fields
- Show conversation thread with messages appearing
- **Very high effort** — save for Phase 2 or 3

### 2.4 CSS Assets Already Created

These files exist and can be reused or removed:

- `src/components/ScrollReveal.tsx` — IntersectionObserver + CSS transition wrapper
- `src/app/globals.css` — ScrollReveal CSS block (`.sr`, `.sr-fade-up`, `.sr-slide-left`, etc.)

---

## PART 3: MISSING SECTIONS TO ADD

These sections are present on other VexioHQ pages but missing from VexioSales. Add in order of impact.

### 3.1 Social Proof / Trust Bar (High Impact, Low Effort)
Add between hero and audience section:
```
Logos: Wind River, Cree, Oracle, SAP, IAEA, SIDBI, Sunrun
Bridge text: "Built by the team behind 70+ enterprise AI projects"
```
Pattern: See Linear's logo marquee or incident.io's static logo grid.

### 3.2 "How It Works" 3-Step Section (High Impact, Medium Effort)
Add after audience cards:
```
Step 1: Lead comes in → VexioSales enriches and qualifies
Step 2: AI drafts follow-up → Rep reviews and sends
Step 3: Pipeline updates automatically → Manager gets visibility
```
Pattern: Numbered steps with icons, left-to-right flow.

### 3.3 Integration Logos (Medium Impact, Low Effort)
Add to features or beta scope section:
```
"Works with Salesforce, HubSpot, and your existing stack"
+ CRM logos
```

### 3.4 Metrics / Outcomes (Medium Impact, Low Effort)
Add aspirational metrics section:
```
"6 hrs saved per rep per week"
"3x faster lead qualification"
"Zero manual data entry"
```

### 3.5 Security Signals (Medium Impact, Low Effort)
Add to beta scope or as standalone strip:
```
SOC2 · GDPR · End-to-end encryption · Your data stays yours
```

---

## PART 4: STRUCTURED DATA & SEO

### 4.1 JSON-LD Schemas to Add

**SoftwareApplication:**
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "VexioSales",
  "applicationCategory": "BusinessApplication",
  "description": "Agentic AI sales platform for lead qualification, account research, follow-up drafting, and pipeline management",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "availability": "LimitedAvailability" },
  "creator": { "@type": "Organization", "name": "VexioHQ" },
  "featureList": ["AI lead qualification", "Account research", "Follow-up drafting", "Pipeline management", "Inbound voice context"]
}
```

**FAQPage:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [/* map faqs array to Question/Answer pairs */]
}
```

**BreadcrumbList:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "position": 1, "name": "Home", "item": "https://vexiohq.com" },
    { "position": 2, "name": "Products", "item": "https://vexiohq.com/products" },
    { "position": 3, "name": "VexioSales" }
  ]
}
```

### 4.2 Canonical URL
Add to metadata:
```typescript
alternates: { canonical: 'https://vexiohq.com/products/vexio-sales' }
```

---

## PART 5: DESIGN CONSISTENCY FIXES

### 5.1 Inconsistent Border Radius
Currently 4 different values: `rounded-3xl`, `rounded-[28px]`, `rounded-[30px]`, `rounded-[32px]`

**Recommendation:** Standardize to 2 values:
- Screenshot frames: `rounded-2xl` (16px)
- Content cards: `rounded-3xl` (24px)

### 5.2 Inconsistent Shadows
Multiple shadow patterns across sections. Standardize to:
- Dark bg sections: no shadow
- Light bg sections: `shadow-xl`
- Screenshot frames: `shadow-[0_24px_80px_-40px_rgba(15,23,42,0.25)]`

---

## PART 6: ROUTE MIGRATION — `/vexio-sales` → `/vexiosales`

The brand is **VexioSales** (one word), but the URL uses a hyphen. This hurts SEO (Google treats URL slugs as keyword signals) and is inconsistent with branding.

### 6.1 Files to Change

| File | Line | Current | Change To |
|---|---|---|---|
| `src/app/products/vexio-sales/` | (directory) | `vexio-sales/` | Rename to `vexiosales/` |
| `src/components/StableMegaMenu.tsx` | L84 | `href: '/products/vexio-sales'` | `href: '/products/vexiosales'` |
| `src/app/about/page.tsx` | L193 | `href="/products/vexio-sales"` | `href="/products/vexiosales"` |
| `docs/_execution_enterprise_ready/product-launch/PRODUCT-LAUNCH-FOUNDATION-BRIEF.md` | L130 | `/products/vexio-sales` | `/products/vexiosales` |

### 6.2 Add 301 Redirect in `next.config.js`

Add `async redirects()` block to `next.config.js` (no existing redirects — this is new):

```javascript
async redirects() {
  return [
    {
      source: '/products/vexio-sales/:path*',
      destination: '/products/vexiosales/:path*',
      permanent: true,
    },
  ];
},
```

Add this after the `trailingSlash: true,` line (around L34).

### 6.3 Update Canonical URL

In the page metadata, set:
```typescript
alternates: { canonical: 'https://vexiohq.com/products/vexiosales' }
```

### 6.4 Consider Other Vexio Products

These routes also have hyphens — decide whether to rename all at once:
- `/products/vexio-hr` → `/products/vexiohr`
- `/products/vexio-marketing` → `/products/vexiomarketing`
- `/products/vexio-expense` → `/products/vexioexpense`

**Recommendation:** Do VexioSales first as a test. If clean, batch the others.

---

## EXECUTION ORDER

1. **Copy hardening** (Part 1) — highest impact, lowest risk
2. **Animation decision** (Part 2) — pick an option, implement
3. ~~**Route migration** (Part 6) — `/vexio-sales` → `/vexiosales` + 301 redirect~~ **DONE** (2026-03-22)
4. **Social proof section** (Part 3.1) — quick credibility win
5. **JSON-LD schemas** (Part 4) — SEO + LLM discoverability
6. **"How it works" section** (Part 3.2) — conversion optimization
7. **Design consistency** (Part 5) — polish
8. **Remaining sections** (Part 3.3-3.5) — incremental improvements

---

## REFERENCE DOCUMENTS

| Document | Path |
|---|---|
| Full Site Review | `docs/reviews/vexio-sales-full-site-review.md` |
| Detailed Code Review | `docs/reviews/vexiosales-detailed-code-review.md` |
| Theme Consistency | `docs/reviews/vexiosales-theme-consistency-review.md` |
| Original Execution Brief | `docs/reviews/vexiosales-execution-brief.md` |
| Animation Research (Mobbin + Linear) | `vault/research/VexioSales-Animation-Design-Research-Mobbin-Linear-2026.md` |
| Competitive Landscape | `vault/research/Agentic-AI-Sales-Competitive-Landscape-2026.md` |

---

## COMPETITIVE CONTEXT

- **"Agentic" appears 0 times** on the current page — this is an open SEO opportunity
- Market: $7.6B (2025) → $139B by 2033
- Top competitors (Artisan, AiSDR) avoid "agentic" — they use "AI SDR" instead
- Only Jeeva AI explicitly claims "agentic sales platform"
- $100-500/month range has no purpose-built agentic sales tool

---

*This document consolidates all review findings into a single actionable plan. Start with Part 1 (copy hardening), validate with `npm run build && npm run lint`, then proceed sequentially.*
