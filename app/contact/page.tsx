import { Header } from "@/components/nav/header"
import { Footer } from "@/components/footer/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { MapSection } from "@/components/contact/map-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Jaskpreet Food | Get Quote & Business Inquiries",
  description:
    "Contact Jaskpreet Food for custom quotes, business partnerships, and product inquiries. FSSAI approved food processing solutions for restaurants and food businesses.",
  keywords: "contact jaskpreet food, get quote, business inquiry, food processing, custom solutions, partnership",
  openGraph: {
    title: "Contact Us - Jaskpreet Food",
    description: "Get in touch for custom food processing solutions and business partnerships.",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <ContactHero />
      <main className="flex-1 max-w-7xl mx-auto px-4">
        <div className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactForm />
              <div className="space-y-8">
                <ContactInfo />
                <MapSection />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
