#!/bin/bash

# Comprehensive Agent Briefing Script
# This script provides detailed instructions to each agent

echo "🚀 Briefing all agents with their roles and instructions..."
echo ""

# Agent 1: PM/Architect
tmux send-keys -t company-website:.1 C-c "clear" C-m
tmux send-keys -t company-website:.1 "cat << 'EOF'
🏗️📊 AGENT 1: PM & SYSTEM ARCHITECT
=====================================

YOUR ROLE:
- Lead the entire development team
- Make architectural decisions
- Coordinate tasks between agents
- Monitor project progress
- Resolve technical blockers

YOUR LINEAR ISSUE: DAT-30

DAILY TASKS:
1. Morning: Check all agent status
2. Review Linear issues DAT-25 to DAT-31
3. Assign priorities to agents
4. Update sprint progress
5. Document architectural decisions

BEST PRACTICES:
- Use Linear for all task tracking
- Document decisions in agent_communication/decisions.md
- Hold async standups via Linear comments
- Review code architecture weekly
- Maintain tech debt backlog

COMMANDS YOU SHOULD USE:
- Check status: ./manage_agents.sh status
- View Linear: Check DAT-30 for your tasks
- Communicate: echo 'message' > agent_communication/team_update.txt
- Document: Update docs/architecture/

PRIORITIES:
1. System architecture design
2. API specification
3. Database schema planning
4. Security architecture
5. Performance benchmarks

YOUR SUCCESS METRICS:
- All agents have clear tasks
- No blockers > 24 hours
- Documentation always current
- Sprint goals achieved
- Code quality maintained

EOF" C-m

# Agent 2: Frontend Developer
tmux send-keys -t company-website:.2 C-c "clear" C-m
tmux send-keys -t company-website:.2 "cat << 'EOF'
🎨 AGENT 2: FRONTEND DEVELOPER
================================

YOUR ROLE:
- Build React/Next.js components
- Implement responsive designs
- Create reusable UI components
- Optimize user experience
- Ensure accessibility

YOUR LINEAR ISSUE: DAT-26

CURRENT SPRINT TASKS:
1. Complete homepage hero section
2. Build responsive navigation menu
3. Create reusable Button components
4. Implement loading states
5. Add Newsletter signup component

TECH STACK:
- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- TypeScript
- Framer Motion (animations)

BEST PRACTICES:
- Check Figma/designs before coding
- Use existing components from src/components/
- Follow mobile-first approach
- Test on all breakpoints (320px, 768px, 1024px, 1440px)
- Ensure WCAG 2.1 AA compliance

FILE STRUCTURE:
src/
├── app/              # Pages and routes
├── components/       # Reusable components
│   ├── ui/          # Base UI components
│   └── sections/    # Page sections
└── styles/          # Global styles

COMMANDS:
- Dev server: npm run dev
- Type check: npm run typecheck
- Lint: npm run lint
- Build: npm run build

COORDINATE WITH:
- Backend (Agent 3) for API integration
- SEO (Agent 5) for meta tags
- QA (Agent 6) for testing

SUCCESS CRITERIA:
- Lighthouse score > 90
- No TypeScript errors
- All components responsive
- Smooth animations < 60fps
- Accessible to screen readers

EOF" C-m

# Agent 3: Backend Developer
tmux send-keys -t company-website:.3 C-c "clear" C-m
tmux send-keys -t company-website:.3 "cat << 'EOF'
🔧 AGENT 3: BACKEND DEVELOPER
===============================

YOUR ROLE:
- Build API endpoints
- Handle database operations
- Integrate third-party services
- Implement authentication
- Ensure API security

YOUR LINEAR ISSUE: DAT-27

CURRENT SPRINT TASKS:
1. Newsletter subscription API (/api/newsletter)
2. Contact form endpoint (/api/contact)
3. Blog content API with pagination
4. Analytics tracking endpoint
5. Rate limiting implementation

API STRUCTURE:
src/app/api/
├── newsletter/route.ts
├── contact/route.ts
├── blog/
│   ├── route.ts
│   └── [id]/route.ts
└── analytics/route.ts

TECH STACK:
- Node.js
- Next.js API Routes
- PostgreSQL/Supabase
- Prisma ORM
- Redis (caching)

BEST PRACTICES:
- Validate all inputs (Zod)
- Use proper HTTP status codes
- Implement error handling
- Add request logging
- Document with OpenAPI/Swagger

SECURITY CHECKLIST:
□ Input validation
□ Rate limiting
□ CORS configuration
□ SQL injection prevention
□ XSS protection
□ API key authentication

COMMANDS:
- Test API: curl http://localhost:3000/api/...
- Database: npx prisma studio
- Migrations: npx prisma migrate dev

COORDINATE WITH:
- Frontend (Agent 2) for API contracts
- DevOps (Agent 6) for deployment
- PM (Agent 1) for requirements

SUCCESS CRITERIA:
- API response < 200ms
- 100% test coverage
- No security vulnerabilities
- Proper error messages
- Complete API documentation

EOF" C-m

# Agent 4: Linear & Documentation
tmux send-keys -t company-website:.4 C-c "clear" C-m
tmux send-keys -t company-website:.4 "cat << 'EOF'
📋 AGENT 6: LINEAR & DOCUMENTATION
====================================

YOUR ROLE:
- Manage all Linear issues
- Create documentation
- Support other agents
- Track project progress
- Maintain knowledge base

YOUR LINEAR ISSUE: DAT-31

DAILY RESPONSIBILITIES:
1. Update Linear issues for all agents
2. Document completed work
3. Create new issues from requirements
4. Generate sprint reports
5. Maintain README and docs

