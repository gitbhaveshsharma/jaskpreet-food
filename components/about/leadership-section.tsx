import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"

const leaders = [
  {
    name: "Jaskpreet Singh",
    position: "Founder & CEO",
    bio: "With over 15 years in the food industry, Jaskpreet brings deep expertise in food processing and business development.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    email: "jaskpreet@jaskpreetfood.com",
  },
  {
    name: "Dr. Priya Sharma",
    position: "Head of R&D",
    bio: "Food technologist with PhD in Food Science, leading our innovation and product development initiatives.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    email: "priya@jaskpreetfood.com",
  },
  {
    name: "Rajesh Kumar",
    position: "Operations Director",
    bio: "Manufacturing expert with 20+ years experience in scaling food production operations and quality management.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    email: "rajesh@jaskpreetfood.com",
  },
]

export function LeadershipSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">Leadership Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the experienced professionals driving our vision forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="aspect-square w-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                  <img
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-heading font-bold text-lg mb-1">{leader.name}</h3>
                <p className="text-primary font-medium mb-3">{leader.position}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{leader.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a
                    href={leader.linkedin}
                    className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${leader.email}`}
                    className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
