/**
 * VexioSales App Configuration
 * Central configuration for VexioSales app URLs
 */

const VEXIOSALES_APP_URL = process.env.NEXT_PUBLIC_VEXIOSALES_APP_URL || 'https://vexiosales.vexiohq.com';

export const vexiosalesConfig = {
  // Base URL
  appUrl: VEXIOSALES_APP_URL,

  // Auth routes
  signIn: `${VEXIOSALES_APP_URL}/auth/signin`,
  signUp: `${VEXIOSALES_APP_URL}/auth/signup`,

  // App routes
  dashboard: `${VEXIOSALES_APP_URL}/dashboard`,
  leads: `${VEXIOSALES_APP_URL}/leads`,
  pipeline: `${VEXIOSALES_APP_URL}/pipeline`,
  campaigns: `${VEXIOSALES_APP_URL}/campaigns`,
  agents: `${VEXIOSALES_APP_URL}/agents`,
  analytics: `${VEXIOSALES_APP_URL}/analytics`,
  settings: `${VEXIOSALES_APP_URL}/settings`,

  // Helper functions
  getSignUpUrl: (params?: { email?: string; plan?: string }) => {
    const url = new URL(`${VEXIOSALES_APP_URL}/auth/signup`);
    if (params?.email) url.searchParams.set('email', params.email);
    if (params?.plan) url.searchParams.set('plan', params.plan);
    return url.toString();
  },

  getSignInUrl: (params?: { redirect?: string }) => {
    const url = new URL(`${VEXIOSALES_APP_URL}/auth/signin`);
    if (params?.redirect) url.searchParams.set('redirect', params.redirect);
    return url.toString();
  },
};

export default vexiosalesConfig;
