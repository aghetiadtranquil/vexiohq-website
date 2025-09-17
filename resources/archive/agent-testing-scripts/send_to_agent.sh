#!/bin/bash
# Helper script to send commands to agents properly

# Usage: ./send_to_agent.sh <agent_number> "<command>"
# Example: ./send_to_agent.sh 2 "Create a new component"

AGENT=$1
COMMAND=$2

if [ -z "$AGENT" ] || [ -z "$COMMAND" ]; then
    echo "Usage: $0 <agent_number> \"<command>\""
    echo "Agent numbers:"
    echo "  1 - PM/Architect"
    echo "  2 - Frontend"
    echo "  3 - Backend"
    echo "  4 - Linear/Docs"
    echo "  5 - SEO"
    echo "  6 - QA/DevOps"
    exit 1
fi

echo "Sending to Agent $AGENT..."

# First send /response-awareness
tmux send-keys -t company-website:.$AGENT "/response-awareness" C-m
sleep 2

# Then send the actual command with Enter
tmux send-keys -t company-website:.$AGENT "$COMMAND" C-m

# Double-check by sending Enter again after 1 second
sleep 1
tmux send-keys -t company-website:.$AGENT C-m

echo "✓ Command sent to Agent $AGENT (with double Enter)"
echo "Command: $COMMAND"

# Show last few lines to confirm
sleep 3
echo ""
echo "Agent response:"
tmux capture-pane -t company-website:.$AGENT -p | tail -5