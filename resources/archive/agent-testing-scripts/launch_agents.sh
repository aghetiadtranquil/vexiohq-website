#!/bin/bash

# Launch all 5 agents in tmux panes with their interactive scripts

echo "🚀 Launching 5-Agent Development Team..."

# Create agent_scripts directory
mkdir -p agent_scripts
mkdir -p agent_communication

# Agent 1: PM + Architect
tmux send-keys -t company-website:.1 C-c "clear" C-m
tmux send-keys -t company-website:.1 "bash agent_scripts/agent1_pm_architect.sh" C-m

# Agent 2: Frontend Developer
tmux send-keys -t company-website:.2 C-c "clear" C-m
tmux send-keys -t company-website:.2 "echo '🎨 Agent 2: Frontend Developer'" C-m
tmux send-keys -t company-website:.2 "echo '================================'" C-m
tmux send-keys -t company-website:.2 "echo 'Monitoring: src/components/ and src/app/'" C-m
tmux send-keys -t company-website:.2 "echo 'Ready for React/Next.js tasks...'" C-m
tmux send-keys -t company-website:.2 "watch -n 5 'echo \"Checking for UI tasks...\"; ls -la agent_communication/ 2>/dev/null | grep frontend'" C-m

# Agent 3: Backend Developer
tmux send-keys -t company-website:.3 C-c "clear" C-m
tmux send-keys -t company-website:.3 "echo '🔧 Agent 3: Backend Developer'" C-m
tmux send-keys -t company-website:.3 "echo '================================'" C-m
tmux send-keys -t company-website:.3 "echo 'Monitoring: src/app/api/'" C-m
tmux send-keys -t company-website:.3 "echo 'Ready for API tasks...'" C-m
tmux send-keys -t company-website:.3 "watch -n 5 'echo \"Checking for backend tasks...\"; ls -la agent_communication/ 2>/dev/null | grep backend'" C-m

# Agent 4: SEO & Performance
tmux send-keys -t company-website:.4 C-c "clear" C-m
tmux send-keys -t company-website:.4 "echo '🚀 Agent 4: SEO & Performance'" C-m
tmux send-keys -t company-website:.4 "echo '================================'" C-m
tmux send-keys -t company-website:.4 "echo 'Monitoring SEO and performance metrics...'" C-m
tmux send-keys -t company-website:.4 "echo 'Ready for optimization tasks...'" C-m
tmux send-keys -t company-website:.4 "watch -n 5 'echo \"Checking for SEO tasks...\"; ls -la agent_communication/ 2>/dev/null | grep seo'" C-m

# Agent 5: QA & DevOps
tmux send-keys -t company-website:.5 C-c "clear" C-m
tmux send-keys -t company-website:.5 "echo '🧪 Agent 5: QA & DevOps'" C-m
tmux send-keys -t company-website:.5 "echo '================================'" C-m
tmux send-keys -t company-website:.5 "echo 'Monitoring builds and tests...'" C-m
tmux send-keys -t company-website:.5 "echo 'Ready for QA/DevOps tasks...'" C-m
tmux send-keys -t company-website:.5 "watch -n 5 'echo \"Checking build status...\"; ls -la agent_communication/ 2>/dev/null | grep qa'" C-m

echo ""
echo "✅ All agents launched!"
echo ""
echo "📝 To send a task to agents:"
echo "   echo 'Your task here' > agent_communication/new_task.txt"
echo ""
echo "👀 Your tmux window now shows:"
echo "   Pane 1: PM + Architect (Coordinator)"
echo "   Pane 2: Frontend Developer"
echo "   Pane 3: Backend Developer"
echo "   Pane 4: SEO & Performance"
echo "   Pane 5: QA & DevOps"