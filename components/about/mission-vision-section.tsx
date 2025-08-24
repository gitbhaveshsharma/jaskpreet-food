import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"

export function MissionVisionSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">Our Purpose</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Driven by passion for culinary excellence and commitment to food safety
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-4">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower food businesses with high-quality, chef-inspired products that maintain authentic flavors
                while ensuring food safety, consistency, and operational efficiency.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-4">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become India's leading food processing company, setting new standards for quality, innovation, and
                sustainability in the ready-to-cook and ready-to-eat food segment.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-4">Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Quality first, customer-centric approach, continuous innovation, environmental responsibility, and
                maintaining the authentic taste that defines Indian cuisine.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
