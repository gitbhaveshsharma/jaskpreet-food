import { Card, CardContent } from "@/components/ui/card"
import { FlaskRoundIcon as Flask, Factory, Truck, ShieldCheck } from "lucide-react"

const capabilities = [
  {
    icon: Flask,
    title: "Research & Development",
    description: "State-of-the-art R&D facility with food technologists developing innovative recipes and processes.",
    features: ["Recipe Development", "Nutritional Analysis", "Shelf-life Testing", "Sensory Evaluation"],
  },
  {
    icon: Factory,
    title: "Production Excellence",
    description: "Modern manufacturing facility with automated processes ensuring consistent quality and efficiency.",
    features: ["Automated Processing", "Quality Control", "Batch Tracking", "Scalable Production"],
  },
  {
    icon: Truck,
    title: "Cold Chain Management",
    description: "Comprehensive cold chain infrastructure maintaining product integrity from production to delivery.",
    features: ["Temperature Monitoring", "Logistics Network", "Storage Facilities", "Distribution Centers"],
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Rigorous quality management systems ensuring food safety and compliance with international standards.",
    features: ["HACCP Implementation", "ISO Compliance", "Regular Audits", "Traceability Systems"],
  },
]

export function CapabilitiesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">Our Capabilities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end capabilities ensuring excellence at every step of the process
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <Card key={index}>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-lg mb-2">{capability.title}</h3>
                      <p className="text-muted-foreground mb-4">{capability.description}</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {capability.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
