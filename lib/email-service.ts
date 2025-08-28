import nodemailer from 'nodemailer'
import type { Transporter } from 'nodemailer'

export interface EmailConfig {
  host: string
  port: number
  secure: boolean
  auth: {
    user: string
    pass: string
  }
  from: {
    email: string
    name: string
  }
}

export interface EmailOptions {
  to: string | string[]
  subject: string
  text?: string
  html?: string
  cc?: string | string[]
  bcc?: string | string[]
  replyTo?: string
}

class EmailService {
  private transporter: Transporter | null = null
  private config: EmailConfig

  constructor() {
    this.config = this.validateConfig()
    this.initializeTransporter()
  }

  private validateConfig(): EmailConfig {
    const requiredEnvVars = {
      SMTP_HOST: process.env.SMTP_HOST,
      SMTP_PORT: process.env.SMTP_PORT,
      SMTP_USER: process.env.SMTP_USER,
      SMTP_PASS: process.env.SMTP_PASS,
      FROM_EMAIL: process.env.FROM_EMAIL,
      FROM_NAME: process.env.FROM_NAME,
    }

    const missingVars = Object.entries(requiredEnvVars)
      .filter(([, value]) => !value)
      .map(([key]) => key)

    if (missingVars.length > 0) {
      throw new Error(
        `Missing required environment variables: ${missingVars.join(', ')}`
      )
    }

    return {
      host: process.env.SMTP_HOST!,
      port: parseInt(process.env.SMTP_PORT!),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
      from: {
        email: process.env.FROM_EMAIL!,
        name: process.env.FROM_NAME!,
      },
    }
  }

  private initializeTransporter(): void {
    try {
      this.transporter = nodemailer.createTransport({
        host: this.config.host,
        port: this.config.port,
        secure: this.config.secure,
        auth: this.config.auth,
        tls: {
          ciphers: 'SSLv3',
          rejectUnauthorized: false,
        },
        pool: true,
        maxConnections: 5,
        maxMessages: 10,
        rateDelta: 20000,
        rateLimit: 5,
      })

      // Verify connection configuration
      if (this.transporter) {
        this.transporter.verify((error, success) => {
          if (error) {
            console.error('Email transporter verification failed:', error)
          } else {
            console.log('Email server connection verified successfully')
          }
        })
      }
    } catch (error) {
      console.error('Failed to initialize email transporter:', error)
      throw new Error('Email service initialization failed')
    }
  }

  async sendEmail(options: EmailOptions): Promise<{ success: boolean; messageId?: string; error?: string }> {
    if (!this.transporter) {
      return {
        success: false,
        error: 'Email transporter not initialized',
      }
    }

    try {
      const mailOptions = {
        from: `"${this.config.from.name}" <${this.config.from.email}>`,
        to: Array.isArray(options.to) ? options.to.join(', ') : options.to,
        subject: options.subject,
        text: options.text,
        html: options.html,
        cc: Array.isArray(options.cc) ? options.cc.join(', ') : options.cc,
        bcc: Array.isArray(options.bcc) ? options.bcc.join(', ') : options.bcc,
        replyTo: options.replyTo || this.config.from.email,
        headers: {
          'X-Mailer': 'Jaskpreet Food Contact System',
          'X-Priority': '3',
        },
      }

      const info = await this.transporter.sendMail(mailOptions)

      return {
        success: true,
        messageId: info.messageId,
      }
    } catch (error) {
      console.error('Failed to send email:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown email error',
      }
    }
  }

