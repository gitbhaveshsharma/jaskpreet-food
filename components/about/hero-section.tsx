import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    // Make the section relative so absolute background spans the full section
    <section className="relative py-20 lg:py-32">
      {/* Full-bleed background image (outside the container) */}
      <div
        className="absolute inset-0 -z-20 bg-center  bg-cover bg-no-repeat opacity-70 pointer-events-none"
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
              Established 2018
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold leading-tight">
              Crafting Culinary Excellence
              <br />
              <span className="text-primary">Since Day One</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              From a small kitchen to industrial-scale operations, Jaskpreet Food has been dedicated to transforming
              traditional recipes into modern, scalable food solutions that maintain authentic taste and quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
