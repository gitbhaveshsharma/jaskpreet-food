import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import PageTransition from "@/components/PageTransition"
import WhatsAppButton from "@/components/ui/whatsapp-button"
import { generateJsonLd } from "@/lib/seo"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Jaskpreet Food - Chef-Inspired Food Solutions",
  description:
    "Industrial-grade, ready-to-cook and ready-to-eat products crafted for reliability, safety, and taste. FSSAI approved food processing solutions.",
  keywords:
    "food processing, ready-to-eat, ready-to-cook, FSSAI, HACCP, ISO 22000, private label, contract manufacturing, veg non-veg, cold chain",
  authors: [{ name: "Jaskpreet Food" }],
  creator: "Jaskpreet Food",
  publisher: "Jaskpreet Food",
  robots: "index, follow",
  metadataBase: new URL("https://jaskpreetfood.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jaskpreetfood.com",
    siteName: "Jaskpreet Food",
    title: "Jaskpreet Food - Chef-Inspired Food Solutions",
    description:
      "Industrial-grade, ready-to-cook and ready-to-eat products crafted for reliability, safety, and taste.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jaskpreet Food - Chef-Inspired Food Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaskpreet Food - Chef-Inspired Food Solutions",
    description:
      "Industrial-grade, ready-to-cook and ready-to-eat products crafted for reliability, safety, and taste.",
    images: ["/og-image.jpg"],
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Resource hints for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Preload critical images */}
        <link rel="preload" as="image" href="/bg/hero-bg.png" />
        <link rel="preload" as="image" href="/home/hero-img.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateJsonLd.organization()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateJsonLd.website()),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <PageTransition>{children}</PageTransition>
        <WhatsAppButton />
      </body>
    </html>
  )
}
