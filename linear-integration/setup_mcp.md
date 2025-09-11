# Linear MCP Integration Setup

Linear provides official MCP (Model Context Protocol) support for Claude Code!

## Option 1: Use Linear's Official MCP (Recommended)

### Setup Instructions

1. **Configure Claude Code settings**:
   
   Add to your Claude Code settings (`.claude/settings.json` or global config):
   
   ```json
   {
     "mcpServers": {
       "linear": {
         "command": "npx",
         "args": ["-y", "mcp-remote", "https://mcp.linear.app/sse"]
       }
     }
   }
   ```

2. **Authenticate**:
   - When first used, it will open a browser for OAuth authentication
   - Grant access to your Linear workspace

3. **Available Commands**:
   Once configured, Claude Code can directly:
   - Create issues in Linear
   - Update issue status
   - Add comments
   - Find existing issues
   - Update projects and labels

### Using MCP in Claude Code

After setup, you can use natural language commands like:
- "Create a Linear issue for fixing the build error"
- "Update Linear task TASK-123 to done with comment about the fix"
- "Find all open issues in project comapny-website"

## Option 2: Use Our Custom Integration

If MCP is not available or you need more control, use our Python script:

```bash
# Install dependencies
pip install requests python-dotenv

# Create .env with your API key
echo "LINEAR_API_KEY=lin_api_xxxxx" > .env

# Push tasks to Linear
python linear-integration/push_linear.py --file tasks.json --project "comapny-website"
```

## Comparison

| Feature | Linear MCP | Custom Script |
|---------|-----------|---------------|
| Setup | Simple config | Requires API key |
| Auth | OAuth browser | API key in .env |
| Real-time | Yes (SSE) | No |
| Claude Integration | Native | Manual |
| Customization | Limited | Full control |
| Bulk Operations | Limited | Optimized |
| Custom Fields | Standard | Fully custom |

## Testing MCP Connection

To test if Linear MCP is working:

1. Try creating a test issue:
   ```
   Create a Linear issue titled "Test MCP Integration" in project comapny-website
   ```

2. If it works, MCP is configured correctly
3. If not, fall back to our custom script

## Hybrid Approach

Best practice: Use both!
- MCP for real-time updates during task execution
- Custom script for bulk operations and initial setup

## Current Status

Let's check if MCP is available in this environment...