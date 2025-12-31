# Access Control Patterns for B2B SaaS Tools

## Overview
Different access control strategies serve different business goals. Here's a comprehensive guide to implementing each pattern.

## 1. GATED Pattern (Recommended for B2B Lead Generation) 🎯

### When to Use
- **Primary Goal**: Maximum lead capture
- **Best For**: High-value B2B tools, enterprise software
- **Conversion Rate**: 15-25% registration to trial

### Implementation
```tsx
// /src/middleware.ts
export default clerkMiddleware((auth, req) => {
  // Protect all /tools/* routes
  if (req.nextUrl.pathname.startsWith('/tools')) {
    auth().protect();
  }
});
```

### Benefits
- ✅ 100% lead capture before value delivery
- ✅ Better lead qualification (serious users only)
- ✅ Clear value proposition required
- ✅ Higher quality leads for sales team

### Example Flow
```
Landing Page → "Try Calculator" → Registration Form → Email Verification → Access Tool
```

### Current Implementation (Your Site)
✅ Already implemented! Calculator requires authentication at `/tools/calculator`

## 2. FREEMIUM Pattern 🆓

### When to Use
- **Primary Goal**: User acquisition & viral growth
- **Best For**: B2C SaaS, developer tools, productivity apps
- **Conversion Rate**: 2-5% free to paid

### Implementation
```tsx
// /src/app/tools/calculator/public/page.tsx
export default function PublicCalculator() {
  const [usageCount, setUsageCount] = useState(0);
  const { isSignedIn } = useUser();
  
  const handleCalculate = () => {
    if (!isSignedIn && usageCount >= 3) {
      // Show upgrade prompt
      showUpgradeModal();
      return;
    }
    // Perform calculation
    setUsageCount(prev => prev + 1);
  };
  
  return (
    <div>
      {/* Basic calculator UI */}
      {!isSignedIn && (
        <div className="mt-4 p-4 bg-yellow-50 rounded">
          <p>You've used {usageCount}/3 free calculations</p>
          <Link href="/portal/register">Sign up for unlimited access</Link>
        </div>
      )}
    </div>
  );
}
```

### Features Split
```javascript
const features = {
  free: {
    basicCalculations: true,
    exportPDF: false,
    saveResults: false,
    advancedMetrics: false,
    apiAccess: false
  },
  premium: {
    basicCalculations: true,
    exportPDF: true,
    saveResults: true,
    advancedMetrics: true,
    apiAccess: true
  }
};
```

## 3. TIERED Usage Pattern 📊

### When to Use
- **Primary Goal**: Gradual monetization
- **Best For**: API services, data tools, analytics platforms
- **Conversion Rate**: 10-15% free to paid

### Implementation with Database
```tsx
// /src/lib/usage-tracking.ts
import { auth } from '@clerk/nextjs';

interface UsageLimit {
  tier: 'free' | 'pro' | 'enterprise';
  monthlyLimit: number;
  currentUsage: number;
}

export async function checkUsageLimit(): Promise<boolean> {
  const { userId } = auth();
  
  // Get user's tier from database
  const user = await db.user.findUnique({
    where: { clerkId: userId },
    include: { subscription: true }
  });
  
  const limits = {
    free: 5,
    pro: 100,
    enterprise: Infinity
  };
  
  const tier = user?.subscription?.tier || 'free';
  const limit = limits[tier];
  
  // Check current month usage
  const currentUsage = await db.usage.count({
    where: {
      userId: user.id,
      createdAt: {
        gte: new Date(new Date().setDate(1)) // First day of month
      }
    }
  });
  
  return currentUsage < limit;
}

// In your calculator component
const handleCalculate = async () => {
  const canUse = await checkUsageLimit();
  
  if (!canUse) {
    showUpgradeModal();
    return;
  }
  
  // Track usage
  await trackUsage(userId, 'calculator');
  
  // Perform calculation
  performCalculation();
};
```

### Usage Display Component
```tsx
// /src/components/UsageTracker.tsx
export function UsageTracker() {
  const { user } = useUser();
  const [usage, setUsage] = useState({ current: 0, limit: 5 });
  
  return (
    <div className="bg-gray-100 p-4 rounded">
      <div className="flex justify-between mb-2">
        <span>Monthly Usage</span>
        <span>{usage.current}/{usage.limit}</span>
      </div>
      <div className="w-full bg-gray-300 rounded h-2">
        <div 
          className="bg-blue-600 h-2 rounded"
          style={{ width: `${(usage.current / usage.limit) * 100}%` }}
        />
      </div>
      {usage.current >= usage.limit && (
        <Link href="/pricing" className="text-blue-600 text-sm mt-2 block">
          Upgrade for unlimited access →
        </Link>
      )}
    </div>
  );
}
```

## 4. HYBRID Pattern 🔄

### When to Use
- **Primary Goal**: Balance between acquisition and monetization
- **Best For**: Multi-tool platforms, comprehensive suites
- **Conversion Rate**: 5-10% overall

