# Google Analytics 4 Setup Instructions for DataTranquil

## 📋 What You Need to Do Manually

Since I cannot access your Google account, you'll need to create the GA4 property manually. Here's exactly what to do:

---

## Step 1: Create GA4 Property (5 minutes)

1. **Go to Google Analytics**
   - Open: https://analytics.google.com
   - Sign in with your Google account

2. **Create New Property**
   ```
   Click: Admin (⚙️ gear icon) → Create Property
   ```

3. **Fill in Property Details**
   ```
   Property name: DataTranquil Website
   Time zone: (GMT-08:00) Pacific Time - Los Angeles
   Currency: United States Dollar (USD)
   ```

4. **Business Information**
   ```
   Industry category: Technology
   Business size: Small (1-10 employees)
   ```

5. **Business Objectives** (select all that apply)
   ```
   ☑ Generate leads
   ☑ Raise brand awareness
   ☑ Get baseline reports
   ☑ Improve user engagement
   ```

---

## Step 2: Configure Web Stream (2 minutes)

1. **Choose Platform**
   ```
   Select: Web
   ```

2. **Set up Web Stream**
   ```
   Website URL: https://datatranquil.com
   Stream name: DataTranquil Main Site
   ```

3. **Enhanced Measurement** (Keep all enabled)
   ```
   ☑ Page views
   ☑ Scrolls  
   ☑ Outbound clicks
   ☑ Site search
   ☑ Video engagement
   ☑ File downloads
   ```

4. **Copy Your Measurement ID**
   ```
   Your ID will look like: G-XXXXXXXXXX
   Save this - you'll need it!
   ```

---

## Step 3: Get API Secret for Server-Side Tracking (1 minute)

1. **In GA4 Admin Panel**
   ```
   Go to: Data Streams → Click your web stream
   ```

2. **Generate API Secret**
   ```
   Click: Measurement Protocol API secrets
   Click: Create
   Nickname: DataTranquil Backend
   ```

3. **Copy the API Secret**
   ```
   Save this secret - you'll need it for backend tracking
   ```

---

## Step 4: Update Your Website Configuration (2 minutes)

1. **Update `.env.local` file**
   ```bash
   # Add these lines to your .env.local file:
   NEXT_PUBLIC_GA_ID=G-YOUR_ACTUAL_ID
   GA_MEASUREMENT_ID=G-YOUR_ACTUAL_ID
   GA_API_SECRET=YOUR_API_SECRET
   NEXT_PUBLIC_ENABLE_ANALYTICS=true
   ```

2. **Restart your development server**
   ```bash
   npm run dev
   ```

---

## Step 5: Set Up Conversions (3 minutes)

In GA4, go to **Configure → Events → Mark as conversion** for:

| Event Name | Description | Value |
|------------|-------------|-------|
| `generate_lead` | Contact form submission | $500 |
| `sign_up` | Newsletter signup | $50 |
| `calculator_complete` | ROI Calculator completion | $200 |
| `file_download` | Resource download | $100 |
| `cta_click` | CTA button clicks | $10 |

---

## Step 6: Create Custom Dimensions (2 minutes)

Go to **Configure → Custom definitions → Create custom dimension**:

| Dimension Name | Scope | Event Parameter |
|----------------|-------|-----------------|
| User Type | User | user_type |
| Industry | Event | industry |
| Company Size | Event | company_size |
| Lead Type | Event | lead_type |
| Calculator Type | Event | calculator_type |

---

## Step 7: Set Up Audiences (2 minutes)

Go to **Configure → Audiences → New audience**:

1. **High-Value Visitors**
   - Condition: Session duration > 3 minutes
   - AND Page views > 3

2. **Engaged Users**
   - Condition: Has completed calculator
   - OR Has downloaded resource
   - OR Has submitted form

3. **Enterprise Prospects**
   - Condition: Viewed pricing page
   - AND Viewed enterprise solutions

---

## Step 8: Configure Google Search Console Integration (1 minute)

1. **In GA4 Admin**
   ```
   Go to: Product links → Search Console links
   ```

2. **Link Property**
   ```
   Choose: Link
   Select: datatranquil.com (must verify site first)
   Select: Your web stream
   Submit
   ```

---

## Step 9: Test Your Implementation (2 minutes)

1. **Open GA4 DebugView**
   ```
   In GA4: Configure → DebugView
   ```

2. **Visit Your Website**
   ```
   Open: https://localhost:3002 (with ?debug_mode=true)
   ```

3. **Verify Events Are Firing**
   - You should see events in real-time
   - Check page_view, user_engagement, etc.

---

## Step 10: Set Up Google Tag Manager (Optional but Recommended)

1. **Create GTM Account**
   - Go to: https://tagmanager.google.com
   - Create account: DataTranquil
   - Create container: DataTranquil Website (Web)

2. **Get GTM ID**
   ```
   Copy: GTM-XXXXXX
   ```

3. **Add to `.env.local`**
   ```bash
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXX
   ```

---

## 🎯 Quick Copy-Paste Configuration

Once you have your IDs, update `.env.local`:

```bash
# Google Analytics Configuration
NEXT_PUBLIC_GA_ID=G-[YOUR-ID-HERE]
GA_MEASUREMENT_ID=G-[YOUR-ID-HERE]
GA_API_SECRET=[YOUR-SECRET-HERE]

# Google Tag Manager (optional)
NEXT_PUBLIC_GTM_ID=GTM-[YOUR-ID-HERE]

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_CLARITY=true
NEXT_PUBLIC_REQUIRE_CONSENT=true

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://datatranquil.com
```

---

## ✅ Verification Checklist

After setup, verify these are working:

- [ ] GA4 DebugView shows events
- [ ] Real-time report shows your visit
- [ ] Page views are being tracked
- [ ] Form submissions create `generate_lead` events
- [ ] Calculator usage creates `calculator_complete` events
- [ ] Downloads create `file_download` events

---

## 🚨 Troubleshooting

### Not seeing data?
1. Check browser console for errors
2. Verify GA ID in `.env.local`
3. Clear cache and cookies
4. Disable ad blockers
5. Check DebugView in GA4

### Events not converting?
1. Exact event name match required
2. Wait 24 hours for data processing
3. Check event parameters

---

## 📞 Need Help?

If you need assistance with the setup:
1. The GA4 setup wizard is very helpful
2. Google's documentation: https://support.google.com/analytics
3. Check the implementation at `/api/analytics/track` for server events

---

*These steps will take about 20 minutes total to complete.*
*Once done, your analytics will be fully operational!*