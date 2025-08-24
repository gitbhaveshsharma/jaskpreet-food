import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Award, TrendingUp } from "lucide-react"

const milestones = [
  {
    year: "2018",
    title: "Founded",
    description: "Started with a vision to modernize traditional Indian recipes",
    icon: Calendar,
  },
  {
    year: "2020",
    title: "First Certification",
    description: "Achieved FSSAI approval and established quality standards",
    icon: Award,
  },
  {
    year: "2022",
    title: "Team Expansion",
    description: "Grew to 50+ employees including food technologists and chefs",
    icon: Users,
  },
  {
    year: "2024",
    title: "Market Leadership",
    description: "Serving 200+ restaurants and cloud kitchens across India",
    icon: TrendingUp,
  },
]

export function StorySection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold">Our Journey</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Jaskpreet Food began with a simple yet powerful vision: to bridge the gap between traditional Indian
                culinary heritage and modern food processing technology. Our founder, recognizing the challenges faced
                by restaurants and food businesses in maintaining consistency while scaling operations, set out to
                create solutions that would preserve authentic flavors while ensuring food safety and reliability.
              </p>
              <p>
                What started as a small operation has grown into a trusted partner for hundreds of food businesses
                across India. We've maintained our commitment to quality, authenticity, and innovation throughout our
                journey, earning certifications and building relationships that span the entire food industry spectrum.
              </p>
              <p>
                Today, we continue to push boundaries in food processing, combining traditional recipes with
                cutting-edge technology to deliver products that meet the highest standards of safety, taste, and
                consistency.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              return (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                          <span className="text-lg font-semibold">{milestone.title}</span>
                        </div>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
