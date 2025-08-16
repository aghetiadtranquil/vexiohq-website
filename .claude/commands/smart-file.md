# Smart File Management

Intelligently manages file creation and organization.

## Features:

### 1. **Before Creating Any File**
- Check if similar content exists in:
  - CLAUDE.md (for project rules)
  - SESSION.md (for state tracking)
  - Existing commands in .claude/commands/
  - Documentation files
- If found, append to existing file instead of creating new

### 2. **Auto-Organization Rules**
- `*.md` documentation → `.claude/docs/`
- Session/state files → `.claude/state/`
- Commands → `.claude/commands/`
- Hooks → `.claude/hooks/`
- Project root keeps only: CLAUDE.md, README.md

### 3. **Smart Consolidation**
- Merge related commands into single file
- Combine similar documentation
- Group project-specific vs global configs

### 4. **Duplicate Prevention**
```
Before: "Create deploy-check.md"
Smart: "Found similar content in commands.md, adding deploy-check section"
```

### 5. **Auto-Filing on Save**
- Detects file type and content
- Moves to appropriate folder
- Updates any references

## Usage:
This runs automatically when creating/saving files!