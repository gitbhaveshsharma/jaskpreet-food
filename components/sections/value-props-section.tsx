import { Shield, Target, ChefHat, Handshake } from "lucide-react"

const valueProps = [
  {
    icon: Shield,
    title: "Highest Degree of Food Safety",
    description: "FSSAI, ISO 22000, and HACCP certified processes ensure maximum safety standards.",
  },
  {
    icon: Target,
    title: "Reliable Consistency",
    description: "Batch-tested quality with standardized recipes for consistent results every time.",
  },
  {
    icon: ChefHat,
    title: "Out-of-the-Box Recipes",
    description: "Chef-inspired formulations ready to serve with authentic taste profiles.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    description: "Dedicated support and customization for your business growth and success.",
  },
]

export function ValuePropsSection() {
  return (
    <section className="py-20 bg-muted/30 max-w-7xl mx-auto px-4">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">Why Choose Jaskpreet Food?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine traditional recipes with modern food processing technology to deliver exceptional products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon
            return (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg">{prop.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{prop.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
