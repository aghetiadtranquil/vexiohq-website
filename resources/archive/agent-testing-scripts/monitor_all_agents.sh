#!/bin/bash
# Monitor all agents status

clear
echo "========================================="
echo "    AGENT MONITORING DASHBOARD"
echo "    Time: $(date '+%H:%M:%S')"
echo "========================================="
echo ""

agents=("PM/Architect" "Frontend" "Backend" "Linear/Docs" "SEO" "QA/DevOps")

for i in {1..6}; do
    echo "[$i] ${agents[$i-1]}:"
    echo "----------------------------------------"
    
    # Get last meaningful line from agent
    last_line=$(tmux capture-pane -t company-website:.$i -p | grep -v "^$" | grep -v "claude doctor" | grep -v "Auto-update" | tail -3)
    
    if [[ $last_line == *"✓"* ]] || [[ $last_line == *"✅"* ]]; then
        echo "✅ Active - Completed task"
    elif [[ $last_line == *"Creating"* ]] || [[ $last_line == *"Testing"* ]] || [[ $last_line == *"Running"* ]]; then
        echo "🔄 Working..."
    else
        echo "⏸️  Idle/Waiting"
    fi
    
    echo "$last_line" | head -20
    echo ""
done

echo "========================================="
echo "Recent File Changes (last 5 min):"
echo "----------------------------------------"
find . -path ./node_modules -prune -o -path ./.next -prune -o -type f \( -name "*.ts" -o -name "*.tsx" \) -mmin -5 -print 2>/dev/null | grep -v node_modules | grep -v .next | tail -5

echo ""
echo "========================================="
echo "Test Status:"
echo "----------------------------------------"
npm test 2>&1 | grep -E "(PASS|FAIL)" | head -5

echo ""
echo "Press Ctrl+C to exit monitoring"