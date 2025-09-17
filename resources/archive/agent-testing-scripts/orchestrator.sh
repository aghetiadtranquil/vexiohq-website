#!/bin/bash
# Master Orchestrator for Agent Communication

echo "========================================="
echo "     AGENT ORCHESTRATOR v2.0"
echo "     $(date '+%Y-%m-%d %H:%M:%S')"
echo "========================================="

# Define agents
declare -a agents=("PM/Architect" "Frontend" "Backend" "Linear/Docs" "SEO" "QA/DevOps")
declare -a agent_files=("pm" "frontend" "backend" "linear" "seo" "qa")

# Function to send command to agent
send_to_agent() {
    local pane=$1
    local cmd=$2
    echo "→ Sending to Agent $pane: $cmd"
    tmux send-keys -t company-website:.$pane "/response-awareness" C-m
    sleep 2
    tmux send-keys -t company-website:.$pane "$cmd" C-m
    sleep 1
    tmux send-keys -t company-website:.$pane C-m  # Double enter
}

# Function to check agent status
check_agent_status() {
    local pane=$1
    local name=${agents[$pane-1]}
    echo ""
    echo "[$pane] $name Status:"
    echo "-------------------"
    
    # Check last activity
    local last_line=$(tmux capture-pane -t company-website:.$pane -p | grep -v "^$" | tail -3)
    
    # Check report file
    local report_file="agent_communication/reports/${agent_files[$pane-1]}.txt"
    if [ -f "$report_file" ]; then
        local last_modified=$(stat -f "%Sm" -t "%H:%M" "$report_file" 2>/dev/null || date -r "$report_file" "+%H:%M" 2>/dev/null)
        echo "Last report: $last_modified"
        tail -5 "$report_file" | head -3
    else
        echo "No report file found"
    fi
}

# Main menu
while true; do
    echo ""
    echo "========================================="
    echo "ORCHESTRATOR MENU:"
    echo "1. Check all agent status"
    echo "2. Request status reports from all agents"
    echo "3. Send command to specific agent"
    echo "4. Monitor real-time (30s refresh)"
    echo "5. Check test results"
    echo "6. View recent file changes"
    echo "7. Emergency stop all agents"
    echo "8. Exit"
    echo "========================================="
    
    read -p "Select option [1-8]: " choice
    
    case $choice in
        1)
            echo "Checking all agents..."
            for i in {1..6}; do
                check_agent_status $i
            done
            ;;
        2)
            echo "Requesting status reports..."
            for i in {1..6}; do
                send_to_agent $i "Update your report at agent_communication/reports/${agent_files[$i-1]}.txt with current status"
            done
            ;;
        3)
            read -p "Agent number [1-6]: " agent_num
            read -p "Command: " command
            send_to_agent $agent_num "$command"
            ;;
        4)
            echo "Monitoring agents (Press Ctrl+C to stop)..."
            while true; do
                clear
                for i in {1..6}; do
                    check_agent_status $i
                done
                sleep 30
            done
            ;;
        5)
            echo "Running tests..."
            npm test 2>&1 | head -20
            ;;
        6)
            echo "Recent file changes (last 10 min):"
            find . -path ./node_modules -prune -o -path ./.next -prune -o -type f \( -name "*.ts" -o -name "*.tsx" \) -mmin -10 -print 2>/dev/null | grep -v node_modules | grep -v .next | tail -10
            ;;
        7)
            echo "Stopping all agents..."
            for i in {1..6}; do
                tmux send-keys -t company-website:.$i C-c
            done
            ;;
        8)
            echo "Exiting orchestrator..."
            exit 0
            ;;
        *)
            echo "Invalid option"
            ;;
    esac
done