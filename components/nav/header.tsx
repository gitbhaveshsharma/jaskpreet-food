"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, Phone, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Certifications", href: "/certifications" },
  { name: "Contact", href: "/contact" },
]

const carouselItems = [
  { src: "/images/slide1.jpg", href: "/products" },
  { src: "/images/slide2.jpg", href: "/about" },
  { src: "/images/slide3.jpg", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [current, setCurrent] = useState(0)
  const pathname = usePathname()

  // Auto slide every 3s
  useEffect(() => {
    if (!isOpen) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselItems.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [isOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-10">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
            JF
          </div>
          <span className="font-heading text-xl font-bold">Jaskpreet Food</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href)
            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm font-medium transition-colors px-1 pb-1 ${isActive ? "text-primary border-b-2 border-primary" : "text-foreground border-b-2 border-transparent hover:border-primary"}`}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* Contact Info & CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>9999912255</span>
          </div>
          <Link href="/contact">
            <Button size="sm">Get Quote</Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] flex flex-col justify-between px-6">
            {/* Visually hidden title for accessibility (Radix expects DialogTitle) */}
            <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>

            {/* Links */}
            <div className="flex flex-col space-y-4 mt-8">
              {navigation.map((item) => {
                const isActive = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href)
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-lg font-medium transition-colors px-1 pb-1 ${isActive ? "text-primary border-b-2 border-primary" : "text-foreground border-b-2 border-transparent hover:border-primary"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                  <Phone className="h-4 w-4" />
                  <span>9999912255</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                  <Mail className="h-4 w-4" />
                  <span>info@jaskpreetfood.com</span>
                </div>
                <Button className="w-full">Get Quote</Button>
              </div>
            </div>

            {/* Bottom Carousel */}
            <div className="relative h-40 w-full overflow-hidden rounded-xl mt-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Link href={carouselItems[current].href} onClick={() => setIsOpen(false)}>
                    <img
                      src={carouselItems[current].src}
                      alt="Promo Slide"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* per-link underline handled via link after: pseudo-element */}
    </header>
  )
}
