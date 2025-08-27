import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import categories from "@/content/categories.json"

export function FeaturedCategoriesSection() {
  const featuredCategories = categories.slice(0, 6)

  return (
    <section className="py-20 max-w-7xl mx-auto px-4">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">Our Product Categories</h2>
            <p className="text-lg text-muted-foreground">
              Discover our wide range of ready-to-cook and ready-to-eat solutions.
            </p>
          </div>
          <Button variant="outline" asChild className="hidden lg:flex bg-transparent">
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCategories.map((category) => (
            <Link key={category.id} href={`/products?category=${category.id}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer pt-0">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] rounded-t-lg overflow-hidden bg-muted">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-lg mb-2">{category.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{category.productCount} Products</span>
                      <Button variant="ghost" size="sm" asChild>
                        <span>
                          Explore
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 lg:hidden">
          <Button asChild>
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
