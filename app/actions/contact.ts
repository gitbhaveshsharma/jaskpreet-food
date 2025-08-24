"use server"

import { contactFormSchema, type ContactFormData } from "@/lib/schemas"
import { rateLimit } from "@/lib/rate-limit"

// Simple in-memory rate limiting (in production, use Redis or database)
const rateLimiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500, // Max 500 unique IPs per minute
})

export async function submitContactForm(data: ContactFormData) {
  try {
    // Rate limiting
    const identifier = "contact-form" // In production, use IP address
    const { success } = await rateLimiter.check(5, identifier) // 5 requests per minute

    if (!success) {
      return {
        success: false,
        error: "Too many requests. Please try again later.",
      }
    }

    // Validate form data
    const validatedData = contactFormSchema.parse(data)

    // Check honeypot
    if (validatedData.honeypot) {
      return {
        success: false,
        error: "Spam detected.",
      }
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send confirmation email to user

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Email handler placeholder
    console.log("Contact form submission:", {
      ...validatedData,
      timestamp: new Date().toISOString(),
    })

    // In production, implement actual email sending:
    // await sendEmail({
    //   to: "info@jaskpreetfood.com",
    //   subject: `New ${validatedData.inquiryType} from ${validatedData.name}`,
    //   template: "contact-form",
    //   data: validatedData,
    // })

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      error: "Something went wrong. Please try again.",
    }
  }
}
