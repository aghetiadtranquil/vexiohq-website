'use client'

import { useState, useEffect, useRef } from 'react'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
  width?: number
  height?: number
  priority?: boolean
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  sizes?: string
  quality?: number
  format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png'
  onLoad?: () => void
  onError?: () => void
  // #COMPLETION_DRIVE_IMPL: Adding lazy loading threshold configuration
  rootMargin?: string
  threshold?: number
}

export default function LazyImage({
  src,
  alt,
  className = '',
  style,
  width,
  height,
  priority = false,
  placeholder = 'empty',
  blurDataURL,
  sizes,
  quality = 85,
  format = 'auto',
  onLoad,
  onError,
  rootMargin = '50px 0px',
  threshold = 0.01
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [error, setError] = useState(false)
  const [supportedFormats, setSupportedFormats] = useState<{avif: boolean, webp: boolean}>({ avif: false, webp: false })
  const imgRef = useRef<HTMLImageElement>(null)

  // Detect browser format support on mount
  useEffect(() => {
    const checkFormatSupport = async () => {
      const canvas = document.createElement('canvas')
      canvas.width = 1
      canvas.height = 1
      
      const avifSupported = canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0
      const webpSupported = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
      
      setSupportedFormats({ avif: avifSupported, webp: webpSupported })
    }
    
    checkFormatSupport()
  }, [])

  useEffect(() => {
    if (priority) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin,
        threshold
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [priority])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setError(true)
    onError?.()
  }

  // Generate optimized image URL based on format support and preferences
  const getOptimizedSrc = (originalSrc: string, targetFormat?: string) => {
    // #COMPLETION_DRIVE_IMPL: Assuming Next.js image optimization endpoint structure
    if (!originalSrc.startsWith('/') || originalSrc.startsWith('http')) {
      return originalSrc // External URLs pass through unchanged
    }
    
    let selectedFormat = targetFormat || format
    
    // Auto-select best supported format
    if (selectedFormat === 'auto') {
      if (supportedFormats.avif) {
        selectedFormat = 'avif'
      } else if (supportedFormats.webp) {
        selectedFormat = 'webp'
      } else {
        selectedFormat = 'jpg'
      }
    }
    
    // Build optimized URL
    const params = new URLSearchParams({
      q: quality.toString(),
      ...(selectedFormat !== 'auto' && { f: selectedFormat })
    })
    
    return `/_next/image?url=${encodeURIComponent(originalSrc)}&${params}`
  }

  // Generate srcset for responsive images
  const generateSrcSet = () => {
    if (!width) return undefined
    
    const widths = [320, 640, 768, 1024, 1280, 1536, 1920, 2048]
    const relevantWidths = widths.filter(w => w <= width * 2)
    
    return relevantWidths
      .map(w => {
        const params = new URLSearchParams({
          url: src,
          w: w.toString(),
          q: quality.toString()
        })
        
        // Add format parameter for modern formats
        if (format !== 'auto' && format !== 'jpg' && format !== 'png') {
          params.set('f', format)
        }
        
        return `/_next/image?${params} ${w}w`
      })
      .join(', ')
  }

  const imgStyle: React.CSSProperties = {
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
    maxWidth: '100%',
    height: 'auto',
    ...style
  }

  if (width && height) {
    imgStyle.aspectRatio = `${width} / ${height}`
  }

  // Placeholder styles
  const placeholderStyle: React.CSSProperties = {
    backgroundColor: '#f3f4f6',
    position: 'absolute',
    inset: 0,
    display: isLoaded ? 'none' : 'block'
  }

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={width && height ? { aspectRatio: `${width} / ${height}` } : undefined}
    >
      {/* Placeholder */}
      {placeholder === 'blur' && blurDataURL ? (
        <img
          src={blurDataURL}
          alt=""
          aria-hidden="true"
          style={{
            ...placeholderStyle,
            filter: 'blur(20px)',
            transform: 'scale(1.1)'
          }}
        />
      ) : (
        <div style={placeholderStyle} aria-hidden="true" />
      )}

      {/* Main image */}
      {error ? (
        <div className="flex items-center justify-center w-full h-full bg-gray-100">
          <span className="text-gray-400">Failed to load image</span>
        </div>
      ) : (
        <img
          ref={imgRef}
          src={isInView ? getOptimizedSrc(src) : undefined}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          srcSet={isInView ? generateSrcSet() : undefined}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={handleLoad}
          onError={handleError}
          style={imgStyle}
          className={isLoaded ? 'w-full h-auto' : 'invisible'}
        />
      )}

      {/* Loading skeleton */}
      {!isLoaded && !error && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"
          aria-hidden="true"
        />
      )}
    </div>
  )
}

// Export a wrapper for Next.js Image compatibility with enhanced props
export function OptimizedImage(props: LazyImageProps & { 
  fill?: boolean
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  objectPosition?: string
}) {
  const { fill, objectFit = 'cover', objectPosition = 'center', ...restProps } = props
  
  if (fill) {
    return (
      <div className="relative w-full h-full">
        <LazyImage 
          {...restProps} 
          className={`absolute inset-0 object-${objectFit} ${props.className || ''}`}
          style={{
            objectPosition,
            ...restProps.className?.includes('object-') ? {} : { objectFit }
          }}
        />
      </div>
    )
  }
  
  return <LazyImage {...restProps} />
}

// #SUGGEST_ERROR_HANDLING: Consider adding error boundary for image loading failures
// Export utility function to generate image URLs for use in CSS or other contexts  
export function getImageUrl(src: string, options: {
  width?: number
  quality?: number
  format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png'
} = {}) {
  const { width, quality = 85, format = 'auto' } = options
  
  if (!src.startsWith('/')) return src
  
  const params = new URLSearchParams({
    url: src,
    q: quality.toString(),
    ...(width && { w: width.toString() }),
    ...(format !== 'auto' && { f: format })
  })
  
  return `/_next/image?${params}`
}