# VexioHQ Full Site Review

Date: 2026-03-22
Reviewer: Codex
Scope: Full-codebase review of `vexiohq.com` site structure, metadata, navigation, trust signals, SEO/configuration, and VexioSales product positioning.

## Summary

The highest-risk issues are not visual. They are site-wide credibility and configuration problems:
- stale DataTranquil brand residue in public artifacts
- broken footer navigation links
- robots/sitemap configuration pointing at the wrong domain
- unsupported or unverifiable marketing/schema claims
- VexioSales messaging and hostname drift conflicting with current GTM decisions

The site has enough structure to support launch work, but it is not cleanly trustworthy yet from a GTM and SEO perspective.

## Findings

### 1. High: `robots.txt` points crawlers at the wrong brand/domain

`src/app/robots.txt` still references DataTranquil and points Sitemap/Host to `https://datatranquil.com` instead of `https://vexiohq.com`.

Evidence:
- `src/app/robots.txt:1`
- `src/app/robots.txt:149`
- `src/app/robots.txt:152`

Impact:
- search engines may be directed to the wrong sitemap/domain
- domain-level SEO signals are inconsistent
- public brand trust is weakened by obvious stale branding

Required action:
- update `robots.txt` branding to VexioHQ
- change sitemap URL to `https://vexiohq.com/sitemap.xml`
- change/remove Host directive accordingly

### 2. High: Footer contains broken internal links

`src/components/SimpleFooter.tsx` links to several routes that do not exist in the app tree.

Broken or mismatched links found:
- `/services/strategy` should align to existing `/services/ai-strategy`
- `/services/custom-ai` has no matching route
- `/guides` has no matching route
- `/roi-calculator` does not match implemented calculator routes

Evidence:
- `src/components/SimpleFooter.tsx:30`
- `src/components/SimpleFooter.tsx:32`
- `src/components/SimpleFooter.tsx:42`
- `src/components/SimpleFooter.tsx:43`

Impact:
- user trust drops immediately on broken navigation
- internal crawl quality suffers
- footer-wide site navigation becomes unreliable

Required action:
- replace all broken footer routes with existing canonical routes
- add a quick internal-link audit across shared components

### 3. High: Public brand residue from DataTranquil remains throughout the site

The repo still exposes DataTranquil naming in public-facing files and downloadable assets.

Examples:
- `src/app/robots.txt`
- `src/components/SimpleFooter.tsx`
- `public/site.webmanifest`
- `public/downloads/whitepapers/*`
- `src/templates/whitepaper-email.html`
- `public/offline.html`

Impact:
- brand inconsistency during prospect review
- possible confusion for search engines and visitors
- weakens credibility during outbound sales motion

Required action:
- perform a public-surface brand sweep
- prioritize files served directly to users/crawlers first
- decide whether legacy download assets should be updated, hidden, or removed from public access

### 4. High: VexioSales page overclaims launch capabilities

The current VexioSales page still markets outbound voice/calling behavior that conflicts with the documented GTM launch plan.

Examples:
- page copy says agents "make calls"
- `Voice Agent` says AI makes outbound calls
- multi-channel section includes generic AI phone-call positioning

Evidence:
- `src/app/products/vexio-sales/page.tsx:175`
- `src/app/products/vexio-sales/page.tsx:65`
- `src/app/products/vexio-sales/page.tsx:264`

Impact:
- product page conflicts with current launch positioning
- creates risk of sales/engineering/docs drift
- could mislead prospects about what is ready now

Required action:
- align VexioSales page with current GTM decisions
- change voice copy to inbound-only or remove it for v1
- rebuild this page from the new landing-page build spec if that is now the source of truth

### 5. Medium-high: Metadata and schema include placeholder or unsupported claims

The site-wide metadata and structured data include claims that appear unverifiable from repo context.

Examples:
- fake verification tokens in metadata
- aggregate ratings and review counts in schema
- homepage claims like "Trusted by Fortune 500 Companies" and "Trusted by 20,000+ customers worldwide"

Evidence:
- `src/app/layout.tsx:81`
- `src/app/layout.tsx:126`
- `src/app/page.tsx:59`
- `src/app/page.tsx:117`

Impact:
- structured data quality becomes questionable
- trust claims may be challenged
- could create compliance or reputation issues if unsupported

Required action:
- replace placeholder verification values with real values or remove them
- remove or substantiate aggregate ratings/review counts
- review homepage trust claims and keep only those that are defensible

### 6. Medium: Structured data references features/routes that do not exist

The site layout publishes schema references that do not match the implemented app surface.

Examples:
- `SearchAction` points to `/search`, which does not exist
- service schema references service URLs not present in the app tree

Evidence:
- `src/app/layout.tsx:143`
- `src/app/layout.tsx:179`
- `src/app/layout.tsx:209`

Impact:
- schema reliability is reduced
- search engines receive inaccurate site structure signals

Required action:
- remove nonexistent schema endpoints
- align service schema URLs to actual implemented routes

### 7. Medium: Sitemap omits active product pages, including VexioSales

The sitemap includes only a subset of product pages and omits some existing linked routes.

Missing from product coverage based on current route tree:
- `/products/vexio-sales`
- `/products/vexio-expense`
- `/products/vexio-hr`
- `/products/vexio-marketing`

Evidence:
- `src/app/sitemap.ts:151`
- route tree under `src/app/products/`

Impact:
- product discoverability is weakened
- search engines get incomplete coverage of the public product surface

Required action:
- update sitemap generation to include all intended public product pages
- verify that only real, indexable pages are emitted

### 8. Medium: VexioSales hostname is inconsistent across code and planning docs

The code currently links to `https://vexiosales.vexiohq.com`, while newer planning docs reference `sales.vexiohq.com`.

Evidence:
- `src/app/products/vexio-sales/page.tsx:181`
- `src/app/products/vexio-sales/page.tsx:296`
- `src/lib/vexiosales-config.ts:6`
- planning docs in the `vexiosales` repo reference `sales.vexiohq.com`

Impact:
- CTA destination ambiguity
- trust loss if users see mixed hostnames
- higher chance of broken redirects or incorrect handoff

Required action:
- choose one canonical app hostname
- update code, env defaults, docs, and CTA targets to match

## Recommended Remediation Order

### P0: Fix before relying on the site for serious outbound traffic
- Correct `robots.txt` domain/sitemap/branding
- Fix broken footer links
- Resolve canonical VexioSales hostname
- Remove or correct VexioSales outbound-voice claims

### P1: Credibility and schema cleanup
- Remove placeholder verification tokens or replace with real ones
- remove or substantiate aggregate rating/review claims
- remove or substantiate homepage trust claims
- align structured data with real routes only

### P2: Crawl/indexing completeness
- update sitemap coverage for all intended public product pages
- audit shared navigation/footer/components for stale links
- review canonical metadata and page-specific OG coverage

### P3: Brand cleanup backlog
- clean public DataTranquil residue in manifests, templates, offline page, and downloadable assets
- decide which legacy public assets should remain exposed

## Suggested Follow-Up Work Items

1. Site-wide link audit
2. Brand residue cleanup on public surfaces
3. SEO/config audit (`robots`, sitemap, metadata, schema)
4. VexioSales page rebuild from landing-page build spec
5. Canonical app hostname decision and propagation

## Notes

This was a codebase review, not a live-browser/manual QA pass. A second pass in a browser should verify:
- actual 404s from shared links
- current production `robots.txt` and sitemap output
- live metadata/OG behavior
- current CTA destinations and redirect behavior
