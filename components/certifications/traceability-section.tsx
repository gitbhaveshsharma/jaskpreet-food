import { Card, CardContent } from "@/components/ui/card"
import { QrCode, Database, MapPin, Clock } from "lucide-react"

const traceabilityFeatures = [
  {
    icon: QrCode,
    title: "Batch Tracking",
    description: "Every product batch is assigned a unique identifier for complete traceability.",
  },
  {
    icon: Database,
    title: "Digital Records",
    description: "Comprehensive digital documentation of all production and quality data.",
  },
  {
    icon: MapPin,
    title: "Supply Chain Visibility",
    description: "Full visibility of ingredients from source to finished product.",
  },
  {
    icon: Clock,
    title: "Real-time Monitoring",
    description: "Continuous monitoring and recording of critical parameters throughout production.",
  },
]

export function TraceabilitySection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">Traceability System</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete transparency and traceability from raw materials to finished products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {traceabilityFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="font-heading font-bold text-xl mb-4">End-to-End Traceability</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
              Our advanced traceability system enables us to track every ingredient and process step, ensuring complete
              transparency and enabling rapid response in case of any quality concerns. This system supports our
              commitment to food safety and regulatory compliance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-background rounded-full text-sm font-medium">Ingredient Tracking</span>
              <span className="px-4 py-2 bg-background rounded-full text-sm font-medium">Process Documentation</span>
              <span className="px-4 py-2 bg-background rounded-full text-sm font-medium">Quality Records</span>
              <span className="px-4 py-2 bg-background rounded-full text-sm font-medium">Distribution Tracking</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
