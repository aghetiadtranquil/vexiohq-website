# VexioHQ Website - Claude Code Development Guidelines

## 🎯 Project Overview
VexioHQ is an enterprise AI consulting platform built with Next.js 14, TypeScript, and Tailwind CSS. The website features 65+ pages, 41+ custom components, and comprehensive AI/ML consulting content. This document provides guidelines for AI-assisted development.

## Important Context
- **Default Branch**: Use `main` (not master) for all operations
- **Deployment**: Automatic deployment to 72.60.27.165 on push to main
- **Server Path**: /opt/stack/apps/company-website

## Key Commands
```bash
# Development
npm install          # Install dependencies
npm run dev         # Start development server
npm run build       # Build for production
npm run lint        # Run linting
npm run typecheck   # Run type checking

# Deployment
git push origin main  # Triggers automatic deployment
```

## Project-Specific Rules
1. **Always run lint and typecheck** before committing code
2. **Never commit directly to main** without testing
3. **Check for existing patterns** before implementing new features
4. **Use existing UI components** from the codebase
5. **Follow the existing code style** (spaces, naming conventions)

## Common Tasks

### Before Making Changes
- Always check current branch: `git branch`
- Ensure you're on main: `git checkout main`
- Pull latest changes: `git pull origin main`

### After Making Changes
1. Run tests: `npm test` (if available)
2. Run lint: `npm run lint`
3. Run typecheck: `npm run typecheck`
4. Review changes: `git diff`
5. Commit with descriptive message
6. Push to trigger deployment

### Debugging Deployment Issues
- Check GitHub Actions: https://github.com/VexioHQ/comapny-website/actions
- SSH to server to check logs if needed
- Docker logs: `docker logs company-website`

## Architecture Notes
- Frontend framework: [Check package.json]
- Styling approach: [Check existing components]
- State management: [Check existing patterns]

## Known Issues & Solutions
- If deployment fails, check Docker build on server
- Traefik routing issues: Check labels in docker-compose.yml

## DO NOT
- Create test files unless explicitly asked
- Add console.log statements in production code
- Commit node_modules or .env files
- Change deployment configuration without discussion

## Time-Saving Automations

### Available Commands
- `/auto-fix` - Automatically fix lint, type, format issues
- `/watch-mode` - Monitor changes and auto-run tests
- `/batch-ops` - Rename/update across multiple files
- `/smart-commit` - Intelligent commits with proper messages
- `/quick-scripts` - One-word shortcuts for common tasks

### Quick Shortcuts
Just type these words:
- `clean-all` - Full cleanup
- `fresh-start` - Clean install
- `find-todos` - List all TODOs
- `security-check` - Security audit

### Enhancement Mode Shortcuts
- `activate-all` or `++` - Activate all Claude enhancement modes
- `/activate` - Quick activation of all modes
- `ultramode` or `+u` - ULTRASMART mode
- `quantum` or `+q` - QUANTUM-THINKING mode
- `meta` or `+m` - META-INTELLIGENCE mode
- `analyze` or `+a` - PROJECT-ANALYZER mode
- See `.claude/SHORTCUTS.md` for all shortcuts

## Smart Patterns

### Visual Development Workflow
When implementing UI changes:
1. Take screenshot of current state
2. Make changes
3. Take screenshot of new state
4. Compare and iterate until matching design

### Queue Multiple Tasks
You can queue multiple commands while I work:
- "Fix the header styling"
- "Also update the footer"
- "And add loading states"
I'll execute these intelligently in sequence.

### Code Review Before Push
Always ask: "Review my changes as a senior developer would"

## Project-Specific Learnings
(This section will be updated as we encounter and solve issues)

## Session Management

### Starting a New Session
Always run `/resume` or check SESSION.md to understand where we left off.

### Ending a Session
Before ending, update SESSION.md with:
- What was accomplished
- What's in progress
- Next steps
- Any blockers or questions

### Continuity Commands
- `/resume` - Get context from last session
- `/status` - Show current work state
- `/save-progress` - Update SESSION.md