#!/bin/bash
# Smart file creation hook - prevents duplicates and organizes files

FILE_PATH="$1"
FILE_NAME=$(basename "$FILE_PATH")
FILE_CONTENT="$2"

# Function to check if content should be appended to existing file
check_existing_file() {
    # Check CLAUDE.md for project-specific rules
    if [[ "$FILE_CONTENT" =~ "project.*specific|convention|rule" ]]; then
        echo "APPEND_TO: CLAUDE.md"
        return 0
    fi
    
    # Check SESSION.md for state/progress content
    if [[ "$FILE_CONTENT" =~ "session|progress|current.*state|resume" ]]; then
        echo "APPEND_TO: .claude/state/SESSION.md"
        return 0
    fi
    
    # Check for command patterns
    if [[ "$FILE_PATH" =~ "command|slash.*command" ]]; then
        echo "APPEND_TO: .claude/commands/all-commands.md"
        return 0
    fi
    
    return 1
}

# Function to determine correct location
get_correct_location() {
    case "$FILE_NAME" in
        *command*.md|*slash*.md)
            echo ".claude/commands/$FILE_NAME"
            ;;
        *session*.md|*state*.md|*progress*.md)
            echo ".claude/state/$FILE_NAME"
            ;;
        *hook*|*.sh)
            echo ".claude/hooks/$FILE_NAME"
            ;;
        settings.json|config.json)
            echo ".claude/$FILE_NAME"
            ;;
        *.md)
            # Don't move CLAUDE.md or README.md
            if [[ "$FILE_NAME" != "CLAUDE.md" && "$FILE_NAME" != "README.md" ]]; then
                echo ".claude/docs/$FILE_NAME"
            else
                echo "$FILE_PATH"
            fi
            ;;
        *)
            echo "$FILE_PATH"
            ;;
    esac
}

# Check if should append to existing file
if EXISTING_FILE=$(check_existing_file); then
    echo "SMART_FILE: Appending to $EXISTING_FILE instead of creating new file"
    exit 1
fi

# Determine correct location
CORRECT_PATH=$(get_correct_location)
if [[ "$CORRECT_PATH" != "$FILE_PATH" ]]; then
    echo "SMART_FILE: Moving to organized location: $CORRECT_PATH"
    mkdir -p $(dirname "$CORRECT_PATH")
    echo "REDIRECT_TO: $CORRECT_PATH"
fi