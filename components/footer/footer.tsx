import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t px-10">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                JF
              </div>
              <span className="font-heading text-lg font-bold">Jaskpreet Food</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Industrial-grade, ready-to-cook and ready-to-eat products crafted for reliability, safety, and taste.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="veg-indicator"></div>
                <span className="text-xs">Veg</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="non-veg-indicator"></div>
                <span className="text-xs">Non-Veg</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-foreground">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="text-muted-foreground hover:text-foreground">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products?category=gravies-sauces" className="text-muted-foreground hover:text-foreground">
                  Gravies & Sauces
                </Link>
              </li>
              <li>
                <Link href="/products?category=marinades-rubs" className="text-muted-foreground hover:text-foreground">
                  Marinades & Rubs
                </Link>
              </li>
              <li>
                <Link href="/products?category=chutneys-dips" className="text-muted-foreground hover:text-foreground">
                  Chutneys & Dips
                </Link>
              </li>
              <li>
                <Link href="/products?category=ready-meals" className="text-muted-foreground hover:text-foreground">
                  Ready Meals
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  123 Industrial Area, Food Park,
                  <br />
                  New Delhi, India - 110001
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">+91 99999 12255</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">info@jaskpreetfood.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6">
            <Image
              src="/fssai-approved-badge.png"
              alt="FSSAI Approved"
              width={100}
              height={32}
              className="h-8 w-auto"
              quality={75}
            />
            <Image
              src="/generic-manufacturing-logo.png"
              alt="Make in India"
              width={100}
              height={32}
              className="h-8 w-auto"
              quality={75}
            />
          </div>
          <div className="text-sm text-muted-foreground">
            <p>© 2025 Jaskpreet Food. All rights reserved.</p>
            <p>Design by <Link href="https://thebluebe.live/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">theBlueBe</Link></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
