/**
 * A/B Testing Framework with Conversion Tracking
 * Provides experiment management, variant assignment, and conversion tracking
 */

import { analytics } from './analytics';

interface Experiment {
  id: string;
  name: string;
  status: 'draft' | 'running' | 'paused' | 'completed';
  variants: Variant[];
  traffic: number; // Percentage of traffic to include (0-100)
  startDate?: Date;
  endDate?: Date;
  metrics: ExperimentMetrics;
  targetingRules?: TargetingRule[];
  goals: ExperimentGoal[];
}

interface Variant {
  id: string;
  name: string;
  weight: number; // Distribution weight
  changes: VariantChange[];
  isControl: boolean;
}

interface VariantChange {
  type: 'text' | 'style' | 'component' | 'feature' | 'redirect';
  selector?: string;
  value: any;
  action?: 'replace' | 'append' | 'prepend' | 'remove';
}

interface ExperimentMetrics {
  impressions: number;
  conversions: number;
  conversionRate: number;
  confidence: number;
  uplift: number;
  revenue?: number;
}

interface TargetingRule {
  type: 'device' | 'location' | 'behavior' | 'custom';
  operator: 'equals' | 'contains' | 'starts_with' | 'regex';
  value: string;
}

interface ExperimentGoal {
  id: string;
  name: string;
  type: 'click' | 'pageview' | 'conversion' | 'revenue' | 'engagement';
  target?: string;
  value?: number;
}

interface UserVariantAssignment {
  experimentId: string;
  variantId: string;
  assignedAt: Date;
  converted: boolean;
  conversionValue?: number;
}

class ABTestingFramework {
  private experiments: Map<string, Experiment> = new Map();
  private userAssignments: Map<string, UserVariantAssignment[]> = new Map();
  private userId: string;
  private initialized = false;
  private config = {
    cookieName: 'ab_experiments',
    cookieDuration: 30, // days
    enableDebugMode: process.env.NODE_ENV === 'development',
    apiEndpoint: '/api/ab-testing',
    persistAssignments: true,
    trackingEnabled: true,
  };

  constructor() {
    this.userId = this.getUserId();
    if (typeof window !== 'undefined') {
      this.loadExperiments();
      this.loadUserAssignments();
      this.initialized = true;
    }
  }

  /**
   * Initialize A/B testing framework
   */
  public async initialize(): Promise<void> {
    if (this.initialized) return;

    try {
      // Load experiments from server
      await this.fetchExperiments();
      
      // Load user assignments
      this.loadUserAssignments();
      
      // Apply active experiments
      this.applyActiveExperiments();
      
      // Set up tracking
      this.setupTracking();
      
      this.initialized = true;
      
      if (this.config.enableDebugMode) {
        console.log('A/B Testing Framework initialized');
        this.debugInfo();
      }
    } catch (error) {
      console.error('Failed to initialize A/B testing:', error);
    }
  }

  /**
   * Get variant for a specific experiment
   */
  public getVariant(experimentId: string): Variant | null {
    const experiment = this.experiments.get(experimentId);
    if (!experiment || experiment.status !== 'running') {
      return null;
    }

    // Check if user already has assignment
    const existingAssignment = this.getUserAssignment(experimentId);
    if (existingAssignment) {
      return this.getVariantById(experiment, existingAssignment.variantId);
    }

    // Check if user should be included in experiment
    if (!this.shouldIncludeUser(experiment)) {
      return null;
    }

    // Assign variant
    const variant = this.assignVariant(experiment);
    if (variant) {
      this.trackImpression(experiment, variant);
    }

    return variant;
  }

