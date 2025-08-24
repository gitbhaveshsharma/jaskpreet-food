import { Header } from "@/components/nav/header"
import { Footer } from "@/components/footer/footer"
import { CertificationsHero } from "@/components/certifications/certifications-hero"
import { CertificationsGrid } from "@/components/certifications/certifications-grid"
import { QualityProcessSection } from "@/components/certifications/quality-process-section"
import { TraceabilitySection } from "@/components/certifications/traceability-section"
import { AuditPolicySection } from "@/components/certifications/audit-policy-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Certifications & Quality - Jaskpreet Food | FSSAI, ISO, HACCP",
  description:
    "Explore our comprehensive quality certifications including FSSAI, ISO 22000, HACCP, and Halal. Learn about our quality assurance processes and traceability systems.",
  keywords: "FSSAI certified, ISO 22000, HACCP, Halal certified, food safety, quality assurance, traceability",
}

export default function CertificationsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <CertificationsHero />
      <main className="flex-1 max-w-7xl mx-auto px-4">
        <CertificationsGrid />
        <QualityProcessSection />
        <TraceabilitySection />
        <AuditPolicySection />
      </main>
      <Footer />
    </div>
  )
}