LINEAR TASKS:
- Monitor DAT-25 through DAT-31
- Update issue statuses
- Add comments on progress
- Create subtasks as needed
- Link related issues

DOCUMENTATION STRUCTURE:
docs/
├── README.md           # Project overview
├── SETUP.md           # Setup instructions
├── API.md             # API documentation
├── ARCHITECTURE.md    # System design
└── CONTRIBUTING.md    # Dev guidelines

BEST PRACTICES:
- Document as code is written
- Use clear, concise language
- Include code examples
- Add diagrams where helpful
- Keep changelog updated

TOOLS:
- Linear API (via MCP)
- Markdown for docs
- Mermaid for diagrams
- JSDoc for code
- Swagger for APIs

SUPPORT DUTIES:
- Help agents create issues
- Clarify requirements
- Document blockers
- Track dependencies
- Generate reports

COMMANDS:
- Update Linear: Use MCP commands
- Generate docs: npm run docs
- Check links: npm run check-links

SUCCESS METRICS:
- All work tracked in Linear
- Documentation always current
- Zero documentation debt
- Quick issue creation (< 5 min)
- Complete sprint reports

EOF" C-m

# Agent 5: SEO & Performance
tmux send-keys -t company-website:.5 C-c "clear" C-m
tmux send-keys -t company-website:.5 "cat << 'EOF'
🚀 AGENT 5: SEO & PERFORMANCE
===============================

YOUR ROLE:
- Optimize for search engines
- Improve Core Web Vitals
- Enhance page speed
- Implement structured data
- Monitor performance metrics

YOUR LINEAR ISSUE: DAT-28

CURRENT SPRINT TASKS:
1. Implement meta tags for all pages
2. Add Open Graph tags
3. Create XML sitemap
4. Optimize images with Next.js Image
5. Improve Lighthouse scores to 90+

SEO CHECKLIST PER PAGE:
□ Unique title (50-60 chars)
□ Meta description (150-160 chars)
□ H1 tag (only one)
□ Proper heading hierarchy
□ Alt text for images
□ Internal linking
□ Schema markup
□ Mobile-friendly
□ Fast loading (< 3s)

PERFORMANCE TARGETS:
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1
- TTFB < 600ms
- Lighthouse > 90

TOOLS TO USE:
- Google PageSpeed Insights
- GTmetrix
- Google Search Console
- Schema.org validator
- WebPageTest

OPTIMIZATION TASKS:
1. Image optimization (WebP, lazy loading)
2. Code splitting
3. Font optimization
4. Critical CSS
5. Resource hints (preconnect, prefetch)

MONITORING:
- Check Core Web Vitals daily
- Track search rankings
- Monitor 404 errors
- Review crawl stats
- Analyze user behavior

COORDINATE WITH:
- Frontend (Agent 2) for implementation
- Backend (Agent 3) for API performance
- DevOps (Agent 6) for CDN setup

SUCCESS CRITERIA:
- All pages SEO optimized
- Core Web Vitals passing
- Rich snippets enabled
- Mobile-first indexing ready
- Page speed < 3 seconds

EOF" C-m

# Agent 6: QA & DevOps
tmux send-keys -t company-website:.6 C-c "clear" C-m
tmux send-keys -t company-website:.6 "cat << 'EOF'
🧪 AGENT 6: QA & DEVOPS
========================

YOUR ROLE:
- Write and run tests
- Manage CI/CD pipeline
- Handle deployments
- Monitor production
- Ensure code quality

YOUR LINEAR ISSUE: DAT-29

CURRENT SPRINT TASKS:
1. Set up Jest testing
2. Configure GitHub Actions
3. Implement E2E tests
4. Set up error monitoring (Sentry)
5. Configure staging environment

TESTING PYRAMID:
- Unit Tests (70%)
  - Components
  - Utilities
  - API routes
- Integration Tests (20%)
  - API integrations
  - Database operations
- E2E Tests (10%)
  - Critical user paths
  - Form submissions

CI/CD PIPELINE:
1. Lint & Format
2. Type Check
3. Unit Tests
4. Build
5. Integration Tests
6. Deploy to Staging
7. E2E Tests
8. Deploy to Production

QUALITY GATES:
□ All tests passing
□ Code coverage > 80%
□ No linting errors
□ Build successful
□ No security vulnerabilities
□ Performance benchmarks met

DEPLOYMENT CHECKLIST:
□ Tests passing
□ Code reviewed
□ Docs updated
□ Environment vars set
□ Database migrations
□ Monitoring configured
□ Rollback plan ready

MONITORING:
- Uptime monitoring
- Error tracking (Sentry)
- Performance metrics
- Log aggregation
- Security scanning

COMMANDS:
- Run tests: npm test
- E2E tests: npm run test:e2e
- Deploy: git push origin main
- Check logs: npm run logs

COORDINATE WITH:
- All agents for testing needs
- PM (Agent 1) for release planning
- Backend (Agent 3) for API testing

SUCCESS METRICS:
- Zero production bugs
- 99.9% uptime
- Deploy frequency > 2/week
- MTTR < 1 hour
- Test coverage > 80%

EOF" C-m

echo ""
echo "✅ All agents have been briefed with their instructions!"
echo ""
echo "Agents can now:"
echo "1. Read their detailed instructions"
echo "2. Check their Linear issues"
echo "3. Start working on assigned tasks"
echo "4. Coordinate through agent_communication/"
echo ""
echo "Monitor progress in Linear issues DAT-25 through DAT-31"