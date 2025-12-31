
VexioHQ (B2B AI consulting site): ABM-friendly, “unknown → known” safely

A) Signals & enrichment (account-level, not person-level)
	•	First-party anon id as above.
	•	Reverse IP → company (run server-side; store company_domain, firmographics in a side table).
	•	UTM & referrer capture (source of truth for attribution).
	•	Page groupings: /services/*, /case-studies/*, /contact, /pricing.

Key site events
	•	page_view { path, title, utm_* }
	•	content_downloaded { asset_id, topic }
	•	booked_meeting { cta: “Calendly” }
	•	contact_submitted { form_id }
	•	ab_test_viewed { test, variant }
	•	case_study_read { slug }

High-intent triggers
	•	2+ visits to /services/ + case_study_read + contact_submitted within 14d → MQL.

B) Identity & CRM sync
	•	/api/identify stores email/email_hash as above once a form is submitted or a meeting is booked.
	•	Sync known leads to CRM: { email, email_hash, company_domain, utm, first_touch, last_touch, pages_viewed, high_intent_score }.
	•	Never store person-level data from IP enrichment; store account fields only.

C) Warehouse schema adds (B2B)

create table accounts(
  company_domain text primary key,
  name text,
  industry text,
  size_band text,
  country text,
  source text,                 -- "ip_enrichment" | "form"
  first_seen timestamptz
);

create table account_pageviews(
  ts timestamptz,
  company_domain text references accounts(company_domain),
  anon_id uuid,
  path text
);

Views
	•	v_abm_pipeline: account → last 5 pages, session count, content interactions, MQL status.
	•	v_source_attribution: UTM, first_touch vs last_touch conversions (contact_submitted, booked_meeting).

D) Ads/attribution (consent-aware)
	•	If ads=true → push server-side conversions for contact_submitted & booked_meeting with email_hash where available.
	•	For unknown accounts, do not attempt fingerprinting; use account-level retargeting (e.g., platform-supported ABM lists) only after explicit opt-in.

⸻

Implementation checklist (14-day sprint)

Day 1–2
	•	Ship CMP (cookie banner) with analytics/ads/functionality toggles.
	•	Edge middleware: resolve region (EEA vs ROW) → default consent model.

Day 3–4
	•	Add /api/track + client emitter; create events, consent_logs.
	•	Define event catalog (above) in code and docs.

Day 5–6
	•	/api/identify + identities table; hash email (SHA-256).
	•	Build views: v_activation, v_retention (MoneyTrail) and v_abm_pipeline (VexioHQ).

Day 7–9
	•	CAPI worker: Meta + Google Enhanced Conversions (feature-flagged by consent).
	•	Add retries, dead-letter queue, observability (status, last_error).

Day 10–11
	•	Reverse-IP enrichment microservice (B2B only), writes accounts & account_pageviews.

Day 12–13
	•	Dashboards: Activation, Retention, Revenue (MoneyTrail); ABM Funnel & Source Attribution (VexioHQ).
	•	Backfill historical ≥30 days if available.

Day 14
	•	Privacy drills: export/delete by email, retention policy (e.g., raw props TTL 180d), DPIA notes.

⸻

Governance quickstart
	•	Data minimization: drop PII from events.props—store PII in identities only.
	•	TTL: raw events → 6 months; aggregated views → indefinite.
	•	Audit: write consent & CAPI sends to append-only log.
	•	Kill-switch: env flag to disable all outbound ads forwarding instantly.

⸻

What you ship first (TL;DR)
	•	Anon id + consent-gated /api/track
	•	Identify on signup/lead with SHA-256 email hash
	•	Server-side CAPI queue with consent checks
	•	Activation/Retention (MoneyTrail) and ABM/MQL (VexioHQ) dashboards
	•	Reverse-IP → account (B2B only), never person

⸻

If you want me to turn this into production-ready Next.js + Supabase code (routes, SQL migrations, and a simple CAPI worker), I can do that next.
Would you like me to spin up a PENTA (5-brain) design session to pressure-test risks and edge cases before we code, or should I generate the code scaffolding straight away?