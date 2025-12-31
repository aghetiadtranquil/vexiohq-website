# ChatPRD + Linear Integration Setup Guide

## Prerequisites ✅
- ✅ Linear admin access (You have admin access as atul@vexiohq.com)
- ⚠️ ChatPRD Organization account (not personal account)
- ⚠️ Admin permissions in ChatPRD

## Step-by-Step Setup Process

### Step 1: Access ChatPRD Settings
1. Log in to your ChatPRD account at https://chatprd.ai
2. Navigate to **Settings > Integrations**
3. Look for the Linear integration card

### Step 2: Connect Linear
1. Click **"Connect Linear"** button
2. You'll be redirected to Linear's authorization page
3. Log in with your Linear credentials (atul@vexiohq.com)
4. Review the permissions ChatPRD is requesting:
   - Read and write access to issues
   - Read access to workspace information
   - Ability to post comments
5. Click **"Approve"** to authorize the integration

### Step 3: Verify Connection
1. Return to ChatPRD Settings > Integrations
2. Confirm you see:
   - Your workspace name: **Datatranquil**
   - Status: **"Connected"**
   - Connected account: atul@vexiohq.com

## How ChatPRD Works with Linear

### Automatic Features
Once connected, ChatPRD will automatically:

1. **New Issue Creation**
   - Posts a welcome comment when you create a new issue
   - Offers to help improve the issue description

2. **Issue Assignment**
   - When an issue is assigned, ChatPRD offers assistance
   - Suggests breaking down complex issues

3. **AI-Powered Assistance**
   - Mention **@chatprd** in any Linear comment to activate AI help

## Using ChatPRD in Linear

### Commands You Can Use
When you mention **@chatprd** in a Linear comment, you can ask:

```
@chatprd improve the description
```
- Enhances issue description with better structure
- Adds acceptance criteria
- Clarifies requirements

```
@chatprd create sub-issues
```
- Breaks down large issues into manageable tasks
- Creates linked sub-issues automatically
- Maintains parent-child relationships

```
@chatprd help me with [specific question]
```
- Answers questions about requirements
- Provides technical suggestions
- Helps with implementation approaches

## Integration Features

### 1. PRD Generation
- Create comprehensive PRDs from Linear issues
- Automatically format user stories
- Generate acceptance criteria

### 2. Issue Enhancement
- Improve issue titles for clarity
- Add missing details to descriptions
- Structure requirements properly

### 3. Task Breakdown
- Automatically create sub-tasks
- Estimate effort for each task
- Assign appropriate labels

### 4. Team Collaboration
- All team members can use @chatprd
- Shared AI context across organization
- Consistent formatting standards

## Best Practices

### For Product Managers
1. Use ChatPRD to draft initial PRDs
2. Let AI break down epics into stories
3. Generate acceptance criteria automatically

### For Developers
1. Ask @chatprd for implementation suggestions
2. Get help understanding requirements
3. Request technical specification details

### For Teams
1. Standardize issue templates using ChatPRD
2. Use AI for consistent documentation
3. Speed up sprint planning with auto-breakdown

## Workspace-Specific Setup

### For Datatranquil Team
```yaml
Workspace: Datatranquil
Teams: 
  - Datatranquil (Main)
  - Project Shells
Admin: atul@vexiohq.com
Integration Status: Ready to connect
```

### Recommended Linear Settings
1. Enable issue templates
2. Set up custom fields for PRD links
3. Create labels for ChatPRD-enhanced issues

## Testing the Integration

### Test Issue 1: Simple Enhancement
```markdown
Title: Implement user authentication
Description: Need login functionality

@chatprd improve the description
```

### Test Issue 2: Complex Breakdown
```markdown
Title: Build customer dashboard
Description: Create a comprehensive dashboard for customers

@chatprd create sub-issues
```

### Test Issue 3: Technical Help
```markdown
Title: Optimize database queries
Description: Performance issues with user queries

@chatprd suggest optimization approaches
```

## Troubleshooting

### Connection Issues
- Ensure you're using organization account (not personal)
- Check Linear admin permissions
- Try disconnecting and reconnecting

### ChatPRD Not Responding
- Verify @chatprd mention is exact
- Check integration is still connected
- Ensure issue is in connected workspace

### Permission Errors
- Confirm Linear admin access
- Check ChatPRD organization membership
- Verify API permissions in Linear

## Advanced Usage

### Automation Ideas
1. **Sprint Planning**
   - Use ChatPRD to prepare all issues before sprint
   - Auto-generate sub-tasks for each story
   - Create consistent acceptance criteria

2. **Documentation**
   - Generate technical specs from issues
   - Create API documentation
   - Build user guides

3. **Estimation**
   - Get AI-powered effort estimates
   - Break down complex features
   - Identify dependencies

## Security & Privacy

### Data Handling
- ChatPRD only accesses authorized workspace
- Issue content processed securely
- No data shared between organizations

### Permissions
- Read/write access to issues only
- Cannot modify workspace settings
- Limited to approved teams

## Disconnecting Integration

If needed, to disconnect:
1. Go to ChatPRD Settings > Integrations
2. Click "Disconnect Linear"
3. Optionally: Remove Linear app from workspace

## Next Steps

1. **Sign up for ChatPRD Organization account** at https://chatprd.ai
2. **Connect Linear** following the steps above
3. **Test with a sample issue** to verify integration
4. **Train your team** on using @chatprd commands
5. **Create workflow templates** for common tasks

## Support Resources

- ChatPRD Documentation: https://intercom.help/chatprd
- Linear API Docs: https://developers.linear.app
- ChatPRD Support: support@chatprd.ai
- Linear Support: https://linear.app/contact

---

## Quick Reference Card

| Action | Command |
|--------|---------|
| Improve description | `@chatprd improve the description` |
| Create sub-issues | `@chatprd create sub-issues` |
| Get help | `@chatprd help with [question]` |
| Generate PRD | `@chatprd create PRD` |
| Estimate effort | `@chatprd estimate effort` |
| Add acceptance criteria | `@chatprd add acceptance criteria` |

Ready to integrate! 🚀