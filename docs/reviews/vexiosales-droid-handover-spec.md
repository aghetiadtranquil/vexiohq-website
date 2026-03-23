# VexioSales Product Page — Complete Build Specification for Droid
**Date:** 2026-03-22
**Status:** Ready for build. Codex-reviewed, decisions locked 2026-03-23.
**File:** `src/app/products/vexiosales/page.tsx`
**Tech Stack:** Next.js 14.2.25, TypeScript 5, Tailwind CSS 3.4.1, Lucide React 0.539.0

---

## LOCKED DECISIONS (2026-03-23)

These decisions override any conflicting language elsewhere in this spec. Droid should treat this block as canonical.

| # | Topic | Decision | Apply where |
|---|-------|----------|-------------|
| 1 | Product status | **Private Beta** everywhere. Not "Live". | Hero badge, FAQ, beta checklist, mega menu badge (`StableMegaMenu.tsx:86` → change "Live" to "Beta"), about page CTA left as "Explore VexioSales" (no "Beta" suffix needed) |
| 2 | CRM support | **Guided onboarding during beta; self-serve integrations in GA.** Salesforce/HubSpot connection is available but manually assisted — not self-serve sync. | How It Works (step 1), FAQ Q2, beta checklist, Product Principles card 2 |
| 3 | Security wording | **"SOC 2 certification in progress. Data encrypted in transit and at rest. Customer data is not used to train shared models."** Do not use "SOC2-aligned practices" or "end-to-end encryption". | Product Principles card 4 |
| 4 | Hero 28% stat | Rewrite second sentence to: **"VexioSales automates the busywork so reps can focus on selling."** Do not claim VexioSales "handles the other 72%". | Hero stat card 1 |
| 5 | "No vaporware" card | Replace "Every feature on this page is in the product today. We ship what's ready." with: **"This page reflects capabilities available in the current beta experience."** | Product Principles card 3 |
| 6 | Twitter card meta | **Add `twitter:card = summary_large_image`** to metadata export. | Page metadata |
| 7 | Animations | **No animations. Do not import ScrollReveal.** Delete `src/components/ScrollReveal.tsx` and ScrollReveal CSS from `globals.css` before handoff. | Entire page |
| 8 | Citations | **Internal-only.** Source families stay in this spec for reference. No visible footnotes on-page. Stats must not convert benchmarks into product claims — use "Up to" prefix on illustrative numbers. | Hero stats, pain-point cards |
| 9 | GA wording in beta checklist | Replace "CRM integration (Salesforce, HubSpot) — coming in GA" with: **"Guided Salesforce and HubSpot onboarding during beta; broader self-serve integrations planned for GA."** | Beta scope section |
| 10 | Terms alignment | Public claims on the product page must not exceed what the terms/legal pages currently state. If in doubt, soften. | All security/compliance copy |
| 11 | Feature screenshots | **Use cropped panel versions** for Features 2-4. Full-page views made sections look like duplicates. `05-enrichment-panel.jpeg`, `07-conversation-panel.jpeg`, `09-voice-panel.jpeg`. Feature 1 keeps `02-pipeline-kanban.jpeg` full-width but ensure all 4 columns are legible. Feature 3 (Conversation) should be visually more prominent — it's the key differentiator. | Feature showcase sections, screenshot table, DoD |
| 12 | Image framing | **Use `object-contain` (not `object-cover`)** on all panel screenshots (Features 2-4) so images display in full without cropping. Add `bg-white` or `bg-slate-50` to image containers to fill empty space cleanly. Every side of the image must be fully visible — no cutoff at top, bottom, left, or right. | Feature showcase image elements in page.tsx |
| 13 | Screenshot retakes (BLOCKED — needs demo data) | **Pipeline:** Add demo deals to the "New" column so it's not empty, then retake `02-pipeline-kanban.jpeg` with all 4 columns populated. **Conversation:** Retake `07-conversation-panel.jpeg` showing actual conversation detail (email threads, SMS history, call transcripts) — not the table/list view. The conversation detail is the "aha moment" and must look like real unified messaging. | `public/images/landing/02-pipeline-kanban.jpeg`, `public/images/landing/07-conversation-panel.jpeg` |

---

## CONTEXT: WHO IS THE BUYER?

