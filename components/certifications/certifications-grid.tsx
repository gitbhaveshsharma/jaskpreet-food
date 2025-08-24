import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink } from "lucide-react"
import certifications from "@/content/certifications.json"

export function CertificationsGrid() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">Our Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive certifications ensuring compliance with national and international food safety standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <Card key={cert.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-muted rounded-xl flex items-center justify-center flex-shrink-0">
                    <img src={cert.image || "/placeholder.svg"} alt={cert.name} className="w-16 h-16 object-contain" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-heading font-bold text-xl mb-1">{cert.name}</h3>
                        <p className="text-sm text-muted-foreground">{cert.fullName}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        Active
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{cert.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">License Number:</span>
                        <span className="font-mono">{cert.licenseNumber}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Valid Until:</span>
                        <span>{cert.validUntil}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Download className="h-3 w-3 mr-1" />
                        Certificate
                      </Button>
                      <Button size="sm" variant="ghost">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Verify
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
