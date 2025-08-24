import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Award, Leaf } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Full-bleed background image placed outside the inner container */}
      <img
        src="/bg/hero-bg.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-70 -z-20 pointer-events-none"
      />

      {/* Gradient overlay: top -> center -> bottom (white) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-[#f8fafca7] via-[#f8fafcc9] to-white"
      />

      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                {/* FSSAI badge: highlighted green */}
                <Badge
                  variant="secondary"
                  className="text-xs bg-green-100 text-green-800 border-green-200 px-2 py-1"
                  aria-label="FSSAI Approved"
                >
                  FSSAI Approved
                </Badge>

                {/* Make in India: vertical tricolor (saffron, white, green) */}
                <Badge
                  className="text-xs text-[#353535]  border-gray-300 rounded-md px-2 py-1"
                  aria-label="Make in India"
                  style={{
                    background:
                      "linear-gradient(to bottom, #FF9933 0 25%, #FFFFFF 30% 69%, #138808 60% 100%)",
                  }}
                >
                  Make in India
                </Badge>

              </div>
              <h1 className="text-4xl lg:text-6xl font-heading font-bold leading-tight">
                Chef-Inspired
                <br />
                <span className="text-primary">Food Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Industrial-grade, ready-to-cook and ready-to-eat products crafted for reliability, safety, and taste.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 py-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">HACCP Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">ISO 22000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Clean Label</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base" asChild>
                <Link href="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent" asChild>
                <Link href="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square lg:aspect-[3.7/3] rounded-2xl overflow-hidden bg-muted ">
              <img
                src="/home/hero-img.png"
                alt="Modern food processing facility"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-card border rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="veg-indicator"></div>
                <div>
                  <p className="font-semibold text-sm">100% Vegetarian</p>
                  <p className="text-xs text-muted-foreground">Options Available</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-card border rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <p className="font-bold text-2xl text-primary">12+</p>
                <p className="text-xs text-muted-foreground">Months Shelf Life</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
