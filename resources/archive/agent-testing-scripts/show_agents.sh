#!/bin/bash

# Kill existing session if it exists
tmux kill-session -t agents-workspace 2>/dev/null

# Create new session with 5 panes
tmux new-session -d -s agents-workspace

# Create the layout
tmux split-window -h -t agents-workspace
tmux split-window -v -t agents-workspace:0.0
tmux split-window -v -t agents-workspace:0.1
tmux select-pane -t agents-workspace:0.0
tmux split-window -v -t agents-workspace:0.0

# Clear and set up each agent
tmux send-keys -t agents-workspace:0.0 'clear' C-m
tmux send-keys -t agents-workspace:0.0 'echo "================================"' C-m
tmux send-keys -t agents-workspace:0.0 'echo "AGENT 1: FRONTEND DEVELOPER"' C-m
tmux send-keys -t agents-workspace:0.0 'echo "================================"' C-m
tmux send-keys -t agents-workspace:0.0 'echo "Role: UI/UX, React Components"' C-m
tmux send-keys -t agents-workspace:0.0 'echo "Status: Ready"' C-m

tmux send-keys -t agents-workspace:0.1 'clear' C-m
tmux send-keys -t agents-workspace:0.1 'echo "================================"' C-m
tmux send-keys -t agents-workspace:0.1 'echo "AGENT 2: BACKEND DEVELOPER"' C-m
tmux send-keys -t agents-workspace:0.1 'echo "================================"' C-m
tmux send-keys -t agents-workspace:0.1 'echo "Role: APIs, Database, Auth"' C-m
tmux send-keys -t agents-workspace:0.1 'echo "Status: Ready"' C-m

tmux send-keys -t agents-workspace:0.2 'clear' C-m
tmux send-keys -t agents-workspace:0.2 'echo "================================"' C-m
tmux send-keys -t agents-workspace:0.2 'echo "AGENT 3: SEO SPECIALIST"' C-m
tmux send-keys -t agents-workspace:0.2 'echo "================================"' C-m
tmux send-keys -t agents-workspace:0.2 'echo "Role: SEO, Content, Meta Tags"' C-m
tmux send-keys -t agents-workspace:0.2 'echo "Status: Ready"' C-m

tmux send-keys -t agents-workspace:0.3 'clear' C-m
tmux send-keys -t agents-workspace:0.3 'echo "================================"' C-m
tmux send-keys -t agents-workspace:0.3 'echo "AGENT 4: QA ENGINEER"' C-m
tmux send-keys -t agents-workspace:0.3 'echo "================================"' C-m
tmux send-keys -t agents-workspace:0.3 'echo "Role: Testing, Quality Assurance"' C-m
tmux send-keys -t agents-workspace:0.3 'echo "Status: Ready"' C-m

tmux send-keys -t agents-workspace:0.4 'clear' C-m
tmux send-keys -t agents-workspace:0.4 'echo "================================"' C-m
tmux send-keys -t agents-workspace:0.4 'echo "AGENT 5: DEVOPS ENGINEER"' C-m
tmux send-keys -t agents-workspace:0.4 'echo "================================"' C-m
tmux send-keys -t agents-workspace:0.4 'echo "Role: CI/CD, Deployment, Monitoring"' C-m
tmux send-keys -t agents-workspace:0.4 'echo "Status: Ready"' C-m

echo "✅ Multi-agent workspace created!"
echo ""
echo "To view all agents side by side, run:"
echo "  tmux attach -t agents-workspace"
echo ""
echo "Navigation:"
echo "  • Ctrl+b then arrow keys to move between panes"
echo "  • Ctrl+b then q to show pane numbers"
echo "  • Ctrl+b then d to detach"
