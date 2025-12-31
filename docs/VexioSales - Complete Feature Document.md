# VexioSales - Complete Feature Documentation

> **Version:** 1.0
> **Last Updated:** December 2025
> **Purpose:** Detailed technical and functional documentation for demo, sales, and marketing

---

## Table of Contents

1. [Product Overview](#product-overview)
2. [Lead Management](#1-lead-management)
3. [Pipeline & Deal Management](#2-pipeline--deal-management)
4. [Multi-Channel Communication](#3-multi-channel-communication)
5. [AI Agents - Deep Dive](#4-ai-agents---deep-dive)
6. [Data Agent - Natural Language Interface](#5-data-agent---natural-language-interface)
7. [Proactive Alerts & Insights](#6-proactive-alerts--insights)
8. [Campaigns & Audiences](#7-campaigns--audiences)
9. [Analytics & Reporting](#8-analytics--reporting)
10. [Settings & Configuration](#9-settings--configuration)
11. [Integrations](#10-integrations)
12. [Security & Multi-Tenancy](#11-security--multi-tenancy)

---

## Product Overview

**VexioSales** is an AI-powered sales platform that automates lead management, outreach, and engagement. It combines traditional CRM functionality with advanced AI agents that can score leads, enrich data, make phone calls, draft messages, and answer questions in natural language.

### Core Value Propositions

| For | Value |
|-----|-------|
| **SDRs** | AI handles research, scoring, and follow-up suggestions - focus on closing |
| **Sales Managers** | Real-time pipeline visibility, proactive alerts on stalled deals |
| **RevOps** | Multi-channel automation, detailed analytics, API integrations |
| **Executives** | AI-generated insights, revenue forecasting, team performance |

### Technology Stack

- **Frontend:** Next.js 14, React, TypeScript, Tailwind CSS, shadcn/ui
- **Backend:** FastAPI (Python), async/await architecture
- **Database:** Supabase (PostgreSQL) with Row Level Security
- **AI:** Anthropic Claude, OpenAI GPT-4, custom agents
- **Voice:** ElevenLabs, Vonage integration
- **Search:** Tavily API for web research

---

## 1. Lead Management

### 1.1 Lead Database

**What it does:** Central repository for all prospects with full profile management.

**Features:**
| Feature | Description |
|---------|-------------|
| **Lead Profiles** | Name, email, phone, company, job title, source, status, tags |
| **Smart Search** | Search across all fields with real-time filtering |
| **Status Tracking** | New → Contacted → Qualified → Converted → Lost |
| **Lead Scoring** | AI-assigned 0-100 score based on conversion potential |
| **Custom Tags** | User-defined tags for segmentation |
| **Bulk Import** | CSV upload with field mapping |

**Data Fields:**
```
Basic Info:     first_name, last_name, email, phone, company, job_title
Tracking:       source, status, score, owner_id, created_at, updated_at
Enrichment:     enrichment_data (JSON), linkedin_url, company_website
Custom:         tags[], custom_fields (JSON)
```

### 1.2 Lead Enrichment

**What it does:** Automatically researches and enriches lead profiles with company data, LinkedIn info, and buying signals.

**Two Modes:**

| Mode | Target | Data Sources |
|------|--------|--------------|
| **B2B** | Business contacts | Company website, LinkedIn, News articles |
| **B2C** | Consumers | Address verification, Social profiles, Property records |

**B2B Enrichment Output:**
```
Company Info:
├── Company name, website, description
├── Estimated size (1-10, 11-50, 51-200, 201-500, 500+)
├── Industry classification
├── Key products/services
├── Technologies used
└── Recent news (last 90 days)

Professional Context:
├── LinkedIn URL
├── Seniority level (Entry, Mid, Senior, Executive)
├── Department (Sales, Marketing, Engineering, etc.)
├── Likely pain points
├── Likely goals
└── Career highlights

Engagement Strategy:
├── Recommended approach (Cold email, Social selling, Direct call)
├── Personalization hooks
├── Talking points
├── Topics to avoid
└── Value proposition angle

Buying Signals:
├── Budget likelihood (Low, Medium, High)
├── Decision authority (Influencer, Decision Maker, Champion, Blocker)
├── Urgency indicators
└── Buying readiness score (1-100)
```

**Configurable:** Web research depth, data sources, refresh frequency

### 1.3 Lead Scoring

**What it does:** AI analyzes lead profiles and assigns conversion potential score.

**Scoring Breakdown (100 points total):**

| Factor | Points | What It Measures |
|--------|--------|------------------|
| Profile Completeness | 20 | How much data we have |
| Company Fit | 20 | Industry, size, tech stack match |
| Job Title Score | 20 | Decision-making authority |
| Source Quality | 15 | Inbound vs outbound, referral quality |
| Engagement | 15 | Email opens, website visits, responses |
| Timing | 10 | Recency, buying cycle stage |

**Score Classifications:**
- **Hot (80-100):** High priority, immediate follow-up
- **Warm (60-79):** Good potential, nurture actively
- **Nurture (40-59):** Long-term opportunity
- **Cold (0-39):** Low priority

**Output:**
```json
{
  "score": 85,
  "breakdown": {
    "profile_completeness": 18,
    "company_fit": 20,
    "job_title_score": 18,
    "source_quality": 12,
    "engagement": 12,
    "timing": 5
  },
  "reasoning": "Senior decision-maker at well-funded tech company...",
  "recommendation": "hot"
}
```

### 1.4 Activity Timeline

**What it does:** Complete chronological history of all interactions with each lead.

**Tracked Activities:**
- Emails sent/received
- SMS messages
- Phone calls (with transcripts)
- Meetings scheduled
- Deal stage changes
- Agent executions (scoring, enrichment)
- Manual notes

---

## 2. Pipeline & Deal Management

### 2.1 Kanban Pipeline

**What it does:** Visual drag-and-drop deal management through customizable sales stages.

**Features:**
| Feature | Description |
|---------|-------------|
| **Drag & Drop** | Move deals between stages with click-and-drag |
| **Multiple Pipelines** | Different pipelines for products, teams, regions |
| **Stage Totals** | See deal count and total value per stage |
| **Deal Cards** | Quick view of lead, value, close date, probability |
| **Stage Customization** | Add, rename, reorder stages |

**Default Stages:**
```
Lead → Qualified → Proposal → Negotiation → Closed Won / Closed Lost
```

### 2.2 Deal Tracking

**What it does:** Track deal value, probability, and expected close dates.

**Deal Fields:**
```
Basic:          name, value, currency, expected_close_date
Status:         stage_id, probability, is_won, is_lost
Association:    lead_id, pipeline_id, owner_id
Tracking:       created_at, updated_at, days_in_stage
```

**Automatic Tracking:**
- Days in current stage (for stalled deal alerts)
- Stage change history
- Win/loss reasons

### 2.3 Pipeline Analytics

| Metric | Description |
|--------|-------------|
| **Total Pipeline Value** | Sum of all open deals |
| **Weighted Pipeline** | Value × Probability |
| **Win Rate** | Won / (Won + Lost) |
| **Average Deal Size** | Total won value / Won count |
| **Sales Cycle** | Average days from Lead to Won |
| **Stage Conversion** | % moving to next stage |

---

## 3. Multi-Channel Communication

### 3.1 Email

**What it does:** Full email integration with inbox sync, templates, and AI drafting.

**Features:**

| Feature | Description |
|---------|-------------|
| **Inbox Integration** | Connect Gmail or Outlook |
| **Two-Way Sync** | See sent and received emails |
| **Templates** | Reusable templates with personalization tokens |
| **Bulk Send** | Send to hundreds of leads |
| **AI Drafting** | Generate personalized emails with AI |
| **Tracking** | Open rate, click rate, reply rate |

**Personalization Tokens:**
```
{{first_name}}, {{last_name}}, {{company}}, {{job_title}}
{{pain_points}}, {{value_prop}}, {{meeting_link}}
```

**AI Email Generation:**
- Uses lead enrichment data
- References conversation history
- Matches specified tone (professional, friendly, urgent)
- Includes suggested subject lines

### 3.2 SMS

**What it does:** Send text messages with AI-optimized content.

**Features:**
| Feature | Description |
|---------|-------------|
| **Direct SMS** | Send to any phone number |
| **AI Drafting** | Generate context-aware messages |
| **Character Optimization** | Targets 140-160 characters |
| **Bulk SMS** | Campaign-based sending |
| **Delivery Status** | Track sent, delivered, failed |

**AI SMS Output:**
```json
{
  "body": "Hi John, saw TechCorp grew 40% - congrats! Our clients save 15hrs/week. Quick call this week?",
  "character_count": 98,
  "tone": "casual",
  "call_to_action": "Quick call this week"
}
```

### 3.3 Voice Calls (AI Agent)

**What it does:** AI agent makes outbound sales calls, has natural conversations, and extracts action items.

**Call Flow:**
```
1. Initiate call with lead context
2. AI introduces itself and company
3. Natural conversation with prospect
4. AI handles objections
5. Books meetings if interested (calendar integration)
6. Call ends, transcript generated
7. AI analyzes sentiment and extracts actions
8. Results saved to lead timeline
```

**Call Outcomes:**
- `completed` - Full conversation
- `no_answer` - No pickup
- `voicemail` - Left message
- `busy` - Line busy
- `error` - Technical issue

**Analysis Output:**
```json
{
  "duration_seconds": 185,
  "sentiment": "positive",
  "interest_level": "high",
  "summary": "Prospect interested in demo, concerned about pricing...",
  "action_items": [
    {
      "type": "demo",
      "description": "Schedule product demo",
      "scheduled_date": "2025-01-15",
      "scheduled_time": "2:00 PM",
      "priority": "high"
    }
  ]
}
```

**Configurable:**
| Setting | Description |
|---------|-------------|
| **Company Name** | How AI introduces the company |
| **Agent Name** | Name the AI uses |
| **System Prompt** | Full behavior customization |
| **First Message** | Opening line customization |
| **Custom Context** | Special instructions per call |

### 3.4 Calendar Integration

**What it does:** Schedule meetings directly from voice calls or manual triggers.

**Features:**
- Check availability across date ranges
- Natural language date parsing ("Tuesday", "next week", "2 PM")
- Auto-create calendar events with lead details
- Send calendar invites to leads
- Support for demo, meeting, follow-up types

**During Voice Calls:**
```
Prospect: "How about Tuesday afternoon?"
AI: "Let me check... I have 2:00 PM and 3:30 PM available on Tuesday.
     Which works better for you?"
Prospect: "2 PM works."
AI: "I've booked your demo for Tuesday, January 15th at 2:00 PM.
     You'll receive a calendar invite shortly."
```

---

## 4. AI Agents - Deep Dive

### 4.1 Agent Architecture

All agents follow a consistent pattern:

```
Input → Context Building → LLM Processing → Output Parsing → Storage
```

**Shared Capabilities:**
- Pull lead enrichment data automatically
- Access conversation history
- Multi-tenant isolation (org_id filtering)
- Async execution with background tasks
- Execution history logging

### 4.2 Lead Scoring Agent

| Attribute | Value |
|-----------|-------|
| **Purpose** | Assign conversion potential score (0-100) |
| **Model** | GPT-4o-mini (fast, cost-effective) |
| **Temperature** | 0.3 (deterministic) |
| **Fallback** | Rule-based scoring if LLM fails |

**Scoring Rubric:**
```
Profile Completeness (20 pts):
├── Has email: +5
├── Has phone: +5
├── Has company: +5
└── Has job title: +5

Company Fit (20 pts):
├── Tech industry: +10
├── Mid-size (50-500): +5
└── Growth stage: +5

Job Title (20 pts):
├── C-level: +20
├── VP/Director: +15
├── Manager: +10
└── Individual contributor: +5

Source Quality (15 pts):
├── Inbound/demo request: +15
├── Referral: +12
├── Content download: +8
└── Cold list: +3

Engagement (15 pts):
├── Email opened: +5
├── Link clicked: +5
└── Replied: +5

Timing (10 pts):
├── Created < 7 days: +10
├── Created < 30 days: +5
└── Created > 30 days: +2
```

### 4.3 Lead Enrichment Agent

| Attribute | Value |
|-----------|-------|
| **Purpose** | Research and enrich lead profiles |
| **Model** | Claude 3 Sonnet |
| **Web Search** | Tavily API (3 parallel searches) |
| **B2C Mode** | Address, social, property research |

**Search Queries (B2B):**
```
1. "{company} company overview products services"
2. "{first_name} {last_name} {company} LinkedIn"
3. "{company} news funding announcements recent"
```

**Search Queries (B2C):**
```
1. "{address} {city} {state} address verification"
2. "{first_name} {last_name} {city} social media profiles"
3. "{address} property records Zillow Redfin"
```

**Confidence Levels:**
- **High:** All 3 searches returned relevant data
- **Medium:** 1-2 searches returned relevant data
- **Low:** Minimal data found, mostly inferred

### 4.4 Follow-up Suggestion Agent

| Attribute | Value |
|-----------|-------|
| **Purpose** | Generate personalized follow-up strategies |
| **Model** | GPT-4o-mini |
| **Context** | Lead data + enrichment + conversation history |

**Output Components:**

```
Suggested Actions:
├── Action type (call, email, sms, meeting)
├── Timing (immediate, today, tomorrow, this_week)
├── Priority (high, medium, low)
└── Reasoning

Email Template:
├── Subject line
├── Body with personalization tokens
└── Tone recommendation

Call Script:
├── Opening statement
├── Key talking points
├── Objection handlers
└── Closing/CTA

SMS Template:
├── Short message (140-160 chars)
└── Clear call-to-action

Best Time to Contact:
└── Based on timezone and role patterns

Personalization Tips:
└── Specific hooks from enrichment data
```

### 4.5 Voice Agent

| Attribute | Value |
|-----------|-------|
| **Purpose** | Conduct AI-powered sales calls |
| **Voice Provider** | ElevenLabs (primary), Vonage (fallback) |
| **Analysis Model** | Claude 3 Sonnet |
| **Calendar** | Google Calendar API |

**System Prompt Template:**
```
You are {agent_name}, a friendly and professional sales representative
from {company_name}. Your role is to:

1. Introduce yourself and the company warmly
2. Understand the prospect's current challenges
3. Explain how {company_name} can help
4. Answer questions naturally
5. If interested, schedule a meeting/demo

Lead Context:
{lead_context}

Previous Conversations:
{conversation_history}

Remember to:
- Be conversational, not scripted
- Listen actively and respond to what they say
- Handle objections gracefully
- Always be respectful of their time
```

**First Message Template:**
```
"Hi, this is {agent_name} from {company_name}. I hope I'm not catching
you at a bad time. I noticed {personalization_hook} and wanted to see
if you had a few minutes to chat about {value_proposition}?"
```

**Tools Available During Call:**
1. `check_calendar_availability` - Check open slots
2. `book_calendar_slot` - Book a meeting

### 4.6 Response Agent (Email/SMS)

| Attribute | Value |
|-----------|-------|
| **Purpose** | Draft contextual responses to lead messages |
| **Model** | GPT-4o-mini |
| **Context** | Full conversation history + enrichment |

**Email Response Features:**
- Analyzes all previous emails in thread
- References lead's pain points from enrichment
- Matches original email tone
- Suggests next steps

**SMS Response Features:**
- Character-optimized (140-160)
- Casual but professional tone
- Clear call-to-action
- Context-aware from previous messages

---

## 5. Data Agent - Natural Language Interface

### 5.1 Overview

**What it does:** Ask questions about your sales data in plain English and get instant answers.

**Architecture: Two-Track System**

```
User Query
    │
    ▼
┌─────────────────┐
│ Intent Classifier│  (Claude Haiku - fast)
│ Extract params   │
│ Match to catalog │
└────────┬────────┘
         │
         ▼
    Confidence Score
         │
    ┌────┴────┐
    │         │
≥0.80      <0.80
    │         │
    ▼         ▼
┌───────┐ ┌───────┐
│Track 1│ │Track 2│
│Catalog│ │ Agent │
│(Fast) │ │(Flex) │
└───┬───┘ └───┬───┘
    │         │
    ▼         ▼
  Pre-approved  LLM-generated
  SQL template  SQL query
    │         │
    └────┬────┘
         │
         ▼
   SQL Validation
   (Safety check)
         │
         ▼
   Execute Query
         │
         ▼
   Format Results
   + Follow-ups
```

### 5.2 Track 1: Catalog Queries (80% of queries)

**What it is:** Pre-approved SQL templates that map to common questions.

**Why it's fast:**
- No LLM needed for SQL generation
- Deterministic results
- Pre-optimized queries
- Instant parameter substitution

**Example Catalog Queries:**

| Query Name | Natural Language | SQL Template |
|------------|------------------|--------------|
| `hot_leads` | "Show me hot leads" | `SELECT * FROM leads WHERE score >= 70 AND org_id = $1` |
| `leads_by_source` | "Leads from LinkedIn" | `SELECT * FROM leads WHERE source = $1 AND org_id = $2` |
| `pipeline_value` | "What's my pipeline worth?" | `SELECT SUM(value) FROM deals WHERE org_id = $1 AND is_won IS NULL` |
| `stalled_deals` | "Which deals are stuck?" | `SELECT * FROM deals WHERE days_in_stage > 7 AND org_id = $1` |
| `recent_activities` | "Show recent activities" | `SELECT * FROM activities WHERE org_id = $1 ORDER BY created_at DESC LIMIT 20` |

**Parameter Extraction:**
```
Query: "Show me hot leads from LinkedIn"
├── Matched: hot_leads_by_source
├── Parameters:
│   ├── source: "linkedin"
│   └── score_threshold: 70
└── Confidence: 0.95
```

### 5.3 Track 2: Agent Queries (20% of queries)

**What it is:** LLM generates SQL for novel or complex questions.

**When it triggers:**
- Catalog confidence < 0.80
- Complex multi-table joins
- Custom calculations
- Unusual filters

**SQL Generation Process:**
1. Provide full database schema to Claude
2. Include business term mappings ("hot" = score >= 70)
3. Generate SQL with safety constraints
4. Validate before execution

**Safety Validations:**
- No DROP, TRUNCATE, DELETE without conditions
- Always includes org_id filter
- No access to auth tables
- Query timeout limits
- Result row limits

### 5.4 Track 3: Ticket Creation

**What it is:** Routes bug reports and feature requests to support system.

**Trigger Patterns:**
```
Bugs:     "bug", "broken", "not working", "error", "issue"
Features: "feature request", "please add", "would be nice"
Support:  "help", "support", "stuck", "confused"
Billing:  "billing", "invoice", "payment"
```

**Output:**
```json
{
  "type": "bug",
  "severity": "medium",
  "component": "data_agent",
  "title": "Query returns wrong results",
  "description": "When I ask for hot leads...",
  "ticket_number": "#TK-2025-001"
}
```

### 5.5 Example Queries

**Lead Queries:**
```
"How many leads do I have?"
"Show me hot leads"
"Leads from LinkedIn with score above 80"
"Who hasn't been contacted in 30 days?"
"Top 10 leads by score"
```

**Deal Queries:**
```
"What's my total pipeline value?"
"Show deals closing this month"
"Which deals are stuck in negotiation?"
"Win rate this quarter"
"Average deal size"
```

**Activity Queries:**
```
"How many calls did we make this week?"
"Email open rate this month"
"Recent activities for John Smith"
"Top performers by activity count"
```

**Analytics Queries:**
```
"What's our conversion rate from lead to deal?"
"Which source has the best leads?"
"Campaign performance comparison"
"Monthly trend of new leads"
```

### 5.6 Response Format

```json
{
  "success": true,
  "track": "catalog",
  "data": [
    {"name": "John Smith", "company": "Acme", "score": 92},
    {"name": "Jane Doe", "company": "TechCo", "score": 87}
  ],
  "row_count": 2,
  "natural_language_summary": "Found 2 hot leads. Top: John Smith (92) at Acme Corp.",
  "provenance": {
    "tables_used": ["leads"],
    "filters_applied": {"score": ">=70"},
    "catalog_query": "hot_leads",
    "sql_executed": "SELECT * FROM leads WHERE score >= 70..."
  },
  "confidence": "high",
  "follow_ups": [
    "Would you like to see their contact history?",
    "Should I filter by source?"
  ],
  "execution_ms": 45
}
```

---

## 6. Proactive Alerts & Insights

### 6.1 Daily Alerts System

**What it does:** Automatically monitors your data and surfaces important insights.

**Alert Types:**

| Alert | Trigger | Severity |
|-------|---------|----------|
| **Hot Leads** | Leads with score 70+ not contacted | Warning if >10 |
| **Stalled Deals** | Deals in same stage 7+ days | Warning if >5 |
| **No Contact** | Leads not contacted in 30 days | Info |
| **Call Performance** | Success rate below threshold | Warning if <30% |

**Alert Behavior:**
- Alerts appear in bell icon dropdown
- Stay visible all day (don't disappear when read)
- Read state persists in database
- Resets daily (come back unread next day if condition persists)
- Disappear only when underlying issue is resolved

### 6.2 Proactive Engine (Detectors)

**What it does:** Scheduled detection of business-critical events.

**Schedule Types:**
| Schedule | When | Use Case |
|----------|------|----------|
| **Hourly** | Every hour | Real-time alerts (new hot lead) |
| **Daily** | 9 AM | Daily digest (stalled deals, follow-ups) |
| **Weekly** | Monday 9 AM | Weekly report (pipeline health, trends) |
| **Event** | On trigger | Threshold alerts (deal > $100K) |

**Audience Targeting:**
- **CEO:** Revenue impact, pipeline health, win rates
- **SDR:** Follow-up reminders, hot leads, engagement
- **RevOps:** Campaign performance, channel metrics

**Insight Output:**
```json
{
  "id": "uuid",
  "detector_id": "stalled_deals",
  "severity": "warning",
  "title": "5 Deals Stalled in Negotiation",
  "summary": "5 deals worth $250K have been in negotiation for 10+ days",
  "recommendations": [
    "Review pricing with Sarah's deal at Acme",
    "Schedule check-in call with TechCorp"
  ],
  "evidence_json": {
    "deal_count": 5,
    "total_value": 250000,
    "oldest_days": 15
  }
}
```

### 6.3 CEO & SDR Coaches

**CEO Coach Output:**
```json
{
  "headline": "Pipeline at risk: $250K in stalled deals",
  "explanation": "5 deals have been stuck in negotiation, typical close time exceeded",
  "business_impact": "Q1 revenue target at risk if not closed by Feb 15",
  "recommendations": [
    {
      "action": "Review pricing strategy for enterprise deals",
      "owner": "VP Sales",
      "urgency": "this_week"
    }
  ],
  "risk_level": "high"
}
```

**SDR Coach Output:**
```json
{
  "should_follow_up": true,
  "priority": "high",
  "task_suggestion": {
    "subject": "Re-engage John at Acme Corp",
    "description": "Last contact 14 days ago, opened email but didn't reply",
    "due_days": 1,
    "call_to_action": "LinkedIn message"
  },
  "email_draft": {
    "subject": "Quick question about your Q1 priorities",
    "body": "Hi John, I noticed you checked out our pricing page...",
    "tone": "friendly"
  }
}
```

---

## 7. Campaigns & Audiences

### 7.1 Audience Builder

**What it does:** Create dynamic segments based on lead attributes.

**Filter Options:**
| Category | Filters |
|----------|---------|
| **Status** | New, Contacted, Qualified, Converted, Lost |
| **Score** | Range (0-100), Hot/Warm/Cold |
| **Source** | LinkedIn, Website, Referral, Event, etc. |
| **Company** | Name, Industry, Size |
| **Tags** | Any custom tags |
| **Activity** | Last contacted, Email opened, etc. |
| **Location** | City, State, Country |

**Filter Logic:**
- AND/OR combinations
- Nested groups
- Include/Exclude rules

**Example Audience:**
```
"Hot Tech Leads"
├── Score >= 70
├── AND Industry = "Technology"
├── AND Status IN (New, Contacted)
└── AND NOT Tags contains "do-not-contact"
```

### 7.2 Campaign Management

**What it does:** Multi-channel outreach campaigns with automation.

**Campaign Types:**
| Type | Channels | Use Case |
|------|----------|----------|
| **Email Sequence** | Email | Nurture drip campaigns |
| **Multi-Channel** | Email + SMS + Voice | Full outreach campaign |
| **Event-Triggered** | Any | Auto-respond to actions |

**Campaign Features:**
- Audience targeting
- Multi-step sequences
- A/B testing (subject lines, content)
- AI message drafting
- Send time optimization
- Personalization tokens
- Unsubscribe handling

**Campaign Metrics:**
```
Sends:      1,000
Delivered:  985 (98.5%)
Opened:     456 (46.3%)
Clicked:    89 (9.0%)
Replied:    34 (3.5%)
Bounced:    15 (1.5%)
```

---

## 8. Analytics & Reporting

### 8.1 Dashboard Metrics

**Lead Metrics:**
| Metric | Description |
|--------|-------------|
| Total Leads | All leads in system |
| New This Month | Created in current month |
| Growth Rate | % change vs previous month |
| By Status | Breakdown by status |
| By Source | Breakdown by source |
| Average Score | Mean lead score |

**Pipeline Metrics:**
| Metric | Description |
|--------|-------------|
| Total Pipeline | Sum of open deal values |
| Weighted Pipeline | Value × Probability |
| Deals by Stage | Count per stage |
| Average Deal Size | Mean deal value |
| Win Rate | Won / (Won + Lost) |
| Sales Cycle | Avg days to close |

**Activity Metrics:**
| Metric | Description |
|--------|-------------|
| Emails Sent | Total sent |
| Open Rate | Opens / Sent |
| Click Rate | Clicks / Opens |
| Reply Rate | Replies / Sent |
| Calls Made | Total calls |
| Call Success | Connected / Attempted |
| SMS Sent | Total SMS |
| SMS Response | Responses / Sent |

### 8.2 Channel Performance

```
Channel     | Sent  | Open% | Click% | Reply%
------------|-------|-------|--------|-------
Email       | 2,450 | 42.3% | 8.7%   | 3.2%
SMS         | 890   | N/A   | 12.4%  | 8.9%
Voice       | 234   | N/A   | N/A    | 45.3%*
WhatsApp    | 156   | 89.2% | 15.6%  | 12.1%

* Voice = Call connected rate
```

### 8.3 Campaign Analytics

**Top Campaigns by Engagement:**
```
1. "Q4 Product Launch"     - 52.3% open rate
2. "January Nurture"       - 48.7% open rate
3. "Enterprise Outreach"   - 45.1% open rate
```

**Campaign Detail View:**
- Send volume over time
- Engagement funnel
- Best performing subject lines
- Optimal send times
- Audience segment performance

---

## 9. Settings & Configuration

### 9.1 Organization Settings

| Setting | Description | Configurable |
|---------|-------------|--------------|
| **Company Name** | Organization name | Yes |
| **Industry** | Business industry | Yes |
| **Company Size** | Employee count range | Yes |
| **Timezone** | Default timezone | Yes |
| **Logo** | Company logo | Yes |

### 9.2 Pipeline Configuration

| Setting | Description | Configurable |
|---------|-------------|--------------|
| **Pipeline Name** | Name of pipeline | Yes |
| **Stages** | Sales stages | Yes (add/edit/delete/reorder) |
| **Stage Colors** | Visual indicators | Yes |
| **Default Probability** | Per-stage probability | Yes |
| **Multiple Pipelines** | Different pipelines | Yes |

### 9.3 Email Settings

| Setting | Description | Configurable |
|---------|-------------|--------------|
| **Email Provider** | Gmail / Outlook | Yes |
| **OAuth Connection** | Authenticate account | Yes |
| **Sync Frequency** | How often to sync | Yes |
| **Signature** | Default signature | Yes |
| **Templates** | Saved templates | Yes (create/edit/delete) |

### 9.4 AI Agent Settings

| Setting | Description | Configurable |
|---------|-------------|--------------|
| **Voice Agent Name** | Name AI uses on calls | Yes |
| **Company Description** | How AI describes company | Yes |
| **System Prompt** | Full behavior customization | Yes |
| **First Message** | Opening line | Yes |
| **Calendar Timezone** | For scheduling | Yes |

### 9.5 Team Management

| Feature | Description |
|---------|-------------|
| **Invite Members** | Email invitation |
| **Roles** | Admin, Manager, User |
| **Permissions** | View, Edit, Delete per module |
| **Lead Assignment** | Auto-assign rules |

### 9.6 Integrations

| Integration | Status | Configuration |
|-------------|--------|---------------|
| **Gmail** | Available | OAuth2 |
| **Outlook** | Available | OAuth2 |
| **Google Calendar** | Available | OAuth2 |
| **Slack** | Planned | Webhook |
| **Salesforce** | Planned | API |
| **HubSpot** | Planned | API |

### 9.7 API & Webhooks

**API Keys:**
- Generate API keys for external integrations
- Set permissions per key
- Track usage

**Webhooks:**
- Lead created/updated
- Deal stage changed
- Email opened/clicked
- Call completed
- Custom events

---

## 10. Integrations

### 10.1 Current Integrations

| Service | Purpose | Setup |
|---------|---------|-------|
| **Supabase** | Database & Auth | Pre-configured |
| **Gmail** | Email sync | OAuth2 in settings |
| **Outlook** | Email sync | OAuth2 in settings |
| **Google Calendar** | Scheduling | OAuth2 in settings |
| **Tavily** | Web research | API key (backend) |
| **ElevenLabs** | Voice calls | API key (backend) |
| **Anthropic** | AI agents | API key (backend) |
| **OpenAI** | AI agents | API key (backend) |

### 10.2 Data Import/Export

**Import:**
- CSV upload with field mapping
- Bulk lead import
- Deal import

**Export:**
- CSV export (leads, deals, activities)
- Report export (PDF, Excel)

---

## 11. Security & Multi-Tenancy

### 11.1 Authentication

- Email/password authentication
- OAuth2 (Google, Microsoft)
- Session management
- Password reset flow

### 11.2 Multi-Tenancy

- Complete data isolation per organization
- Row Level Security (RLS) in database
- All queries filtered by org_id
- No cross-tenant data access

### 11.3 Data Security

| Feature | Implementation |
|---------|----------------|
| **Encryption at Rest** | Supabase managed |
| **Encryption in Transit** | TLS 1.3 |
| **API Security** | JWT tokens |
| **SQL Injection** | Parameterized queries |
| **Rate Limiting** | Per-endpoint limits |

### 11.4 Compliance

- GDPR-ready (data export, deletion)
- Audit logging
- Data retention policies

---

## Appendix: API Reference

### Authentication
```
POST /api/auth/signup    - Register new account
POST /api/auth/signin    - Login
POST /api/auth/signout   - Logout
GET  /api/auth/me        - Current user
```

### Leads
```
GET    /api/leads              - List leads
POST   /api/leads              - Create lead
GET    /api/leads/{id}         - Get lead
PUT    /api/leads/{id}         - Update lead
POST   /api/leads/bulk         - Bulk import
GET    /api/leads/stats        - Lead statistics
```

### Deals
```
GET    /api/deals              - List deals
POST   /api/deals              - Create deal
GET    /api/deals/{id}         - Get deal
POST   /api/deals/{id}/move    - Move deal stage
GET    /api/deals/stats        - Deal statistics
```

### Agents
```
POST   /api/agents/execute           - Execute agent
POST   /api/agents/execute/bulk      - Bulk execute
POST   /api/agents/score/{lead_id}   - Score lead
POST   /api/agents/enrich/{lead_id}  - Enrich lead
GET    /api/agents/executions        - Execution history
```

### Communication
```
POST   /api/email/send              - Send email
POST   /api/email/draft-response    - AI draft
POST   /api/sms/send                - Send SMS
POST   /api/sms/draft               - AI draft
POST   /api/voice/call              - Make AI call
GET    /api/voice/call/{id}         - Get call details
```

### Data Agent
```
POST   /api/data-agent/query        - Natural language query
GET    /api/data-agent/queries      - Available queries
GET    /api/data-agent/quick-stats  - Quick statistics
```

### Proactive
```
GET    /api/proactive/insights      - List insights
POST   /api/proactive/run-daily     - Run daily detectors
GET    /api/proactive/detectors     - List detectors
```

---

*Document generated for VexioSales v1.0 - December 2025*
