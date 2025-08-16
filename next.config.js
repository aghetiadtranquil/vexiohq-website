/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production optimization
  output: 'standalone',
  
  // Image optimization
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },
  
  // Ensure trailing slashes for better SEO
  trailingSlash: true,

  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,

  // Fix webpack configuration to prevent 'call' undefined errors
  webpack: (config, { buildId, dev, isServer }) => {
    // Critical fix for module concatenation issues
    config.optimization = {
      ...config.optimization,
      concatenateModules: false, // This prevents the 'call' undefined error
      minimize: !dev,
      moduleIds: 'deterministic',
    };
    
    // Unique name to prevent module collision
    config.output.uniqueName = `datatranquil-${buildId || 'dev'}`;
    
    // Remove React aliases that cause issues
    if (config.resolve?.alias) {
      delete config.resolve.alias.react;
      delete config.resolve.alias['react-dom'];
    }
    
    return config;
  },

  // Experimental features for better performance
  experimental: {
    // optimizeCss: true, // Disabled due to missing critters dependency
    scrollRestoration: true,
  },

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Headers for caching and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;