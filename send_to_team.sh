#!/bin/bash

# Team Communication Helper Script
# Usage: ./send_to_team.sh <team> "message"
# Teams: dev, seo, qa, all

TEAM=$1
MESSAGE=$2

send_message() {
    local pane=$1
    local msg=$2
    tmux send-keys -t my-web:1.$pane "$msg" Enter
    echo "✅ Message sent to $3 team"
}

case $TEAM in
    dev|DEV)
        send_message 1 "$MESSAGE" "DEV"
        ;;
    seo|SEO)
        send_message 2 "$MESSAGE" "SEO"
        ;;
    qa|QA)
        send_message 3 "$MESSAGE" "QA"
        ;;
    all|ALL)
        send_message 1 "$MESSAGE" "DEV"
        send_message 2 "$MESSAGE" "SEO"
        send_message 3 "$MESSAGE" "QA"
        echo "📢 Broadcast sent to all teams"
        ;;
    *)
        echo "❌ Invalid team. Use: dev, seo, qa, or all"
        exit 1
        ;;
esac

echo "Timestamp: $(date '+%Y-%m-%d %H:%M:%S')"