VexioSales targets **B2B sales teams** (5-50 reps) who:
- Spend only 28% of time actually selling (rest is research, admin, CRM updates)
- Have leads but struggle with manual qualification and follow-up
- Use Salesforce or HubSpot but still do repetitive work around it
- Need pipeline visibility without hiring full RevOps

**Buyer personas:**
1. **VP of Sales / Sales Lead** — wants pipeline visibility and team productivity metrics
2. **RevOps Manager** — wants workflow automation that fits existing CRM
3. **Founder / CEO** — wants to see if AI can help a lean team punch above its weight

**What buyers care about (in order):**
1. Does this actually work? → Show real product UI
2. What does it do for me? → Map features to their pain points
3. Who else uses it? → Social proof, trust signals
4. How much? → Pricing clarity or "request demo" CTA
5. Is my data safe? → Security/compliance signals
6. How do I get started? → Clear next step

---

## PAGE STRUCTURE (Top to Bottom)

Build this as a single Next.js server component with metadata export. **No animations.** Build fully static first. Animations will be added in a separate follow-up pass.

### Section 1: HERO
**Background:** Dark `#06121f` with subtle radial sky-400/cyan-300 gradients + grid overlay
**Layout:** 2-column grid (text left, screenshot right)

**Left column:**
- Badge: `Private Beta` with Bot icon (sky-300/10 bg, sky-300/25 border)
- H1: **"VexioSales is the agentic AI platform that runs your sales workflow."**
- Subheading: **"Qualify leads, research accounts, draft follow-ups, and manage pipeline — all from one AI-powered workspace. Built for B2B teams that want to sell more, admin less."**
- CTA buttons:
  - Primary: `Request a Private Beta Demo →` (sky-300 solid) → links to `/consultation`
  - Secondary: `Talk to the Team` (ghost white) → links to `/contact`

**Right column:**
- Screenshot: `01-dashboard.jpeg` — full dashboard view
- Frame: Rounded border with glass effect (border-white/10, bg-white/5, backdrop-blur)
- NO floating annotation cards (they were internal language, remove them entirely)

**Below hero (still dark bg):**
- 3 stat cards in a row (all sourced from industry reports, not VexioSales-specific claims):
  - "28%" — "of rep time is spent selling. VexioSales automates the busywork so reps can focus on selling." *(Source: Salesforce State of Sales report — widely cited industry stat. Internal citation only — not displayed on page.)*
  - "Up to 6 hrs" — "saved per rep per week on research and admin" *(Illustrative — use "Up to" prefix)*
  - "Up to 3x" — "faster lead qualification with AI enrichment" *(Illustrative — use "Up to" prefix)*

---

### Section 2: PAIN → SOLUTION (Problem-Agitation-Solution)
**Background:** Light `#f5f8fc`
**Layout:** Section heading + 3 cards

**Heading:**
- Eyebrow: `THE PROBLEM`
- H2: **"Your reps are drowning in busywork instead of closing deals."**

**3 pain-point cards:**
| Pain Point | Stat | Solution |
|---|---|---|
| "Hours wasted researching every lead manually" | "Sales reps spend 17% of time on data entry" *(Source: Salesforce State of Sales)* | "VexioSales auto-enriches every lead with AI" |
| "Follow-ups are generic because reps lack context" | "80% of deals require 5+ follow-ups" *(Source: Marketing Donut / HubSpot research)* | "AI drafts personalized follow-ups based on full context" |
| "Pipeline reviews are guesswork without real-time data" | "57% of forecasted deals don't close" *(Source: Gartner sales research)* | "Live pipeline board with AI-flagged stalled deals" |

Each card: icon (Lucide) + pain headline + stat + solution text
Light bg, border-slate-200, rounded-2xl

---

### Section 3: HOW IT WORKS (3-Step Flow)
**Background:** White
**Layout:** Section heading + 3-step horizontal flow with numbered circles

**Heading:**
- Eyebrow: `HOW IT WORKS`
- H2: **"From lead to closed deal in three steps."**

**Steps:**
1. **Lead comes in** — "Import from CSV, guided CRM connection, or inbound. VexioSales scores and qualifies automatically."
2. **AI researches and drafts** — "Company context, personalization hooks, and follow-up drafts — ready for rep review."
3. **Rep takes action, pipeline updates** — "One-click send, convert to deal, update stage. Managers see everything in real time."

