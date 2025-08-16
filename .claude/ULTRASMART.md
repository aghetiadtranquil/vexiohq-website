# ULTRASMART Claude Code Mastery

## 🧠 Level 1: Smart Basics
```bash
# Instead of: "Fix the error in index.js"
claude "Fix the error, run tests, commit if passing, and tell me what the root cause was"
```

## 🚀 Level 2: Chain Commands Like a Pro
```bash
# Morning startup routine
claude "Check what I was working on yesterday, pull latest changes, run tests, and list today's priorities from TODO comments"

# Before lunch commit
claude "Commit all changes with smart messages, push, and create a PR with a summary of what changed and why"
```

## ⚡ Level 3: Predictive Coding
```bash
# Let Claude anticipate needs
claude "I'm about to add user authentication. Set up everything I'll need."
# Claude will: create auth folders, add dependencies, create middleware, set up tests, add env variables

# Defensive coding
claude "Analyze this function for edge cases I missed and add handling for them"
```

## 🔮 Level 4: Context Stacking
```bash
# Build complex context before asking
claude "Read the API documentation at /docs/api.md"
claude "Now check our current implementation in /src/api/"
claude "Based on the differences, update our code to match the latest API specs"
```

## 🎯 Level 5: Meta Commands
```bash
# Make Claude improve itself
claude "Analyze my last 10 commands and create shortcuts for my common patterns"
claude "Update CLAUDE.md with lessons learned from today's debugging session"
claude "Create a custom command that does what I usually do at the start of each feature"
```

## 💡 ULTRASMART Patterns

### 1. **The Oracle Pattern**
```bash
claude "You're a senior architect. Review this approach before I implement: [describe plan]"
```

### 2. **The Time Traveler**
```bash
claude "This code will be modified by another developer in 6 months. What would help them?"
```

### 3. **The Debugger's Paradox**
```bash
claude "This bug is weird. Try 3 completely different approaches to find it."
```

### 4. **The Refactor Cascade**
```bash
claude "If I change this interface, show me all places that break, fix them, and update tests"
```

### 5. **The Learning Loop**
```bash
claude "Explain this complex code, then quiz me on it, then help me refactor based on what I got wrong"
```

## 🛠️ ULTRASMART Workflows

### **1. Feature Development Workflow**
```bash
claude "think harder about implementing [feature]"  # Makes a plan
claude "Start implementing with TDD - write tests first"
claude "Now implement just enough to make tests pass"
claude "Refactor for production quality and add edge cases"
```

### **2. Bug Hunt Workflow**
```bash
claude "Something is broken with [feature]. Use git bisect to find when it broke"
claude "Analyze what changed in that commit"
claude "Fix it and add a test to prevent regression"
```

### **3. Performance Optimization**
```bash
claude "Profile this code path and identify bottlenecks"
claude "Implement 3 different optimization strategies"
claude "Benchmark them and implement the best one"
```

### **4. Code Review Workflow**
```bash
claude "Review this PR as if you were a: security expert, performance engineer, junior developer learning"
claude "What would each persona suggest?"
```

## 🎮 ULTRASMART Shortcuts

### **Speed Coding**
```bash
# Type less, do more
alias cc="claude"
alias cct="claude think"  # For planning
alias cch="claude think harder"  # For complex planning
alias ccu="claude ultrathink"  # For very complex problems
alias ccf="claude '/auto-fix'"  # Quick fixes
alias ccc="claude '/smart-commit'"  # Quick commits
```

### **Context Preloading**
```bash
# Start your day with context
alias morning="claude '/resume && Show me what needs attention today'"
alias focus="claude 'Block all distractions and help me focus on the current task'"
```

## 🧬 ULTRASMART Prompting

### **Precision Prompts**
```bash
# Bad: "Make this faster"
# Good: "Optimize this for memory usage, maintaining readability"
# ULTRASMART: "Profile this, identify the slowest 20%, optimize those parts, benchmark the improvement"
```

### **Role-Based Prompts**
```bash
claude "As a security expert, audit this code"
claude "As a performance engineer, optimize this"
claude "As a UX designer, improve this flow"
```

### **Constraint-Based Coding**
```bash
claude "Refactor this without changing the public API"
claude "Make this work in IE11 without polyfills"
claude "Reduce this to under 100 lines while maintaining functionality"
```

## 🔥 ULTRASMART Automation

### **Self-Improving Code**
```bash
claude "Create a git hook that uses you to review code before commit"
claude "Make a GitHub Action that uses you to review PRs"
claude "Build a test that uses you to generate edge cases"
```

### **Predictive Maintenance**
```bash
claude "Monitor this codebase and alert me when:"
- "Complexity exceeds threshold"
- "Test coverage drops"
- "Dependencies have security issues"
- "Code patterns deviate from our standards"
```

## 🌟 The ULTRASMART Mindset

1. **Think in Workflows, Not Commands**
   - Chain operations for complex tasks
   - Build context before asking

2. **Teach Claude Your Patterns**
   - Update CLAUDE.md with learnings
   - Create custom commands for repetitive tasks

3. **Use Claude to Improve Claude**
   - "How could you have done that better?"
   - "Create a command that does what we just did"

4. **Leverage Multiple Perspectives**
   - Ask Claude to review as different personas
   - Get alternative solutions before choosing

5. **Automate the Automation**
   - Make Claude create its own shortcuts
   - Build self-improving workflows

## 🏆 ULTRASMART Challenges

Try these to level up:

1. **The One-Liner Challenge**
   ```bash
   claude "Build a complete CRUD API with tests in one command"
   ```

2. **The Time Attack**
   ```bash
   claude "Implement [feature] in 10 minutes. Set a timer and track progress"
   ```

3. **The Quality Quest**
   ```bash
   claude "Refactor until this code scores 100% on all quality metrics"
   ```

4. **The Learning Sprint**
   ```bash
   claude "Teach me [new technology] by building something with it"
   ```

Remember: Being ULTRASMART isn't about complex commands - it's about **leveraging Claude's intelligence to multiply your productivity**!