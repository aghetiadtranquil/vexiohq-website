#!/bin/bash
# Local Agent Launcher for this project

PROJECT_NAME=$(basename $(pwd))
AGENT_COUNT=${1:-3}

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}Starting $AGENT_COUNT agents for $PROJECT_NAME...${NC}"

# Kill existing session if exists
tmux kill-session -t "$PROJECT_NAME" 2>/dev/null || true

# Create new session
tmux new-session -d -s "$PROJECT_NAME" -c "$(pwd)"

# Create panes
if [ $AGENT_COUNT -ge 2 ]; then
    tmux split-window -h -t "$PROJECT_NAME:0" -c "$(pwd)"
fi
if [ $AGENT_COUNT -ge 3 ]; then
    tmux split-window -v -t "$PROJECT_NAME:0.1" -c "$(pwd)"
fi
if [ $AGENT_COUNT -ge 4 ]; then
    tmux split-window -v -t "$PROJECT_NAME:0.0" -c "$(pwd)"
    tmux select-layout -t "$PROJECT_NAME" tiled
fi

# Start Claude in all panes
for ((i=1; i<=AGENT_COUNT; i++)); do
    tmux send-keys -t "$PROJECT_NAME.$i" "claude --dangerously-skip-permissions" Enter
done

echo -e "${GREEN}✅ Agents started!${NC}"
echo "Attach with: tmux attach -t $PROJECT_NAME"
