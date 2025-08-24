import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number").max(15, "Phone number is too long"),
  company: z.string().max(100, "Company name must be less than 100 characters").optional(),
  inquiryType: z.enum(["product-inquiry", "custom-quote", "partnership", "bulk-order", "quality-concern", "other"]),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
  consent: z.boolean().refine((val) => val === true, "You must agree to receive communications"),
  honeypot: z.string().max(0, "Spam detected"), // Honeypot field should be empty
})

export type ContactFormData = z.infer<typeof contactFormSchema>
