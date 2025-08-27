// Performance monitoring for image loading
export const imagePerformance = {
  // Track image loading metrics
  trackImageLoad: (src: string, loadTime: number) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Log image performance for debugging
      console.log(`Image loaded: ${src} in ${loadTime}ms`)
    }
  },

  // Preload critical images
  preloadImage: (src: string, priority: boolean = false) => {
    if (typeof window !== 'undefined') {
      const link = document.createElement('link')
      link.rel = priority ? 'preload' : 'prefetch'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)
    }
  },

  // Check if image is in viewport for lazy loading
  isInViewport: (element: HTMLElement) => {
    const rect = element.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }
}

// Helper function to generate responsive image URLs
export const generateResponsiveImageUrl = (src: string, width: number, quality: number = 75) => {
  if (src.includes('placeholder') || src.includes('svg')) {
    return src
  }
  
  // For Next.js Image Optimization API
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`
}

// Image loading states
export const IMAGE_LOADING_STATES = {
  LOADING: 'loading',
  LOADED: 'loaded',
  ERROR: 'error'
} as const

export type ImageLoadingState = typeof IMAGE_LOADING_STATES[keyof typeof IMAGE_LOADING_STATES]
