# MANDATORY TESTING PROTOCOL

## ⚠️ NEVER SKIP TESTING - ALWAYS TEST BEFORE SAYING "DONE"

### **Before ANY Component Change:**
1. ✅ Check current state works
2. ✅ Make the change
3. ✅ Test immediately in browser
4. ✅ Check console for errors
5. ✅ Verify functionality

### **Testing Checklist:**
```bash
# 1. Server Health Check
curl -s http://localhost:3001 | grep -q "<!DOCTYPE html>" && echo "✅ Server OK" || echo "❌ Server Error"

# 2. Check for Runtime Errors
curl -s http://localhost:3001 | grep -i "error" && echo "❌ Errors found" || echo "✅ No errors"

# 3. Component Rendering
curl -s http://localhost:3001 | grep -q "[ComponentName]" && echo "✅ Component renders" || echo "❌ Component missing"

# 4. Console Errors (check dev server output)
# Look for any red text or error messages in terminal

# 5. Visual Check
echo "Open http://localhost:3001 in browser and verify visually"
```

### **Common Issues to Check:**
- ❌ Missing imports
- ❌ Undefined variables
- ❌ Incorrect icon imports (use LucideIcons.* format)
- ❌ Missing dependencies (npm install)
- ❌ Syntax errors
- ❌ Type errors

### **Testing Commands:**
```bash
# Quick test suite
npm run dev         # Start server
npm run build       # Build test
npm run lint        # Lint check
npm run typecheck   # Type check (if available)
```

### **GOLDEN RULE:**
**NEVER say "implementation complete" without:**
1. Server running without errors ✅
2. Page loading in browser ✅
3. No console errors ✅
4. Feature working as expected ✅
5. Code properly formatted ✅

### **Testing Workflow:**
1. **Before starting:** Test current state
2. **After each change:** Test immediately
3. **Before committing:** Full test suite
4. **Before deploying:** Production build test

### **Error Recovery:**
If error occurs:
1. Check exact error message
2. Find root cause (not symptoms)
3. Fix properly (not workarounds)
4. Test the fix thoroughly
5. Verify no new errors introduced

## REMEMBER: "It works on my machine" is NOT acceptable!

**ALWAYS TEST. EVERY TIME. NO EXCEPTIONS.**