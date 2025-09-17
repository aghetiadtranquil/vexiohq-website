#!/bin/bash

echo "======================================"
echo "AGENT MONITORING DASHBOARD"
echo "Time: $(date '+%H:%M:%S')"
echo "======================================"
echo ""

# Check what's running in each pane
echo "📊 AGENT STATUS:"
echo "----------------"
for i in 1 2 3 4 5 6; do
    cmd=$(tmux list-panes -t company-website: -F "#{pane_index}: #{pane_current_command}" | grep "^$i:" | cut -d: -f2)
    case $i in
        1) agent="PM/Architect" ;;
        2) agent="Frontend" ;;
        3) agent="Backend" ;;
        4) agent="Linear/Docs" ;;
        5) agent="SEO" ;;
        6) agent="QA/DevOps" ;;
    esac
    echo "Agent $i ($agent): $cmd"
done

echo ""
echo "📁 RECENT FILE CHANGES:"
echo "------------------------"
find src/app -name "*.tsx" -o -name "*.ts" -mmin -30 | head -10

echo ""
echo "📝 AGENT REPORTS:"
echo "-----------------"
if [ -d "agent_communication/reports" ]; then
    for report in agent_communication/reports/*.txt; do
        if [ -f "$report" ]; then
            echo "$(basename $report):"
            tail -3 "$report"
            echo ""
        fi
    done
else
    echo "No reports found yet"
fi

echo ""
echo "🔧 GIT STATUS:"
echo "--------------"
git status --short | head -10

echo ""
echo "✅ FRAMEWORK STATUS:"
echo "-------------------"
if [ -f "framework/orch/task_ledger.json" ]; then
    echo "Task Ledger: Active"
    grep '"current_phase"' framework/orch/task_ledger.json
else
    echo "Task Ledger: Not found"
fi

echo ""
echo "======================================"
echo "Next update in 30 seconds..."