import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Recycle, Droplets, Users } from "lucide-react"

const initiatives = [
  {
    icon: Leaf,
    title: "Sustainable Sourcing",
    description: "Partnering with local farmers and suppliers committed to sustainable agricultural practices.",
  },
  {
    icon: Recycle,
    title: "Waste Reduction",
    description: "Implementing circular economy principles to minimize waste and maximize resource efficiency.",
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    description: "Advanced water treatment and recycling systems reducing our environmental footprint.",
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Supporting local communities through employment opportunities and skill development programs.",
  },
]

export function SustainabilitySection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">Sustainability & Compliance</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to environmental responsibility and social impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon
            return (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{initiative.title}</h3>
                  <p className="text-muted-foreground text-sm">{initiative.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <h3 className="font-heading font-bold text-xl">Compliance Framework</h3>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                We maintain strict adherence to all regulatory requirements including FSSAI guidelines, ISO standards,
                HACCP protocols, and environmental regulations. Our compliance team ensures continuous monitoring and
                improvement of our processes to meet and exceed industry standards.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <span className="px-4 py-2 bg-background rounded-full text-sm font-medium">FSSAI Compliant</span>
                <span className="px-4 py-2 bg-background rounded-full text-sm font-medium">ISO 22000 Certified</span>
                <span className="px-4 py-2 bg-background rounded-full text-sm font-medium">HACCP Implemented</span>
                <span className="px-4 py-2 bg-background rounded-full text-sm font-medium">
                  Environmental Standards
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