### Implementation
```tsx
// /src/config/tools-access.ts
export const toolsConfig = {
  'roi-calculator': {
    access: 'free',
    requiresAuth: false,
    usageLimit: null
  },
  'ai-readiness': {
    access: 'gated',
    requiresAuth: true,
    usageLimit: null
  },
  'cost-analyzer': {
    access: 'freemium',
    requiresAuth: false,
    usageLimit: 3,
    premiumFeatures: ['export', 'save', 'share']
  },
  'transformation-planner': {
    access: 'premium',
    requiresAuth: true,
    minimumTier: 'pro'
  }
};

// Middleware to enforce access
export function enforceToolAccess(toolId: string) {
  const config = toolsConfig[toolId];
  
  if (!config) return false;
  
  switch (config.access) {
    case 'free':
      return true;
    case 'gated':
      return isAuthenticated();
    case 'freemium':
      return checkFreemiumAccess(config);
    case 'premium':
      return checkPremiumAccess(config);
  }
}
```

### Tool Gallery Implementation
```tsx
// /src/app/tools/page.tsx
export default function ToolsGallery() {
  const { isSignedIn, user } = useUser();
  
  return (
    <div className="grid grid-cols-3 gap-6">
      {Object.entries(toolsConfig).map(([id, config]) => (
        <ToolCard
          key={id}
          tool={config}
          accessible={enforceToolAccess(id)}
          badge={getBadge(config.access)}
        />
      ))}
    </div>
  );
}

function getBadge(access: string) {
  const badges = {
    'free': { text: 'FREE', color: 'bg-green-100 text-green-800' },
    'gated': { text: 'SIGN UP', color: 'bg-blue-100 text-blue-800' },
    'freemium': { text: 'LIMITED FREE', color: 'bg-yellow-100 text-yellow-800' },
    'premium': { text: 'PRO', color: 'bg-purple-100 text-purple-800' }
  };
  return badges[access];
}
```

## 5. Implementation Decision Framework

### Choose GATED When:
- 🎯 Lead generation is primary goal
- 💼 Selling to enterprises
- 💰 High-value, complex tools
- 📊 Need detailed user data
- 🤝 Have sales team to follow up

### Choose FREEMIUM When:
- 🚀 Growth is primary goal
- 👥 B2C or prosumer market
- 🔄 Network effects matter
- 💡 Product sells itself
- 📈 Volume over quality

### Choose TIERED When:
- ⚖️ Balancing growth and revenue
- 🔢 Usage-based value prop
- 💳 Clear upgrade path
- 📊 Measurable consumption
- 🎯 Different user segments

### Choose HYBRID When:
- 🛠️ Multiple tools/features
- 🎨 Varied value propositions
- 🧪 Testing different models
- 📦 Suite of products
- 🔀 Complex user journey

## Current Implementation Analysis

Your site currently uses **GATED** pattern:
```
✅ Calculator requires authentication
✅ Full lead capture before access
✅ Clean implementation with Clerk
✅ Professional B2B approach
```

### Recommended Enhancements

1. **Add Usage Analytics**
```tsx
// Track tool usage for insights
await analytics.track('calculator_used', {
  userId: user.id,
  tool: 'roi-calculator',
  timestamp: new Date(),
  results: calculationResults
});
```

2. **Progressive Profiling**
```tsx
// Collect more info over time
if (!user.metadata.company && usageCount > 3) {
  showCompanyInfoModal();
}
```

3. **Lead Scoring**
```tsx
// Score leads based on behavior
const leadScore = calculateScore({
  toolsUsed: ['calculator', 'analyzer'],
  frequency: 5,
  resultsViewed: true,
  exportedPDF: true
});

if (leadScore > 80) {
  notifySalesTeam(user);
}
```

## Conversion Optimization Tips

### For GATED Pattern (Your Current Setup)
1. **Show Value Before Gate**
   - Preview of results
   - Demo video
   - Sample reports
   
2. **Minimize Friction**
   - Social login options
   - Progressive forms
   - Clear value prop

3. **Post-Registration Experience**
   - Immediate value delivery
   - Onboarding flow
   - Follow-up sequences

## Metrics to Track

```javascript
const keyMetrics = {
  gated: {
    'registration_rate': 'Visitors who register',
    'activation_rate': 'Registered who use tool',
    'lead_quality': 'MQL/SQL conversion',
    'sales_velocity': 'Time to close'
  },
  freemium: {
    'free_to_trial': 'Free users who trial',
    'trial_to_paid': 'Trial to paid conversion',
    'feature_adoption': 'Premium feature usage',
    'viral_coefficient': 'User referrals'
  }
};
```

## Conclusion

For B2B SaaS targeting enterprises (like VexioHQ):
- **GATED is optimal** for high-value tools
- Maximizes lead quality
- Enables sales team engagement
- Clear ROI for marketing spend

Your current implementation is aligned with best practices for B2B lead generation! 🎯