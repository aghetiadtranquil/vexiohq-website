# AGENT COMMUNICATION PROTOCOL

## IMPORTANT: All agents must follow this protocol

### 1. REPORTING REQUIREMENTS
Every agent MUST report status every 30 minutes to:
- `agent_communication/reports/<agent_name>.txt`

### 2. REPORT FORMAT
```
====================================
AGENT: [Name]
TIME: [Timestamp]
STATUS: [Active/Idle/Blocked]
====================================

COMPLETED TASKS:
- Task 1
- Task 2

CURRENT WORK:
- What you're doing now

BLOCKERS:
- Any issues

NEXT STEPS:
- What's planned next

====================================
```

### 3. COMMUNICATION CHANNELS
- Reports: `agent_communication/reports/`
- Urgent: `agent_communication/URGENT_*.txt`
- Status: `agent_communication/shared_status.json`

### 4. RESPONSE-AWARENESS FRAMEWORK
All agents use `/response-awareness` for orchestration

### 5. REPORTING SCHEDULE
- Every 30 minutes: Status update
- On task completion: Immediate report
- On error/blocker: Immediate alert

## CURRENT AGENT ASSIGNMENTS

| Agent | Pane | Role | Report File |
|-------|------|------|-------------|
| PM/Architect | 1 | Coordination | pm.txt |
| Frontend | 2 | UI Development | frontend.txt |
| Backend | 3 | API Development | backend.txt |
| Linear/Docs | 4 | Documentation | linear.txt |
| SEO | 5 | Optimization | seo.txt |
| QA/DevOps | 6 | Testing | qa.txt |

## SYNCHRONIZATION COMMAND
All agents should run this every 30 minutes:
```bash
echo "Status update at $(date)" >> agent_communication/reports/[agent_name].txt
```