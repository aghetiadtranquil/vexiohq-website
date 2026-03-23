# Source Of Truth

Use this reference to decide which repository artifacts control a VexioHQ landing-page build.

## Priority Order

1. `docs/_execution_enterprise_ready/codex-tasks/WI-089-vexiohq-landing-page-build-handoff.md`
2. `src/app/page.tsx`
3. `src/app/layout.tsx`
4. `docs/reviews/full-site-review-2026-03-22.md`
5. `docs/10-strategy/credibility/CREDIBILITY_AUDIT_AND_STRATEGY.md`
6. `docs/10-strategy/positioning/SOLO_CEO_AUTHENTIC_POSITIONING.md`
7. `docs/10-strategy/README.md`
8. `docs/10-strategy/00-DOCUMENTATION-INDEX.md`
9. `docs/09-planning/SYNTHESIS_BLUEPRINT.md`
10. `docs/09-planning/SEO_ENGAGEMENT_UNIFIED_BLUEPRINT.md`
11. `docs/04-testing/QA_TESTING_CHECKLIST.md`

## How To Use These Files

### 1. Consolidated handoff

Expected path:

- `docs/_execution_enterprise_ready/codex-tasks/WI-089-vexiohq-landing-page-build-handoff.md`

Treat this as the single implementation brief when present. It should control:

- locked decisions
- implementation scope
- screenshot direction
- exact prompt or workflow requirements
- stop conditions

If it is missing, state that clearly and continue only with repo-discoverable decisions.

### 2. Current page implementation

`src/app/page.tsx` is the current homepage baseline. Inspect it before changing anything.

Current risks visible in the file:

- unsupported trust copy such as `Trusted by Fortune 500 Companies`
- unsupported volume claim such as `Trusted by 20,000+ customers worldwide`
- metadata and hero language that may overstate market position

### 3. Layout metadata and schema

`src/app/layout.tsx` can override or dilute homepage work. Review it whenever landing-page messaging changes.

Current risks called out elsewhere in the repo:

- `#1` ranking language
- placeholder verification tokens
- aggregate rating and review count claims
- schema references to routes that may not exist

### 4. Review findings

`docs/reviews/full-site-review-2026-03-22.md` is the best repo-level quality check for trust, SEO, routing, and GTM consistency.

Pay special attention to:

- unsupported homepage trust claims
- inaccurate schema and metadata
- CTA destination ambiguity
- stale or contradictory product positioning

### 5. Credibility guidance

`docs/10-strategy/credibility/CREDIBILITY_AUDIT_AND_STRATEGY.md` defines what not to claim and what to say instead.

Apply these principles:

- avoid rankings and superlatives without proof
- avoid vague ROI/success claims without context
- prefer specific, attributable expertise
- choose honest, stable metrics

### 6. Positioning guidance

`docs/10-strategy/positioning/SOLO_CEO_AUTHENTIC_POSITIONING.md` explains the authentic positioning direction already present in the repo.

Preferred angle:

- founder-led
- boutique consultancy
- direct senior expertise
- enterprise experience presented as founder background, not inflated company history

### 7. Prior research and planning

The repo already contains earlier research documents that can inform a landing-page build, but they are not equally authoritative.

Use these as supporting context:

- `docs/10-strategy/README.md`
- `docs/10-strategy/00-DOCUMENTATION-INDEX.md`
- `docs/09-planning/SYNTHESIS_BLUEPRINT.md`
- `docs/09-planning/SEO_ENGAGEMENT_UNIFIED_BLUEPRINT.md`

Use them to recover:

- prior rationale behind homepage, SEO, engagement, and credibility work
- implementation sequencing constraints
- known brainstorming-only areas that should not be treated as locked requirements

## Decision Rules

- If the handoff conflicts with legacy marketing copy in code, prefer the handoff.
- If current code conflicts with the credibility docs, prefer credibility.
- If earlier research docs conflict with the current handoff, current code review findings, or credibility guidance, treat the research docs as historical context, not final authority.
- If a claim cannot be proven from the repo, remove it or rewrite it conservatively.
- If a CTA points to a route that does not exist, fix the CTA rather than preserving the copy.
