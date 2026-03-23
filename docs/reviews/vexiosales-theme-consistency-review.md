# VexioHQ — Theme & Color Consistency Review
**Date:** 2026-03-22
**Finding:** The site uses 3+ different color systems with no unified palette

---

## COLOR MISMATCH MATRIX

| Element | VexioSales | Homepage | About | Products Hub | Agentic AI |
|---|---|---|---|---|---|
| **Hero BG** | `#06121f` (dark navy) | `slate-900→blue-900→purple-900` | `slate-900→blue-900` | `gray-900→blue-900→gray-900` | `gray-50→white` (LIGHT!) |
| **Primary Accent** | sky-300 / sky-700 | blue-400 / purple-400 | blue-400 / purple-400 | blue-400 / cyan-400 | purple-600 / blue-600 |
| **Button Primary** | `bg-sky-300 text-slate-950` | `gradient blue→purple text-white` | gradient blue→purple | blue-600 | purple/blue gradient |
| **Section Pattern** | Dark → `#f5f8fc` → White → Dark | Dark → White (no gray) | White → gray-50 | White → gray-50 | All light pastels |
| **Light Gray BG** | `#f5f8fc` (custom) | Not used | `gray-50` | `gray-50` | `purple-50` pastel |
| **Dark Section BG** | `#0b1320` | Not used | Not used | Not used | Not used |
| **Purple Usage** | None | Heavy (accent, buttons, gradients) | Heavy | Medium | Heavy |

---

## KEY PROBLEMS

### 1. Two Competing Color Identities
- **Homepage/About/Products Hub** use a **blue-purple gradient** identity
- **VexioSales** uses a **sky-cyan** identity (cleaner, more modern)
- These feel like two different brands

### 2. Agentic AI Page is Inverted
- Uses LIGHT theme (`gray-50 → white`) while every other page uses dark hero
- Uses purple-600/blue-600 (darker, reversed order)
- Looks like it belongs to a completely different site

### 3. No Consistent Section Alternation
- VexioSales: Dark → Light Gray (#f5f8fc) → White → Dark → Light Gray → White → Dark
- Homepage: Dark → White (that's it)
- Others: White → Gray-50 (reversed from VexioSales)

### 4. Button Styles Differ Everywhere
- VexioSales: Solid `sky-300` on dark text (clean, minimal)
- Homepage: Gradient `blue→purple` (flashy, dated)
- Other pages: Various solid colors

### 5. VexioSales Actually Has the Best Palette
- The sky/cyan palette is modern, clean, and professional
- The section alternation (dark/light/white) creates good rhythm
- If anything, the REST of the site should match VexioSales, not the other way around

---

## WHAT THE SITE SHOULD CONVERGE TO

### Recommended Unified Palette (Based on VexioSales)

**Dark backgrounds:**
- Primary dark: `#06121f`
- Secondary dark: `#0b1320`
- Dark section: `#0c1725`

**Light backgrounds:**
- Light gray: `#f5f8fc` (or `bg-slate-50`)
- White: `#ffffff`

**Accent colors:**
- Primary accent: `sky-300` (#7dd3fc)
- Secondary accent: `sky-700` (#0369a1)
- Highlight: `cyan-300` (#67e8f9)

**Text:**
- On dark: `slate-50` / `slate-300`
- On light: `slate-900` / `slate-600`

**Buttons:**
- Primary: `bg-sky-300 text-slate-950 hover:bg-sky-200`
- Secondary: `border-white/15 bg-white/5 text-white hover:bg-white/10` (dark bg)
- Secondary: `border-slate-200 bg-white text-slate-900` (light bg)

**Section pattern:**
- Hero (dark) → Light gray → White → Dark → Light gray → White → CTA (dark)

### Pages That Need Color Updates

| Page | Effort | Changes Needed |
|---|---|---|
| Homepage (`src/app/page.tsx`) | High | Replace purple gradients with sky/cyan, add section alternation |
| About (`src/app/about/page.tsx`) | Medium | Replace purple accents, match section pattern |
| Products Hub (`src/app/products/page.tsx`) | Medium | Unify card colors, replace gray-50 with #f5f8fc |
| Agentic AI (`src/app/products/agentic-ai/page.tsx`) | High | Complete theme inversion — light→dark |
| Services pages | Medium | Match accent colors |
| VexioHR, VexioMarketing, VexioExpense | Low | Simple pages, quick color swap |

---

## DESIGN INSPIRATION SOURCES

For the rebuild, reference these for modern SaaS product page patterns:
- **Mobbin.com** — curated SaaS landing page designs (user has account access)
- Competitor pages analyzed in competitive review (Artisan, AiSDR, Jeeva, Relevance AI)
- Current VexioSales page (it's already the site's best-designed page)

### What to Look For on Mobbin
- SaaS product pages with dark hero + light content sections
- "How it works" step sections
- Social proof / logo bar patterns
- Integration showcase sections
- Feature screenshot presentation (zoomed/cropped vs full-screen)
- Pricing section layouts
- FAQ accordion patterns
- CTA section designs

---

*This review is part of the VexioSales launch hardening series. See also:*
- `docs/reviews/vexio-sales-full-site-review.md`
- `docs/reviews/vexiosales-detailed-code-review.md`
- `docs/reviews/vexiosales-execution-brief.md`
