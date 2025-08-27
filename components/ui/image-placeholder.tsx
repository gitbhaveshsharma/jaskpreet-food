import { cn } from "@/lib/utils"

interface ImagePlaceholderProps {
    className?: string
    aspectRatio?: string
}

export function ImagePlaceholder({ className, aspectRatio = "aspect-square" }: ImagePlaceholderProps) {
    return (
        <div
            className={cn(
                "bg-muted animate-pulse flex items-center justify-center",
                aspectRatio,
                className
            )}
        >
            <div className="w-8 h-8 bg-muted-foreground/20 rounded-full animate-bounce" />
        </div>
    )
}
