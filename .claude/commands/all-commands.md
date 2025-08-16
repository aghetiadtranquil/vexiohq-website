# All Claude Commands

Consolidated command reference for this project.

## Session Management
### `/resume`
Get context from last session by checking SESSION.md and recent changes.

### `/save-progress`
Update SESSION.md with current work state for next session.

## Development Workflow
### `/deploy-check`
Run all pre-deployment checks (lint, test, build, typecheck).

### `/smart-init`
Analyze project and create intelligent Claude configuration.

### `/auto-fix`
Automatically fix common issues (lint, imports, formatting).

### `/watch-mode [on|off]`
Monitor file changes and run relevant actions automatically.

## Code Operations
### `/batch-ops`
Execute operations across multiple files (rename, update patterns).

### `/smart-commit`
Create intelligent commits with semantic messages.

## Utility Commands
### `/quick-scripts [command]`
Run shortcuts like:
- `clean-all` - Remove node_modules, cache, build
- `fresh-start` - Clean + install + build  
- `find-todos` - List all TODO/FIXME
- `security-check` - Run security audit

### `/smart-file`
Manages file creation intelligently (prevents duplicates, auto-organizes).

## Quick Aliases
- `ff` → fresh-start
- `fx` → /auto-fix
- `cm` → /smart-commit
- `td` → find-todos