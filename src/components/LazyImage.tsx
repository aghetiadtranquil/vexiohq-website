'use client'

import { useState, useEffect, useRef } from 'react'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  sizes?: string
  quality?: number
  onLoad?: () => void
  onError?: () => void
}

export default function LazyImage({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  placeholder = 'empty',
  blurDataURL,
  sizes,
  quality = 75,
  onLoad,
  onError
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [error, setError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

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
        rootMargin: '50px 0px',
        threshold: 0.01
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

  // Generate srcset for responsive images
  const generateSrcSet = () => {
    if (!width) return undefined
    
    const widths = [320, 640, 768, 1024, 1280, 1536, 1920]
    const relevantWidths = widths.filter(w => w <= width * 2)
    
    return relevantWidths
      .map(w => {
        const params = new URLSearchParams({
          w: w.toString(),
          q: quality.toString()
        })
        return `${src}?${params} ${w}w`
      })
      .join(', ')
  }

  const imgStyle: React.CSSProperties = {
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
    maxWidth: '100%',
    height: 'auto'
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
          src={isInView ? src : undefined}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          srcSet={isInView ? generateSrcSet() : undefined}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
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

// Export a wrapper for Next.js Image compatibility
export function OptimizedImage(props: LazyImageProps & { fill?: boolean }) {
  const { fill, ...restProps } = props
  
  if (fill) {
    return (
      <div className="relative w-full h-full">
        <LazyImage {...restProps} className={`absolute inset-0 object-cover ${props.className || ''}`} />
      </div>
    )
  }
  
  return <LazyImage {...restProps} />
}