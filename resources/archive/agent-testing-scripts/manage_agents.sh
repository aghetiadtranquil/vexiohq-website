#!/bin/bash
# Agent Management Script

PROJECT_NAME=$(basename $(pwd))
SESSION="$PROJECT_NAME"

case $1 in
    start)
        ./start_agents.sh ${2:-3}
        ;;
    attach)
        tmux attach -t $SESSION
        ;;
    status)
        echo "=== Agent Status ==="
        for i in 1 2 3; do
            echo "Pane $i:"
            tmux capture-pane -t $SESSION.$i -p 2>/dev/null | tail -3 || echo "(not active)"
            echo "---"
        done
        ;;
    msg)
        if [ -z "$2" ] || [ -z "$3" ]; then
            echo "Usage: $0 msg PANE \"message\""
            exit 1
        fi
        .agents/toolkit/send-claude-message.sh "$SESSION.$2" "$3"
        ;;
    inbox)
        echo "=== PM Inbox ==="
        tail -5 agent_communication/pm_inbox.md 2>/dev/null || echo "(empty)"
        echo ""
        echo "=== Dev Inbox ==="
        tail -5 agent_communication/dev_inbox.md 2>/dev/null || echo "(empty)"
        ;;
    kill)
        tmux kill-session -t $SESSION
        echo "Session terminated"
        ;;
    brief)
        # Send initial briefings
        PANE=${2:-1}
        case $PANE in
            1|pm)
                .agents/toolkit/send-claude-message.sh "$SESSION.1" "You are the PROJECT MANAGER. Check agent_communication/pm_inbox.md for messages."
                ;;
            2|dev)
                .agents/toolkit/send-claude-message.sh "$SESSION.2" "You are the DEVELOPER. Check agent_communication/dev_inbox.md for tasks."
                ;;
            3|qa)
                .agents/toolkit/send-claude-message.sh "$SESSION.3" "You are the QA ENGINEER. Check agent_communication/qa_inbox.md for testing tasks."
                ;;
        esac
        ;;
    *)
        echo "Usage: $0 [start|attach|status|msg|inbox|kill|brief]"
        echo ""
        echo "Commands:"
        echo "  start [N]     - Start N agents (default 3)"
        echo "  attach        - Attach to tmux session"
        echo "  status        - Check agent status"
        echo "  msg N \"text\" - Send message to pane N"
        echo "  inbox         - Check message inboxes"
        echo "  kill          - Stop all agents"
        echo "  brief [N]     - Send briefing to agent N"
        ;;
esac
