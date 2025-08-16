#!/bin/bash
# Smart Project Analyzer - Creates project-specific commands automatically

echo "🔍 ANALYZING PROJECT TYPE..."

# Function to detect project type
detect_project_type() {
    if [ -f "package.json" ]; then
        # Check for specific frameworks/purposes
        if grep -q "next\|react\|vue\|angular" package.json; then
            if grep -q "commerce\|shop\|cart" package.json; then
                echo "ecommerce"
            elif grep -q "blog\|content\|cms" package.json; then
                echo "blog"
            else
                echo "website"
            fi
        elif grep -q "express\|fastify\|nestjs" package.json; then
            echo "api"
        fi
    elif [ -f "requirements.txt" ] || [ -f "setup.py" ]; then
        echo "python-app"
    elif [ -f "Gemfile" ]; then
        echo "ruby-app"
    else
        echo "website"  # default
    fi
}

PROJECT_TYPE=$(detect_project_type)
echo "✅ Detected Project Type: $PROJECT_TYPE"

# Create project-specific commands based on type
case $PROJECT_TYPE in
    "website")
        echo "🌐 Creating Website-Specific Commands..."
        
        # SEO Commands
        cat > .claude/commands/seo-audit.md << 'EOF'
# SEO Audit

Complete SEO analysis for top Google rankings:

1. **Technical SEO**
   - Check meta tags, headers, schema
   - Analyze page speed and Core Web Vitals
   - Review XML sitemap and robots.txt
   - Check mobile responsiveness
   - Find broken links and 404s

2. **Content SEO**
   - Keyword density and placement
   - Content quality and length
   - Internal linking structure
   - Image optimization and alt texts
   - Header hierarchy (H1, H2, etc.)

3. **Off-Page SEO**
   - Backlink profile analysis
   - Domain authority check
   - Competitor backlink gaps
   - Social signals

4. **Local SEO** (if applicable)
   - Google My Business optimization
   - Local citations
   - Reviews strategy

Output: Prioritized action plan to reach #1 on Google
EOF

        cat > .claude/commands/keyword-research.md << 'EOF'
# Keyword Research

Find high-value keywords for organic growth:

1. **Analyze Current Keywords**
   - What we rank for now
   - Current positions
   - Search volumes

2. **Competitor Keywords**
   - What competitors rank for
   - Keyword gaps we can fill
   - Easy wins (low competition)

3. **Long-tail Opportunities**
   - Question-based keywords
   - Local intent keywords
   - Buyer intent keywords

4. **Content Mapping**
   - Which keywords for which pages
   - New pages needed
   - Content clusters

Output: Keyword strategy with monthly search volumes and difficulty scores
EOF

        cat > .claude/commands/lead-optimize.md << 'EOF'
# Lead Generation Optimization

Maximize conversions and lead quality:

1. **Audit Current Funnel**
   - Entry points analysis
   - Form conversion rates
   - Drop-off points
   - Lead quality metrics

2. **CTA Optimization**
   - Button placement and copy
   - Value proposition clarity
   - Urgency and scarcity
   - A/B test variations

3. **Form Optimization**
   - Reduce fields
   - Progressive profiling
   - Smart defaults
   - Mobile optimization

4. **Trust Building**
   - Social proof placement
   - Security badges
   - Testimonials
   - Case studies

5. **Lead Nurturing**
   - Email sequences
   - Retargeting setup
   - Lead scoring
   - Sales handoff

Output: Conversion improvement roadmap with expected impact
EOF

        cat > .claude/commands/content-strategy.md << 'EOF'
# Content Strategy for #1 Rankings

Build authoritative content that ranks:

1. **Content Audit**
   - Current content performance
   - Gaps in topic coverage
   - Update opportunities
   - Pruning candidates

2. **Competitor Content Analysis**
   - What content ranks #1
   - Content depth and quality
   - Unique angles we can take
   - Content formats working

3. **Content Calendar**
   - Pillar content topics
   - Supporting cluster content
   - Seasonal opportunities
   - Trending topics

4. **Content Optimization**
   - Target keyword integration
   - Semantic keyword usage
   - Featured snippet targeting
   - Rich media integration

5. **Link Building**
   - Linkable asset creation
   - Outreach targets
   - Guest post opportunities
   - HARO opportunities

Output: 90-day content plan with SEO impact projections
EOF

        cat > .claude/commands/ux-optimize.md << 'EOF'
# UX Optimization for Conversions

Improve user experience to boost conversions:

