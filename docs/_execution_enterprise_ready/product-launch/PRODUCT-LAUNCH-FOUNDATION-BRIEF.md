# Product Launch Foundation Brief

Status: New execution document created from existing repo research.  
Scope: Product-launch planning and landing-page execution support.  
Rule: Existing research documents remain read-only source material.

## Purpose

Use this document as the launch-ready synthesis for upcoming product work without editing or overwriting the earlier strategy, planning, SEO, and positioning documents.

This brief converts prior research into an execution baseline for:

- launch messaging
- landing-page requirements
- CTA strategy
- proof and credibility guardrails
- implementation scope for Codex or other build sessions

## Source Documents Consulted

Primary read-only inputs:

- `docs/10-strategy/README.md`
- `docs/10-strategy/00-DOCUMENTATION-INDEX.md`
- `docs/10-strategy/credibility/CREDIBILITY_AUDIT_AND_STRATEGY.md`
- `docs/10-strategy/positioning/SOLO_CEO_AUTHENTIC_POSITIONING.md`
- `docs/10-strategy/products/PRODUCT_PORTFOLIO_POSITIONING.md`
- `docs/10-strategy/products/RESEARCH_TOOLS_POSITIONING.md`
- `docs/09-planning/SYNTHESIS_BLUEPRINT.md`
- `docs/09-planning/SEO_ENGAGEMENT_UNIFIED_BLUEPRINT.md`
- `docs/reviews/full-site-review-2026-03-22.md`
- current product routes under `src/app/products/`

## Working Assumptions

- Prior docs contain a mix of strong guidance and brainstorming. They should inform implementation, not control it blindly.
- Credibility rules are higher priority than aggressive marketing language.
- Founder experience can be used carefully; unsupported company-scale claims should not be used.
- Launch materials should reflect real product maturity such as `Alpha`, `Beta`, `Private Beta`, `MVP`, or `Now Available` only when accurate.
- CTA destinations must resolve to real routes or live product URLs.

## Launch Guidance Synthesized From Research

### 1. Positioning Direction

Preferred positioning:

- founder-led and expert-led
- boutique execution with direct senior involvement
- product builder plus implementer
- practical AI systems over abstract transformation slogans

Avoid:

- `#1` claims
- unsupported enterprise rankings
- unsupported customer counts, ratings, or review totals
- inflated ROI or success-rate claims
- language that implies a larger team than exists

### 2. Product Messaging Direction

Use a clear maturity signal for every product:

- `Private Beta` for selective enterprise access
- `Alpha` for testing-phase products
- `MVP` for early but usable products
- `Now Available` only for genuinely launch-ready products

Each product page should answer:

1. What problem does this product solve?
2. Who is it for?
3. What is available now?
4. What proof or specificity supports the claims?
5. What should the visitor do next?

### 3. CTA Direction

Primary CTA should match actual availability:

- `Request Early Access`
- `Join Waitlist`
- `Request Demo`
- `Book Consultation`
- `Start Trial`

Do not use a direct signup CTA if:

- the destination hostname is unsettled
- the product is not actually launch-ready
- the route or auth flow is not confirmed

### 4. Landing-Page Structure

Recommended launch-page structure:

1. Hero with product name, one-line value proposition, maturity badge
2. Problem statement and target user
3. Core workflows or features grouped by outcome
4. Proof section with defensible claims only
5. Launch status and access model
6. CTA section with one primary action and one lower-friction secondary action
7. Supporting FAQ if objections are predictable

### 5. Proof Rules

Allowed proof types:

- founder background and career experience, clearly attributed
- real implementation patterns
- specific workflow capabilities
- product maturity status
- concrete integration or architecture details

Use cautiously:

- client logos
- outcomes
- metrics
- trust badges

Only include them when they are demonstrably true and consistent with the rest of the repo.

## Current Repo Signals

Observed product routes:

- `/products`
- `/products/vexiosales`
- `/products/vexio-expense`
- `/products/vexio-hr`
- `/products/vexio-marketing`
- `/products/agentic-ai`
- `/products/mlops`
- `/products/analytics`
- `/products/transformation`

Observed risk from current code and review notes:

- some product and homepage copy still overclaims trust and market position
- some schema and metadata include unsupported proof signals
- VexioSales messaging currently appears ahead of confirmed GTM scope
- VexioSales hostname and CTA direction remain inconsistent in repo context

## Immediate Launch Rules

Before implementing or rewriting any product launch page:

1. Confirm the product route and canonical destination.
2. Confirm the correct stage label.
3. Remove unsupported claims before adding new marketing copy.
4. Keep metadata, hero copy, and CTA text aligned.
5. Treat earlier brainstorming docs as optional context, not locked decisions.

## Recommended Execution Path

### Path A: Launch Brief First

Create a product-specific brief before editing code.

That brief should define:

- product name
- maturity status
- primary audience
- core use cases
- allowed proof
- disallowed claims
- primary CTA
- secondary CTA
- launch blockers

### Path B: Landing Page Build

Once the brief is approved:

- update the target product page
- update metadata
- align CTA targets
- remove unsupported claims
- validate with `npm run lint` and `npm run build`

## Best Candidate For Next Product-Specific Brief

Based on current repo evidence, the most likely immediate candidate is `VexioSales`, because:

- it already has a dedicated product route
- it has active launch-style copy
- it is explicitly called out in the latest site review as needing GTM alignment

This is a planning recommendation, not a locked decision.

## Product-Specific Brief Template

Use this template for the next execution document:

```md
# [Product Name] Launch Brief

## Launch Goal

## Product Status

## Target User

## Core Problem

## What Is Available Now

## What Must Not Be Claimed

## Primary CTA

## Secondary CTA

## Required Page Sections

## Metadata Direction

## Validation Checklist
```

## Next Step

Create a new product-specific launch brief from this foundation rather than editing the earlier research docs.
