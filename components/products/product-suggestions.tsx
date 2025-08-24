"use client"

import { useState } from "react"
import type { Product } from "@/types/product"
import { ProductCard } from "./product-card"
import { ProductModal } from "./product-modal"

interface SuggestionsProps {
    related: Product[]
    others: Product[]
}

export default function ProductSuggestions({ related, others }: SuggestionsProps) {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

    return (
        <div className="space-y-12">
            <section>
                <h3 className="text-2xl font-semibold mb-4">Related Products</h3>
                {related.length === 0 ? (
                    <p className="text-muted-foreground">No related products found.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {related.map((p) => (
                            <ProductCard key={p.id} product={p} onSelect={() => setSelectedProduct(p)} />
                        ))}
                    </div>
                )}
            </section>

            <section>
                <h3 className="text-2xl font-semibold mb-4">You may also like</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {others.map((p) => (
                        <ProductCard key={p.id} product={p} onSelect={() => setSelectedProduct(p)} />
                    ))}
                </div>
            </section>

            {selectedProduct && (
                <ProductModal product={selectedProduct} isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)} />
            )}
        </div>
    )
}
