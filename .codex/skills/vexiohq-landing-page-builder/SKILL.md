---
name: vexiohq-landing-page-builder
description: Build or revise the VexioHQ homepage or a primary landing page in this repository. Use when Codex needs to implement a landing-page handoff, refresh homepage messaging, align page copy with VexioHQ positioning, remove unsupported trust claims, or ship a repo-specific Next.js landing page with matching metadata, CTAs, and validation steps.
---

# VexioHQ Landing Page Builder

Treat the landing page as a credibility-sensitive build. Prefer concrete, defensible positioning over generic startup copy, and keep code, metadata, schema, and CTA targets aligned.

## Workflow

1. Resolve the brief.
2. Read the source-of-truth documents.
3. Inspect the current implementation.
4. Lock the page structure, messaging, and CTA behavior before editing.
5. Implement the page and any required metadata/schema/supporting components.
6. Validate with local checks.
7. Summarize what changed, what was verified, and what remains blocked.

## Resolve The Brief

- Look first for the consolidated handoff at `docs/_execution_enterprise_ready/codex-tasks/WI-089-vexiohq-landing-page-build-handoff.md`.
- If that file exists, treat it as the primary brief and follow its locked decisions unless the user explicitly overrides them.
- If that file does not exist, do not invent missing requirements. Use [references/source-of-truth.md](./references/source-of-truth.md) and state that the expected handoff file is absent in this checkout.
- If the handoff is missing and the request depends on exact copy, screenshot direction, or locked decisions that are not discoverable from the repo, stop and ask the user for the missing artifact or the correct path.

## Read The Source Of Truth

Read only the references needed for the current task.

- Use [references/source-of-truth.md](./references/source-of-truth.md) for the file order and decision hierarchy.
- Use [references/build-checklist.md](./references/build-checklist.md) for implementation guardrails and validation.
- Use [references/research-map.md](./references/research-map.md) when the landing-page request depends on earlier planning, strategy, or SEO research already stored in this repo.

Default reading order:

1. The consolidated handoff file, if present.
2. `src/app/page.tsx`
3. `src/app/layout.tsx`
4. `docs/reviews/full-site-review-2026-03-22.md`
5. `docs/10-strategy/credibility/CREDIBILITY_AUDIT_AND_STRATEGY.md`
6. `docs/10-strategy/positioning/SOLO_CEO_AUTHENTIC_POSITIONING.md`
7. Prior research documents from [references/research-map.md](./references/research-map.md) when the brief needs historical rationale, messaging guidance, SEO direction, or implementation constraints.

## Page Rules

- Keep claims defensible. Remove or rewrite any unsupported rankings, customer counts, review counts, or trust badges.
- Prefer founder-led, boutique-expert positioning over inflated enterprise-superlative language.
- Match CTA destinations to real routes in `src/app`.
- Keep metadata, on-page messaging, and structured data consistent with each other.
- Preserve existing design-system patterns unless the brief clearly calls for a stronger redesign.
- When changing the homepage, inspect adjacent shared files if the page depends on them, especially schema, navigation, footer, and analytics components.

## Implementation Targets

Common files to inspect or edit:

- `src/app/page.tsx`
- `src/app/layout.tsx`
- `src/components/StructuredData.tsx`
- `src/components/SimpleFooter.tsx`
- Any shared section component used by the page

Implement only what the brief requires. Do not widen scope into unrelated SEO or sitewide cleanup unless the landing-page build depends on it.

## Validation

Run the smallest set of meaningful checks after edits:

1. `npm run lint`
2. `npm run build`

If either command fails, fix regressions caused by the change or report the blocker clearly.

For homepage work, also confirm:

- primary CTA targets exist
- metadata still compiles
- schema does not point at nonexistent routes
- copy and visible stats match the final positioning

## Done Criteria

Consider the task complete only when all of the following are true:

- the requested landing-page changes are implemented
- the final copy follows the credibility guidance
- the main CTA flow is coherent
- lint and build were attempted
- missing artifacts, if any, are called out explicitly
