---

# PART 2: SETUP SCRIPT
## Save as: `setup.sh` and run with `bash setup.sh`
```bash
#!/bin/bash

echo "Setting up Response Awareness Framework v3.1.1..."

# Create directory structure
mkdir -p orch
mkdir -p docs/plans
mkdir -p docs/blueprints/example
mkdir -p docs/verification
mkdir -p docs/postmortems

# Create tag_schema.json
cat > orch/tag_schema.json << 'EOF'
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://framework.response-awareness.io/schemas/tag/v3.1.1",
  "title": "Response Awareness Tag Schema",
  "schema_version": "3.1.1",
  "type": "object",
  "required": ["id", "type", "severity", "confidence", "origin", "lineage", "deadline_phase", "measurable_impact"],
  "properties": {
    "id": {
      "type": "string",
      "pattern": "^[A-Z]+_[0-9]{3,}$"
    },
    "type": {
      "enum": [
        "COMPLETION_DRIVE", "COMPLETION_DRIVE_IMPL", "COMPLETION_DRIVE_INTEGRATION",
        "ASSUMPTION", "DECISION", "INTEGRATION", "SUGGEST",
        "PATTERN_CONFLICT", "TRAINING_CONTRADICTION", "PARADIGM_CLASH", "BEST_PRACTICE_TENSION"
      ]
    },
    "severity": {
      "enum": ["LOW", "MEDIUM", "HIGH", "CRITICAL"]
    },
    "confidence": {
      "type": "number",
      "minimum": 0,
      "maximum": 1
    },
    "origin": {
      "type": "object",
      "required": ["phase", "agent", "file", "line"]
    },
    "lineage": {
      "type": "object",
      "required": ["from_plan_uncertainty", "resolved_by"]
    },
    "deadline_phase": {
      "type": "integer",
      "minimum": 3,
      "maximum": 4
    },
    "measurable_impact": {
      "type": "object",
      "required": ["lines_affected", "dependencies_added"]
    }
  }
}
EOF

# Create evolution.yml
cat > orch/evolution.yml << 'EOF'
framework:
  version: "3.1.1"
  release_date: "2025-09-11"
  
governance:
  protected_keys:
    - optimization_weights.alpha
    - optimization_weights.beta
    - optimization_weights.gamma
    - phase_slos
    - ci_gates
    - tag_schema
    
optimization_weights:
  alpha: 0.52
  beta: 0.28
  gamma: 0.20
  
risk_scale: 5

budgets:
  hotfix_hours: 8
  refactor_hours: 40
  feature_hours: 80
  
agent_weights:
  default: 1.0
  min: 0.5
  max: 1.5
  penalty_per_debt: 0.1
  
phase_slos:
  -1:
    max_duration_seconds: 60
    timeout_action: "use_defaults"
  0:
    max_duration_seconds: 300
    timeout_action: "skip_with_low_confidence"
  1:
    max_duration_seconds: 600
    timeout_action: "use_best_partial"
  2:
    max_duration_seconds: 300
    timeout_action: "escalate_to_user"
  3:
    max_duration_seconds: 900
    timeout_action: "checkpoint_and_continue"
  4:
    max_duration_seconds: 300
    timeout_action: "mark_unverified"
  5:
    max_duration_seconds: 120
    timeout_action: "defer_learning"

ci_gates:
  quality:
    - metric: "brier_score"
      operator: "<="
      threshold: 0.10
    - metric: "tag_f1_score"
      operator: ">="
      threshold: 0.70
  security:
    - metric: "secrets_found"
      operator: "=="
      threshold: 0
    - metric: "allow_patterns_exists"
      operator: "=="
      threshold: true
      
retention_days:
  verification_reports: 30
  event_logs: 30
  
calibration:
  window_size: 20
  batch_day: "Monday"
  
quality_debt:
  sla_sessions: 3
  states: ["OPEN", "IN_PROGRESS", "RESOLVED", "VERIFIED"]
  
security:
  deny_on_missing_allow_list: true
EOF

# Create empty JSON files
echo "{}" > orch/task_ledger.json
echo "{}" > orch/metrics.json
echo "{}" > orch/survey_cache.json
echo "[]" > orch/allow_patterns.json

# Create empty log
touch orch/events.log

# Create Makefile
cat > Makefile << 'EOF'
VERSION = 3.1.1
ORCH_DIR = orch
DOCS_DIR = docs

.PHONY: verify init clean

verify:
	@echo "Checking framework setup..."
	@test -f $(ORCH_DIR)/tag_schema.json || echo "Missing tag_schema.json"
	@test -f $(ORCH_DIR)/evolution.yml || echo "Missing evolution.yml"
	@test -f $(ORCH_DIR)/allow_patterns.json || echo "Missing allow_patterns.json"
	@echo "Framework v$(VERSION) ready"

init:
	@bash setup.sh

clean:
	@rm -f $(ORCH_DIR)/events.log.*
	@echo "Cleaned"
EOF

echo "✅ Setup complete! Framework v3.1.1 is ready."
echo ""
echo "Next steps:"
echo "1. Save the main framework as a Claude Code custom command: /response-awareness"
echo "2. Run: make verify"
echo "3. Execute: /response-awareness [your task]"