  /**
   * Track conversion for an experiment
   */
  public trackConversion(
    experimentId: string, 
    goalId?: string, 
    value?: number
  ): void {
    const assignment = this.getUserAssignment(experimentId);
    if (!assignment) return;

    const experiment = this.experiments.get(experimentId);
    if (!experiment) return;

    const variant = this.getVariantById(experiment, assignment.variantId);
    if (!variant) return;

    // Mark as converted
    assignment.converted = true;
    assignment.conversionValue = value;
    this.saveUserAssignments();

    // Track in analytics
    if (this.config.trackingEnabled && analytics) {
      analytics.trackConversion('ab_test_conversion', {
        experiment_id: experimentId,
        experiment_name: experiment.name,
        variant_id: variant.id,
        variant_name: variant.name,
        goal_id: goalId,
        value: value,
        is_control: variant.isControl,
      });
    }

    // Send to server
    this.sendConversion(experimentId, assignment.variantId, goalId, value);

    if (this.config.enableDebugMode) {
      console.log('A/B Test Conversion:', {
        experiment: experiment.name,
        variant: variant.name,
        goal: goalId,
        value,
      });
    }
  }

  /**
   * Run an experiment
   */
  public async runExperiment(config: {
    id: string;
    name: string;
    variants: Array<{
      name: string;
      weight?: number;
      changes?: VariantChange[];
      isControl?: boolean;
    }>;
    traffic?: number;
    duration?: number;
    goals?: ExperimentGoal[];
    targeting?: TargetingRule[];
  }): Promise<Experiment> {
    const experiment: Experiment = {
      id: config.id,
      name: config.name,
      status: 'running',
      traffic: config.traffic || 100,
      variants: config.variants.map((v, index) => ({
        id: `${config.id}_variant_${index}`,
        name: v.name,
        weight: v.weight || 1,
        changes: v.changes || [],
        isControl: v.isControl || index === 0,
      })),
      metrics: {
        impressions: 0,
        conversions: 0,
        conversionRate: 0,
        confidence: 0,
        uplift: 0,
      },
      goals: config.goals || [],
      targetingRules: config.targeting,
      startDate: new Date(),
      endDate: config.duration 
        ? new Date(Date.now() + config.duration * 24 * 60 * 60 * 1000)
        : undefined,
    };

    // Validate experiment
    this.validateExperiment(experiment);

    // Store experiment
    this.experiments.set(experiment.id, experiment);
    this.saveExperiments();

    // Apply experiment if user is eligible
    const variant = this.getVariant(experiment.id);
    if (variant && !variant.isControl) {
      this.applyVariantChanges(variant);
    }

    return experiment;
  }

  /**
   * Stop an experiment
   */
  public stopExperiment(experimentId: string): void {
    const experiment = this.experiments.get(experimentId);
    if (!experiment) return;

    experiment.status = 'completed';
    experiment.endDate = new Date();
    
    // Calculate final metrics
    this.calculateExperimentMetrics(experiment);
    
    // Save state
    this.saveExperiments();

    if (this.config.enableDebugMode) {
      console.log('Experiment stopped:', experiment.name);
      this.reportExperimentResults(experiment);
    }
  }

  /**
   * Get experiment results
   */
  public getExperimentResults(experimentId: string): {
    experiment: Experiment;
    variants: Array<{
      variant: Variant;
      metrics: {
        impressions: number;
        conversions: number;
        conversionRate: number;
        confidence: number;
        uplift?: number;
      };
    }>;
    winner?: Variant;
    significanceLevel: number;
  } | null {
    const experiment = this.experiments.get(experimentId);
    if (!experiment) return null;

    const results = this.calculateVariantMetrics(experiment);
    const winner = this.determineWinner(results);
    const significanceLevel = this.calculateSignificance(results);

    return {
      experiment,
      variants: results,
      winner,
      significanceLevel,
    };
  }

