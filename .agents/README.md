# Multi-Agent System Installed

This project now has the multi-agent toolkit installed locally.

## Quick Start

1. Start agents:
   ```bash
   ./manage_agents.sh start
   ```

2. Brief the agents:
   ```bash
   ./manage_agents.sh brief 1  # Brief PM
   ./manage_agents.sh brief 2  # Brief Developer
   ./manage_agents.sh brief 3  # Brief QA
   ```

3. Attach to session:
   ```bash
   ./manage_agents.sh attach
   ```

## File Structure

```
.agents/              # Toolkit files
├── toolkit/          # Core scripts
├── templates/        # Agent templates
└── config.json       # Configuration

agent_communication/  # Inter-agent messaging
├── pm_inbox.md
├── dev_inbox.md
├── qa_inbox.md
├── project_status.md
└── shared_notes.md

manage_agents.sh      # Management commands
start_agents.sh       # Quick start script
```

## Communication

Agents communicate via markdown files in `agent_communication/`.
Each agent checks their inbox and writes to others' inboxes.

## Installed from

Source: /Users/admin/projects/Tmux-Orchestrator/multi_agent_toolkit
Date: Fri Sep 12 23:08:07 PDT 2025
