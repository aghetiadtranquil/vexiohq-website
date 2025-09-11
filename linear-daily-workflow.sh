#!/bin/bash

# Linear Daily Workflow Script
# Run this script to manage your Linear issues efficiently

echo "🚀 Linear Daily Workflow Helper"
echo "================================"

# Function to show menu
show_menu() {
    echo ""
    echo "What would you like to do?"
    echo "1) View my assigned issues"
    echo "2) Create a new issue"
    echo "3) Update issue status"
    echo "4) Add comment to issue"
    echo "5) View team's current sprint"
    echo "6) Search issues"
    echo "7) Daily standup report"
    echo "8) Exit"
    echo ""
    read -p "Enter choice [1-8]: " choice
}

# Main loop
while true; do
    show_menu
    
    case $choice in
        1)
            echo "📋 Fetching your assigned issues..."
            # In Claude Code, you would call:
            # mcp__linear-server__list_my_issues
            echo "Use: mcp__linear-server__list_my_issues"
            ;;
            
        2)
            read -p "Issue title: " title
            read -p "Description: " description
            read -p "Team (Datatranquil/Project Shells): " team
            echo "Creating issue..."
            # mcp__linear-server__create_issue --title "$title" --description "$description" --team "$team"
            ;;
            
        3)
            read -p "Issue ID: " issue_id
            echo "Select new status:"
            echo "1) Backlog"
            echo "2) Todo"
            echo "3) In Progress"
            echo "4) In Review"
            echo "5) Done"
            read -p "Choice: " status_choice
            # mcp__linear-server__update_issue --id "$issue_id" --state "$status"
            ;;
            
        4)
            read -p "Issue ID: " issue_id
            read -p "Comment: " comment
            # mcp__linear-server__create_comment --issueId "$issue_id" --body "$comment"
            ;;
            
        5)
            read -p "Team name: " team
            echo "Fetching current sprint..."
            # mcp__linear-server__list_cycles --teamId "$team" --type "current"
            ;;
            
        6)
            read -p "Search query: " query
            # mcp__linear-server__list_issues --query "$query"
            ;;
            
        7)
            echo "📊 Daily Standup Report"
            echo "======================="
            echo "Fetching your issues..."
            # This would aggregate:
            # - Issues completed yesterday
            # - Issues in progress
            # - Issues planned for today
            # - Any blockers
            ;;
            
        8)
            echo "Goodbye! 👋"
            exit 0
            ;;
            
        *)
            echo "Invalid option. Please try again."
            ;;
    esac
    
    read -p "Press Enter to continue..."
done