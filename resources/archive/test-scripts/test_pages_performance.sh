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

echo "Testing ${#pages[@]} pages with performance metrics..."
echo "================================================"
echo ""

# Initialize counters
success_count=0
fail_count=0
slow_pages=()
fast_pages=()
error_pages=()

# Performance thresholds (in seconds)
FAST_THRESHOLD=1.0
SLOW_THRESHOLD=3.0

for page in "${pages[@]}"; do
    # Test with timing
    response=$(curl -L -s -o /dev/null -w "%{http_code},%{time_total},%{size_download},%{time_starttransfer}" "http://localhost:3002$page")
    
    IFS=',' read -r status total_time size_bytes time_to_first_byte <<< "$response"
    
    # Convert time to milliseconds for easier reading
    total_time_ms=$(echo "$total_time * 1000" | bc | cut -d. -f1)
    ttfb_ms=$(echo "$time_to_first_byte * 1000" | bc | cut -d. -f1)
    
    # Determine status symbol
    if [ "$status" = "200" ]; then
        status_symbol="✅"
        ((success_count++))
        
        # Check performance
        if (( $(echo "$total_time < $FAST_THRESHOLD" | bc -l) )); then
            perf_indicator="⚡ FAST"
            fast_pages+=("$page:${total_time_ms}ms")
        elif (( $(echo "$total_time > $SLOW_THRESHOLD" | bc -l) )); then
            perf_indicator="🐌 SLOW"
            slow_pages+=("$page:${total_time_ms}ms")
        else
            perf_indicator="✓ OK"
        fi
    else
        status_symbol="❌"
        perf_indicator="ERROR"
        ((fail_count++))
        error_pages+=("$page:$status")
    fi
    
    # Format size
    if [ "$size_bytes" -gt 1048576 ]; then
        size_formatted=$(echo "scale=2; $size_bytes / 1048576" | bc)
        size_unit="MB"
    elif [ "$size_bytes" -gt 1024 ]; then
        size_formatted=$(echo "scale=1; $size_bytes / 1024" | bc)
        size_unit="KB"
    else
        size_formatted=$size_bytes
        size_unit="B"
    fi
    
    printf "%s %-50s | Status: %3s | Load: %5sms | TTFB: %4sms | Size: %6s%s | %s\n" \
        "$status_symbol" "$page" "$status" "$total_time_ms" "$ttfb_ms" "$size_formatted" "$size_unit" "$perf_indicator"
done

echo ""
echo "================================================"
echo "PERFORMANCE SUMMARY"
echo "================================================"
echo "Total Pages: ${#pages[@]}"
echo "Successful: $success_count"
echo "Failed: $fail_count"
echo ""

if [ ${#fast_pages[@]} -gt 0 ]; then
    echo "⚡ FAST PAGES (< ${FAST_THRESHOLD}s):"
    for page in "${fast_pages[@]}"; do
        echo "   $page"
    done
    echo ""
fi

if [ ${#slow_pages[@]} -gt 0 ]; then
    echo "🐌 SLOW PAGES (> ${SLOW_THRESHOLD}s):"
    for page in "${slow_pages[@]}"; do
        echo "   $page"
    done
    echo ""
fi

if [ ${#error_pages[@]} -gt 0 ]; then
    echo "❌ ERROR PAGES:"
    for page in "${error_pages[@]}"; do
        echo "   $page"
    done
fi
