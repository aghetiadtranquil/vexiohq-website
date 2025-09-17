
#!/bin/bash
# Agent Monitor for developer

AGENT_NAME="developer"
PROJECT_NAME="comapny-website"
COMM_DIR="/Users/admin/projects/comapny-website/.tmux-orchestrator"
CHECK_INTERVAL=180

echo "🤖 Starting Developer agent monitoring..."
echo "Project: $PROJECT_NAME"
echo "Communication Dir: $COMM_DIR"
echo "Check Interval: $CHECK_INTERVAL seconds"

while true; do
    # Update agent status
    echo "{
        \"agent\": \"$AGENT_NAME\",
        \"status\": \"active\",
        \"last_check\": \"$(date -u +%Y-%m-%dT%H:%M:%SZ)\",
        \"project\": \"$PROJECT_NAME\"
    }" > "$COMM_DIR/$AGENT_NAME/status.json"
    
    # Check for messages
    if [ -s "$COMM_DIR/$AGENT_NAME/inbox.json" ]; then
        echo "📨 New messages for $AGENT_NAME"
        # Process messages here
    fi
    
    sleep $CHECK_INTERVAL
done
