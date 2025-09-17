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

echo "Testing ${#pages[@]} pages (following redirects)..."
echo ""

success_count=0
fail_count=0
redirect_count=0
failed_pages=()
redirected_pages=()

for page in "${pages[@]}"; do
    # First get status without following redirects
    initial_status=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3002$page")
    
    # Then get final status after following redirects
    final_status=$(curl -s -o /dev/null -L -w "%{http_code}" "http://localhost:3002$page")
    
    if [ "$initial_status" = "200" ]; then
        echo "✓ $page - 200 OK (direct)"
        ((success_count++))
    elif [ "$initial_status" = "308" ] || [ "$initial_status" = "301" ] || [ "$initial_status" = "302" ] || [ "$initial_status" = "307" ]; then
        if [ "$final_status" = "200" ]; then
            echo "↻ $page - $initial_status → 200 OK (redirect)"
            ((redirect_count++))
            redirected_pages+=("$page")
        else
            echo "✗ $page - $initial_status → $final_status ERROR"
            ((fail_count++))
            failed_pages+=("$page:$initial_status→$final_status")
        fi
    else
        echo "✗ $page - $initial_status ERROR"
        ((fail_count++))
        failed_pages+=("$page:$initial_status")
    fi
done

echo ""
echo "========================"
echo "Summary:"
echo "Total pages tested: ${#pages[@]}"
echo "Direct 200 OK: $success_count"
echo "Redirects to 200 OK: $redirect_count"
echo "Failed/404: $fail_count"

if [ ${#failed_pages[@]} -gt 0 ]; then
    echo ""
    echo "Failed pages:"
    for failed in "${failed_pages[@]}"; do
        echo "  - $failed"
    done
fi

if [ ${#redirected_pages[@]} -gt 0 ]; then
    echo ""
    echo "Pages with redirects (still working):"
    for redirected in "${redirected_pages[@]}"; do
        echo "  - $redirected"
    done
fi
