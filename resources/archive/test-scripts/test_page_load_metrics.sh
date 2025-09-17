#!/bin/bash

echo "=== COMPREHENSIVE PAGE TESTING REPORT ==="
echo "Testing Date: $(date)"
echo "========================================="
echo ""

# Test pages array
pages=(
    "/"
    "/about"
    "/services"
    "/products"
    "/blog"
    "/insights"
    "/case-studies"
    "/resources"
    "/contact"
    "/consultation"
    "/pricing"
    "/get-started"
)

echo "PHASE 1: Page Load & Response Testing"
echo "--------------------------------------"

working_pages=0
broken_pages=0
fast_loads=0
slow_loads=0

for page in "${pages[@]}"; do
    # Test with detailed metrics
    response=$(curl -L -s -o /dev/null -w "%{http_code}|%{time_total}|%{size_download}|%{time_starttransfer}|%{speed_download}" "http://localhost:3002$page")
    
    IFS='|' read -r status load_time size ttfb speed <<< "$response"
    
    # Convert to milliseconds
    load_ms=$(echo "$load_time * 1000" | bc | cut -d. -f1)
    ttfb_ms=$(echo "$ttfb * 1000" | bc | cut -d. -f1)
    
    # Calculate performance grade
    if [ "$status" = "200" ]; then
        ((working_pages++))
        status_icon="✅"
        
        if [ "$load_ms" -lt 500 ]; then
            ((fast_loads++))
            perf_grade="A+"
        elif [ "$load_ms" -lt 1000 ]; then
            perf_grade="A"
        elif [ "$load_ms" -lt 2000 ]; then
            perf_grade="B"
        elif [ "$load_ms" -lt 3000 ]; then
            perf_grade="C"
        else
            ((slow_loads++))
            perf_grade="D"
        fi
    else
        ((broken_pages++))
        status_icon="❌"
        perf_grade="F"
    fi
    
    printf "%s %-30s | Status: %3s | Load: %5sms | TTFB: %4sms | Grade: %s\n" \
        "$status_icon" "$page" "$status" "$load_ms" "$ttfb_ms" "$perf_grade"
done

echo ""
echo "PHASE 2: Critical Path Testing"
echo "-------------------------------"

# Test critical user journeys
critical_paths=(
    "Home → About:/:about"
    "Home → Services:/:services"
    "Home → Contact:/:contact"
    "Services → Pricing:/services:pricing"
    "Blog → Article:/blog:blog/how-to-implement-ai-in-enterprise"
)

echo "Testing critical user journeys..."
for path in "${critical_paths[@]}"; do
    IFS=':' read -r name from to <<< "$path"
    
    # Test both pages in sequence
    status1=$(curl -L -s -o /dev/null -w "%{http_code}" "http://localhost:3002/$from")
    status2=$(curl -L -s -o /dev/null -w "%{http_code}" "http://localhost:3002/$to")
    
    if [ "$status1" = "200" ] && [ "$status2" = "200" ]; then
        echo "✅ $name - Working"
    else
        echo "❌ $name - Broken ($from:$status1 → $to:$status2)"
    fi
done

echo ""
echo "PHASE 3: 404 Error Detection"
echo "-----------------------------"

# Test for 404 pages
test_404_pages=(
    "/non-existent-page"
    "/blog/fake-article"
    "/products/invalid"
    "/admin"
    "/wp-admin"
)

found_404=0
for page in "${test_404_pages[@]}"; do
    status=$(curl -L -s -o /dev/null -w "%{http_code}" "http://localhost:3002$page")
    if [ "$status" = "404" ]; then
        ((found_404++))
        echo "✅ $page returns 404 (expected)"
    else
        echo "⚠️  $page returns $status (expected 404)"
    fi
done

echo ""
echo "========================================="
echo "FINAL SUMMARY"
echo "========================================="
echo ""
echo "📊 Page Status:"
echo "   Working pages: $working_pages/12"
echo "   Broken pages: $broken_pages/12"
echo ""
echo "⚡ Performance:"
echo "   Fast loads (<500ms): $fast_loads"
echo "   Slow loads (>3000ms): $slow_loads"
echo ""
echo "🔍 404 Error Handling:"
echo "   Correct 404 responses: $found_404/5"
echo ""

if [ $broken_pages -eq 0 ]; then
    echo "✅ RESULT: All pages working correctly!"
elif [ $broken_pages -lt 3 ]; then
    echo "⚠️  RESULT: Some pages need attention"
else
    echo "❌ RESULT: Critical issues found - multiple pages broken"
fi
