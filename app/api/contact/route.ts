import { type NextRequest, NextResponse } from "next/server"
import { contactFormSchema } from "@/lib/schemas"
import { rateLimit } from "@/lib/rate-limit"

const rateLimiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500,
})

export async function POST(request: NextRequest) {
  try {
  // Rate limiting
  // Get client IP from headers or fallback
  const forwardedFor = request.headers.get("x-forwarded-for")
  const ip = forwardedFor?.split(",")[0]?.trim() || "127.0.0.1"
  const { success } = await rateLimiter.check(5, ip)

    if (!success) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 })
    }

    const body = await request.json()
    const validatedData = contactFormSchema.parse(body)

    // Check honeypot
    if (validatedData.honeypot) {
      return NextResponse.json({ error: "Spam detected." }, { status: 400 })
    }

    // Process form submission
    console.log("Contact form submission:", {
      ...validatedData,
      timestamp: new Date().toISOString(),
      ip,
    })

    // In production, implement email sending here

    return NextResponse.json({
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 })
  }
}
