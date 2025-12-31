# Google Analytics 4 (GA4) Setup Guide for VexioHQ

## 📊 Overview
This guide covers the complete setup and configuration of Google Analytics 4 for the VexioHQ website, including tracking implementation, conversion setup, and best practices.

---

## 🚀 Quick Setup Steps

### Step 1: Create GA4 Property
1. Go to [Google Analytics](https://analytics.google.com)
2. Click **Admin** (gear icon)
3. Click **Create Property**
4. Enter property details:
   - Property name: `VexioHQ Website`
   - Time zone: `(GMT-08:00) Pacific Time`
   - Currency: `USD`
5. Select business details:
   - Industry: `Technology`
   - Business size: `Small`

### Step 2: Set Up Data Stream
1. Choose platform: **Web**
2. Enter website details:
   - Website URL: `https://vexiohq.com`
   - Stream name: `VexioHQ Main Site`
3. Enable Enhanced Measurement (all options)
4. Copy your **Measurement ID** (G-XXXXXXXXXX)

### Step 3: Add GA4 to Website

#### Option A: Using Google Tag Manager (Recommended)
```html
<!-- Google Tag Manager in <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GTM-XXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GTM-XXXXXX');
</script>
```

#### Option B: Direct GA4 Implementation
Add to your `.env.local`:
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Update `/src/app/layout.tsx`:
```tsx
{/* Google Analytics */}
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
      page_path: window.location.pathname,
    });
  `}
</Script>
```

---

## 📈 Event Tracking Setup

### 1. Core Events to Track

#### Page Views (Automatic)
Already tracked with Enhanced Measurement

#### Form Submissions
```javascript
// Track contact form submission
gtag('event', 'generate_lead', {
  'event_category': 'engagement',
  'event_label': 'contact_form',
  'value': 1
});

// Track newsletter signup
gtag('event', 'sign_up', {
  'method': 'newsletter',
  'event_category': 'engagement'
});
```

#### Button Clicks
```javascript
// CTA button clicks
gtag('event', 'select_content', {
  'content_type': 'cta_button',
  'item_id': 'get_started'
});

// Download clicks
gtag('event', 'file_download', {
  'file_name': 'ai-guide.pdf',
  'file_extension': 'pdf',
  'link_text': 'Download AI Guide'
});
```

#### Calculator Usage
```javascript
// AI ROI Calculator completion
gtag('event', 'calculator_complete', {
  'event_category': 'tools',
  'event_label': 'ai_roi_calculator',
  'value': calculatedROI
});
```

### 2. Implementation in Next.js

Create `/src/lib/gtag.ts`:
```typescript
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Log page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Log specific events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
```

Add to your components:
```tsx
import * as gtag from '@/lib/gtag';

// Track button click
const handleClick = () => {
  gtag.event({
    action: 'click',
    category: 'CTA',
    label: 'Header Get Started',
  });
};
```

---

## 🎯 Conversion Tracking

### Key Conversions to Set Up

1. **Contact Form Submission**
   - Event: `generate_lead`
   - Value: $500 (estimated lead value)

2. **Newsletter Signup**
   - Event: `sign_up`
   - Value: $50

3. **Calculator Completion**
   - Event: `calculator_complete`
   - Value: $200

4. **Resource Download**
   - Event: `file_download`
   - Value: $100

5. **Demo Request**
   - Event: `request_demo`
   - Value: $1000

### Setting Up Conversions in GA4

1. Go to **Configure** → **Conversions**
2. Click **New conversion event**
3. Enter event names exactly as tracked
4. Toggle **Mark as conversion**

---

## 📊 Custom Dimensions & Metrics

### Recommended Custom Dimensions

1. **User Type**
   ```javascript
   gtag('config', 'GA_MEASUREMENT_ID', {
     'custom_map.dimension1': 'user_type'
   });
   
   gtag('event', 'page_view', {
     'user_type': 'enterprise' // or 'small_business', 'individual'
   });
   ```

2. **Industry**
   ```javascript
   gtag('event', 'form_submit', {
     'industry': 'financial_services'
   });
   ```

3. **Content Category**
   ```javascript
   gtag('event', 'page_view', {
     'content_category': 'blog',
     'content_subcategory': 'ai_strategy'
   });
   ```

### Setup in GA4
1. Go to **Configure** → **Custom definitions**
2. Click **Create custom dimensions**
3. Add dimension details and scope

---

## 🔗 Google Search Console Integration

### Connect GA4 to Search Console

1. In GA4, go to **Admin** → **Product links**
2. Click **Search Console links**
3. Choose **Link**
4. Select your Search Console property
5. Select data stream
6. Review and submit

### Benefits
- See organic search queries
- Landing page performance
- Search position tracking
- Click-through rates

---

## 📱 Cross-Domain Tracking

If tracking multiple domains:

```javascript
gtag('config', 'GA_MEASUREMENT_ID', {
  'linker': {
    'domains': ['vexiohq.com', 'app.vexiohq.com']
  }
});
```

---

## 🛡️ Privacy & GDPR Compliance

### Cookie Consent Integration

```javascript
// Check consent before loading GA
if (hasAnalyticsConsent()) {
  // Load GA scripts
  loadGoogleAnalytics();
}