Between steps: connecting arrow/line icons.
**No screenshot in this section.** The 3-step illustration with icons and text is sufficient. Screenshots are reserved for the feature showcase sections only.

---

### Section 4: FEATURE SHOWCASE (4 Features)
**Background:** Alternating white and `#f5f8fc` per feature
**Layout:** Each feature is text + screenshot, alternating left/right

**Feature 1: Pipeline Visibility**
- Eyebrow: `PIPELINE MANAGEMENT`
- H3: **"See every deal, every stage, every signal — in real time."**
- Body: "Drag-and-drop kanban board with deal values, contact info, and AI-flagged stalled opportunities. No more surprises in pipeline reviews."
- Buyer pain it solves: "I have no idea what's stuck or why."
- Screenshot: `02-pipeline-kanban.jpeg`

**Feature 2: AI Lead Enrichment**
- Eyebrow: `AI LEAD ENRICHMENT`
- H3: **"Know everything about a lead before the first call."**
- Body: "AI qualification score, best approach recommendation, personalization hooks, company details, and contact info — all in one panel. Stop Googling before every meeting."
- Buyer pain it solves: "I spend hours researching before calls."
- Screenshot: `05-enrichment-panel.jpeg` (cropped panel — AI score, personalization hooks, company info)

**Feature 3: Unified Conversation Tracking (KEY DIFFERENTIATOR — make this prominent)**
- Eyebrow: `ALL CHANNELS, ONE VIEW`
- H3: **"Every call, email, and text — tracked in one place per lead."**
- Body: "When a lead calls, you see their full email history. When they reply to an SMS, you see the voice transcript. VexioSales unifies SMS, email, and voice conversations into a single timeline per contact — so your rep never asks 'wait, have we talked to them before?'"
- Buyer pain it solves: "My reps use 5 different tools and still don't know what was said to a lead last week."
- Why this matters: Most CRMs show email OR calls — not both. Reps waste time switching tabs, losing context, sending duplicate outreach. This is the single pane of glass they've been asking for.
- Screenshot: `07-conversation-panel.jpeg` (cropped panel — Communication Analytics, channel buttons, email history. **Display more prominently than other feature screenshots — this is the key differentiator.**)
- **Design note:** Consider showing this as a wider/more prominent section than other features — it's the "aha moment" for buyers

**Feature 4: Inbound Intelligence + AI Next Actions**
- Eyebrow: `INBOUND VOICE & SMS`
- H3: **"Someone called. VexioSales already knows what to do next."**
- Body: "Inbound calls and messages are automatically matched to existing leads. AI analyzes the conversation, scores urgency, and recommends the next best action — so your rep doesn't just call back, they call back prepared."
- Buyer pain it solves: "Someone called but we have no idea who they are or what they want."
- Screenshot: `09-voice-panel.jpeg` (cropped panel — Score 78, HOT, Next Best Action, Re-enrich, Convert to Deal)

---

### Section 5: WHAT'S INCLUDED IN THE BETA
**Background:** Dark `#0b1320`
**Layout:** 2-column grid (text left, feature list right)

**Left:**
- Eyebrow: `PRIVATE BETA`
- H2: **"Everything you need to start selling smarter."**
- Body: "VexioSales keeps your team in control of every customer interaction. AI handles the research and drafting — your reps make the calls."

**Right:** Checklist with CheckCircle2 icons (sky-300)
- AI-assisted lead qualification and prioritization
- Account and contact research with company enrichment
- Follow-up drafting with human review before send
- Pipeline board with deal tracking and stage management
- Natural-language access to sales data and patterns
- Inbound call and message intelligence
- Guided Salesforce and HubSpot onboarding during beta; broader self-serve integrations planned for GA

---

### Section 6: PRODUCT PRINCIPLES
**Background:** White
**Layout:** Centered heading + 4-card grid

**Heading:**
- Eyebrow: `OUR APPROACH`
- H2: **"AI that helps your team sell — not one that replaces them."**

**4 cards:**
1. **Humans in the loop** — "Every customer-facing action is reviewed by a human. AI suggests — reps decide."
2. **Works with your CRM** — "Guided Salesforce and HubSpot connection during beta. Fits around your existing process — no rip-and-replace."
3. **No vaporware** — "This page reflects capabilities available in the current beta experience."
4. **Your data stays yours** — "SOC 2 certification in progress. Data encrypted in transit and at rest. Customer data is not used to train shared models."

