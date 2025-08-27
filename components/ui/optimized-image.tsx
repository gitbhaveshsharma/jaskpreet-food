"use client"

import { useState } from "react"
import Image from "next/image"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
    src: string
    alt: string
    width?: number
    height?: number
    fill?: boolean
    className?: string
    sizes?: string
    priority?: boolean
    quality?: number
    aspectRatio?: string
    placeholderClassName?: string
}

export function OptimizedImage({
    src,
    alt,
    width,
    height,
    fill = false,
    className,
    sizes,
    priority = false,
    quality = 75,
    aspectRatio = "aspect-square",
    placeholderClassName,
    ...props
}: OptimizedImageProps) {
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    const handleLoad = () => {
        setIsLoading(false)
    }

    const handleError = () => {
        setIsLoading(false)
        setHasError(true)
    }

    if (hasError) {
        return (
            <ImagePlaceholder
                className={cn(placeholderClassName, className)}
                aspectRatio={aspectRatio}
            />
        )
    }

    return (
        <div className={cn("relative", !fill && aspectRatio, className)}>
            {isLoading && (
                <ImagePlaceholder
                    className={cn("absolute inset-0", placeholderClassName)}
                    aspectRatio=""
                />
            )}
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                fill={fill}
                sizes={sizes}
                priority={priority}
                quality={quality}
                className={cn(
                    "transition-opacity duration-300",
                    isLoading ? "opacity-0" : "opacity-100",
                    fill ? "object-cover" : "",
                    className
                )}
                onLoad={handleLoad}
                onError={handleError}
                {...props}
            />
        </div>
    )
}
