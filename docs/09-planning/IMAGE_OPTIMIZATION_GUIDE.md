# Image Optimization Implementation Guide

## Overview
This guide documents the enhanced image optimization system implemented for the VexioHQ website, focusing on performance improvements through modern formats (WebP/AVIF), responsive images, and intelligent lazy loading.

## Components

### LazyImage Component
Enhanced image component with automatic format detection and optimization.

```tsx
import { LazyImage, OptimizedImage, getImageUrl } from '@/components/LazyImage'

// Basic usage
<LazyImage 
  src="/images/hero/main-hero.jpg"
  alt="AI Consulting Services"
  width={1920}
  height={1080}
  priority={true}
/>

// With advanced options
<LazyImage
  src="/images/features/ai-automation.jpg"
  alt="AI Automation Features"
  width={800}
  height={600}
  format="auto"
  quality={85}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  rootMargin="100px 0px"
  threshold={0.1}
/>

// Fill container usage
<OptimizedImage
  src="/images/blog/ai-trends.jpg"
  alt="AI Trends 2024"
  fill={true}
  objectFit="cover"
  objectPosition="center top"
/>
```

### Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | string | required | Image source URL |
| `alt` | string | required | Alt text for accessibility |
| `width` | number | optional | Image width for aspect ratio |
| `height` | number | optional | Image height for aspect ratio |
| `priority` | boolean | false | Load image immediately (for above-fold) |
| `format` | 'auto' \| 'webp' \| 'avif' \| 'jpg' \| 'png' | 'auto' | Force specific format |
| `quality` | number | 85 | Image quality (1-100) |
| `placeholder` | 'blur' \| 'empty' | 'empty' | Placeholder type |
| `blurDataURL` | string | optional | Base64 blur placeholder |
| `sizes` | string | optional | Responsive sizes attribute |
| `rootMargin` | string | '50px 0px' | Intersection observer root margin |
| `threshold` | number | 0.01 | Intersection observer threshold |

## Image Optimization Profiles

### Hero Images
- High quality (90% WebP, 85% AVIF)
- Large sizes: 640px, 1200px, 1920px, 2048px
- Better blur placeholders (20px, less blur)

```bash
npm run optimize-images:hero
```

### Feature Images  
- Balanced quality (85% WebP, 75% AVIF)
- Medium sizes: 320px, 640px, 1024px
- Standard placeholders

```bash
npm run optimize-images:features
```

### Blog Images
- Moderate quality (80% WebP, 70% AVIF) 
- Article sizes: 640px, 1200px
- Standard placeholders

```bash
npm run optimize-images:blog
```

### Icons/Logos
- High quality (95% WebP, 90% AVIF)
- Small sizes: 32px, 64px, 128px
- Near-lossless WebP compression

```bash
npm run optimize-images:icons
```

## Directory Structure

```
public/images/
├── hero/           # Hero section images
├── features/       # Feature illustrations  
├── case-studies/   # Client case studies
├── blog/          # Blog featured images
├── icons/         # UI icons and graphics
├── logos/         # Company and partner logos
└── .gitkeep       # Directory documentation
```

## Usage Commands

```bash
# Optimize all images with auto-detection
npm run optimize-images

# Optimize specific directories  
npm run optimize-images:hero
npm run optimize-images:features
npm run optimize-images:blog
npm run optimize-images:icons

# Analyze optimization status
npm run analyze-images

# Manual optimization with profile
node scripts/optimize-images.js optimize ./path/to/image.jpg hero
```

## Next.js Configuration

Enhanced `next.config.js` with optimized settings:

- **Formats**: AVIF preferred, WebP fallback, JPEG/PNG baseline
- **Device Sizes**: 320px to 3840px for full responsive coverage  
- **Image Sizes**: 16px to 512px for various use cases
- **Caching**: 1-year cache for optimized images
- **Quality**: 85% default for best size/quality balance

## Performance Benefits

### Format Optimization
- **AVIF**: 50-70% smaller than JPEG
- **WebP**: 25-35% smaller than JPEG  
- **Progressive JPEG**: Faster perceived loading

### Lazy Loading  
- **Intersection Observer**: Native browser API
- **Configurable Thresholds**: Customize loading triggers
- **Priority Loading**: Skip lazy loading for critical images

### Responsive Images
- **Automatic srcset**: Generated based on image dimensions
- **Bandwidth Optimization**: Serve appropriate sizes
- **Retina Support**: High-DPI displays handled automatically

## Integration Examples

### Homepage Hero Section
```tsx
<LazyImage
  src="/images/hero/ai-consulting-hero.jpg" 
  alt="Transform Your Business with AI Consulting"
  width={1920}
  height={1080}
  priority={true}
  format="auto"
  quality={90}
  placeholder="blur"
  blurDataURL={heroPlaceholder}
  sizes="100vw"
  className="w-full h-screen object-cover"
/>
```

### Feature Grid
```tsx
{features.map((feature) => (
  <LazyImage
    key={feature.id}
    src={`/images/features/${feature.image}`}
    alt={feature.title}
    width={400}
    height={300} 
    format="auto"
    quality={85}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    className="rounded-lg shadow-lg"
  />
))}
```

### Blog Post Images
```tsx
<LazyImage
  src={`/images/blog/${post.featuredImage}`}
  alt={post.title}
  width={800}
  height={400}
  format="auto" 
  quality={80}
  placeholder="blur"
  blurDataURL={post.placeholder}
  sizes="(max-width: 768px) 100vw, 800px"
  className="w-full rounded-lg mb-6"
/>
```

## Best Practices

### Image Naming Convention
- Use descriptive names: `ai-consulting-hero.jpg`
- Include dimensions for originals: `feature-automation-1200x800.jpg`
- Avoid spaces and special characters

### Optimization Workflow
1. Add original high-quality images to appropriate directories
2. Run optimization script for the directory
3. Test images in development
4. Commit optimized versions to repository

### Performance Monitoring
- Use browser DevTools Network tab to verify format delivery
- Check Core Web Vitals for image loading impact
- Monitor bundle size impact of image optimization

## Troubleshooting

### Common Issues

**Sharp Installation Problems**
```bash
# Clear npm cache and reinstall
npm run clean
npm install
```

**Format Support Detection**
- Component automatically detects browser support
- Falls back gracefully to JPEG/PNG
- Check browser console for format selection logs

**Optimization Script Errors**
- Ensure images exist in specified directories
- Check file permissions for write access
- Verify Sharp installation: `node -e "console.log(require('sharp'))"`

### Debug Mode
Enable detailed logging by setting environment variable:
```bash
DEBUG=image-optimization npm run optimize-images
```