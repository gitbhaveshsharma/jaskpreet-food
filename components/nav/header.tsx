"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, Phone, Mail, ChevronRight } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Certifications", href: "/certifications" },
  { name: "Contact", href: "/contact" },
]

import categories from "@/content/categories.json"

const carouselItems = [
  { src: "/images/slide1.jpg", href: "/products" },
  { src: "/images/slide2.jpg", href: "/about" },
  { src: "/images/slide3.jpg", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [current, setCurrent] = useState(0)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()

  // Auto slide every 3s
  useEffect(() => {
    if (!isOpen) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselItems.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [isOpen])

  // Filter only hot categories for main display
  const hotCategories = categories.filter((category: any) => category.isActive && category.isHot)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
              JF
            </div>
            <span className="font-heading text-xl font-bold">Jas'K'preet Food</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href)

              // Special handling for Products with mega menu
              if (item.name === "Products") {
                return (
                  <DropdownMenu
                    key="products"
                    open={dropdownOpen}
                    onOpenChange={setDropdownOpen}
                  >
                    <DropdownMenuTrigger asChild>
                      <button
                        className={`text-sm font-medium transition-colors px-1 pb-1 ${isActive
                          ? "text-primary border-b-2 border-primary"
                          : "text-foreground border-b-2 border-transparent hover:border-primary"
                          }`}
                      >
                        {item.name}
                      </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                      className="w-[800px] p-0 overflow-hidden"
                      align="start"
                      sideOffset={8}
                    >
                      <div className="grid grid-cols-12 gap-0 min-h-[400px]">
                        {/* Left Panel - Hot Categories */}
                        <div className="col-span-4 bg-gray-50 dark:bg-gray-900 p-6 border-r">
                          <div className="mb-4">
                            <h3 className="text-lg font-semibold text-foreground mb-2">Hot Categories</h3>
                            <p className="text-sm text-muted-foreground">Our most popular products</p>
                          </div>

                          <div className="space-y-2">
                            {hotCategories.map((category: any) => (
                              <div
                                key={category.id}
                                className="relative"
                                onMouseEnter={() => setHoveredCategory(category.id)}
                                onMouseLeave={() => setHoveredCategory(null)}
                              >
                                <Link
                                  href={`/products?category=${category.id}`}
                                  className="group flex items-center justify-between w-full p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
                                  onClick={() => setDropdownOpen(false)}
                                >
                                  <div className="flex items-center space-x-3">
                                    <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full"></div>
                                    <span className="font-medium text-sm group-hover:text-primary transition-colors">
                                      {category.name}
                                    </span>
                                  </div>
                                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                </Link>
                              </div>
                            ))}

                            <div className="pt-4 border-t mt-4">
                              <Link
                                href="/products"
                                className="flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                                onClick={() => setDropdownOpen(false)}
                              >
                                View All Products
                                <ChevronRight className="h-4 w-4 ml-1" />
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* Right Panel - Examples */}
                        <div className="col-span-8 p-6">
                          {hoveredCategory ? (
                            <div className="h-full">
                              {(() => {
                                const category = hotCategories.find(cat => cat.id === hoveredCategory)
                                return category ? (
                                  <div className="space-y-4">
                                    <div>
                                      <h4 className="text-xl font-semibold text-foreground mb-2">
                                        {category.name}
                                      </h4>
                                      <p className="text-muted-foreground text-sm leading-relaxed">
                                        {category.description}
                                      </p>
                                    </div>

                                    <div>
                                      <h5 className="font-medium text-foreground mb-3">Popular Items:</h5>
                                      <div className="grid grid-cols-2 gap-3">
                                        {category.examples?.map((example: string, idx: number) => (
                                          <Link
                                            key={idx}
                                            href={`/products?category=${category.id}&search=${encodeURIComponent(example)}`}
                                            className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary/50 hover:bg-primary/5 transition-colors group"
                                            onClick={() => setDropdownOpen(false)}
                                          >
                                            <div className="flex items-center space-x-2">
                                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                              <span className="text-sm font-medium group-hover:text-primary transition-colors">
                                                {example}
                                              </span>
                                            </div>
                                          </Link>
                                        ))}
                                      </div>
                                    </div>

                                    <div className="pt-4 border-t">
                                      <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted-foreground">
                                          {category.productCount} products available
                                        </span>
                                        <Link
                                          href={`/products?category=${category.id}`}
                                          className="font-medium text-primary hover:text-primary/80 transition-colors"
                                          onClick={() => setDropdownOpen(false)}
                                        >
                                          Explore Category →
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                ) : null
                              })()}
                            </div>
                          ) : (
                            <div className="h-full flex items-center justify-center">
                              <div className="text-center space-y-4">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                                  <div className="w-8 h-8 bg-primary/20 rounded-full"></div>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-foreground mb-2">
                                    Explore Our Products
                                  </h4>
                                  <p className="text-sm text-muted-foreground">
                                    Hover over categories to see product examples
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors px-1 pb-1 ${isActive
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground border-b-2 border-transparent hover:border-primary"
                    }`}
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
              <span>+91 9999912255</span>
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
            <SheetContent side="right" className="w-[350px] flex flex-col px-0">
              <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>

              <div className="px-6 py-4 border-b">
                <h2 className="font-semibold text-lg">Navigation</h2>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-4">
                {/* Main Navigation */}
                <div className="space-y-1 mb-6">
                  {navigation.map((item) => {
                    const isActive = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href)
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${isActive
                          ? "bg-primary/10 text-primary"
                          : "text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
                          }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </div>

                {/* Hot Categories for Mobile */}
                <div className="border-t pt-6">
                  <h3 className="font-semibold text-base mb-4 px-3">Hot Categories</h3>
                  <div className="space-y-1">
                    {hotCategories.map((category: any) => (
                      <Link
                        key={category.id}
                        href={`/products?category=${category.id}`}
                        className="block px-3 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                            <span className="font-medium text-sm">{category.name}</span>
                          </div>
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="mt-1 ml-5 text-xs text-muted-foreground line-clamp-2">
                          {category.examples?.slice(0, 2).join(", ")}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="border-t px-6 py-4 space-y-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+91 9999912255</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>info@jaskpreetfood.com</span>
                </div>
                <Button className="w-full" onClick={() => setIsOpen(false)}>
                  Get Quote
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