  /**
   * Create a feature flag experiment
   */
  public featureFlag(
    flagName: string, 
    defaultValue: boolean = false,
    rolloutPercentage: number = 0
  ): boolean {
    // Check if feature flag experiment exists
    const experimentId = `feature_${flagName}`;
    let experiment = this.experiments.get(experimentId);

    if (!experiment) {
      // Create feature flag experiment
      experiment = {
        id: experimentId,
        name: `Feature Flag: ${flagName}`,
        status: 'running',
        traffic: rolloutPercentage,
        variants: [
          { id: 'control', name: 'Off', weight: 100 - rolloutPercentage, changes: [], isControl: true },
          { id: 'treatment', name: 'On', weight: rolloutPercentage, changes: [], isControl: false },
        ],
        metrics: {
          impressions: 0,
          conversions: 0,
          conversionRate: 0,
          confidence: 0,
          uplift: 0,
        },
        goals: [],
      };
      
      this.experiments.set(experimentId, experiment);
    }

    const variant = this.getVariant(experimentId);
    return variant ? !variant.isControl : defaultValue;
  }

  /**
   * Multivariate testing
   */
  public multivariateTest(config: {
    id: string;
    name: string;
    factors: Array<{
      name: string;
      levels: Array<{
        name: string;
        value: any;
      }>;
    }>;
    traffic?: number;
  }): any {
    // Generate all combinations
    const variants = this.generateMultivariateVariants(config.factors);
    
    // Create experiment with all combinations
    const experiment: Experiment = {
      id: config.id,
      name: config.name,
      status: 'running',
      traffic: config.traffic || 100,
      variants: variants.map((v, index) => ({
        id: `${config.id}_combination_${index}`,
        name: v.name,
        weight: 1,
        changes: v.changes,
        isControl: index === 0,
      })),
      metrics: {
        impressions: 0,
        conversions: 0,
        conversionRate: 0,
        confidence: 0,
        uplift: 0,
      },
      goals: [],
    };

    this.experiments.set(experiment.id, experiment);
    
    const variant = this.getVariant(experiment.id);
    return variant ? variant.changes : null;
  }

  /**
   * Get all active experiments for current user
   */
  public getActiveExperiments(): Array<{
    experiment: Experiment;
    variant: Variant;
  }> {
    const active: Array<{ experiment: Experiment; variant: Variant }> = [];
    
    this.experiments.forEach(experiment => {
      if (experiment.status === 'running') {
        const assignment = this.getUserAssignment(experiment.id);
        if (assignment) {
          const variant = this.getVariantById(experiment, assignment.variantId);
          if (variant) {
            active.push({ experiment, variant });
          }
        }
      }
    });

    return active;
  }

  /**
   * Private helper methods
   */

  private assignVariant(experiment: Experiment): Variant | null {
    // Check targeting rules
    if (!this.checkTargeting(experiment)) {
      return null;
    }

    // Random assignment based on weights
    const totalWeight = experiment.variants.reduce((sum, v) => sum + v.weight, 0);
    const random = Math.random() * totalWeight;
    
    let cumulativeWeight = 0;
    for (const variant of experiment.variants) {
      cumulativeWeight += variant.weight;
      if (random < cumulativeWeight) {
        // Save assignment
        this.saveAssignment(experiment.id, variant.id);
        return variant;
      }
    }

    return experiment.variants[0]; // Fallback to control
  }

  private saveAssignment(experimentId: string, variantId: string): void {
    const userAssignments = this.userAssignments.get(this.userId) || [];
    
    userAssignments.push({
      experimentId,
      variantId,
      assignedAt: new Date(),
      converted: false,
    });

    this.userAssignments.set(this.userId, userAssignments);
    this.saveUserAssignments();
  }

  private getUserAssignment(experimentId: string): UserVariantAssignment | null {
    const assignments = this.userAssignments.get(this.userId) || [];
    return assignments.find(a => a.experimentId === experimentId) || null;
  }

  private getVariantById(experiment: Experiment, variantId: string): Variant | null {
    return experiment.variants.find(v => v.id === variantId) || null;
  }

  private shouldIncludeUser(experiment: Experiment): boolean {
    // Check traffic allocation
    if (Math.random() * 100 > experiment.traffic) {
      return false;
    }

    // Check targeting rules
    return this.checkTargeting(experiment);
  }

