"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, MessageSquare, Truck, Shield, Clock, Thermometer } from "lucide-react"
import type { Product } from "@/types/product"
import { DIETARY_TYPES, SPICE_LEVELS } from "@/lib/constants"

export default function ProductDetails({ product }: { product: Product }) {
    const dietaryInfo = DIETARY_TYPES[product.dietary as keyof typeof DIETARY_TYPES]
    const spiceInfo = SPICE_LEVELS[product.spiceLevel as keyof typeof SPICE_LEVELS]

    // Tailwind-safe badge classes
    const spiceBadgeClasses: Record<string, string> = {
        green: "bg-green-100 text-green-700",
        yellow: "bg-yellow-100 text-yellow-700",
        red: "bg-red-100 text-red-700",
    }
    const spiceClasses = spiceBadgeClasses[spiceInfo.color] || "bg-gray-100 text-gray-700"

    return (
        <section>
            <div className="flex flex-col md:flex-row gap-6">
                {/* Product Image with Overlay Info - Adjusted Size */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg md:w-1/2 w-full bg-white" style={{ height: 'fit-content' }}>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-[95%] h-auto max-h-[500px] object-contain mx-auto hover:scale-105 transition-transform duration-500"
                    />
                </div>


                {/* Info Area - Now equal width */}
                <div className="md:w-1/2">
                    {/* Product Header */}
                    <div className="mt-0 md:mt-8">
                        <div className="flex flex-col md:flex-row items-start justify-between gap-4">
                            <div className="flex-1">
                                <h1 className="text-4xl font-heading font-bold text-gray-900">
                                    {product.name}
                                </h1>
                                <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1 font-medium">
                                    {product.category}
                                </p>
                            </div>

                            {/* Spice Level Indicator */}
                            <div className="flex items-center space-x-2">
                                <Badge variant="outline" className={`capitalize ${spiceClasses}`}>
                                    {spiceInfo.label}
                                </Badge>
                            </div>
                        </div>

                        <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                            {product.shortDesc}
                        </p>
                    </div>

                    {/* Quick Info Cards */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-muted rounded-lg p-4 border flex flex-col justify-between min-h-[96px]">
                            <div className="flex items-center space-x-2 mb-2">
                                <Clock className="h-4 w-4 text-primary" />
                                <span className="font-medium text-sm">Shelf Life</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{product.shelfLife}</p>
                        </div>
                        <div className="bg-muted rounded-lg p-4 border flex flex-col justify-between min-h-[96px]">
                            <div className="flex items-center space-x-2 mb-2">
                                <Thermometer className="h-4 w-4 text-primary" />
                                <span className="font-medium text-sm">Storage</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{product.storage}</p>
                        </div>
                        <div className="bg-muted rounded-lg p-4 border flex flex-col justify-between min-h-[96px]">
                            <div className="flex items-center space-x-2 mb-2">
                                <Shield className="h-4 w-4 text-primary" />
                                <span className="font-medium text-sm">Dietary</span>
                            </div>
                            <p className="text-sm text-muted-foreground capitalize">{product.dietary}</p>
                        </div>
                    </div>

                    {/* Pack Sizes Section - New addition */}
                    <div className="mt-8 p-6 border rounded-2xl bg-muted shadow-sm">
                        <h4 className="font-semibold text-lg">Pack Sizes</h4>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {product.packSizes.map((s) => (
                                <Badge key={s} variant="outline">{s}</Badge>
                            ))}
                        </div>
                    </div>

                    {/* Product Features */}
                    <div className="mt-8 bg-background border rounded-xl p-6 shadow-sm">
                        <h3 className="font-semibold text-lg mb-4 flex items-center">
                            <Shield className="h-5 w-5 mr-2 text-blue-600" />
                            Product Features
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {product.features.map((feature) => (
                                <div key={feature} className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-muted-foreground capitalize">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons - Fully Responsive */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 items-stretch">
                        <Button size="lg" className="flex-1 min-h-[48px] h-auto">
                            <MessageSquare className="h-5 w-5 mr-2" />
                            Request Quote
                        </Button>
                        <a
                            href={product.specSheet}
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1"
                        >
                            <Button variant="outline" size="lg" className="w-full min-h-[48px] h-auto">
                                <Download className="h-5 w-5 mr-2" />
                                Download Spec Sheet
                            </Button>
                        </a>
                        <a
                            href="mailto:sales@Jaskpreetfoods.com"
                            className="flex-1"
                        >
                            <Button variant="outline" size="lg" className="w-full min-h-[48px] h-auto">
                                <Truck className="h-5 w-5 mr-2" />
                                Contact Sales
                            </Button>
                        </a>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-8 p-4 bg-muted/30 rounded-lg border">
                        <p className="text-sm text-muted-foreground">
                            <strong>Bulk Orders Available:</strong> Contact our sales team for wholesale pricing,
                            custom packaging options, and delivery schedules for orders above 100kg.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}