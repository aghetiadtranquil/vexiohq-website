# Watch Mode

Monitor files and automatically take actions on changes.

## Monitors:
1. **File saves** - Run relevant tests automatically
2. **New files** - Add to git, update imports
3. **Deleted files** - Clean up imports, update references
4. **Config changes** - Restart servers, rebuild
5. **Test changes** - Run affected tests only

## Smart Actions:
- If component created → Generate test file
- If API endpoint added → Update API docs
- If schema changed → Update types
- If dependency added → Run npm install

## Usage:
Start: `/watch-mode on`
Stop: `/watch-mode off`

Works in background while you code!