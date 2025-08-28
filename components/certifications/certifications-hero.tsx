import { Badge } from "@/components/ui/badge";
import { Shield, Award, CheckCircle } from "lucide-react";

export function CertificationsHero() {
  return (
    <section className="relative py-20 lg:py-32">
      {/* Full-bleed background image (outside the container) */}
      <div
        className="absolute inset-0 -z-20 bg-cover opacity-70 pointer-events-none"
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
            <div className="flex justify-center space-x-2 mb-4">
              <Badge
                variant="secondary"
                className="text-sm bg-green-100 text-green-800 border-green-200 px-2 py-1"
              >
                <Shield className="h-3 w-3 mr-1" />
                Quality Assured
              </Badge>
              <Badge
                variant="secondary"
                className="text-sm bg-green-100 text-green-800 border-green-200 px-2 py-1"
              >
                <Award className="h-3 w-3 mr-1" />
                Certified
              </Badge>
              <Badge
                variant="secondary"
                className="text-sm bg-green-100 text-green-800 border-green-200 px-2 py-1"
              >
                <CheckCircle className="h-3 w-3 mr-1" />
                Compliant
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold leading-tight">
              Quality & Certifications
              <br />
              <span className="text-primary">You Can Trust</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Our commitment to excellence is backed by industry-leading
              certifications and rigorous quality management systems that ensure
              the highest standards of food safety and quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
