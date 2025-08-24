interface RateLimitOptions {
  interval: number
  uniqueTokenPerInterval: number
}

interface RateLimitResult {
  success: boolean
  limit: number
  remaining: number
  reset: Date
}

// Simple in-memory rate limiter (use Redis in production)
const cache = new Map<string, { count: number; reset: number }>()

export function rateLimit(options: RateLimitOptions) {
  return {
    check: async (limit: number, token: string): Promise<RateLimitResult> => {
      const now = Date.now()
      const key = `${token}:${Math.floor(now / options.interval)}`

      const record = cache.get(key) || { count: 0, reset: now + options.interval }

      if (record.count >= limit) {
        return {
          success: false,
          limit,
          remaining: 0,
          reset: new Date(record.reset),
        }
      }

      record.count++
      cache.set(key, record)

      // Clean up old entries
      for (const [k, v] of cache.entries()) {
        if (v.reset < now) {
          cache.delete(k)
        }
      }

      return {
        success: true,
        limit,
        remaining: limit - record.count,
        reset: new Date(record.reset),
      }
    },
  }
}
