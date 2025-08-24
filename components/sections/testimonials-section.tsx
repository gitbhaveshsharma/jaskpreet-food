"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"

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
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 max-w-7xl mx-auto px-4">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">What Our Partners Say</h2>
          <p className="text-lg text-muted-foreground">
            Trusted by restaurants, cloud kitchens, and catering services across India.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </blockquote>
              <div>
                <p className="font-semibold text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-muted-foreground">{testimonials[currentIndex].company}</p>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-muted"
                  }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