  private checkTargeting(experiment: Experiment): boolean {
    if (!experiment.targetingRules || experiment.targetingRules.length === 0) {
      return true;
    }

    return experiment.targetingRules.every(rule => {
      switch (rule.type) {
        case 'device':
          return this.checkDeviceTargeting(rule);
        case 'location':
          return this.checkLocationTargeting(rule);
        case 'behavior':
          return this.checkBehaviorTargeting(rule);
        default:
          return true;
      }
    });
  }

  private checkDeviceTargeting(rule: TargetingRule): boolean {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /mobile|android|iphone/i.test(userAgent);
    const isTablet = /tablet|ipad/i.test(userAgent);
    
    switch (rule.value) {
      case 'mobile': return isMobile && !isTablet;
      case 'tablet': return isTablet;
      case 'desktop': return !isMobile && !isTablet;
      default: return true;
    }
  }

  private checkLocationTargeting(rule: TargetingRule): boolean {
    // Implement location-based targeting
    // This would typically use geolocation API or IP-based location
    return true;
  }

  private checkBehaviorTargeting(rule: TargetingRule): boolean {
    // Implement behavior-based targeting
    // This could check user history, preferences, etc.
    return true;
  }

  private applyVariantChanges(variant: Variant): void {
    if (!variant.changes || variant.changes.length === 0) return;

    variant.changes.forEach(change => {
      switch (change.type) {
        case 'text':
          this.applyTextChange(change);
          break;
        case 'style':
          this.applyStyleChange(change);
          break;
        case 'component':
          this.applyComponentChange(change);
          break;
        case 'feature':
          this.applyFeatureChange(change);
          break;
        case 'redirect':
          this.applyRedirect(change);
          break;
      }
    });
  }

  private applyTextChange(change: VariantChange): void {
    if (!change.selector) return;
    
    const elements = document.querySelectorAll(change.selector);
    elements.forEach(element => {
      if (change.action === 'replace') {
        element.textContent = change.value;
      } else if (change.action === 'append') {
        element.textContent += change.value;
      } else if (change.action === 'prepend') {
        element.textContent = change.value + element.textContent;
      }
    });
  }

  private applyStyleChange(change: VariantChange): void {
    if (!change.selector) return;
    
    const elements = document.querySelectorAll(change.selector);
    elements.forEach(element => {
      Object.assign((element as HTMLElement).style, change.value);
    });
  }

  private applyComponentChange(change: VariantChange): void {
    // This would typically integrate with your framework (React, Vue, etc.)
    // to swap components or modify props
    console.log('Component change:', change);
  }

  private applyFeatureChange(change: VariantChange): void {
    // Apply feature flags or configuration changes
    if (typeof window !== 'undefined') {
      (window as any).__abTestFeatures = {
        ...(window as any).__abTestFeatures,
        [change.selector || 'default']: change.value,
      };
    }
  }

  private applyRedirect(change: VariantChange): void {
    if (typeof window !== 'undefined' && change.value) {
      window.location.href = change.value;
    }
  }

  private applyActiveExperiments(): void {
    this.experiments.forEach(experiment => {
      if (experiment.status === 'running') {
        const variant = this.getVariant(experiment.id);
        if (variant && !variant.isControl) {
          this.applyVariantChanges(variant);
        }
      }
    });
  }

  private trackImpression(experiment: Experiment, variant: Variant): void {
    if (!this.config.trackingEnabled || !analytics) return;

    analytics.trackEvent('ab_test_impression', {
      experiment_id: experiment.id,
      experiment_name: experiment.name,
      variant_id: variant.id,
      variant_name: variant.name,
      is_control: variant.isControl,
    });

    // Send to server
    this.sendImpression(experiment.id, variant.id);
  }

