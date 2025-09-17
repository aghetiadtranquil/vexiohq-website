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
