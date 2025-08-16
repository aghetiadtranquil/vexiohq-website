# Development Commands

## /auto-fix
Automatically detect and fix common issues without asking.
- Fixes: lint errors, imports, types, formatting, test failures
- Process: Run all checks → Apply fixes → Report results

## /watch-mode [on|off]
Monitor files and automatically take actions on changes.
- Monitors: file saves, new files, config changes
- Actions: run tests, update imports, restart servers

## /fresh-start
Complete project cleanup and rebuild.
- Removes: node_modules, cache, build artifacts
- Runs: npm install, build process
- Ensures clean development environment

## /deploy-check
Run all pre-deployment checks.
- Checks: branch status, tests, lint, typecheck, build
- Ensures code is production-ready before deployment