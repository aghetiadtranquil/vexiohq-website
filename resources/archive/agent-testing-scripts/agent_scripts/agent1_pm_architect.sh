#!/bin/bash

# Agent 1: PM + Architect - Interactive Script with Linear Integration

clear
echo '🏗️📊 Agent 1: PM + Architect'
echo '================================'
echo 'Role: Project management + System architecture'
echo 'Responsibilities:'
echo '  - Task coordination & team orchestration'
echo '  - System design & architecture decisions'
echo '  - Track progress & manage priorities'
echo '  - Technical leadership & code structure'
echo '  - Linear issue tracking & management'
echo ''
echo '🔗 Linear Integration: ACTIVE'
echo 'Status: Leading team...'
echo ''
echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo 'Current Project Status:'
echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'

# Show git status
echo ''
echo '📌 Git Branch:'
git branch --show-current

echo ''
echo '📊 Recent Activity:'
git log --oneline -5

echo ''
echo '🎯 Project Structure:'
echo "  - Frontend: Next.js + React"
echo "  - Styling: Tailwind CSS"
echo "  - Backend: Node.js API routes"
echo "  - Deployment: GitHub Actions → Production"
echo "  - Task Management: Linear"

echo ''
echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo '📋 Linear Task Tracking:'
echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo ''
echo 'To create Linear issues for agents:'
echo '  1. Frontend tasks → Label: frontend'
echo '  2. Backend tasks → Label: backend'
echo '  3. SEO tasks → Label: seo'
echo '  4. QA tasks → Label: qa'
echo '  5. Architecture tasks → Label: architecture'

echo ''
echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo '💬 Communication Channels:'
echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo '  - Local: agent_communication/'
echo '  - Linear: Project issues & comments'

# Create communication directory if it doesn't exist
mkdir -p agent_communication
mkdir -p agent_communication/linear_sync

echo ''
echo '🎯 Ready to coordinate tasks. Monitoring Linear & local tasks...'
echo ''

# Create a task assignment file
cat > agent_communication/task_router.sh << 'EOF'
#!/bin/bash
# Task router for distributing work to agents

TASK_TYPE=$1
TASK_DESC=$2

case $TASK_TYPE in
  frontend)
    echo "$TASK_DESC" > agent_communication/frontend_task.txt
    echo "📨 Task assigned to Frontend Agent"
    ;;
  backend)
    echo "$TASK_DESC" > agent_communication/backend_task.txt
    echo "📨 Task assigned to Backend Agent"
    ;;
  seo)
    echo "$TASK_DESC" > agent_communication/seo_task.txt
    echo "📨 Task assigned to SEO Agent"
    ;;
  qa)
    echo "$TASK_DESC" > agent_communication/qa_task.txt
    echo "📨 Task assigned to QA Agent"
    ;;
  *)
    echo "❓ Unknown task type. Use: frontend, backend, seo, or qa"
    ;;
esac
EOF

chmod +x agent_communication/task_router.sh

# Create Linear sync status file
echo "Linear Integration Status: Ready" > agent_communication/linear_sync/status.txt
echo "Last Sync: $(date)" >> agent_communication/linear_sync/status.txt

# Main monitoring loop
echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
echo ''

while true; do
    # Check for new messages in communication folder
    if [ -f "agent_communication/new_task.txt" ]; then
        echo "[$(date +'%H:%M:%S')] 📨 New task received!"
        cat agent_communication/new_task.txt
        mv agent_communication/new_task.txt agent_communication/task_in_progress.txt
        echo "[$(date +'%H:%M:%S')] ⏳ Creating Linear issue and delegating..."
        echo ""
    fi
    
    # Check Linear sync status
    if [ -f "agent_communication/linear_sync/new_issues.txt" ]; then
        echo "[$(date +'%H:%M:%S')] 📋 New Linear issues detected!"
        cat agent_communication/linear_sync/new_issues.txt
        rm agent_communication/linear_sync/new_issues.txt
        echo ""
    fi
    
    # Display agent status every 30 seconds
    COUNTER=$((COUNTER + 1))
    if [ "$COUNTER" -ge 6 ]; then
        echo "[$(date +'%H:%M:%S')] 👥 Agent Status Check:"
        echo "  - Frontend: $([ -f agent_communication/frontend_task.txt ] && echo 'Working ⚡' || echo 'Ready ✅')"
        echo "  - Backend: $([ -f agent_communication/backend_task.txt ] && echo 'Working ⚡' || echo 'Ready ✅')"
        echo "  - SEO: $([ -f agent_communication/seo_task.txt ] && echo 'Working ⚡' || echo 'Ready ✅')"
        echo "  - QA: $([ -f agent_communication/qa_task.txt ] && echo 'Working ⚡' || echo 'Ready ✅')"
        echo ""
        COUNTER=0
    fi
    
    sleep 5
done