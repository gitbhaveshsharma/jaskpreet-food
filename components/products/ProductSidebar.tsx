import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Product } from "@/types/product"

export default function ProductSidebar({ product }: { product: Product }) {
    return (
        <div className="p-6 border rounded-2xl bg-muted shadow-sm">
            <h4 className="font-semibold text-lg">Pack Sizes</h4>
            <div className="mt-3 flex flex-wrap gap-2">
                {product.packSizes.map((s) => (
                    <Badge key={s} variant="outline">{s}</Badge>
                ))}
            </div>

            <div className="mt-8">
                <p className="font-medium">Contact Sales</p>
                <p className="text-muted-foreground mt-1">
                    Reach out for wholesale pricing and samples.
                </p>
                <Link href="/contact">
                    <Button className="mt-4 w-full">Contact Us</Button>
                </Link>
            </div>
        </div>
    )
}
