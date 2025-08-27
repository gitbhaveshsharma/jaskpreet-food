"use client"

import { Suspense } from "react"
import { Header } from "@/components/nav/header"
import { Footer } from "@/components/footer/footer"
import { ProductCatalog } from "@/components/products/product-catalog"
import type { Metadata } from "next"

// Since we're using "use client", we need to export metadata differently
// For now, we'll handle this in layout.tsx or remove this and handle SEO dynamically
// export const metadata: Metadata = {
//   title: "Products - Jaskpreet Food | Ready-to-Cook & Ready-to-Eat Solutions",
//   description:
//     "Explore our wide range of FSSAI approved ready-to-cook gravies, marinades, chutneys, and ready-to-eat meals. Veg and non-veg options available.",
//   keywords: "ready-to-cook, ready-to-eat, gravies, marinades, chutneys, veg, non-veg, FSSAI approved, food products",
// }

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4">
        <div className="py-12">
          <div className="container">
            <h1 className="text-4xl font-heading font-bold mb-4">Our Products</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover our comprehensive range of chef-inspired, ready-to-cook and ready-to-eat solutions crafted for
              professional kitchens.
            </p>
          </div>
        </div>
        <Suspense fallback={<div className="py-12 text-center">Loading products...</div>}>
          <ProductCatalog />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
