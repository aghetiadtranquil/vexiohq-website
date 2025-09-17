#!/bin/bash
# Multi-Agent Status Monitor

COMM_DIR="/Users/admin/projects/comapny-website/.tmux-orchestrator"
PROJECT_NAME="comapny-website"

echo "🎭 Multi-Agent Status for $PROJECT_NAME"
echo "=" * 50

echo "📊 Active Sessions:"
tmux list-sessions | grep "$PROJECT_NAME" | while IFS=':' read session rest; do
    echo "  $session"
done

echo ""
echo "🤖 Agent Status:"
for agent_dir in "$COMM_DIR"/*; do
    if [ -d "$agent_dir" ]; then
        agent_name=$(basename "$agent_dir")
        if [ -f "$agent_dir/status.json" ]; then
            status=$(cat "$agent_dir/status.json" 2>/dev/null | python3 -c "import sys,json; data=json.load(sys.stdin); print(f'  {data.get(\"agent\", agent_name)}: {data.get(\"status\", \"unknown\")} ({data.get(\"last_check\", \"never\")})')" 2>/dev/null || echo "  $agent_name: unknown")
            echo "$status"
        else
            echo "  $agent_name: no status file"
        fi
    fi
done

echo ""
echo "💬 Recent Messages:"
find "$COMM_DIR" -name "*.json" -newer "$COMM_DIR/shared_status.json" 2>/dev/null | head -5 | while read file; do
    echo "  $(basename $(dirname $file)): $(basename $file)"
done