  async sendContactFormEmail(data: {
    name: string
    email: string
    phone: string
    company?: string
    inquiryType: string
    message: string
  }): Promise<{ success: boolean; messageId?: string; error?: string }> {
    const inquiryTypeLabels: Record<string, string> = {
      'product-inquiry': 'Product Inquiry',
      'custom-quote': 'Custom Quote Request',
      'partnership': 'Partnership Opportunity',
      'bulk-order': 'Bulk Order',
      'quality-concern': 'Quality Concern',
      'other': 'General Inquiry',
    }

    const inquiryLabel = inquiryTypeLabels[data.inquiryType] || 'General Inquiry'

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
          .content { background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #495057; }
          .value { margin-top: 5px; }
          .message { background-color: #f8f9fa; padding: 15px; border-radius: 4px; margin-top: 10px; }
          .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #dee2e6; font-size: 12px; color: #6c757d; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
            <p>You have received a new ${inquiryLabel.toLowerCase()} from your website.</p>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="label">Full Name:</div>
              <div class="value">${data.name}</div>
            </div>
            
            <div class="field">
              <div class="label">Email Address:</div>
              <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
            </div>
            
            <div class="field">
              <div class="label">Phone Number:</div>
              <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
            </div>
            
            ${data.company ? `
            <div class="field">
              <div class="label">Company:</div>
              <div class="value">${data.company}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="label">Inquiry Type:</div>
              <div class="value">${inquiryLabel}</div>
            </div>
            
            <div class="field">
              <div class="label">Message:</div>
              <div class="message">${data.message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          
          <div class="footer">
            <p>This email was sent from the Jaskpreet Food website contact form.</p>
            <p>Submission Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
          </div>
        </div>
      </body>
      </html>
    `

    const textContent = `
New Contact Form Submission - ${inquiryLabel}

Full Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
${data.company ? `Company: ${data.company}` : ''}
Inquiry Type: ${inquiryLabel}

Message:
${data.message}

---
Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `

    return this.sendEmail({
      to: process.env.CONTACT_EMAIL || this.config.from.email,
      subject: `New ${inquiryLabel} from ${data.name} - Jaskpreet Food`,
      text: textContent,
      html: htmlContent,
      replyTo: data.email,
    })
  }

  async sendConfirmationEmail(data: {
    name: string
    email: string
    inquiryType: string
  }): Promise<{ success: boolean; messageId?: string; error?: string }> {
    const inquiryTypeLabels: Record<string, string> = {
      'product-inquiry': 'Product Inquiry',
      'custom-quote': 'Custom Quote Request',
      'partnership': 'Partnership Opportunity',
      'bulk-order': 'Bulk Order',
      'quality-concern': 'Quality Concern',
      'other': 'General Inquiry',
    }

    const inquiryLabel = inquiryTypeLabels[data.inquiryType] || 'General Inquiry'

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Contacting Jaskpreet Food</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #28a745; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background-color: #ffffff; padding: 30px; border: 1px solid #dee2e6; border-top: none; border-radius: 0 0 8px 8px; }
          .highlight { background-color: #f8f9fa; padding: 15px; border-radius: 4px; margin: 20px 0; }
          .cta { background-color: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 20px 0; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; font-size: 12px; color: #6c757d; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You, ${data.name}!</h1>
            <p>We've received your ${inquiryLabel.toLowerCase()}</p>
          </div>
          
          <div class="content">
            <p>Dear ${data.name},</p>
            
            <p>Thank you for reaching out to Jaskpreet Food. We've successfully received your ${inquiryLabel.toLowerCase()} and our team will review it promptly.</p>
            
            <div class="highlight">
              <strong>What happens next?</strong>
              <ul>
                <li>Our team will review your inquiry within 24 hours</li>
                <li>You'll receive a detailed response from our specialists</li>
                <li>For urgent matters, you can call us directly</li>
              </ul>
            </div>
            
            <p>In the meantime, feel free to:</p>
            <ul>
              <li>Browse our <a href="${process.env.NEXT_PUBLIC_APP_URL}/products">product catalog</a></li>
              <li>Learn more <a href="${process.env.NEXT_PUBLIC_APP_URL}/about">about our company</a></li>
              <li>View our <a href="${process.env.NEXT_PUBLIC_APP_URL}/certifications">certifications</a></li>
            </ul>
            
            <p>If you have any immediate questions, don't hesitate to contact us:</p>
            <p>📧 Email: ${this.config.from.email}<br>
            📞 Phone: [Your Phone Number]</p>
            
            <p>Thank you for choosing Jaskpreet Food!</p>
            
            <p>Best regards,<br>
            The Jaskpreet Food Team</p>
          </div>
          
          <div class="footer">
            <p>This is an automated confirmation email. Please do not reply to this email.</p>
            <p>© ${new Date().getFullYear()} Jaskpreet Food. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `

    const textContent = `
Dear ${data.name},

Thank you for reaching out to Jaskpreet Food!

We've successfully received your ${inquiryLabel.toLowerCase()} and our team will review it promptly.

What happens next?
- Our team will review your inquiry within 24 hours
- You'll receive a detailed response from our specialists
- For urgent matters, you can call us directly

If you have any immediate questions, contact us:
Email: ${this.config.from.email}
Phone: [Your Phone Number]

Thank you for choosing Jaskpreet Food!

Best regards,
The Jaskpreet Food Team

---
This is an automated confirmation email.
© ${new Date().getFullYear()} Jaskpreet Food. All rights reserved.
    `

    return this.sendEmail({
      to: data.email,
      subject: `Thank you for contacting Jaskpreet Food - ${inquiryLabel}`,
      text: textContent,
      html: htmlContent,
    })
  }

  // Cleanup method for graceful shutdown
  close(): void {
    if (this.transporter) {
      this.transporter.close()
    }
  }
}

// Singleton instance
let emailService: EmailService | null = null

export const getEmailService = (): EmailService => {
  if (!emailService) {
    emailService = new EmailService()
  }
  return emailService
}

export default EmailService
