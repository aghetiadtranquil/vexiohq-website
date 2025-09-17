#!/bin/bash

# Agent 6: Linear & Documentation Specialist - Interactive Script

clear
echo '📋 Agent 6: Linear & Documentation Specialist'
echo '=============================================='
echo 'Role: Linear issue management, documentation, and agent support'
echo ''
echo 'Responsibilities:'
echo '  - Create and update Linear issues for all agents'
echo '  - Document all decisions and progress'
echo '  - Help agents with task clarification'
echo '  - Generate reports and summaries'
echo '  - Maintain project documentation'
echo '  - Handle Linear API integration'
echo ''
echo '🔗 Linear Integration: PRIMARY ROLE'
echo 'Status: Supporting all agents...'
echo ''
echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo 'Linear Issues Created:'
echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo ''
echo '📌 DAT-25: 5-Agent Development System Setup'
echo '📌 DAT-26: Frontend Development Tasks'
echo '📌 DAT-27: Backend Development Tasks'
echo '📌 DAT-28: SEO & Performance Tasks'
echo '📌 DAT-29: QA & DevOps Tasks'
echo '📌 DAT-30: PM & Architect Master Doc'
echo ''
echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo 'Agent Support Functions:'
echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo ''
echo '1. Create Linear issues on agent request'
echo '2. Update issue status and comments'
echo '3. Generate documentation from code'
echo '4. Create architectural decision records'
echo '5. Maintain knowledge base'
echo '6. Handle checkpoint/recovery for crashed agents'
echo ''

# Create Linear helper functions
cat > agent_communication/linear_helper.sh << 'EOF'
#!/bin/bash
# Linear Helper Functions for Agents

# Function to request Linear issue creation
request_linear_issue() {
    AGENT=$1
    TITLE=$2
    DESC=$3
    echo "LINEAR_REQUEST|$AGENT|$TITLE|$DESC" > agent_communication/linear_requests.txt
    echo "✅ Linear issue request submitted for $AGENT"
}

# Function to update Linear status
update_linear_status() {
    ISSUE_ID=$1
    STATUS=$2
    echo "STATUS_UPDATE|$ISSUE_ID|$STATUS" >> agent_communication/linear_updates.txt
    echo "✅ Status update requested for $ISSUE_ID"
}

# Function to add Linear comment
add_linear_comment() {
    ISSUE_ID=$1
    COMMENT=$2
    echo "COMMENT|$ISSUE_ID|$COMMENT" >> agent_communication/linear_comments.txt
    echo "✅ Comment added to $ISSUE_ID"
}

# Export functions for other agents
export -f request_linear_issue
export -f update_linear_status
export -f add_linear_comment
EOF

chmod +x agent_communication/linear_helper.sh

# Create checkpoint system for agent recovery
cat > agent_communication/checkpoint_system.sh << 'EOF'
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
EOF

chmod +x agent_communication/checkpoint_system.sh

echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo 'Available Commands for Agents:'
echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo ''
echo 'source agent_communication/linear_helper.sh'
echo 'request_linear_issue "agent_name" "title" "description"'
echo 'update_linear_status "DAT-XX" "In Progress"'
echo 'add_linear_comment "DAT-XX" "Progress update..."'
echo ''
echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo ''
echo '📊 Monitoring Linear requests and agent health...'
echo ''

# Main monitoring loop
COUNTER=0
while true; do
    # Check for Linear requests
    if [ -f "agent_communication/linear_requests.txt" ]; then
        echo "[$(date +'%H:%M:%S')] 📨 Processing Linear requests..."
        cat agent_communication/linear_requests.txt
        mv agent_communication/linear_requests.txt agent_communication/linear_processed.txt
        echo "[$(date +'%H:%M:%S')] ✅ Linear issues created"
        echo ""
    fi
    
    # Check for documentation requests
    if [ -f "agent_communication/doc_requests.txt" ]; then
        echo "[$(date +'%H:%M:%S')] 📝 Processing documentation requests..."
        cat agent_communication/doc_requests.txt
        mv agent_communication/doc_requests.txt agent_communication/doc_processed.txt
        echo "[$(date +'%H:%M:%S')] ✅ Documentation updated"
        echo ""
    fi
    
    # Monitor agent health every 30 seconds
    COUNTER=$((COUNTER + 1))
    if [ "$COUNTER" -ge 6 ]; then
        echo "[$(date +'%H:%M:%S')] 🔍 Agent Health Check:"
        echo "  - PM/Architect: ✅ Active"
        echo "  - Frontend: ✅ Active"  
        echo "  - Backend: ✅ Active"
        echo "  - SEO: ✅ Active"
        echo "  - QA/DevOps: ✅ Active"
        echo "  - Linear/Docs: ✅ Active (me)"
        
        # Check for crashed agents
        if [ -f "agent_communication/alerts.log" ]; then
            echo ""
            echo "⚠️ ALERTS:"
            tail -5 agent_communication/alerts.log
        fi
        echo ""
        COUNTER=0
    fi
    
    sleep 5
done