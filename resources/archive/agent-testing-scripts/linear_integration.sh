#!/bin/bash

# Linear Integration Helper for Agent System
# This script helps agents create and track Linear issues

echo "📋 Linear Integration for Company Website Agents"
echo "================================================"
echo ""
echo "Teams Available:"
echo "  1. Project Shells (ID: e16fffa1-b13a-4a5d-8e14-f9ffeb781056)"
echo "  2. Datatranquil (ID: e359f90a-9fe9-430c-a0f2-9a06e2148866)"
echo ""
echo "Creating initial agent tasks in Linear..."
echo ""

# Function to create tasks
create_agent_task() {
    local AGENT=$1
    local TASK=$2
    local LABEL=$3
    echo "Creating task for $AGENT: $TASK"
    # This will be called by Claude to create Linear issues
    echo "$TASK" > agent_communication/linear_sync/${LABEL}_task.txt
}

# Sample tasks for each agent
echo "📝 Sample Agent Tasks:"
echo ""
echo "1. Frontend Agent Tasks:"
echo "   - Implement responsive navigation menu"
echo "   - Add loading states to all components"
echo "   - Optimize image loading with Next.js Image"
echo ""
echo "2. Backend Agent Tasks:"
echo "   - Create newsletter subscription API endpoint"
echo "   - Implement rate limiting for API routes"
echo "   - Add database connection pooling"
echo ""
echo "3. SEO Agent Tasks:"
echo "   - Optimize meta tags for all pages"
echo "   - Implement structured data markup"
echo "   - Improve Core Web Vitals scores"
echo ""
echo "4. QA/DevOps Agent Tasks:"
echo "   - Set up automated testing pipeline"
echo "   - Configure monitoring and alerts"
echo "   - Optimize build process"
echo ""
echo "5. PM/Architect Tasks:"
echo "   - Review system architecture"
echo "   - Define coding standards"
echo "   - Plan sprint objectives"
echo ""

# Create task routing function
cat > agent_communication/create_linear_task.sh << 'EOF'
#!/bin/bash
# Usage: ./create_linear_task.sh "agent_type" "task_title" "task_description"

AGENT_TYPE=$1
TASK_TITLE=$2
TASK_DESC=$3

echo "Creating Linear task..."
echo "Agent: $AGENT_TYPE"
echo "Title: $TASK_TITLE"
echo "Description: $TASK_DESC"

# Signal to Claude to create Linear issue
echo "LINEAR_CREATE:$AGENT_TYPE:$TASK_TITLE:$TASK_DESC" > agent_communication/linear_sync/create_issue.txt
EOF

chmod +x agent_communication/create_linear_task.sh

echo "✅ Linear integration ready!"
echo ""
echo "To create a Linear task for an agent:"
echo "  ./agent_communication/create_linear_task.sh [agent] [title] [description]"
echo ""
echo "Example:"
echo "  ./agent_communication/create_linear_task.sh frontend 'Update homepage' 'Improve hero section'"