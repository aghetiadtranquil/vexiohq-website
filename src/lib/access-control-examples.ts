/**
 * Access Control Pattern Examples
 * Practical implementations for different business models
 */

import { auth, currentUser } from '@clerk/nextjs/server';

// ============================================
// 1. GATED PATTERN (Current Implementation)
// ============================================
export async function gatedAccess() {
  const user = await currentUser();
  
  if (!user) {
    return {
      allowed: false,
      redirect: '/portal/login',
      reason: 'Authentication required'
    };
  }
  
  return {
    allowed: true,
    user: {
      id: user.id,
      email: user.emailAddresses[0].emailAddress,
      name: `${user.firstName} ${user.lastName}`
    }
  };
}

// ============================================
// 2. FREEMIUM PATTERN
// ============================================
export function freemiumAccess(
  featureName: string,
  userTier: 'free' | 'pro' | 'enterprise' = 'free'
) {
  const freeFeatures = [
    'basic-calculator',
    'simple-reports',
    'standard-templates'
  ];
  
  const proFeatures = [
    ...freeFeatures,
    'advanced-calculator',
    'custom-reports',
    'api-access',
    'export-pdf',
    'team-sharing'
  ];
  
  const enterpriseFeatures = [
    ...proFeatures,
    'white-label',
    'sso',
    'audit-logs',
    'dedicated-support'
  ];
  
  const tierFeatures = {
    free: freeFeatures,
    pro: proFeatures,
    enterprise: enterpriseFeatures
  };
  
  return {
    allowed: tierFeatures[userTier].includes(featureName),
    tier: userTier,
    upgradeRequired: !tierFeatures[userTier].includes(featureName)
  };
}

// ============================================
// 3. USAGE-BASED PATTERN
// ============================================
interface UsageTracking {
  userId: string;
  feature: string;
  timestamp: Date;
}

class UsageLimiter {
  private static usage: Map<string, UsageTracking[]> = new Map();
  
  static async checkLimit(
    userId: string,
    feature: string,
    limit: number = 5
  ): Promise<{ allowed: boolean; remaining: number; resetDate: Date }> {
    const userKey = `${userId}-${feature}`;
    const now = new Date();
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    
    // Get or initialize usage array
    if (!this.usage.has(userKey)) {
      this.usage.set(userKey, []);
    }
    
    const userUsage = this.usage.get(userKey)!;
    
    // Filter to current month only
    const monthlyUsage = userUsage.filter(
      u => u.timestamp >= monthStart && u.timestamp <= monthEnd
    );
    
    const remaining = Math.max(0, limit - monthlyUsage.length);
    
    return {
      allowed: monthlyUsage.length < limit,
      remaining,
      resetDate: new Date(now.getFullYear(), now.getMonth() + 1, 1)
    };
  }
  
  static async trackUsage(
    userId: string,
    feature: string
  ): Promise<void> {
    const userKey = `${userId}-${feature}`;
    
    if (!this.usage.has(userKey)) {
      this.usage.set(userKey, []);
    }
    
    this.usage.get(userKey)!.push({
      userId,
      feature,
      timestamp: new Date()
    });
  }
}

// ============================================
// 4. HYBRID PATTERN
// ============================================
export interface ToolConfig {
  id: string;
  name: string;
  description: string;
  accessType: 'free' | 'gated' | 'freemium' | 'premium';
  usageLimit?: number;
  requiredTier?: 'free' | 'pro' | 'enterprise';
  features?: {
    free: string[];
    premium: string[];
  };
}

export const toolsConfiguration: Record<string, ToolConfig> = {
  'roi-calculator': {
    id: 'roi-calculator',
    name: 'ROI Calculator',
    description: 'Calculate business transformation ROI',
    accessType: 'gated', // Current implementation
    requiredTier: 'free'
  },
  'market-analyzer': {
    id: 'market-analyzer',
    name: 'Market Analyzer',
    description: 'Analyze market opportunities',
    accessType: 'freemium',
    usageLimit: 3,
    features: {
      free: ['basic-analysis', 'standard-reports'],
      premium: ['advanced-analysis', 'custom-reports', 'api-export']
    }
  },
  'ai-assistant': {
    id: 'ai-assistant',
    name: 'AI Strategy Assistant',
    description: 'Get AI implementation recommendations',
    accessType: 'premium',
    requiredTier: 'pro'
  },
  'cost-calculator': {
    id: 'cost-calculator',
    name: 'Cost Calculator',
    description: 'Simple cost estimation tool',
    accessType: 'free'
  }
};

