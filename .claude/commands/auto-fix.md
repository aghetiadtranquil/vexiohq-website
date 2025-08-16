# Auto Fix

Automatically detect and fix common issues without asking.

## What it fixes:
1. **Linting errors** - Run linter and apply all auto-fixes
2. **Import errors** - Add missing imports, remove unused ones
3. **Type errors** - Fix obvious type mismatches
4. **Formatting** - Apply project formatting rules
5. **Simple test failures** - Update snapshots, fix assertions
6. **Build errors** - Clear cache, reinstall deps if needed

## Process:
1. Run all checks (lint, type, test, build)
2. Apply automatic fixes where possible
3. Report what was fixed
4. Show remaining issues that need manual attention

This saves constant back-and-forth for trivial fixes.