---

### Section 7: FAQ
**Background:** `#f5f8fc`
**Layout:** Centered heading + static card list (rounded-2xl, border-slate-200, bg-slate-50, p-8 each). No accordion — all answers visible on load for SEO and LLM extraction.

**Heading:**
- Eyebrow: `FAQ`
- H2: **"Frequently Asked Questions"**

**Questions:**
1. **"Is VexioSales generally available?"** → "VexioSales is in private beta. We're onboarding a small group of teams to validate workflow fit and refine the product before general availability."
2. **"What CRM integrations are supported?"** → "Salesforce and HubSpot connections are available through guided onboarding during beta. Our team handles setup as part of the onboarding process. Broader self-serve integrations are planned for general availability."
3. **"Does VexioSales make calls or send emails autonomously?"** → "No. VexioSales drafts follow-ups and surfaces call intelligence, but all customer-facing actions stay under your team's control."
4. **"What is agentic AI for sales?"** → "Agentic AI goes beyond chatbots and copilots. It takes multi-step actions — qualifying leads, researching accounts, drafting follow-ups — while keeping humans in control of customer-facing decisions. VexioSales is built on this approach."
5. **"Who is the best fit for the beta?"** → "B2B teams with 5-50 reps that already have leads and pipeline activity, but need help reducing manual research, keeping follow-up moving, and improving pipeline visibility."
6. **"How long does onboarding take?"** → "Most teams are running within a week. We handle data import, CRM connection, and initial AI tuning during a guided onboarding."

---

### Section 8: CTA (Final)
**Background:** Dark `#06121f`
**Layout:** Centered text + 2 buttons

- Eyebrow: `GET STARTED`
- H2: **"See VexioSales in action."**
- Body: **"Book a 30-minute walkthrough and find out if agentic AI fits your sales motion."**
- CTA:
  - Primary: `Request a Private Beta Demo` (sky-300 solid) → links to `/consultation`
  - Secondary: `Contact VexioHQ` (ghost white) → links to `/contact`

---

## SCREENSHOTS: WHICH TO USE WHERE

## SCREENSHOT ASSIGNMENTS (Canonical — Updated 2026-03-23)

Each screenshot is used **exactly once**. No section shares a screenshot with another.

Features 2-4 now use **cropped panel versions** instead of full-page views. The full-page views made these sections look like duplicates at scan speed because they all shared the same leads list background. The panel crops focus on the sidebar — the actual differentiator.

| Section | Screenshot File | View Type | What It Shows |
|---|---|---|---|
| Hero | `01-dashboard.jpeg` | Cropped top-left | Dashboard metrics + sidebar + Quick Actions |
| Feature 1: Pipeline | `02-pipeline-kanban.jpeg` | Full view | 4 pipeline stages (New→Contacted→Qualified→Proposal) with real deals. **Ensure all 4 columns are legible** — adjust framing if needed so the "New" column is not cut off. |
| Feature 2: Enrichment | `05-enrichment-panel.jpeg` | Cropped panel | AI score 85, personalization hooks, company info sidebar |
| Feature 3: Conversation | `07-conversation-panel.jpeg` | Cropped panel | Communication Analytics, channel buttons, email history sidebar. **This is the key differentiator — keep this section visually more prominent than Features 2 and 4.** |
| Feature 4: Inbound | `09-voice-panel.jpeg` | Cropped panel | Voice intelligence sidebar (Score 78, HOT, Next Best Action, Re-enrich, Convert to Deal) |

**How It Works section:** No screenshot. Uses numbered step illustrations only.

**Unused screenshots (archived):** `05-enrichment-company.jpeg`, `07-conversation-history.jpeg`, `09-priya-voice-call.jpeg` — these are full-page versions, no longer used in this build.

---

## DESIGN SYSTEM

### Colors
```
Dark backgrounds:
  Primary:   #06121f
  Secondary: #0b1320
  Tertiary:  #0c1725

Light backgrounds:
  Light gray: #f5f8fc
  White:      #ffffff

Accent colors:
  Primary:   sky-300 (#7dd3fc)
  Secondary: sky-700 (#0369a1)
  Highlight:  cyan-300 (#67e8f9)

Text on dark:
  Primary:   slate-50
  Secondary: slate-300
  Muted:     slate-400

Text on light:
  Primary:   slate-900
  Secondary: slate-600
  Muted:     slate-500
```

