#!/bin/bash

# Array of all page routes
pages=(
    "/"
    "/about"
    "/services"
    "/products"
    "/products/analytics"
    "/products/mlops"
    "/products/transformation"
    "/solutions/ai-strategy"
    "/solutions/automation"
    "/solutions/data-analytics"
    "/case-studies"
    "/case-studies/fortune-500-retail-transformation"
    "/blog"
    "/blog/how-to-implement-ai-in-enterprise"
    "/blog/agentic-ai-revolution-2024"
    "/blog/ai-vs-traditional-analytics"
    "/blog/cost-of-bad-data-quality"
    "/blog/genai-vs-traditional-ml"
    "/insights"
    "/insights/state-of-enterprise-ai-2025"
    "/insights/ai-economic-impact-report"
    "/insights/healthcare-ai-transformation-guide"
    "/insights/financial-services-ml-playbook"
    "/insights/mlops-best-practices"
    "/insights/ai-governance-framework"
    "/resources"
    "/resources/enterprise-agentic-ai-guide"
    "/resources/ai-roi-calculator"
    "/resources/data-quality-ai-success"
    "/resources/ai-readiness-checklist"
    "/contact"
    "/consultation"
    "/get-started"
    "/pricing"
    "/docs"
    "/test"
    "/portal/login"
    "/privacy-notice"
    "/cookie-notice"
    "/agentic-ai-platform"
    "/agentic-ai-guide"
    "/agentic-ai-assessment"
    "/ai-roi-calculator"
    "/ai-consulting-san-francisco"
    "/ai-implementation-strategy"
    "/ai-implementation-strategy-guide"
    "/ai-consulting-services"
    "/data-quality-ai-solutions"
    "/enterprise-ai-transformation"
)

echo "Testing ${#pages[@]} pages..."
echo ""

success_count=0
fail_count=0
failed_pages=()

for page in "${pages[@]}"; do
    status=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3002$page")
    if [ "$status" = "200" ]; then
        echo "✓ $page - $status OK"
        ((success_count++))
    else
        echo "✗ $page - $status ERROR"
        ((fail_count++))
        failed_pages+=("$page:$status")
    fi
done

echo ""
echo "========================"
echo "Summary:"
echo "Total pages tested: ${#pages[@]}"
echo "Successful (200 OK): $success_count"
echo "Failed: $fail_count"

if [ ${#failed_pages[@]} -gt 0 ]; then
    echo ""
    echo "Failed pages:"
    for failed in "${failed_pages[@]}"; do
        echo "  - $failed"
    done
fi
