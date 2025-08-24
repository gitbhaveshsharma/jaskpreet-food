import { Header } from "@/components/nav/header"
import { Footer } from "@/components/footer/footer"
import { HeroSection } from "@/components/about/hero-section"
import { StorySection } from "@/components/about/story-section"
import { MissionVisionSection } from "@/components/about/mission-vision-section"
import { LeadershipSection } from "@/components/about/leadership-section"
import { CapabilitiesSection } from "@/components/about/capabilities-section"
import { SustainabilitySection } from "@/components/about/sustainability-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Jaskpreet Food | Our Story & Mission",
  description:
    "Learn about Jaskpreet Food's journey in creating chef-inspired, industrial-grade food solutions. Our commitment to quality, sustainability, and innovation.",
  keywords: "about jaskpreet food, food processing company, mission, vision, leadership, sustainability, R&D",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <main className="flex-1 max-w-7xl mx-auto px-4">
        <StorySection />
        <MissionVisionSection />
        <LeadershipSection />
        <CapabilitiesSection />
        <SustainabilitySection />
      </main>
      <Footer />
    </div>
  )
}
