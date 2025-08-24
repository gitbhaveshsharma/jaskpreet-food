import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative py-20 lg:py-32">
      {/* Full-bleed background image (outside the container) */}
      <div
        className="absolute inset-0 -z-20 bg-center bg-repeat opacity-70 pointer-events-none"
        style={{ backgroundImage: "url('/bg/hero-bg.png')" }}
        aria-hidden="true"
      />

      {/* Gradient overlay: top -> center -> bottom (white) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-[#f8fafca7] via-[#f8fafcc9] to-white"
      />
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="text-sm">
              Let's Connect
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold leading-tight">
              Get in Touch
              <br />
              <span className="text-primary">We're Here to Help</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Ready to transform your food business? Contact us for custom quotes, partnership opportunities, or any
              questions about our products and services.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-8 pt-8">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary" />
              <span className="font-medium">+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <span className="font-medium">info@jaskpreetfood.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-medium">New Delhi, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