  private async sendImpression(experimentId: string, variantId: string): Promise<void> {
    try {
      await fetch(this.config.apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'impression',
          experimentId,
          variantId,
          userId: this.userId,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.error('Failed to send impression:', error);
    }
  }

  private async sendConversion(
    experimentId: string, 
    variantId: string, 
    goalId?: string, 
    value?: number
  ): Promise<void> {
    try {
      await fetch(this.config.apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'conversion',
          experimentId,
          variantId,
          goalId,
          value,
          userId: this.userId,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.error('Failed to send conversion:', error);
    }
  }

  private calculateExperimentMetrics(experiment: Experiment): void {
    const results = this.calculateVariantMetrics(experiment);
    
    // Update experiment metrics
    experiment.metrics = {
      impressions: results.reduce((sum, r) => sum + r.metrics.impressions, 0),
      conversions: results.reduce((sum, r) => sum + r.metrics.conversions, 0),
      conversionRate: 0,
      confidence: 0,
      uplift: 0,
    };

    if (experiment.metrics.impressions > 0) {
      experiment.metrics.conversionRate = 
        (experiment.metrics.conversions / experiment.metrics.impressions) * 100;
    }

    // Calculate uplift from control
    const control = results.find(r => r.variant.isControl);
    const best = results.reduce((prev, curr) => 
      curr.metrics.conversionRate > prev.metrics.conversionRate ? curr : prev
    );

    if (control && best && control !== best) {
      experiment.metrics.uplift = 
        ((best.metrics.conversionRate - control.metrics.conversionRate) / 
         control.metrics.conversionRate) * 100;
    }
  }

  private calculateVariantMetrics(experiment: Experiment): Array<{
    variant: Variant;
    metrics: {
      impressions: number;
      conversions: number;
      conversionRate: number;
      confidence: number;
      uplift?: number;
    };
  }> {
    // This would typically fetch data from server
    // For now, return mock data
    return experiment.variants.map(variant => ({
      variant,
      metrics: {
        impressions: Math.floor(Math.random() * 1000),
        conversions: Math.floor(Math.random() * 100),
        conversionRate: Math.random() * 20,
        confidence: Math.random() * 100,
      },
    }));
  }

  private determineWinner(results: Array<any>): Variant | undefined {
    // Statistical significance calculation would go here
    const best = results.reduce((prev: any, curr: any) => 
      curr.metrics.conversionRate > prev.metrics.conversionRate ? curr : prev
    );
    
    return best.metrics.confidence > 95 ? best.variant : undefined;
  }

  private calculateSignificance(results: Array<any>): number {
    // Implement statistical significance calculation
    // This is a simplified version
    return Math.min(...results.map((r: any) => r.metrics.confidence));
  }

  private generateMultivariateVariants(factors: any[]): any[] {
    // Generate all combinations of factor levels
    const combinations: any[] = [];
    
    // Recursive function to generate combinations
    const generate = (index: number, current: any) => {
      if (index === factors.length) {
        combinations.push({ ...current });
        return;
      }
      
      for (const level of factors[index].levels) {
        current[factors[index].name] = level;
        generate(index + 1, current);
      }
    };
    
    generate(0, {});
    
    return combinations.map((combo, index) => ({
      name: `Combination ${index + 1}`,
      changes: Object.entries(combo).map(([factor, level]: [string, any]) => ({
        type: 'feature',
        selector: factor,
        value: level.value,
        action: 'replace',
      })),
    }));
  }

  private validateExperiment(experiment: Experiment): void {
    if (!experiment.id || !experiment.name) {
      throw new Error('Experiment must have ID and name');
    }
    
    if (!experiment.variants || experiment.variants.length < 2) {
      throw new Error('Experiment must have at least 2 variants');
    }
    
    const hasControl = experiment.variants.some(v => v.isControl);
    if (!hasControl) {
      throw new Error('Experiment must have a control variant');
    }
  }

  private reportExperimentResults(experiment: Experiment): void {
    const results = this.getExperimentResults(experiment.id);
    if (!results) return;

    console.group(`Experiment Results: ${experiment.name}`);
    console.log('Duration:', experiment.startDate, '-', experiment.endDate);
    console.log('Total Impressions:', experiment.metrics.impressions);
    console.log('Total Conversions:', experiment.metrics.conversions);
    
    results.variants.forEach(({ variant, metrics }) => {
      console.group(`Variant: ${variant.name}${variant.isControl ? ' (Control)' : ''}`);
      console.log('Impressions:', metrics.impressions);
      console.log('Conversions:', metrics.conversions);
      console.log('Conversion Rate:', metrics.conversionRate.toFixed(2) + '%');
      console.log('Confidence:', metrics.confidence.toFixed(2) + '%');
      console.groupEnd();
    });
    
    if (results.winner) {
      console.log('Winner:', results.winner.name);
      console.log('Significance Level:', results.significanceLevel.toFixed(2) + '%');
    }
    
    console.groupEnd();
  }

  private setupTracking(): void {
    // Set up automatic conversion tracking for common goals
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      
      // Check if this click matches any experiment goals
      this.getActiveExperiments().forEach(({ experiment }) => {
        experiment.goals.forEach(goal => {
          if (goal.type === 'click' && goal.target) {
            if (target.matches(goal.target)) {
              this.trackConversion(experiment.id, goal.id, goal.value);
            }
          }
        });
      });
    });
  }

