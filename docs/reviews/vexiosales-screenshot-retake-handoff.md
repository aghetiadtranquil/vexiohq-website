# VexioSales Screenshot Retake — Handoff for VexioSales App Agent

**Date:** 2026-03-23
**Status:** Blocked on demo data + new screenshots
**Destination:** Screenshots go to `/Users/admin/projects/web/vexiohq/public/images/landing/`

---

## WHY

The VexioHQ landing page at `/products/vexiosales` uses product screenshots to showcase features. Visual QA found two problems:

1. **Pipeline screenshot** — The "New" column is empty ("Drop deals here"). Looks like the product has no data.
2. **Conversation screenshot** — Shows a table/list view instead of the actual conversation detail (email threads, SMS, call transcripts). The whole point of Feature 3 is "every call, email, and text — tracked in one place per lead." The screenshot needs to show that.

---

## WHAT TO DO

### Task 1: Add demo deals to Pipeline "New" stage

1. Open VexioSales app locally (the product repo, not the marketing site)
2. Go to Pipeline view
3. Add 2-3 deals to the **"New"** column with realistic data:
   - Company names, deal values, dates
   - Make it look like a real pipeline with activity across all 4 stages (New, Contacted, Qualified, Proposal)
4. Take a screenshot of the full pipeline kanban board
5. Save as: `02-pipeline-kanban.jpeg`
   - Must show all 4 columns clearly
   - Every column should have at least 1 deal card

### Task 2: Capture conversation detail view

1. Open a lead that has conversation history (emails, SMS, calls)
2. Navigate to the **conversation detail/timeline view** — the unified inbox showing:
   - Email threads
   - SMS messages
   - Call transcripts or summaries
   - Channel indicators (email icon, phone icon, SMS icon)
3. This should NOT be the leads table/list — it should be the single-lead conversation timeline
4. Take a screenshot of the conversation panel
5. Save as: `07-conversation-panel.jpeg`

### Task 3: Verify other panel screenshots

While you're in the app, also verify these existing screenshots still look correct:
- `05-enrichment-panel.jpeg` — AI score, personalization hooks, company info
- `09-voice-panel.jpeg` — Voice intelligence sidebar (Score, HOT, Next Best Action)

If they look outdated or cropped poorly, retake them too.

---

## SCREENSHOT SPECS

- **Format:** JPEG
- **Resolution:** At least 1200px wide
- **Framing:** Full panel visible — no cutoff on any side
- **Content:** Realistic demo data, no placeholder text or empty states
- **Style:** Light theme preferred (matches the landing page light sections)

---

## WHERE TO PUT THEM

Copy the new screenshots to:
```
/Users/admin/projects/web/vexiohq/public/images/landing/
```

Filenames must match exactly:
- `02-pipeline-kanban.jpeg`
- `07-conversation-panel.jpeg`
- (optionally) `05-enrichment-panel.jpeg`
- (optionally) `09-voice-panel.jpeg`

---

## AFTER SCREENSHOTS ARE READY

Once the images are in place, notify the VexioHQ agent (this repo) to:
1. Have Droid apply decision #12 (`object-contain` fix)
2. Re-run visual QA
3. Final Codex review
4. Commit
