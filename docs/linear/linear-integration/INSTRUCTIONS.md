# Linear Integration Instructions

## Quick Start (5 minutes)

### Step 1: Get Your Linear API Key
1. Go to https://linear.app/settings/api
2. Click "Create new API key"
3. Name it: "Claude Code Integration"
4. Copy the key (starts with `lin_api_`)

### Step 2: Configure Environment
```bash
cd linear-integration
cp .env.template .env
# Edit .env and add your API key
```

### Step 3: Install Dependencies
```bash
pip install requests python-dotenv
```

### Step 4: Test Connection
```bash
python test_linear.py
```

### Step 5: Push All Tasks
```bash
python push_linear.py --file tasks.json --project "comapny-website"
```

## What This Does

1. **Creates a Linear project** called "comapny-website" (if it doesn't exist)
2. **Pushes 20 tasks** from our planning session with:
   - Detailed descriptions and acceptance criteria
   - Time estimates (30-90 minutes each)
   - Priority levels and labels
   - Technical notes and dependencies
3. **Tracks progress** as Claude Code works on tasks
4. **Updates status** automatically when tasks complete

## Task Categories

The tasks are organized into these categories:
- 🔧 **Technical** (4 tasks) - Build fixes, analytics setup
- 🎨 **Design** (6 tasks) - Hero variations, visual updates  
- 📄 **Content** (7 tasks) - Pages, case studies, testimonials
- 🎯 **Lead Gen** (3 tasks) - Tools, whitepapers, assessment

## Working with Tasks

### As Claude Code Works
When I complete a task, I'll:
1. Update the task status in Linear to "Done"
2. Add a comment with what was implemented
3. Note any lessons learned or follow-ups needed
4. Track actual time vs estimate

### Manual Updates
You can also update tasks manually:
```bash
# Update a single task
python update_task.py --id TASK-123 --status done --comment "Completed successfully"

# Bulk update from session
python bulk_update.py --session-id today --add-lessons
```

## Monitoring Progress

### In Linear
- Go to your project: https://linear.app/YOUR-TEAM/project/comapny-website
- View board or list view
- Filter by labels, status, or assignee

### From Command Line
```bash
# Get project status
python sync_status.py --project "comapny-website"

# Generate progress report
python report.py --project "comapny-website" --format markdown
```

## Integration Features

### Automatic Enrichment
Each task includes:
- 📝 Detailed description with context
- ✅ Clear acceptance criteria
- 🔧 Technical implementation notes
- ⏱️ Time estimates for planning
- 🏷️ Labels for categorization
- 🔗 Dependencies between tasks

### Smart Updates
The integration:
- Detects existing tasks to avoid duplicates
- Updates tasks with implementation details
- Adds comments with code references
- Tracks blockers and solutions
- Documents lessons learned

### Reporting
Generate reports on:
- Sprint progress and velocity
- Time tracking (estimated vs actual)
- Blocker patterns and resolutions
- Lessons learned for future work

## Best Practices

1. **Keep tasks small** - 30-90 minutes each for Claude Code
2. **Update regularly** - Mark tasks done as completed
3. **Add context** - Include file paths and line numbers
4. **Document learning** - Add lessons learned comments
5. **Track blockers** - Note what caused delays

## Troubleshooting

### "API Key Invalid"
- Check the key starts with `lin_api_`
- Ensure no extra spaces or quotes
- Verify key hasn't been revoked

### "Project Not Found"
- Project name must match exactly
- Use slug format (lowercase, hyphens)
- Check you have access to the team

### "Rate Limited"
- Linear allows 150 requests/minute
- Script adds delays automatically
- For bulk operations, use --delay flag

### "Task Not Created"
- Check required fields are present
- Verify label names are valid
- Ensure description isn't too long

## Advanced Usage

### Custom Labels
```bash
python push_linear.py --file tasks.json --labels "Q1-2024,Priority"
```

### Update Existing Tasks
```bash
python push_linear.py --file tasks.json --update
```

### Dry Run Mode
```bash
python push_linear.py --file tasks.json --dry-run
```

### Debug Mode
```bash
export LINEAR_DEBUG=true
python push_linear.py --file tasks.json --verbose
```

## Next Steps

1. ✅ Test connection with `test_linear.py`
2. 📤 Push tasks with `push_linear.py`
3. 👀 View in Linear web interface
4. 🚀 Start working on tasks!
5. 📊 Track progress and update status

## Support

- Linear API Docs: https://developers.linear.app/docs
- GraphQL Explorer: https://studio.apollographql.com/public/Linear-API/
- MCP Docs: https://linear.app/docs/mcp

Remember: The goal is to have full visibility of the work being done by Claude Code, with rich context and learning capture for future reference!