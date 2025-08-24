"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Download } from "lucide-react"
import { useRouter } from "next/navigation"
import type { Product } from "@/types/product"
import { DIETARY_TYPES, SPICE_LEVELS } from "@/lib/constants"

interface ProductCardProps {
  product: Product
  onSelect: () => void
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  const router = useRouter()
  const dietaryInfo = DIETARY_TYPES[product.dietary as keyof typeof DIETARY_TYPES]
  const spiceInfo = SPICE_LEVELS[product.spiceLevel as keyof typeof SPICE_LEVELS]

  const spiceColorClassMap: Record<string, { bg: string; text: string }> = {
    red: { bg: "bg-red-100", text: "text-red-700" },
    yellow: { bg: "bg-yellow-100", text: "text-yellow-700" },
    green: { bg: "bg-green-100", text: "text-green-700" },
    orange: { bg: "bg-orange-100", text: "text-orange-700" },
  }
  const spiceColor = spiceColorClassMap[spiceInfo.color] || { bg: "bg-gray-100", text: "text-gray-700" }

  const bgTint =
    product.dietary === "veg" ? "bg-green-50/50" : "bg-red-50/50"

  return (
    <Card
      onClick={() => router.push(`/products/${product.id}`)}
      className={`group transition-all duration-300 p-0 cursor-pointer border rounded-xl shadow-sm hover:shadow-md ${bgTint}`}
    >
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="aspect-[3.7/3] rounded-t-xl overflow-hidden bg-muted relative">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Dietary Indicator */}
          <div className="absolute top-3 left-3">
            <div className={dietaryInfo.indicator}></div>
          </div>
          {/* Badges */}
          <div className="absolute top-3 right-3 flex flex-col space-y-1">
            {product.badges.map((badge) => (
              <Badge
                key={badge}
                variant="secondary"
                className="text-[10px] px-2 py-0.5 rounded-full shadow-sm"
              >
                {badge}
              </Badge>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-heading font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-xs text-muted-foreground tracking-wide uppercase">
              {product.category}
            </p>
          </div>

          <p className="text-sm leading-relaxed line-clamp-2">{product.shortDesc}</p>

          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-3">
              <span
                className={`px-2 py-0.5 rounded-full ${spiceColor.bg} ${spiceColor.text} text-[11px] font-medium`}
              >
                {spiceInfo.label}
              </span>
              <span className="text-muted-foreground">{product.shelfLife}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {product.packSizes.map((size) => (
              <Badge
                key={size}
                variant="outline"
                className="text-xs rounded-md px-2 py-0.5"
              >
                {size}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          <div className="flex space-x-2 pt-3">
            <Button
              size="sm"
              className="flex-1"
              onClick={(e) => {
                e.stopPropagation() // prevent card navigation
                onSelect()
              }}
            >
              <Eye className="h-3 w-3 mr-1" />
              Quick View
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={(e) => {
                e.stopPropagation() // prevent card navigation
                // download spec logic here
              }}
            >
              <Download className="h-3 w-3 mr-1" />
              Spec
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
