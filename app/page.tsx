import { Header } from "@/components/nav/header"
import { Footer } from "@/components/footer/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { ValuePropsSection } from "@/components/sections/value-props-section"
import { FeaturedCategoriesSection } from "@/components/sections/featured-categories-section"
import { CertificationsSection } from "@/components/sections/certifications-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CtaSection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 ">
        <HeroSection />
        <ValuePropsSection />
        <FeaturedCategoriesSection />
        <CertificationsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
