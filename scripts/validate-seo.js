#!/usr/bin/env node

/**
 * SEO Validation Script
 * Run this script to validate all SEO requirements before deployment
 */

const fs = require('fs');
const path = require('path');

// Color codes for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function logTest(name, passed, message = '') {
  totalTests++;
  if (passed) {
    passedTests++;
    console.log(`${colors.green}✓${colors.reset} ${name}`);
  } else {
    failedTests++;
    console.log(`${colors.red}✗${colors.reset} ${name}`);
    if (message) console.log(`  ${colors.yellow}→ ${message}${colors.reset}`);
  }
}

function logSection(title) {
  console.log(`\n${colors.blue}━━━ ${title} ━━━${colors.reset}`);
}

// Check if file exists
function fileExists(filePath) {
  try {
    return fs.existsSync(path.join(process.cwd(), filePath));
  } catch {
    return false;
  }
}

// Read file content
function readFile(filePath) {
  try {
    return fs.readFileSync(path.join(process.cwd(), filePath), 'utf8');
  } catch {
    return null;
  }
}

// Validate Meta Tags
function validateMetaTags() {
  logSection('META TAGS VALIDATION');
  
  const layoutPath = 'src/app/layout.tsx';
  const layoutContent = readFile(layoutPath);
  
  logTest('Layout file exists', fileExists(layoutPath));
  logTest('Has metadata export', layoutContent?.includes('export const metadata'));
  logTest('Has title template', layoutContent?.includes('template:'));
  logTest('Has meta description', layoutContent?.includes('description:'));
  logTest('Has keywords', layoutContent?.includes('keywords:') || layoutContent?.includes('keywords'));
  logTest('Has Open Graph tags', layoutContent?.includes('openGraph:'));
  logTest('Has Twitter Card tags', layoutContent?.includes('twitter:'));
  logTest('Has robots configuration', layoutContent?.includes('robots:'));
  logTest('Has canonical URL', layoutContent?.includes('canonical'));
  logTest('Has verification tags', layoutContent?.includes('verification:'));
}

// Validate Structured Data
function validateStructuredData() {
  logSection('STRUCTURED DATA VALIDATION');
  
  const structuredDataPath = 'src/components/StructuredData.tsx';
  const structuredDataContent = readFile(structuredDataPath);
  
  logTest('StructuredData component exists', fileExists(structuredDataPath));
  logTest('Has Organization schema', structuredDataContent?.includes('OrganizationSchema'));
  logTest('Has LocalBusiness schema', structuredDataContent?.includes('LocalBusinessSchema'));
  logTest('Has WebSite schema', structuredDataContent?.includes('WebSiteSchema'));
  logTest('Has Product schema', structuredDataContent?.includes('ProductSchema'));
  logTest('Has Article schema', structuredDataContent?.includes('ArticleSchema'));
  logTest('Has BreadcrumbSchema', structuredDataContent?.includes('BreadcrumbSchema'));
  logTest('Has FAQ schema', structuredDataContent?.includes('FAQSchema'));
  logTest('Has Service schema', structuredDataContent?.includes('ServiceSchema'));
  
  // Check if schemas are used in layout
  const layoutContent = readFile('src/app/layout.tsx');
  logTest('Schemas imported in layout', layoutContent?.includes('from "@/components/StructuredData"'));
  logTest('OrganizationSchema used', layoutContent?.includes('<OrganizationSchema'));
}

