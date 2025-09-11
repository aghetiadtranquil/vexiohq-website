# Linear Integration for Claude Code

A reusable Linear integration system for managing project tasks with Claude Code. This integration automatically syncs tasks between Claude Code and Linear, tracking progress, adding detailed context, and learning from completed work.

## Features

- 🔄 **Bidirectional Sync**: Push tasks to Linear and pull status updates
- 📊 **Detailed Analytics**: Track time spent, blockers, and lessons learned
- 🤖 **Claude Code Integration**: Automatic status updates as tasks complete
- 📝 **Rich Context**: Adds implementation details, code references, and outcomes
- 🔍 **MCP Support**: Uses MCP Linear tools if available
- 📈 **Progress Tracking**: Real-time updates with completion percentages
- 💡 **Learning Capture**: Documents lessons learned for future reference

## Setup

### 1. Install Dependencies

```bash
pip install requests python-dotenv rich click
```

### 2. Configure Linear API

Create `.env` file in project root:

```env
LINEAR_API_KEY=lin_api_xxxxxxxxxxxxx
LINEAR_TEAM_ID=TEAM-XXXX
LINEAR_DEFAULT_PROJECT=project-name
LINEAR_DEFAULT_CYCLE=current
```

### 3. Generate Tasks

Use `task_generator.py` to create tasks from Claude Code analysis:

```bash
python linear-integration/task_generator.py --analyze . --output tasks.json
```

### 4. Push to Linear

```bash
python linear-integration/push_linear.py --file tasks.json --project "comapny-website"
```

## Usage Workflow

### 1. Planning Phase
Claude Code analyzes the project and generates a detailed task list with:
- Title and description
- Time estimates (30-90 min chunks)
- Priority and dependencies
- Labels and categories
- Acceptance criteria

### 2. Execution Phase
As Claude Code works:
- Updates task status in Linear (Todo → In Progress → Done)
- Adds implementation comments with code references
- Records actual time spent
- Documents any blockers encountered

### 3. Completion Phase
When tasks complete:
- Adds lessons learned as comments
- Updates with actual vs estimated time
- Links to relevant commits/PRs
- Documents any follow-up tasks needed

## Task Schema

```json
{
  "project": "project-name",
  "metadata": {
    "generated_by": "Claude Code",
    "timestamp": "2024-12-20T10:00:00Z",
    "session_id": "unique-session-id",
    "codebase_context": {
      "framework": "Next.js",
      "language": "TypeScript",
      "size": "medium"
    }
  },
  "tasks": [
    {
      "title": "Fix build error - Import Zap icon",
      "description": "Import missing lucide-react Zap icon in ai-consulting-services/page.tsx:442",
      "priority": "high",
      "stage": "Build",
      "labels": ["Bug", "Technical"],
      "estimate_minutes": 30,
      "acceptance_criteria": [
        "Build completes without errors",
        "Icon displays correctly on page",
        "No TypeScript errors"
      ],
      "technical_notes": "Located at src/app/ai-consulting-services/page.tsx:442",
      "dependencies": [],
      "potential_blockers": []
    }
  ]
}
```

## Available Commands

### Basic Operations

```bash
# Push new tasks
python linear-integration/push_linear.py --file tasks.json

# Update existing tasks
python linear-integration/push_linear.py --file tasks.json --update

# Add labels to all tasks
python linear-integration/push_linear.py --file tasks.json --labels "Claude,AI"

# Sync status from Linear
python linear-integration/sync_status.py --project "comapny-website"
```

### Advanced Features

```bash
# Generate tasks from codebase analysis
python linear-integration/task_generator.py --analyze . --ai-review

# Update task with completion details
python linear-integration/update_task.py --id TASK-123 --status done --time 45 --notes "Fixed by importing from lucide-react"

# Bulk update with lessons learned
python linear-integration/bulk_update.py --session-id abc123 --add-lessons

# Generate progress report
python linear-integration/report.py --project "comapny-website" --format markdown
```

## Integration with Claude Code

### Automatic Status Updates

Claude Code automatically updates Linear when:
- Starting a task (→ In Progress)
- Completing a task (→ Done)
- Encountering blockers (→ Blocked + comment)
- Finding related issues (→ Links added)

### Context Enrichment

Each task is enriched with:
- File paths and line numbers
- Code snippets for reference
- Performance metrics (if applicable)
- Test results and coverage
- Security scan outcomes

### Learning Capture

After task completion, Claude adds:
- What worked well
- What could be improved
- Time-saving tips discovered
- Patterns identified for reuse
- Dependencies discovered

## MCP Support

If MCP Linear tools are available, the integration will automatically use them for:
- Better API performance
- Real-time updates
- Rich formatting
- File attachments
- Team notifications

Check MCP availability:
```bash
python linear-integration/check_mcp.py
```

## Reporting

Generate detailed reports:

```bash
# Sprint summary
python linear-integration/report.py --sprint current

# Time tracking report
python linear-integration/report.py --time-analysis

# Blocker analysis
python linear-integration/report.py --blockers

# Learning summary
python linear-integration/report.py --lessons-learned
```

## Best Practices

1. **Task Sizing**: Keep tasks 30-90 minutes for optimal Claude Code execution
2. **Clear Descriptions**: Include file paths and line numbers
3. **Labels**: Use consistent labels for filtering and reporting
4. **Dependencies**: Mark blocking relationships between tasks
5. **Regular Syncs**: Run sync_status.py periodically during long sessions
6. **Capture Learning**: Always add lessons learned for knowledge building

## Troubleshooting

### Common Issues

1. **API Key Invalid**: Check LINEAR_API_KEY in .env
2. **Project Not Found**: Verify project name matches Linear exactly
3. **Rate Limiting**: Add delays between bulk operations
4. **Sync Conflicts**: Use --force flag to override

### Debug Mode

Enable verbose logging:
```bash
export LINEAR_DEBUG=true
python linear-integration/push_linear.py --file tasks.json --verbose
```

## Contributing

To extend this integration:

1. Add new task types in `task_schemas.py`
2. Create custom workflows in `workflows/`
3. Add new reporting formats in `reporters/`
4. Extend MCP support in `mcp_bridge.py`

## License

MIT - Free to use and modify for any project