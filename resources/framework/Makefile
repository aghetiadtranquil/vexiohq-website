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
