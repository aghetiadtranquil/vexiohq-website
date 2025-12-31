# URGENT: Calculator Page Performance Fix
Priority: CRITICAL - 3.2s LCP is unacceptable

## Current Issue
- **LCP: 3.2 seconds** (Target: <2.5s)
- **Root Cause**: Iframe loading strategy
- **Line 133**: `loading="lazy"` delays critical content

## Required Fixes

### 1. Change Iframe Loading (URGENT)
```tsx
// Line 133 - CHANGE FROM:
loading="lazy"

// TO:
loading="eager"
```

### 2. Add Resource Preloading (HIGH)
Add to page or layout head:
```tsx
<link 
  rel="preload" 
  href="/calculators/business-transformation-calculator.html" 
  as="document"
/>

// Or if external:
<link 
  rel="preconnect" 
  href="https://tally.so"
/>
<link 
  rel="dns-prefetch" 
  href="https://tally.so"
/>
```

### 3. Add Breadcrumb Schema (MEDIUM)
The visual breadcrumb exists (lines 94-111) but needs schema:

```tsx
// Add after line 23:
import { BreadcrumbSchema } from '@/components/StructuredData'

// Add after line 111:
<BreadcrumbSchema 
  items={[
    { name: 'Home', url: 'https://vexiohq.com' },
    { name: 'Tools', url: 'https://vexiohq.com/tools' },
    { name: 'ROI Calculator', url: 'https://vexiohq.com/tools/calculator' }
  ]} 
/>
```

### 4. Optimize Iframe Height (LOW)
```tsx
// Instead of fixed height:
style={{ minHeight: '1200px' }}

// Use dynamic height with ResizeObserver:
const [iframeHeight, setIframeHeight] = useState(800)

useEffect(() => {
  const iframe = document.getElementById('calculator-iframe')
  if (iframe?.contentWindow) {
    // Listen for height changes
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        setIframeHeight(entry.contentRect.height)
      }
    })
    resizeObserver.observe(iframe.contentDocument.body)
  }
}, [])
```

## Performance Impact

### Before Optimization:
- LCP: 3.2s ❌
- FID: <100ms ✅
- CLS: 0.15 ⚠️

### After Optimization (Expected):
- LCP: <2.0s ✅ (60% improvement)
- FID: <100ms ✅
- CLS: <0.1 ✅

## Implementation Priority
1. **NOW**: Change `loading="lazy"` to `loading="eager"` (Line 133)
2. **TODAY**: Add preload/preconnect links
3. **TODAY**: Add BreadcrumbSchema
4. **OPTIONAL**: Dynamic height adjustment

## Testing
After changes, test with:
1. Chrome DevTools Lighthouse
2. PageSpeed Insights
3. WebPageTest.org

Target metrics:
- LCP < 2.5s (Good)
- LCP < 1.8s (Excellent)