# Smart Project Setup

Automatically analyze the current project and set up intelligent Claude Code configuration.

## Steps:
1. Detect project type (Node.js, Python, Go, etc.)
2. Find and analyze package.json, requirements.txt, go.mod, etc.
3. Identify available scripts (test, lint, build, etc.)
4. Check for existing CI/CD configuration
5. Detect testing frameworks
6. Create a tailored CLAUDE.md with:
   - Project-specific commands
   - Detected patterns and conventions
   - Framework-specific best practices
   - Custom workflows based on project type
7. Set up relevant hooks
8. Create project-specific slash commands

This command helps Claude Code adapt to any new project intelligently.