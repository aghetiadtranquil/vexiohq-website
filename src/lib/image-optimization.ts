/**
 * Image Optimization Configuration
 * Ensures optimal image loading for SEO and Core Web Vitals
 */

export const imageOptimizationConfig = {
  // Default image loader settings
  loader: {
    quality: 85,
    formats: ['image/avif', 'image/webp'] as const,
  },
  
  // Responsive image sizes
  deviceSizes: [320, 640, 750, 828, 1080, 1200, 1440, 1920, 2048, 3840],
  imageSizes: [16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512],
  
  // Image component defaults
  defaultImageProps: {
    loading: 'lazy' as const,
    decoding: 'async' as const,
    quality: 85,
    placeholder: 'blur' as const,
  },
  
  // Priority image settings (above the fold)
  priorityImageProps: {
    loading: 'eager' as const,
    priority: true,
    quality: 90,
    placeholder: 'blur' as const,
  },
  
  // SEO image dimensions
  seoImageDimensions: {
    ogImage: {
      width: 1200,
      height: 630,
    },
    twitterImage: {
      width: 1200,
      height: 600,
    },
    articleImage: {
      width: 1200,
      height: 800,
    },
    thumbnailImage: {
      width: 400,
      height: 300,
    },
  },
}

/**
 * Generate optimized image props for Next.js Image component
 */
export function getOptimizedImageProps(
  src: string,
  alt: string,
  options?: {
    priority?: boolean
    width?: number
    height?: number
    className?: string
    sizes?: string
  }
) {
  const baseProps = options?.priority 
    ? imageOptimizationConfig.priorityImageProps
    : imageOptimizationConfig.defaultImageProps
    
  return {
    ...baseProps,
    src,
    alt,
    ...(options?.width && { width: options.width }),
    ...(options?.height && { height: options.height }),
    ...(options?.className && { className: options.className }),
    ...(options?.sizes && { sizes: options.sizes }),
  }
}

/**
 * Generate responsive image sizes string for different breakpoints
 */
export function generateImageSizes(config: {
  mobile?: string
  tablet?: string
  desktop?: string
  default?: string
}) {
  const sizes = []
  
  if (config.mobile) {
    sizes.push(`(max-width: 640px) ${config.mobile}`)
  }
  if (config.tablet) {
    sizes.push(`(max-width: 1024px) ${config.tablet}`)
  }
  if (config.desktop) {
    sizes.push(`(max-width: 1920px) ${config.desktop}`)
  }
  
  sizes.push(config.default || '100vw')
  
  return sizes.join(', ')
}

/**
 * Preload critical images for LCP optimization
 */
export function generateImagePreloadLinks(images: Array<{
  src: string
  type?: string
  media?: string
}>) {
  return images.map(({ src, type = 'image/webp', media }) => ({
    rel: 'preload',
    as: 'image',
    href: src,
    type,
    ...(media && { media }),
    imageSrcSet: src,
  }))
}

/**
 * Generate blur data URL for placeholder
 * This is a simple solid color blur, for actual image blur use plaiceholder
 */
export function generateBlurDataURL(color = '#f3f4f6'): string {
  return `data:image/svg+xml;base64,${Buffer.from(
    `<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" fill="${color}"/></svg>`
  ).toString('base64')}`
}

/**
 * Image SEO alt text guidelines
 */
export const imageAltTextGuidelines = {
  maxLength: 125, // Screen readers cut off at ~125 characters
  
  validate(alt: string): { valid: boolean; message?: string } {
    if (!alt) {
      return { valid: false, message: 'Alt text is required for SEO and accessibility' }
    }
    if (alt.length > this.maxLength) {
      return { valid: false, message: `Alt text should be under ${this.maxLength} characters` }
    }
    if (alt.toLowerCase().includes('image of') || alt.toLowerCase().includes('picture of')) {
      return { valid: false, message: 'Avoid "image of" or "picture of" in alt text' }
    }
    return { valid: true }
  },
  
  generate(context: {
    type: 'product' | 'person' | 'diagram' | 'screenshot' | 'logo' | 'decorative'
    name?: string
    description?: string
  }): string {
    switch (context.type) {
      case 'product':
        return context.name ? `${context.name} product interface` : 'Product interface'
      case 'person':
        return context.name ? `${context.name} headshot` : 'Team member'
      case 'diagram':
        return context.description || 'Informational diagram'
      case 'screenshot':
        return context.description || 'Application screenshot'
      case 'logo':
        return context.name ? `${context.name} logo` : 'Company logo'
      case 'decorative':
        return '' // Decorative images should have empty alt
      default:
        return context.description || ''
    }
  }
}