1. **Current UX Audit**
   - User flow analysis
   - Friction points
   - Confusion areas
   - Mobile experience

2. **Page Speed Optimization**
   - Core Web Vitals
   - Image optimization
   - Code splitting
   - CDN setup

3. **Navigation Improvement**
   - Menu structure
   - Search functionality
   - Breadcrumbs
   - Footer optimization

4. **Engagement Metrics**
   - Bounce rate reduction
   - Time on site increase
   - Pages per session
   - Scroll depth

5. **Accessibility**
   - WCAG compliance
   - Screen reader compatibility
   - Keyboard navigation
   - Color contrast

Output: UX improvements prioritized by conversion impact
EOF

        cat > .claude/commands/competitor-analysis.md << 'EOF'
# Competitor Analysis

Understand and outperform competitors:

1. **Identify Top Competitors**
   - Direct competitors
   - SERP competitors
   - Aspirational competitors

2. **SEO Analysis**
   - Their top keywords
   - Backlink profile
   - Content strategy
   - Technical setup

3. **UX/UI Analysis**
   - Design patterns
   - Conversion tactics
   - User flow
   - Unique features

4. **Content Analysis**
   - Topics covered
   - Content depth
   - Update frequency
   - Engagement metrics

5. **Gap Analysis**
   - What we're missing
   - Quick wins
   - Long-term opportunities
   - Differentiation strategy

Output: Competitive advantage roadmap
EOF

        # Create monitoring dashboard
        cat > .claude/commands/growth-dashboard.md << 'EOF'
# Growth Dashboard

Monitor all key metrics for organic growth:

## SEO Metrics
- Rankings for target keywords
- Organic traffic growth
- Click-through rates
- Featured snippets won

## Lead Generation
- Form conversion rates
- Lead quality score
- Cost per lead
- Lead to customer rate

## Content Performance
- Top performing pages
- Content engagement
- Social shares
- Backlinks earned

## Technical Health
- Page speed scores
- Core Web Vitals
- Crawl errors
- Mobile usability

## Competitor Tracking
- Ranking changes
- New content published
- Backlinks gained
- Feature updates

Updates automatically and alerts on significant changes.
EOF
        ;;
        
    "ecommerce")
        echo "🛒 Creating E-commerce Commands..."
        # Add e-commerce specific commands
        ;;
        
    "api")
        echo "🔌 Creating API Commands..."
        # Add API specific commands
        ;;
esac

# Create the master growth command
cat > .claude/commands/growth-master.md << 'EOF'
# Growth Master Command

Executes complete growth optimization:

1. Run full SEO audit
2. Perform competitor analysis
3. Generate keyword opportunities
4. Create content strategy
5. Optimize all conversion points
6. Set up monitoring
7. Create 90-day action plan

This is your one command to rule them all for organic growth!
EOF

# Update CLAUDE.md with project-specific context
cat >> CLAUDE.md << EOF

## 🎯 PROJECT-SPECIFIC GOALS

### Primary Objective: #1 Google Rankings & Lead Generation
- Target Keywords: [To be determined by /keyword-research]
- Conversion Goal: [X]% form completion
- Traffic Goal: [X] organic visitors/month
- Lead Goal: [X] qualified leads/month

### Key Success Metrics
1. Organic traffic growth
2. Keyword rankings improvement
3. Conversion rate optimization
4. Lead quality score
5. Page speed (Core Web Vitals)

### Available Specialized Commands
- \`/seo-audit\` - Complete SEO analysis
- \`/keyword-research\` - Find profitable keywords
- \`/lead-optimize\` - Improve conversions
- \`/content-strategy\` - Content planning
- \`/competitor-analysis\` - Beat competitors
- \`/growth-dashboard\` - Monitor everything
- \`/growth-master\` - Do everything!

### Current Focus Areas
1. [Auto-populated based on audits]
2. [Updated after each analysis]
3. [Prioritized by impact]
EOF

echo ""
echo "✅ PROJECT-SPECIFIC SETUP COMPLETE!"
echo ""
echo "🚀 New Commands Available:"
echo "   /seo-audit - Full SEO analysis"
echo "   /keyword-research - Find keywords"
echo "   /lead-optimize - Boost conversions"
echo "   /content-strategy - Content plan"
echo "   /competitor-analysis - Beat competitors"
echo "   /growth-master - Complete growth plan"
echo ""
echo "💡 Start with: claude '/growth-master'"
echo "   This will create your complete growth strategy!"