### Typography
- H1: `text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight`
- H2: `text-4xl font-semibold tracking-tight`
- H3: `text-3xl sm:text-4xl font-semibold tracking-tight`
- Eyebrow: `text-sm font-semibold uppercase tracking-[0.2em]`
- Body: `text-lg leading-8`
- Small: `text-sm leading-6`

### Spacing
- Section padding: `py-20` or `py-24`
- Container: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`
- Card padding: `p-8`
- Screenshot frame padding: `p-3`

### Border Radius (Standardized)
- Content cards: `rounded-2xl` (16px)
- Screenshot frames: `rounded-2xl` outer, `rounded-xl` inner
- Buttons: `rounded-full`
- Badges: `rounded-full`

### Shadows (Standardized)
- Dark bg: No shadow
- Light bg cards: `shadow-[0_20px_60px_-35px_rgba(15,23,42,0.25)]`
- Screenshot frames: `shadow-[0_24px_80px_-40px_rgba(15,23,42,0.30)]`

### Buttons
- Primary: `bg-sky-300 text-slate-950 hover:bg-sky-200 rounded-full px-7 py-4 font-semibold`
- Ghost (dark bg): `border border-white/15 bg-white/5 text-white hover:bg-white/10 rounded-full px-7 py-4 font-semibold`
- Ghost (light bg): `border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 rounded-full px-7 py-4 font-semibold`

---

## ANIMATION SPEC

**No animations.** Do not import ScrollReveal. Do not add any animation classes, keyframes, or wrappers. Build fully static. If `src/components/ScrollReveal.tsx` or ScrollReveal CSS exists in the worktree, delete them before build — they are out of scope for this handoff.

---

## SEO / STRUCTURED DATA

Already implemented (keep as-is):
- `SoftwareApplication` JSON-LD with "agentic" in description
- `FAQPage` JSON-LD dynamically mapping faqs array
- `BreadcrumbList` JSON-LD (Home → Products → VexioSales)
- Canonical URL: `https://vexiohq.com/products/vexiosales`
- OG tags with "Agentic AI Sales Platform"

**Add if not present:**
- Twitter card meta: `twitter:card = summary_large_image` **(required — add to metadata export)**
- OG image: **FOLLOW-UP** — not in scope for this build. Needs separate design work (1200x630).

---

## SECTION FLOW SUMMARY

```
1. [DARK]  Hero — H1 + dashboard screenshot + stat cards (Section 1)
2. [LIGHT] Pain → Solution — 3 pain-point cards (Section 2)
3. [WHITE] How It Works — 3-step numbered flow, no screenshot (Section 3)
4. [ALT]   Feature Showcase — 4 features alternating text/screenshot (Section 4):
           4a. [WHITE] Pipeline — text left, screenshot right
           4b. [LIGHT] Enrichment — screenshot left, text right
           4c. [WHITE] Conversation Tracking — text left, screenshot right
           4d. [LIGHT] Inbound Intelligence — screenshot left, text right
5. [DARK]  Beta Scope — what's included checklist (Section 5)
6. [WHITE] Product Principles — 4-card grid (Section 6)
7. [LIGHT] FAQ — 6 questions, static cards, all visible (Section 7)
8. [DARK]  CTA — "See VexioSales in action" (Section 8)
```

**8 sections total.** Trust bar and social proof deferred — will add once VexioSales has its own beta customers or integration partners.

---

## COMPETITIVE POSITIONING

VexioSales sits in a specific market gap:

| Tier | Examples | Price Range | VexioSales Advantage |
|---|---|---|---|
| Budget AI SDR | Jeeva ($16-80/mo) | $16-80 | More enterprise-grade, better enrichment |
| Mid-market (EMPTY) | Nobody | $100-500 | **VexioSales target tier** |
| Professional AI SDR | AiSDR ($900), SalesCloser ($1K) | $900-2,500 | Human-in-loop approach, not full autonomy |
| Enterprise CRM AI | Salesforce Agentforce, Microsoft | $65-15K+ | Not locked into one CRM ecosystem |

**Key differentiator:** "Agentic AI that helps your team sell — not one that replaces them."

**SEO keywords to embed in page:**
- "agentic AI sales platform" (primary — low competition)
- "AI lead qualification" (feature)
- "AI sales workflow" (feature)
- "AI account research" (feature)
- "AI follow-up drafting" (feature)
- "sales pipeline management AI" (feature)

