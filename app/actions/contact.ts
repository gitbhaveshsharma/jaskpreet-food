"use server"

import { contactFormSchema, type ContactFormData } from "@/lib/schemas"
import { rateLimit } from "@/lib/rate-limit"
import { getEmailService } from "@/lib/email-service"

// Simple in-memory rate limiting (in production, use Redis or database)
const rateLimiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500, // Max 500 unique IPs per minute
})

interface ContactFormResult {
  success: boolean
  error?: string
  message?: string
}

export async function submitContactForm(data: ContactFormData): Promise<ContactFormResult> {
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

    // Initialize email service
    const emailService = getEmailService()

    // Prepare email data
    const emailData = {
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      company: validatedData.company,
      inquiryType: validatedData.inquiryType,
      message: validatedData.message,
    }

    // Send notification email to admin
    const adminEmailResult = await emailService.sendContactFormEmail(emailData)
    
    if (!adminEmailResult.success) {
      console.error('Failed to send admin notification email:', adminEmailResult.error)
      return {
        success: false,
        error: "Failed to send notification. Please try again or contact us directly.",
      }
    }

    // Send confirmation email to user
    const confirmationEmailResult = await emailService.sendConfirmationEmail({
      name: validatedData.name,
      email: validatedData.email,
      inquiryType: validatedData.inquiryType,
    })

    if (!confirmationEmailResult.success) {
      console.error('Failed to send confirmation email:', confirmationEmailResult.error)
      // Don't fail the entire process if confirmation email fails
      // Admin email was sent successfully, so the inquiry was received
    }

    // Log successful submission
    console.log("Contact form submission processed:", {
      messageId: adminEmailResult.messageId,
      confirmationSent: confirmationEmailResult.success,
      timestamp: new Date().toISOString(),
      inquiryType: validatedData.inquiryType,
      customerEmail: validatedData.email,
    })

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Contact form submission error:", error)
    
    // Handle specific error types
    if (error instanceof Error) {
      if (error.message.includes('Missing required environment variables')) {
        console.error('Email configuration error:', error.message)
        return {
          success: false,
          error: "Service temporarily unavailable. Please contact us directly.",
        }
      }
    }

    return {
      success: false,
      error: "Something went wrong. Please try again or contact us directly.",
    }
  }
}
