# VexioSales Demo Data — Handoff for VexioSales App Agent

**Date:** 2026-03-23
**Status:** Needed before landing page screenshots can be finalized
**Context:** The VexioHQ marketing site landing page uses screenshots from the VexioSales product. Current screenshots show empty states and table views instead of rich data.

---

## WHAT TO DO

### 1. Add deals to Pipeline "New" stage

The pipeline screenshot currently has an empty "New" column showing "Drop deals here." Add 2-3 realistic demo deals to the **New** stage:

- Use realistic B2B company names, deal values, contact names, dates
- All 4 pipeline stages (New, Contacted, Qualified, Proposal) should have at least 1 deal
- Make it look like an active sales team's real pipeline

### 2. Add conversation data to demo leads

The conversation/unified view needs real message data so the screenshot shows the "single pane of glass" experience:

- Add email threads (2-3 messages back and forth)
- Add SMS messages
- Add call records / transcripts
- At least 1 lead should have activity across multiple channels (email + SMS + call)
- This is the key differentiator — it should look like a real unified inbox per lead

### 3. Verify enrichment and voice data

Make sure these demo views also have realistic data:
- **Lead enrichment panel:** AI score, best approach recommendation, personalization hooks, company details
- **Voice intelligence panel:** Call score, HOT/WARM tags, next best action recommendations

---

## WHY THIS MATTERS

The landing page Feature Showcase sections show these product views to potential buyers. Empty states and sparse data undercut the "this actually works" messaging. The data doesn't need to be real — it needs to look real.

---

## AFTER DATA IS ADDED

Once the demo environment has rich data:
1. Take new screenshots from the VexioSales app frontend
2. Save to `/Users/admin/projects/web/vexiohq/public/images/landing/`:
   - `02-pipeline-kanban.jpeg` — full pipeline view, all 4 columns with deals
   - `07-conversation-panel.jpeg` — conversation detail timeline (not table), showing emails + SMS + calls
   - Optionally refresh: `05-enrichment-panel.jpeg`, `09-voice-panel.jpeg`
3. Notify the VexioHQ marketing site agent to re-run visual QA and commit