export async function checkToolAccess(
  toolId: string,
  userId?: string
): Promise<{
  allowed: boolean;
  reason?: string;
  upgradeLink?: string;
}> {
  const tool = toolsConfiguration[toolId];
  
  if (!tool) {
    return { allowed: false, reason: 'Tool not found' };
  }
  
  switch (tool.accessType) {
    case 'free':
      return { allowed: true };
      
    case 'gated':
      if (!userId) {
        return { 
          allowed: false, 
          reason: 'Login required',
          upgradeLink: '/portal/login'
        };
      }
      return { allowed: true };
      
    case 'freemium':
      if (!userId) {
        // Allow limited anonymous usage
        const anonLimit = await UsageLimiter.checkLimit(
          'anonymous',
          toolId,
          tool.usageLimit || 3
        );
        
        if (!anonLimit.allowed) {
          return {
            allowed: false,
            reason: `Free usage limit reached (${tool.usageLimit} uses/month)`,
            upgradeLink: '/portal/register'
          };
        }
        return { allowed: true };
      }
      
      // Check user tier for premium features
      // This would normally check database
      return { allowed: true };
      
    case 'premium':
      if (!userId) {
        return {
          allowed: false,
          reason: 'Premium feature - subscription required',
          upgradeLink: '/pricing'
        };
      }
      
      // Check user subscription
      // This would normally check database
      const userTier = 'pro'; // Mock - get from database
      
      if (userTier !== 'pro' && userTier !== 'enterprise') {
        return {
          allowed: false,
          reason: 'Premium feature - upgrade required',
          upgradeLink: '/pricing'
        };
      }
      
      return { allowed: true };
      
    default:
      return { allowed: false, reason: 'Unknown access type' };
  }
}

// ============================================
// 5. LEAD SCORING EXAMPLE
// ============================================
export interface LeadActivity {
  toolsUsed: string[];
  totalCalculations: number;
  lastActive: Date;
  exportCount: number;
  timeOnSite: number; // minutes
  pagesViewed: number;
}

export function calculateLeadScore(activity: LeadActivity): {
  score: number;
  grade: 'A' | 'B' | 'C' | 'D';
  salesReady: boolean;
} {
  let score = 0;
  
  // Tool usage (max 30 points)
  score += Math.min(activity.toolsUsed.length * 10, 30);
  
  // Calculation frequency (max 20 points)
  score += Math.min(activity.totalCalculations * 2, 20);
  
  // Engagement depth (max 20 points)
  if (activity.exportCount > 0) score += 10;
  if (activity.timeOnSite > 10) score += 10;
  
  // Recency (max 20 points)
  const daysSinceActive = Math.floor(
    (Date.now() - activity.lastActive.getTime()) / (1000 * 60 * 60 * 24)
  );
  if (daysSinceActive < 1) score += 20;
  else if (daysSinceActive < 7) score += 10;
  else if (daysSinceActive < 30) score += 5;
  
  // Page views (max 10 points)
  score += Math.min(activity.pagesViewed, 10);
  
  // Determine grade
  let grade: 'A' | 'B' | 'C' | 'D';
  if (score >= 80) grade = 'A';
  else if (score >= 60) grade = 'B';
  else if (score >= 40) grade = 'C';
  else grade = 'D';
  
  return {
    score,
    grade,
    salesReady: score >= 70
  };
}

// ============================================
// 6. A/B TEST DIFFERENT PATTERNS
// ============================================
export function getAccessPattern(
  userId: string,
  testGroup?: 'A' | 'B'
): 'gated' | 'freemium' {
  // Determine test group by user ID if not provided
  if (!testGroup) {
    // Simple hash to assign consistent group
    const hash = userId.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    testGroup = hash % 2 === 0 ? 'A' : 'B';
  }
  
  // Group A: Gated (control)
  // Group B: Freemium (test)
  return testGroup === 'A' ? 'gated' : 'freemium';
}

// ============================================
// USAGE EXAMPLES
// ============================================

/*
// In your calculator page:
import { checkToolAccess, UsageLimiter } from '@/lib/access-control-examples';

export default async function CalculatorPage() {
  const { userId } = auth();
  const access = await checkToolAccess('roi-calculator', userId);
  
  if (!access.allowed) {
    return <UpgradePrompt reason={access.reason} link={access.upgradeLink} />;
  }
  
  // Track usage for analytics
  if (userId) {
    await UsageLimiter.trackUsage(userId, 'roi-calculator');
  }
  
  return <Calculator />;
}
*/

/*
// For A/B testing:
import { getAccessPattern } from '@/lib/access-control-examples';

export default function ToolPage() {
  const { userId } = auth();
  const pattern = getAccessPattern(userId);
  
  if (pattern === 'gated' && !userId) {
    return <LoginPrompt />;
  }
  
  if (pattern === 'freemium') {
    return <FreemiumCalculator />;
  }
  
  return <FullCalculator />;
}
*/