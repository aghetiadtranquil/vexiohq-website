# VexioSales — Execution Brief
**Date:** 2026-03-22
**Status:** Approved for implementation (pending team go-ahead)
**Source:** Review findings validated by Codex + human review

---

## EXECUTION ORDER (Agreed Priority)

### Phase 1: Copy Hardening (Do First)
**File:** `src/app/products/vexio-sales/page.tsx`

Remove all internal delivery language. These 6 lines must be rewritten:

| Line | Current (Internal) | Rewrite To (Customer-Facing) |
|---|---|---|
| L251 H2 | "The launch page now shows the actual product surfaces instead of describing them abstractly." | "See How VexioSales Works — Agentic AI Sales Features" |
| L296-302 Section | "Why this launch direction works" + "The repo research points in one direction..." | "Why Sales Teams Choose VexioSales" + trust signals |
| L326 H2 | "What this page can credibly promise right now." | "What's Included in the Private Beta" |
| L338-341 | "This page intentionally avoids positioning..." + "launch-safe story" | "VexioSales keeps your team in control of every customer interaction." |
| L351 H2 | "Questions a launch-page visitor is likely to ask." | "Frequently Asked Questions" |
| L371-374 CTA | "The page now combines launch-safe positioning with the actual product surfaces you provided..." | "See VexioSales in action. Book a 30-minute walkthrough and find out if agentic AI fits your sales motion." |

Also fix:
- Feature 4 title: "without pretending the product is fully autonomous" → "Turn inbound calls and messages into qualified next actions."
- H1: Add "agentic" keyword
- Meta title/description: Target "agentic AI sales platform"
- Remove unused `Database` import (line 10)
- FAQ answers: Remove "this page presents/positions" language

### Phase 2: Add Missing Sections
Add these sections to the page (in order of impact):

1. **Social proof** — "Built by VexioHQ" bridge + trust logos from homepage (Wind River, Oracle, SAP, etc.) + "70+ enterprise AI projects"
2. **Integration logos** — "Works with Salesforce, HubSpot, and your existing stack"
3. **"How it works" 3-step** — Lead → Enrich → Act (or similar)
4. **Metrics/outcomes** — Even aspirational: "6 hrs saved/rep/week", "3x faster qualification"
5. **Security signals** — SOC2, GDPR, encryption badges (if applicable)

### Phase 3: Structured Data & SEO
Add to the page:

1. **SoftwareApplication JSON-LD** — with "agentic" in description, featureList
2. **FAQPage JSON-LD** — immediate Google rich results win
3. **BreadcrumbList JSON-LD** — standard practice
4. **Canonical URL** — in metadata
5. **OG image** — needs design (1200x630)
6. **Twitter card** metadata
7. **Add new FAQ**: "What is agentic AI for sales?" — category-defining, LLM-extractable

### Phase 4: Route Migration (Decision Required)
**Rename:** `/products/vexio-sales` → `/products/vexiosales`

Files to update:
- `src/app/products/vexio-sales/` → rename directory
- `src/components/StableMegaMenu.tsx` (line 84)
- Add 301 redirect in `next.config.js`
- Consider renaming all Vexio product routes for consistency

**Decision needed:** Do all Vexio products at once, or just VexioSales?

---

## REFERENCE DOCUMENTS

| Document | Path | Use |
|---|---|---|
| Full Site Review | `docs/reviews/vexio-sales-full-site-review.md` | Site narrative gaps, missing sections, 10-item priority plan |
| Detailed Code Review | `docs/reviews/vexiosales-detailed-code-review.md` | Line-by-line issues, keyword strategy, competitor analysis |
| Competitive Landscape | `vault/research/Agentic-AI-Sales-Competitive-Landscape-2026.md` | 10 competitor profiles, pricing, feature matrix, SEO map |
| This Brief | `docs/reviews/vexiosales-execution-brief.md` | Execution order, agreed priorities |

## KEY COMPETITIVE CONTEXT

- **Market:** $7.6B (2025) → $139B by 2033
- **"Agentic sales platform" keyword:** Only Jeeva AI owns it explicitly — opportunity is open
- **Pricing gap:** $100-500/month range has no purpose-built agentic sales tool
- **VexioSales current keyword usage:** "agentic" appears 0 times on the page
- **Top competitors (Artisan, AiSDR) avoid "agentic"** — they use "AI SDR" instead
- **Smaller players (Jeeva, Lyzr) + enterprise (Salesforce, Creatio) claim "agentic"**

## CODEX FEEDBACK (2026-03-22)

> "The page currently has a clean launch shape, but it is still missing the product-market and SEO layer. If the review is correct that 'agentic' appears zero times and there are still internal build-language phrases in production copy, that should be fixed before any serious traffic push."

> Execution order: copy hardening → missing sections → structured data → route migration

---

*Ready for implementation. Start with Phase 1 (copy hardening) — it's the highest-impact, lowest-risk change.*
