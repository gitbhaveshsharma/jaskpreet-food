"use client"

import { useState, useMemo } from "react"
import { ProductFilters } from "./product-filters"
import { ProductGrid } from "./product-grid"
import { ProductModal } from "./product-modal"
import products from "@/content/products.json"
import categories from "@/content/categories.json"
import type { Product } from "@/types/product"

export function ProductCatalog() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    dietary: "",
    spiceLevel: "",
  })

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.shortDesc.toLowerCase().includes(filters.search.toLowerCase())
      const matchesCategory = !filters.category || product.category === filters.category
      const matchesDietary = !filters.dietary || product.dietary === filters.dietary
      const matchesSpiceLevel = !filters.spiceLevel || product.spiceLevel === filters.spiceLevel

      return matchesSearch && matchesCategory && matchesDietary && matchesSpiceLevel
    })
  }, [filters])

  return (
    <div className="py-12">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <ProductFilters
              filters={filters}
              onFiltersChange={setFilters}
              categories={categories}
              totalProducts={filteredProducts.length}
            />
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <ProductGrid
              products={filteredProducts as Product[]}
              onProductSelect={setSelectedProduct}
            />
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  )
}
