/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production optimization
  output: 'standalone',
  
  // Image optimization
  images: {
    unoptimized: false,
  },
  
  // Ensure trailing slashes for better SEO
  trailingSlash: true,
};

module.exports = nextConfig;