// Validate Sitemap
function validateSitemap() {
  logSection('SITEMAP VALIDATION');
  
  const sitemapPath = 'src/app/sitemap.ts';
  const sitemapContent = readFile(sitemapPath);
  
  logTest('Sitemap file exists', fileExists(sitemapPath));
  logTest('Has base URL', sitemapContent?.includes('https://datatranquil.com'));
  logTest('Has static pages', sitemapContent?.includes('staticPages'));
  logTest('Has blog posts', sitemapContent?.includes('blogPosts'));
  logTest('Has product pages', sitemapContent?.includes('productPages'));
  logTest('Has priority settings', sitemapContent?.includes('priority:'));
  logTest('Has changeFrequency', sitemapContent?.includes('changeFrequency:'));
  logTest('Has lastModified', sitemapContent?.includes('lastModified:'));
  logTest('Sorted by priority', sitemapContent?.includes('sort((a, b) => b.priority - a.priority)'));
  
  // Count pages in sitemap
  const urlMatches = sitemapContent?.match(/url:\s*`/g);
  const urlCount = urlMatches ? urlMatches.length : 0;
  logTest(`Has 50+ pages (found ${urlCount})`, urlCount >= 50);
}

// Validate Robots.txt
function validateRobotsTxt() {
  logSection('ROBOTS.TXT VALIDATION');
  
  const robotsPath = 'src/app/robots.txt';
  const robotsContent = readFile(robotsPath);
  
  logTest('Robots.txt exists', fileExists(robotsPath));
  logTest('Has User-agent rules', robotsContent?.includes('User-agent:'));
  logTest('Has Allow directives', robotsContent?.includes('Allow:'));
  logTest('Has Disallow directives', robotsContent?.includes('Disallow:'));
  logTest('Has Sitemap location', robotsContent?.includes('Sitemap:'));
  logTest('Has Googlebot rules', robotsContent?.includes('Googlebot'));
  logTest('Has AI bot controls', robotsContent?.includes('GPTBot') || robotsContent?.includes('ChatGPT'));
  logTest('Blocks bad bots', robotsContent?.includes('AhrefsBot') || robotsContent?.includes('SemrushBot'));
}

// Validate Performance Optimizations
function validatePerformance() {
  logSection('PERFORMANCE OPTIMIZATION');
  
  const nextConfigPath = 'next.config.js';
  const nextConfigContent = readFile(nextConfigPath);
  
  logTest('Next.config.js exists', fileExists(nextConfigPath));
  logTest('Image optimization enabled', !nextConfigContent?.includes('unoptimized: true'));
  logTest('Has AVIF/WebP formats', nextConfigContent?.includes("'image/avif'") && nextConfigContent?.includes("'image/webp'"));
  logTest('Compression enabled', nextConfigContent?.includes('compress: true'));
  logTest('ETags enabled', nextConfigContent?.includes('generateEtags: true'));
  logTest('Has caching headers', nextConfigContent?.includes('Cache-Control'));
  logTest('Has security headers', nextConfigContent?.includes('X-Frame-Options'));
  logTest('Trailing slash configured', nextConfigContent?.includes('trailingSlash:'));
  logTest('PoweredBy header removed', nextConfigContent?.includes('poweredByHeader: false'));
}

// Validate SEO Utilities
function validateSEOUtilities() {
  logSection('SEO UTILITIES');
  
  const seoMetadataPath = 'src/lib/seo-metadata.ts';
  const seoMetadataContent = readFile(seoMetadataPath);
  
  logTest('SEO metadata utilities exist', fileExists(seoMetadataPath));
  logTest('Has generateSEOMetadata function', seoMetadataContent?.includes('generateSEOMetadata'));
  logTest('Has generateBlogMetadata', seoMetadataContent?.includes('generateBlogMetadata'));
  logTest('Has generateProductMetadata', seoMetadataContent?.includes('generateProductMetadata'));
  logTest('Has canonical URL generator', seoMetadataContent?.includes('generateCanonicalUrl'));
  logTest('Has meta description validator', seoMetadataContent?.includes('validateMetaDescription'));
  logTest('Has title tag generator', seoMetadataContent?.includes('generateTitleTag'));
  
  // Check breadcrumbs
  const breadcrumbsPath = 'src/components/Breadcrumbs.tsx';
  logTest('Breadcrumbs component exists', fileExists(breadcrumbsPath));
  
  // Check FAQ component
  const faqPath = 'src/components/FAQSection.tsx';
  logTest('FAQ component exists', fileExists(faqPath));
}

// Validate Page Components
function validatePageComponents() {
  logSection('PAGE COMPONENTS');
  
  // Check for common page patterns
  const pagesDir = 'src/app';
  
  // Check specific important pages
  const importantPages = [
    'page.tsx', // Home
    'about/page.tsx',
    'services/page.tsx',
    'products/page.tsx',
    'blog/page.tsx',
    'contact/page.tsx',
    'sitemap.ts',
    'robots.txt'
  ];
  
  importantPages.forEach(page => {
    const pagePath = `${pagesDir}/${page}`;
    logTest(`${page} exists`, fileExists(pagePath));
  });
}

// Validate Calculator Tool SEO
function validateCalculatorSEO() {
  logSection('CALCULATOR TOOL SEO');
  
  const metadataPath = 'src/app/tools/calculator/metadata.tsx';
  const structuredDataPath = 'src/app/tools/calculator/structured-data.tsx';
  
  logTest('Calculator metadata exists', fileExists(metadataPath));
  logTest('Calculator structured data exists', fileExists(structuredDataPath));
  
  // Check if calculator is in sitemap
  const sitemapContent = readFile('src/app/sitemap.ts');
  logTest('Calculator in sitemap', sitemapContent?.includes('/tools/calculator'));
}

// Run all validations
function runValidation() {
  console.log(`${colors.blue}╔══════════════════════════════════════╗${colors.reset}`);
  console.log(`${colors.blue}║     SEO VALIDATION REPORT            ║${colors.reset}`);
  console.log(`${colors.blue}╚══════════════════════════════════════╝${colors.reset}`);
  
  validateMetaTags();
  validateStructuredData();
  validateSitemap();
  validateRobotsTxt();
  validatePerformance();
  validateSEOUtilities();
  validatePageComponents();
  validateCalculatorSEO();
  
  // Summary
  console.log(`\n${colors.blue}━━━ SUMMARY ━━━${colors.reset}`);
  console.log(`Total Tests: ${totalTests}`);
  console.log(`${colors.green}Passed: ${passedTests}${colors.reset}`);
  console.log(`${colors.red}Failed: ${failedTests}${colors.reset}`);
  
  const successRate = Math.round((passedTests / totalTests) * 100);
  
  if (successRate === 100) {
    console.log(`\n${colors.green}✨ PERFECT! All SEO validations passed!${colors.reset}`);
  } else if (successRate >= 90) {
    console.log(`\n${colors.green}✓ EXCELLENT! SEO score: ${successRate}%${colors.reset}`);
  } else if (successRate >= 80) {
    console.log(`\n${colors.yellow}⚠ GOOD: SEO score: ${successRate}% - Some improvements needed${colors.reset}`);
  } else {
    console.log(`\n${colors.red}✗ NEEDS WORK: SEO score: ${successRate}% - Several issues to fix${colors.reset}`);
  }
  
  // Exit with appropriate code
  process.exit(failedTests > 0 ? 1 : 0);
}

// Run validation
runValidation();