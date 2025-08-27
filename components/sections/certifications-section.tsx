"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import certifications from "@/content/certifications.json"
import { useEffect, useState } from "react"

export function CertificationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certifications.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-primary/5 ">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">Quality Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to quality is backed by industry-leading certifications and standards.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <Card
              key={cert.id}
              className={`text-center transition-all duration-300 cursor-pointer ${index === currentIndex ? "ring-2 ring-primary shadow-lg scale-105" : "hover:shadow-md"
                }`}
              onClick={() => setCurrentIndex(index)}
            >
              <CardContent className="p-6">
                <div className="aspect-square w-20 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                  <img src={cert.image || "/placeholder.svg"} alt={cert.name} className="w-16 h-16 object-contain" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{cert.name}</h3>
                <p className="text-xs text-muted-foreground">{cert.fullName}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Certification Details
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8 text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-xl flex items-center justify-center">
              <img
                src={certifications[currentIndex].image || "/placeholder.svg"}
                alt={certifications[currentIndex].name}
                className="w-20 h-20 object-contain"
              />
            </div>
            <h3 className="font-heading font-bold text-xl mb-2">{certifications[currentIndex].name}</h3>
            <p className="text-muted-foreground mb-4">{certifications[currentIndex].description}</p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <Badge variant="outline">License: {certifications[currentIndex].licenseNumber}</Badge>
              <Badge variant="secondary">Valid until: {certifications[currentIndex].validUntil}</Badge>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </section>
  )
}
