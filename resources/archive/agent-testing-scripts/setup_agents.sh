#!/bin/bash

# Setup script for 5 specialized agents in tmux panes

# Agent 1: PM + System Architect (Combined Leadership)
tmux send-keys -t company-website:.1 C-c "clear" C-m
tmux send-keys -t company-website:.1 "echo '🏗️📊 Agent 1: PM + Architect'" C-m
tmux send-keys -t company-website:.1 "echo '================================'" C-m
tmux send-keys -t company-website:.1 "echo 'Role: Project management + System architecture'" C-m
tmux send-keys -t company-website:.1 "echo 'Responsibilities:'" C-m
tmux send-keys -t company-website:.1 "echo '  - Task coordination & team orchestration'" C-m
tmux send-keys -t company-website:.1 "echo '  - System design & architecture decisions'" C-m
tmux send-keys -t company-website:.1 "echo '  - Track progress & manage priorities'" C-m
tmux send-keys -t company-website:.1 "echo '  - Technical leadership & code structure'" C-m
tmux send-keys -t company-website:.1 "echo ''" C-m
tmux send-keys -t company-website:.1 "echo 'Status: Leading team...'" C-m

# Agent 2: Frontend Developer
tmux send-keys -t company-website:.2 C-c "clear" C-m
tmux send-keys -t company-website:.2 "echo '🎨 Agent 2: Frontend Developer'" C-m
tmux send-keys -t company-website:.2 "echo '================================'" C-m
tmux send-keys -t company-website:.2 "echo 'Role: UI/UX, React components, styling'" C-m
tmux send-keys -t company-website:.2 "echo 'Focus Areas:'" C-m
tmux send-keys -t company-website:.2 "echo '  - React/Next.js components'" C-m
tmux send-keys -t company-website:.2 "echo '  - Tailwind CSS & styling'" C-m
tmux send-keys -t company-website:.2 "echo '  - User experience & interactions'" C-m
tmux send-keys -t company-website:.2 "echo '  - Responsive design'" C-m
tmux send-keys -t company-website:.2 "echo 'Monitoring: src/components/, src/app/'" C-m
tmux send-keys -t company-website:.2 "echo ''" C-m
tmux send-keys -t company-website:.2 "echo 'Status: Ready for UI tasks...'" C-m

# Agent 3: Backend Developer
tmux send-keys -t company-website:.3 C-c "clear" C-m
tmux send-keys -t company-website:.3 "echo '🔧 Agent 3: Backend Developer'" C-m
tmux send-keys -t company-website:.3 "echo '================================'" C-m
tmux send-keys -t company-website:.3 "echo 'Role: APIs, server logic, database, integrations'" C-m
tmux send-keys -t company-website:.3 "echo 'Focus Areas:'" C-m
tmux send-keys -t company-website:.3 "echo '  - API routes & endpoints'" C-m
tmux send-keys -t company-website:.3 "echo '  - Database operations'" C-m
tmux send-keys -t company-website:.3 "echo '  - Server-side logic'" C-m
tmux send-keys -t company-website:.3 "echo '  - Third-party integrations'" C-m
tmux send-keys -t company-website:.3 "echo 'Monitoring: src/app/api/, backend services'" C-m
tmux send-keys -t company-website:.3 "echo ''" C-m
tmux send-keys -t company-website:.3 "echo 'Status: Ready for backend tasks...'" C-m

# Agent 4: SEO & Performance Specialist
tmux send-keys -t company-website:.4 C-c "clear" C-m
tmux send-keys -t company-website:.4 "echo '🚀 Agent 4: SEO & Performance'" C-m
tmux send-keys -t company-website:.4 "echo '================================'" C-m
tmux send-keys -t company-website:.4 "echo 'Role: SEO optimization, performance, content strategy'" C-m
tmux send-keys -t company-website:.4 "echo 'Focus Areas:'" C-m
tmux send-keys -t company-website:.4 "echo '  - SEO metadata & structure'" C-m
tmux send-keys -t company-website:.4 "echo '  - Core Web Vitals & performance'" C-m
tmux send-keys -t company-website:.4 "echo '  - Content optimization'" C-m
tmux send-keys -t company-website:.4 "echo '  - Analytics & tracking'" C-m
tmux send-keys -t company-website:.4 "echo 'Monitoring: Page speed, SEO metrics, content'" C-m
tmux send-keys -t company-website:.4 "echo ''" C-m
tmux send-keys -t company-website:.4 "echo 'Status: Ready for optimization...'" C-m

# Agent 5: QA & DevOps Engineer
tmux send-keys -t company-website:.5 C-c "clear" C-m
tmux send-keys -t company-website:.5 "echo '🧪 Agent 5: QA & DevOps'" C-m
tmux send-keys -t company-website:.5 "echo '================================'" C-m
tmux send-keys -t company-website:.5 "echo 'Role: Testing, CI/CD, deployment, monitoring'" C-m
tmux send-keys -t company-website:.5 "echo 'Focus Areas:'" C-m
tmux send-keys -t company-website:.5 "echo '  - Automated testing'" C-m
tmux send-keys -t company-website:.5 "echo '  - Build & deployment'" C-m
tmux send-keys -t company-website:.5 "echo '  - Code quality & linting'" C-m
tmux send-keys -t company-website:.5 "echo '  - Production monitoring'" C-m
tmux send-keys -t company-website:.5 "echo 'Monitoring: Tests, builds, deployment pipeline'" C-m
tmux send-keys -t company-website:.5 "echo ''" C-m
tmux send-keys -t company-website:.5 "echo 'Status: Ready for QA/DevOps...'" C-m

echo "✅ All 5 agents have been initialized!"
echo ""
echo "Team Structure:"
echo "  1. 🏗️📊 PM + Architect - Leadership & system design"
echo "  2. 🎨 Frontend Developer - UI/UX & React"
echo "  3. 🔧 Backend Developer - APIs & server logic"
echo "  4. 🚀 SEO & Performance - Optimization & content"
echo "  5. 🧪 QA & DevOps - Testing & deployment"
echo ""
echo "Agent 1 (PM+Architect) leads the team with both management and technical vision."