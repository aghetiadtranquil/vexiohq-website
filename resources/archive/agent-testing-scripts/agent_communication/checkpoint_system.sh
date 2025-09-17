#!/bin/bash
# Checkpoint System for Agent Recovery

# Save agent state
save_checkpoint() {
    AGENT=$1
    STATE=$2
    echo "$(date)|$AGENT|$STATE" >> agent_communication/checkpoints.log
}

# Restore agent after crash
restore_agent() {
    AGENT=$1
    LAST_STATE=$(grep "$AGENT" agent_communication/checkpoints.log | tail -1)
    echo "Restoring $AGENT from: $LAST_STATE"
}

# Monitor agent health
check_agent_health() {
    for i in 1 2 3 4 5; do
        if ! tmux list-panes -t company-website:.${i} &>/dev/null; then
            echo "⚠️ Agent $i appears to be down!"
            echo "AGENT_DOWN|Agent_${i}|$(date)" >> agent_communication/alerts.log
        fi
    done
}
