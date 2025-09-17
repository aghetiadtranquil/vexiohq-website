# Linear MCP Server - Daily Workflow Guide

## Quick Start Commands

### 1. View Your Issues
```bash
# List your assigned issues
mcp__linear-server__list_my_issues

# Search all issues with filters
mcp__linear-server__list_issues --team "Datatranquil" --state "In Progress"
```

### 2. Create New Issues
```bash
# Create a new issue
mcp__linear-server__create_issue \
  --title "Fix navigation bug" \
  --description "Navigation menu not responsive on mobile" \
  --team "Datatranquil" \
  --assignee "your-name" \
  --labels ["bug", "frontend"]
```

### 3. Update Issues
```bash
# Update issue status
mcp__linear-server__update_issue \
  --id "ISSUE-123" \
  --state "In Review"

# Add comments
mcp__linear-server__create_comment \
  --issueId "ISSUE-123" \
  --body "PR created: https://github.com/..."
```

## Daily Workflow Examples

### Morning Standup Routine
1. **Check your assigned issues:**
   - View all your assigned tasks
   - Check priorities and due dates
   - Review comments on your issues

2. **Update issue statuses:**
   - Move completed items to "Done"
   - Update progress on current work
   - Add blockers as comments

### Development Workflow

#### Starting Work on an Issue
1. Find the issue
2. Move to "In Progress"
3. Create a git branch from the issue
4. Add implementation notes as comments

#### Code Review Process
1. Update issue to "In Review"
2. Add PR link as comment
3. Tag reviewers in Linear
4. Move to "Done" after merge

### Project Management

#### Sprint Planning
- List issues by cycle
- Bulk update priorities
- Assign team members
- Set due dates

#### Progress Tracking
- View team velocity
- Check cycle progress
- Monitor blocked items
- Review completed work

## Useful Filters & Searches

### By Status
- `state: "In Progress"` - Active work
- `state: "Backlog"` - Upcoming tasks
- `state: "Done"` - Completed items

### By Time
- `createdAt: "-P1D"` - Created in last day
- `updatedAt: "-P1W"` - Updated in last week
- Due this week

### By Assignment
- `assignee: "me"` - Your issues
- `team: "Datatranquil"` - Team issues
- Unassigned issues

## Automation Ideas

### 1. Daily Status Report
Create a script to:
- List today's completed issues
- Show tomorrow's priorities
- Highlight blockers

### 2. Git Integration
- Auto-create branches from issues
- Update issue status on PR creation
- Close issues on merge

### 3. Slack Notifications
- New issue assignments
- Comment mentions
- Status changes

## Advanced Features

### Projects
```bash
# List all projects
mcp__linear-server__list_projects --team "Datatranquil"

# Create project
mcp__linear-server__create_project \
  --name "Q1 2025 Roadmap" \
  --team "Datatranquil"
```

### Labels
```bash
# List available labels
mcp__linear-server__list_issue_labels

# Create custom label
mcp__linear-server__create_issue_label \
  --name "high-priority" \
  --color "#FF0000"
```

### Documents
```bash
# Search documentation
mcp__linear-server__search_documentation --query "shortcuts"

# Get specific document
mcp__linear-server__get_document --id "doc-id"
```

## Keyboard Shortcuts (in Linear app)
- `C` - Create new issue
- `G then I` - Go to issues
- `G then P` - Go to projects
- `/` - Search
- `Cmd+K` - Command menu

## Best Practices

1. **Keep issues small and actionable**
   - One issue = one deliverable
   - Clear acceptance criteria
   - Estimated time < 1 day

2. **Use labels consistently**
   - Type: bug, feature, task
   - Priority: p0, p1, p2
   - Area: frontend, backend, docs

3. **Write good descriptions**
   - Context and problem
   - Proposed solution
   - Acceptance criteria
   - Related issues/PRs

4. **Update regularly**
   - Status changes immediately
   - Add comments for context
   - Link related work

## Common Commands Reference

```bash
# Issues
list_my_issues          # Your assigned issues
list_issues            # All issues with filters
get_issue              # Detailed issue info
create_issue           # New issue
update_issue           # Modify issue

# Comments
list_comments          # Issue comments
create_comment         # Add comment

# Teams & Users
list_teams             # Available teams
get_team               # Team details
list_users             # Team members
get_user               # User info

# Projects
list_projects          # All projects
get_project            # Project details
create_project         # New project
update_project         # Modify project

# Organization
list_issue_labels      # Available labels
list_issue_statuses    # Workflow states
list_cycles            # Sprint cycles
```

## Example Daily Script

```javascript
// morning-standup.js
async function morningStandup() {
  // Get my issues
  const myIssues = await linear.listMyIssues({ limit: 20 });
  
  // Filter by status
  const inProgress = myIssues.filter(i => i.state === "In Progress");
  const todo = myIssues.filter(i => i.state === "Todo");
  const blocked = myIssues.filter(i => i.labels.includes("blocked"));
  
  console.log("📋 Morning Standup");
  console.log(`In Progress: ${inProgress.length}`);
  console.log(`Todo: ${todo.length}`);
  console.log(`Blocked: ${blocked.length}`);
  
  // Show details
  inProgress.forEach(issue => {
    console.log(`- ${issue.identifier}: ${issue.title}`);
  });
}
```

## Tips for Maximum Productivity

1. **Use cycles (sprints)** to organize work
2. **Set up views** for different workflows
3. **Create templates** for common issue types
4. **Use parent/child issues** for epics
5. **Integrate with GitHub** for automatic updates
6. **Set up webhooks** for external automation
7. **Use keyboard shortcuts** extensively
8. **Create saved filters** for common queries

Remember: The MCP server gives you programmatic access to Linear, enabling powerful automation and integration with your development workflow!