import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const qualitySteps = [
  {
    step: "01",
    title: "Raw Material Inspection",
    description: "Thorough inspection and testing of all incoming raw materials against quality specifications.",
  },
  {
    step: "02",
    title: "Process Monitoring",
    description: "Continuous monitoring of critical control points throughout the production process.",
  },
  {
    step: "03",
    title: "In-Process Testing",
    description: "Regular sampling and testing during production to ensure consistency and quality.",
  },
  {
    step: "04",
    title: "Final Product Verification",
    description: "Comprehensive testing of finished products before packaging and dispatch.",
  },
  {
    step: "05",
    title: "Documentation & Release",
    description: "Complete documentation and quality approval before product release to market.",
  },
]

export function QualityProcessSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">Quality Assurance Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our systematic approach to quality management ensures consistent excellence in every product
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {qualitySteps.map((step, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-lg mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  </div>
                  {index < qualitySteps.length - 1 && (
                    <div className="absolute left-8 top-full w-0.5 h-6 bg-border"></div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
