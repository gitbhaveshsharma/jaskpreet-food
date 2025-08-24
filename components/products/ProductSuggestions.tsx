"use client"

import { ProductCard } from "@/components/products/product-card"
import type { Product } from "@/types/product"

export default function ProductSuggestions({
    related,
    others,
}: {
    related: Product[]
    others: Product[]
}) {
    return (
        <>
            {/* Related Products */}
            <section className="mt-16">
                <h3 className="text-2xl font-semibold mb-6">Related Products</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {related.length === 0 ? (
                        <p className="text-muted-foreground">No related products found.</p>
                    ) : (
                        related.map((r) => (
                            <ProductCard
                                key={r.id}
                                product={r}
                                onSelect={() => console.log("Quick view:", r.name)}
                            />
                        ))
                    )}
                </div>
            </section>

            {/* You may also like */}
            <section className="mt-16">
                <h3 className="text-2xl font-semibold mb-6">You may also like</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {others.map((o) => (
                        <ProductCard
                            key={o.id}
                            product={o}
                            onSelect={() => console.log("Quick view:", o.name)}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}
