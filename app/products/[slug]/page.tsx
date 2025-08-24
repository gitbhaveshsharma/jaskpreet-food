import products from "@/content/products.json"
import type { Product } from "@/types/product"
import { Header } from "@/components/nav/header"
import { Footer } from "@/components/footer/footer"
import ProductDetails from "@/components/products/ProductDetails"
import ProductSuggestions from "@/components/products/product-suggestions"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PageProps {
    params: { slug: string } | Promise<{ slug: string }>
}

export default async function ProductPage({ params }: PageProps) {
    const { slug } = await params
    const product = (products as Product[]).find((p) => p.id === slug)

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 container mx-auto px-4 py-12 text-center">
                    <h1 className="text-3xl font-heading font-bold">Product not found</h1>
                    <p className="text-muted-foreground mt-3">
                        We couldn't find the product you're looking for.
                    </p>
                    <Link href="/products">
                        <Button className="mt-6">Back to Products</Button>
                    </Link>
                </main>
                <Footer />
            </div>
        )
    }

    // Filter related + random suggestions
    const related = (products as Product[])
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 3)

    const others = (products as Product[])
        .filter((p) => p.id !== product.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Breadcrumb or Back Button */}
                <div className="mb-6">
                    <Link href="/products">
                        <Button variant="ghost" className="gap-1.5">
                            ← Back to Products
                        </Button>
                    </Link>
                </div>

                {/* Main Product Content */}
                <div className="grid grid-cols-1 gap-12">
                    <ProductDetails product={product} />
                    <div className="max-w-7xl mx-auto px-4">
                        <ProductSuggestions related={related} others={others} />

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}