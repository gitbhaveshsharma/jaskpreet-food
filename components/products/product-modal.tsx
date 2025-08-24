"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Download, Package, Clock, Thermometer, Award, X } from "lucide-react"
import type { Product } from "@/types/product"
import { DIETARY_TYPES, SPICE_LEVELS } from "@/lib/constants"

interface ProductModalProps {
  product: Product
  isOpen: boolean
  onClose: () => void
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const dietaryInfo = DIETARY_TYPES[product.dietary as keyof typeof DIETARY_TYPES]
  const spiceInfo = SPICE_LEVELS[product.spiceLevel as keyof typeof SPICE_LEVELS]

  // close modal on ESC + lock body scroll
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEsc)
      document.body.style.overflow = "hidden" // prevent background scroll
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal container */}
      <div className="relative z-50 w-full max-w-4xl max-h-[90vh] rounded-2xl bg-white shadow-lg animate-fadeIn overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-heading">{product.name}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className={dietaryInfo.indicator}></div>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {product.badges.map((badge) => (
                  <Badge key={badge} variant="secondary">
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <p className="text-muted-foreground mb-2">{product.category}</p>
                <p className="text-lg leading-relaxed">{product.shortDesc}</p>
              </div>

              <Separator />

              {/* Specifications */}
              <div className="space-y-4">
                <h3 className="font-heading font-semibold text-lg">Specifications</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className={dietaryInfo.indicator}></div>
                    <div>
                      <p className="font-medium text-sm">{dietaryInfo.label}</p>
                      <p className="text-xs text-muted-foreground">Dietary Type</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full bg-${spiceInfo.color}-500`}></div>
                    <div>
                      <p className="font-medium text-sm">{spiceInfo.label}</p>
                      <p className="text-xs text-muted-foreground">Spice Level</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-sm">{product.shelfLife}</p>
                      <p className="text-xs text-muted-foreground">Shelf Life</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Thermometer className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-sm">Storage</p>
                      <p className="text-xs text-muted-foreground">{product.storage}</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Pack Sizes */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Package className="h-4 w-4 text-muted-foreground" />
                  <h4 className="font-medium">Available Pack Sizes</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.packSizes.map((size) => (
                    <Badge key={size} variant="outline" className="text-sm px-3 py-1">
                      {size}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Features */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-muted-foreground" />
                  <h4 className="font-medium">Key Features</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <Badge key={feature} variant="secondary" className="capitalize">
                      {feature.replace("-", " ")}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer (sticky at bottom) */}
        <div className="p-6 border-t flex space-x-3 bg-white">
          <Button className="flex-1">Request Quote</Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Download Spec Sheet
          </Button>
        </div>
      </div>
    </div>
  )
}
