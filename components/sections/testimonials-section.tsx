"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    company: "Delhi Restaurant Chain",
    content:
      "Jaskpreet Food's gravies have transformed our kitchen operations. Consistent quality and authentic taste every time.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    company: "Cloud Kitchen Solutions",
    content: "The ready-to-cook marinades have reduced our prep time by 60%. Excellent quality and shelf life.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mohammed Ali",
    company: "Catering Services Ltd",
    content:
      "Outstanding food safety standards and reliable supply chain. Perfect partner for our large-scale operations.",
    rating: 5,
  },
  {
    id: 4,
    name: "Anjali Patel",
    company: "Mumbai Food Hub",
    content: "The consistency in taste and quality has helped us maintain our brand reputation across all locations.",
    rating: 5,
  },
  {
    id: 5,
    name: "Vikram Singh",
    company: "North Indian Cuisine Co.",
    content: "Exceptional spice blends and marinades. Our customers always ask about the secret to our flavors!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="py-20 max-w-7xl mx-auto px-4">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">What Our Partners Say</h2>
          <p className="text-lg text-muted-foreground">
            Trusted by restaurants, cloud kitchens, and catering services across India.
          </p>
        </div>

        <div className="relative overflow-hidden py-10">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-scroll-left space-x-6">
            {duplicatedTestimonials.map((testimonial, index) => (
              <Card key={`${testimonial.id}-${index}`} className="flex-shrink-0 w-80 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-base font-medium leading-relaxed mb-6 text-center">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="text-center">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