---

## FILES REFERENCE

| Asset | Path |
|---|---|
| Target file | `src/app/products/vexiosales/page.tsx` |
| Global CSS | `src/app/globals.css` |
| Next.js config (redirect) | `next.config.js` |
| Mega menu (nav link + badge) | `src/components/StableMegaMenu.tsx:86` |
| Landing screenshots | `public/images/landing/*.jpeg` |
| Tailwind config | `tailwind.config.ts` |

## REVIEW DOCUMENTS

| Doc | Path | Purpose |
|---|---|---|
| Full Site Review | `docs/reviews/vexio-sales-full-site-review.md` | Missing sections, narrative gaps |
| Theme Consistency | `docs/reviews/vexiosales-theme-consistency-review.md` | Color system analysis |
| Animation Research | `vault/research/VexioSales-Animation-Design-Research-Mobbin-Linear-2026.md` | Mobbin + Linear design patterns |
| Competitive Landscape | `vault/research/Agentic-AI-Sales-Competitive-Landscape-2026.md` | 10 competitor profiles |
| Previous Execution Plan | `docs/reviews/vexiosales-codex-execution-plan.md` | What was planned for Codex |

---

## BUILD INSTRUCTIONS

1. Rebuild `src/app/products/vexiosales/page.tsx` from scratch following this spec. Use the existing file's metadata export and JSON-LD schemas as baseline — copy them into the new build, do not drop them.
2. **Keep from existing file:** metadata (title, description, canonical, OG), SoftwareApplication schema, FAQPage schema, BreadcrumbList schema.
3. **No animations.** Do not import ScrollReveal. Build fully static.
4. **CTA links:** Primary CTA ("Request a Private Beta Demo") → `/consultation`. Secondary CTA ("Talk to the Team" / "Contact VexioHQ") → `/contact`. Both pages already exist — do NOT modify them.
5. **Scope:** Primary build target is `src/app/products/vexiosales/page.tsx`. Additionally, Droid must:
   - Change the VexioSales badge in `src/components/StableMegaMenu.tsx:86` from "Live" to "Beta"
   - Delete `src/components/ScrollReveal.tsx`
   - Remove ScrollReveal CSS from `src/app/globals.css` (lines added for scroll-reveal animations)
   No other files should be modified.
6. Validate: `npm run build && npm run lint`

**Codex reviews the PR. Droid builds.**

---

*Build exactly this spec — if anything is ambiguous, ask before implementing.*

---

## DEFINITION OF DONE

Before marking this build complete, verify ALL of the following:

- [ ] All 8 sections present in order (Hero → Pain/Solution → How It Works → Feature Showcase (4) → Beta Scope → Product Principles → FAQ → CTA)
- [ ] No `ScrollReveal` import anywhere in the file
- [ ] No ScrollReveal import. No animations of any kind.
- [ ] 5 screenshots used exactly once each: `01-dashboard`, `02-pipeline-kanban`, `05-enrichment-panel`, `07-conversation-panel`, `09-voice-panel`
- [ ] No screenshot appears in more than one section
- [ ] JSON-LD preserved: SoftwareApplication, FAQPage, BreadcrumbList
- [ ] Metadata preserved: title, description, canonical, OG
- [ ] H1 contains "agentic"
- [ ] Zero internal/defensive language (no "this page", "launch-safe", "repo research", "overclaimed")
- [ ] All FAQs render as static visible cards (no accordion)
- [ ] Metrics with "Up to" prefix on illustrative stats
- [ ] No "SOC2-aligned", "end-to-end encryption", or "handles the other 72%" in final output
- [ ] CRM references say "guided onboarding" (not "CRM sync" or "integrates with")
- [ ] "No vaporware" card uses softened beta wording
- [ ] `twitter:card = summary_large_image` in metadata
- [ ] StableMegaMenu badge says "Beta" (not "Live")
- [ ] `npm run build` passes
- [ ] `npm run lint` passes
- [ ] Page renders correctly at `/products/vexiosales` (verify with `npm run dev`)

**Pre-go-live checklist (separate from build):**

- [ ] Verify all "Up to" metrics are acceptable for public display
- [ ] OG image designed and added (1200x630)
- [ ] Visual QA on mobile, tablet, desktop
