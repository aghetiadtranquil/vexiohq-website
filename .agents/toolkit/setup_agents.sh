#!/bin/bash
# Multi-Agent Setup Script - Automated deployment for any project
# Usage: ./setup_agents.sh PROJECT_NAME PROJECT_PATH [AGENT_COUNT]

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Default values
DEFAULT_AGENT_COUNT=3
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Arguments
PROJECT_NAME=$1
PROJECT_PATH=$2
AGENT_COUNT=${3:-$DEFAULT_AGENT_COUNT}

# Validation
if [ -z "$PROJECT_NAME" ] || [ -z "$PROJECT_PATH" ]; then
    echo -e "${RED}❌ Error: Missing required arguments${NC}"
    echo "Usage: $0 PROJECT_NAME PROJECT_PATH [AGENT_COUNT]"
    echo "Example: $0 my-app /Users/admin/projects/my-app 3"
    exit 1
fi

if [ ! -d "$PROJECT_PATH" ]; then
    echo -e "${RED}❌ Error: Project path does not exist: $PROJECT_PATH${NC}"
    exit 1
fi

# Functions
print_status() {
    echo -e "${BLUE}➜${NC} $1"
}

print_success() {
    echo -e "${GREEN}✅${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠️${NC} $1"
}

create_communication_structure() {
    print_status "Creating communication infrastructure..."
    
    mkdir -p "$PROJECT_PATH/agent_communication"
    cd "$PROJECT_PATH/agent_communication"
    
    # Create inbox files
    touch pm_inbox.md dev_inbox.md qa_inbox.md
    touch project_status.md shared_notes.md
    
    # Create shared context
    cat > shared_project_context.md << EOF
# Shared Project Context
**Generated:** $(date)
**Project:** $PROJECT_NAME
**Path:** $PROJECT_PATH
**Session:** $PROJECT_NAME
**Agent Count:** $AGENT_COUNT

## Team Structure
- **Pane 1:** Project Manager (PM) - Coordination & Planning
- **Pane 2:** Developer - Implementation & Technical
- **Pane 3:** QA Engineer - Testing & Quality
$([ $AGENT_COUNT -gt 3 ] && echo "- **Pane 4:** DevOps - Infrastructure & Deployment")
$([ $AGENT_COUNT -gt 4 ] && echo "- **Pane 5:** Security - Security & Compliance")

## Communication Protocol
- Messages via markdown files in agent_communication/
- Each agent has an inbox: *_inbox.md
- Shared resources: project_status.md, shared_notes.md

## Project Details
### Tech Stack
[TO BE FILLED BY PM AGENT]

### Current Goals
[TO BE FILLED BY PM AGENT]

### Repository Info
$(cd "$PROJECT_PATH" && git remote -v 2>/dev/null || echo "No git repository")

## File Structure
\`\`\`
$(cd "$PROJECT_PATH" && ls -la | head -20)
\`\`\`
EOF
    
    print_success "Communication structure created"
}

setup_tmux_session() {
    print_status "Setting up tmux session: $PROJECT_NAME"
    
    # Kill existing session if it exists
    tmux has-session -t $PROJECT_NAME 2>/dev/null && {
        print_warning "Session $PROJECT_NAME exists, killing it..."
        tmux kill-session -t $PROJECT_NAME
    }
    
    # Create new session
    tmux new-session -d -s $PROJECT_NAME -c "$PROJECT_PATH"
    
    # Create panes based on agent count
    if [ $AGENT_COUNT -eq 2 ]; then
        tmux split-window -h -t $PROJECT_NAME:0 -c "$PROJECT_PATH"
    elif [ $AGENT_COUNT -eq 3 ]; then
        tmux split-window -h -t $PROJECT_NAME:0 -c "$PROJECT_PATH"
        tmux split-window -v -t $PROJECT_NAME:0.1 -c "$PROJECT_PATH"
    elif [ $AGENT_COUNT -eq 4 ]; then
        tmux split-window -h -t $PROJECT_NAME:0 -c "$PROJECT_PATH"
        tmux split-window -v -t $PROJECT_NAME:0 -c "$PROJECT_PATH"
        tmux split-window -v -t $PROJECT_NAME:0.2 -c "$PROJECT_PATH"
    else
        # For 5+ agents, use tiled layout
        for ((i=2; i<=AGENT_COUNT; i++)); do
            tmux split-window -t $PROJECT_NAME:0 -c "$PROJECT_PATH"
            tmux select-layout -t $PROJECT_NAME tiled
        done
    fi
    
    print_success "Tmux session created with $AGENT_COUNT panes"
}

copy_essential_scripts() {
    print_status "Copying essential scripts..."
    
    # Copy send-claude-message.sh if it exists
    if [ -f "$SCRIPT_DIR/send-claude-message.sh" ]; then
        cp "$SCRIPT_DIR/send-claude-message.sh" "$PROJECT_PATH/"
        chmod +x "$PROJECT_PATH/send-claude-message.sh"
        print_success "Copied send-claude-message.sh"
    else
        print_warning "send-claude-message.sh not found in $SCRIPT_DIR"
    fi
    
    # Copy this setup script
    cp "$0" "$PROJECT_PATH/setup_agents.sh"
    chmod +x "$PROJECT_PATH/setup_agents.sh"
}

start_claude_agents() {
    print_status "Starting Claude in all panes..."
    
    for ((pane=1; pane<=AGENT_COUNT; pane++)); do
        tmux send-keys -t $PROJECT_NAME.$pane "claude --dangerously-skip-permissions" Enter
        print_status "Started Claude in pane $pane"
    done
    
    print_status "Waiting for Claude to initialize..."
    sleep 5
}

send_agent_briefings() {
    print_status "Sending role briefings to agents..."
    
    # PM Agent (Pane 1)
    if [ $AGENT_COUNT -ge 1 ]; then
        $PROJECT_PATH/send-claude-message.sh $PROJECT_NAME.1 "You are the PROJECT MANAGER in a multi-agent team for $PROJECT_NAME.

RESPONSIBILITIES:
- Project planning and coordination
- Task assignment and tracking  
- Quality standards enforcement
- Sprint management
- Team communication

COMMUNICATION PROTOCOL:
- Your inbox: cat agent_communication/pm_inbox.md
- Send to Dev: echo 'MESSAGE' >> agent_communication/dev_inbox.md
- Send to QA: echo 'MESSAGE' >> agent_communication/qa_inbox.md
- Update status: echo 'UPDATE' >> agent_communication/project_status.md

IMMEDIATE TASKS:
1. Review the project structure
2. Update shared_project_context.md with project details
3. Create initial sprint plan
4. Assign tasks to Developer and QA

Project path: $PROJECT_PATH"
        print_success "PM agent briefed"
    fi
    
    # Developer Agent (Pane 2)
    if [ $AGENT_COUNT -ge 2 ]; then
        $PROJECT_PATH/send-claude-message.sh $PROJECT_NAME.2 "You are the DEVELOPER in a multi-agent team for $PROJECT_NAME.

RESPONSIBILITIES:
- Code implementation
- Technical architecture
- Bug fixes and features
- Code documentation
- Technical decisions

COMMUNICATION PROTOCOL:
- Your inbox: cat agent_communication/dev_inbox.md
- Send to PM: echo 'MESSAGE' >> agent_communication/pm_inbox.md
- Send to QA: echo 'MESSAGE' >> agent_communication/qa_inbox.md
- Share code: echo 'CODE' >> agent_communication/shared_notes.md

IMMEDIATE TASKS:
1. Analyze the codebase
2. Check for package.json, requirements.txt, or other dependency files
3. Identify the tech stack
4. Report findings to PM
5. Wait for task assignments

Project path: $PROJECT_PATH"
        print_success "Developer agent briefed"
    fi
    
    # QA Agent (Pane 3)
    if [ $AGENT_COUNT -ge 3 ]; then
        $PROJECT_PATH/send-claude-message.sh $PROJECT_NAME.3 "You are the QA ENGINEER in a multi-agent team for $PROJECT_NAME.

RESPONSIBILITIES:
- Testing and validation
- Bug discovery and reporting
- Quality assurance
- Test documentation
- Performance testing

COMMUNICATION PROTOCOL:
- Your inbox: cat agent_communication/qa_inbox.md
- Send to PM: echo 'MESSAGE' >> agent_communication/pm_inbox.md
- Send to Dev: echo 'MESSAGE' >> agent_communication/dev_inbox.md
- Log tests: echo 'RESULTS' >> agent_communication/shared_notes.md

IMMEDIATE TASKS:
1. Review project for testable components
2. Check for existing tests
3. Identify testing framework if any
4. Plan testing strategy
5. Report to PM

Project path: $PROJECT_PATH"
        print_success "QA agent briefed"
    fi
    
    # DevOps Agent (Pane 4)
    if [ $AGENT_COUNT -ge 4 ]; then
        $PROJECT_PATH/send-claude-message.sh $PROJECT_NAME.4 "You are the DEVOPS ENGINEER in a multi-agent team for $PROJECT_NAME.

RESPONSIBILITIES:
- CI/CD pipelines
- Infrastructure setup
- Deployment automation
- Monitoring setup
- Environment management

COMMUNICATION PROTOCOL:
- Check PM inbox for now: cat agent_communication/pm_inbox.md
- Send updates: echo 'MESSAGE' >> agent_communication/pm_inbox.md

IMMEDIATE TASKS:
1. Check for Docker/deployment configs
2. Review CI/CD setup if any
3. Identify deployment requirements
4. Report to PM

Project path: $PROJECT_PATH"
        print_success "DevOps agent briefed"
    fi
}

create_helper_scripts() {
    print_status "Creating helper scripts..."
    
    # Status checker
    cat > "$PROJECT_PATH/check_agents.sh" << 'EOF'
#!/bin/bash
SESSION=${1:-PROJECT_NAME}
echo "=== AGENT STATUS CHECK ==="
echo "Session: $SESSION"
echo "Time: $(date)"
echo "=========================="

for pane in $(tmux list-panes -t $SESSION -F "#{pane_index}"); do
    echo ""
    echo "📍 Pane $pane:"
    echo "-------------------"
    tmux capture-pane -t $SESSION.$pane -p | tail -10 | head -5
done

echo ""
echo "=== RECENT MESSAGES ==="
for file in agent_communication/*_inbox.md; do
    if [ -f "$file" ]; then
        echo ""
        echo "📬 $(basename $file):"
        tail -3 "$file" 2>/dev/null || echo "  (empty)"
    fi
done
EOF
    sed -i '' "s/PROJECT_NAME/$PROJECT_NAME/g" "$PROJECT_PATH/check_agents.sh" 2>/dev/null || \
    sed -i "s/PROJECT_NAME/$PROJECT_NAME/g" "$PROJECT_PATH/check_agents.sh"
    chmod +x "$PROJECT_PATH/check_agents.sh"
    
    # Message broadcaster
    cat > "$PROJECT_PATH/broadcast_message.sh" << 'EOF'
#!/bin/bash
MESSAGE=$1
if [ -z "$MESSAGE" ]; then
    echo "Usage: $0 \"Your message to all agents\""
    exit 1
fi

echo "## BROADCAST from Orchestrator
**Time:** $(date)
$MESSAGE" | tee -a agent_communication/pm_inbox.md \
                    agent_communication/dev_inbox.md \
                    agent_communication/qa_inbox.md > /dev/null

echo "✅ Message broadcast to all agents"
EOF
    chmod +x "$PROJECT_PATH/broadcast_message.sh"
    
    print_success "Helper scripts created"
}

print_summary() {
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo -e "${GREEN}🎉 Multi-Agent System Successfully Deployed!${NC}"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo -e "${BLUE}📋 Configuration:${NC}"
    echo "  • Project: $PROJECT_NAME"
    echo "  • Path: $PROJECT_PATH"
    echo "  • Session: $PROJECT_NAME"
    echo "  • Agents: $AGENT_COUNT"
    echo ""
    echo -e "${BLUE}🔧 Available Commands:${NC}"
    echo "  • Attach to session: tmux attach -t $PROJECT_NAME"
    echo "  • Check status: ./check_agents.sh"
    echo "  • Send message: ./send-claude-message.sh $PROJECT_NAME.[pane] \"message\""
    echo "  • Broadcast: ./broadcast_message.sh \"message\""
    echo ""
    echo -e "${BLUE}📁 Communication Files:${NC}"
    echo "  • $PROJECT_PATH/agent_communication/"
    echo ""
    echo -e "${YELLOW}💡 Next Steps:${NC}"
    echo "  1. Attach to session: tmux attach -t $PROJECT_NAME"
    echo "  2. Navigate panes: Ctrl+B then arrow keys"
    echo "  3. Monitor agent communication in agent_communication/"
    echo "  4. PM agent will coordinate initial tasks"
    echo ""
    echo -e "${GREEN}Happy coding with your AI team! 🚀${NC}"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
}

# Main execution
main() {
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo -e "${BLUE}🤖 Multi-Agent Setup Script${NC}"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    
    create_communication_structure
    setup_tmux_session
    copy_essential_scripts
    start_claude_agents
    send_agent_briefings
    create_helper_scripts
    print_summary
}

# Run main function
main