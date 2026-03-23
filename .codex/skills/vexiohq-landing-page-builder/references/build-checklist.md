# Build Checklist

Use this checklist while implementing or reviewing a VexioHQ landing-page build.

## Pre-Edit

- Confirm whether the consolidated handoff file exists.
- Read the current homepage and layout metadata.
- Identify every claim, badge, stat, testimonial, logo, and CTA that appears above the fold.
- Verify the intended destination for each CTA against the actual route tree under `src/app`.

## Messaging Guardrails

- Do not claim `#1`, `best`, `leading`, or similar superlatives unless the brief supplies proof and wants them preserved.
- Do not claim Fortune 500 trust, customer counts, review counts, ratings, or ROI statistics unless the repo contains support and the brief requires them.
- Distinguish founder experience from company history.
- Prefer plain, specific language over generic AI-marketing phrases.

## Code Guardrails

- Keep metadata, open graph copy, and visible hero copy aligned.
- Review `src/app/layout.tsx` whenever homepage messaging or schema changes.
- Review shared schema components if new claims, routes, or services are introduced.
- Keep CTA paths real and canonical.
- Avoid unrelated broad cleanup unless it blocks the landing-page task.

## Validation

Run:

```bash
npm run lint
npm run build
```

If validation fails:

- fix issues introduced by the landing-page changes first
- document pre-existing failures separately if they are not caused by the task

## Final Report

Always report:

- whether the consolidated handoff file was found
- which source docs controlled the implementation
- which claims or CTAs were changed for credibility or route correctness
- whether `lint` and `build` passed
- any remaining blockers or missing artifacts
