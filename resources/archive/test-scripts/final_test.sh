#!/bin/bash
echo "=== COMPREHENSIVE WEBSITE STATUS CHECK ==="
echo "Time: $(date)"
echo "=========================================="
echo ""

# Test critical pages
critical_pages=(
  "/" "/about/" "/services/" "/products/" "/blog/" 
  "/insights/" "/case-studies/" "/resources/" "/contact/" 
  "/consultation/" "/pricing/" "/get-started/" "/docs/"
)

# Test additional pages
other_pages=(
  "/agentic-ai-platform/" "/ai-consulting-san-francisco/"
  "/ai-implementation-strategy/" "/ai-consulting-services/"
  "/data-quality-ai-solutions/" "/enterprise-ai-transformation/"
  "/products/analytics/" "/products/mlops/" "/products/transformation/"
  "/solutions/ai-strategy/" "/solutions/automation/" "/solutions/data-analytics/"
)

echo "Testing Critical Pages:"
echo "-----------------------"
success=0
failed=0

for page in "${critical_pages[@]}"; do
  response=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3002$page")
  if [ "$response" = "200" ]; then
    echo "✅ $page - OK"
    ((success++))
  else
    echo "❌ $page - $response"
    ((failed++))
  fi
done

echo ""
echo "Testing Additional Pages:"
echo "-------------------------"

for page in "${other_pages[@]}"; do
  response=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3002$page")
  if [ "$response" = "200" ]; then
    echo "✅ $page - OK"
    ((success++))
  else
    echo "❌ $page - $response"
    ((failed++))
  fi
done

total=$((success + failed))
echo ""
echo "=========================================="
echo "FINAL RESULTS:"
echo "✅ Working: $success/$total pages"
echo "❌ Failed: $failed/$total pages"
echo ""

if [ $failed -eq 0 ]; then
  echo "🎉 SUCCESS: All pages are working correctly!"
else
  echo "⚠️ WARNING: Some pages need attention"
fi
echo "=========================================="