  private getUserId(): string {
    // Try to get existing user ID from cookie
    const cookie = this.getCookie('ab_user_id');
    if (cookie) return cookie;

    // Generate new user ID
    const userId = `user_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    this.setCookie('ab_user_id', userId, 365);
    return userId;
  }

  private async fetchExperiments(): Promise<void> {
    try {
      const response = await fetch(`${this.config.apiEndpoint}/experiments`);
      const data = await response.json();
      
      data.experiments?.forEach((exp: Experiment) => {
        this.experiments.set(exp.id, exp);
      });
    } catch (error) {
      console.error('Failed to fetch experiments:', error);
    }
  }

  private loadExperiments(): void {
    if (!this.config.persistAssignments) return;
    
    const stored = localStorage.getItem('ab_experiments');
    if (stored) {
      try {
        const data = JSON.parse(stored);
        data.forEach((exp: Experiment) => {
          this.experiments.set(exp.id, exp);
        });
      } catch (error) {
        console.error('Failed to load experiments:', error);
      }
    }
  }

  private saveExperiments(): void {
    if (!this.config.persistAssignments) return;
    
    const data = Array.from(this.experiments.values());
    localStorage.setItem('ab_experiments', JSON.stringify(data));
  }

  private loadUserAssignments(): void {
    if (!this.config.persistAssignments) return;
    
    const stored = localStorage.getItem('ab_assignments');
    if (stored) {
      try {
        const data = JSON.parse(stored);
        Object.entries(data).forEach(([userId, assignments]) => {
          this.userAssignments.set(userId, assignments as UserVariantAssignment[]);
        });
      } catch (error) {
        console.error('Failed to load assignments:', error);
      }
    }
  }

  private saveUserAssignments(): void {
    if (!this.config.persistAssignments) return;
    
    const data: Record<string, UserVariantAssignment[]> = {};
    this.userAssignments.forEach((assignments, userId) => {
      data[userId] = assignments;
    });
    localStorage.setItem('ab_assignments', JSON.stringify(data));
  }

  private getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || null;
    }
    return null;
  }

  private setCookie(name: string, value: string, days: number): void {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/;SameSite=Strict`;
  }

  private debugInfo(): void {
    console.group('A/B Testing Debug Info');
    console.log('User ID:', this.userId);
    console.log('Active Experiments:', this.getActiveExperiments());
    console.log('All Experiments:', Array.from(this.experiments.values()));
    console.log('User Assignments:', this.userAssignments.get(this.userId));
    console.groupEnd();
  }
}

// Export singleton instance
export const abTesting = new ABTestingFramework();

// Auto-initialize
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    abTesting.initialize();
  });
}