// Update consent
function updateAnalyticsConsent(granted) {
  gtag('consent', 'update', {
    'analytics_storage': granted ? 'granted' : 'denied'
  });
}
```

### Anonymize IP Addresses
```javascript
gtag('config', 'GA_MEASUREMENT_ID', {
  'anonymize_ip': true
});
```

---

## 📈 Recommended Reports & Dashboards

### 1. Executive Dashboard
- Users & Sessions
- Conversion Rate
- Top Converting Pages
- Traffic Sources
- Revenue (if e-commerce)

### 2. Content Performance
- Top Pages by Views
- Average Engagement Time
- Bounce Rate by Page
- Blog Performance
- Calculator Usage

### 3. Lead Generation
- Form Submission Rate
- Lead Quality Score
- Source/Medium Performance
- Campaign ROI

### 4. Technical Performance
- Page Load Times
- Core Web Vitals
- Device Categories
- Browser Compatibility

---

## 🔍 Testing & Debugging

### 1. GA4 DebugView
1. Enable debug mode:
```javascript
gtag('config', 'GA_MEASUREMENT_ID', {
  'debug_mode': true
});
```
2. Go to **Configure** → **DebugView** in GA4
3. Test events in real-time

### 2. Google Tag Assistant
1. Install [Tag Assistant Chrome Extension](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/)
2. Navigate to your website
3. Check for proper tag firing

### 3. Browser Console
```javascript
// Check if gtag is loaded
console.log(typeof gtag !== 'undefined' ? 'GA loaded' : 'GA not loaded');

// Check dataLayer
console.log(window.dataLayer);
```

---

## 📋 Implementation Checklist

### Initial Setup
- [ ] Create GA4 property
- [ ] Set up web data stream
- [ ] Add tracking code to website
- [ ] Verify in DebugView
- [ ] Set up Search Console integration

### Event Tracking
- [ ] Contact form submissions
- [ ] Newsletter signups
- [ ] CTA button clicks
- [ ] Calculator completions
- [ ] Resource downloads
- [ ] Video engagement
- [ ] Scroll depth

### Conversions
- [ ] Define conversion events
- [ ] Set conversion values
- [ ] Test conversion tracking
- [ ] Set up conversion reporting

### Advanced Features
- [ ] Custom dimensions
- [ ] Audiences for remarketing
- [ ] Enhanced e-commerce (if applicable)
- [ ] Custom reports
- [ ] Data retention settings

### Privacy
- [ ] Cookie consent integration
- [ ] IP anonymization
- [ ] Data retention policy
- [ ] Privacy policy update

---

## 🚨 Common Issues & Solutions

### Issue: Events Not Showing
**Solution**: 
- Check GA4 DebugView
- Verify Measurement ID
- Clear cache and cookies
- Check ad blockers

### Issue: Duplicate Page Views
**Solution**:
- Remove duplicate tracking codes
- Check for multiple GA installations
- Review Tag Manager triggers

### Issue: Missing Conversions
**Solution**:
- Verify event names match exactly
- Check conversion window settings
- Test in DebugView first

### Issue: Cross-Domain Not Working
**Solution**:
- Add all domains to linker configuration
- Update referral exclusion list
- Test with Tag Assistant

---

## 📚 Additional Resources

- [GA4 Documentation](https://support.google.com/analytics/answer/10089681)
- [GA4 Event Reference](https://support.google.com/analytics/answer/9267735)
- [Measurement Protocol](https://developers.google.com/analytics/devguides/collection/protocol/ga4)
- [Google Tag Manager Guide](https://support.google.com/tagmanager/answer/6102821)

---

## 📞 Support Contacts

For GA4 implementation help:
- Google Analytics Support: [support.google.com/analytics](https://support.google.com/analytics)
- VexioHQ Tech Team: tech@vexiohq.com
- Documentation: [Internal Wiki Link]

---

*Last Updated: September 2025*
*Version: 1.0*
*Next Review: December 2025*