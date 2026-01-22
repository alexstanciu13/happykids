"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
    images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
    const [activeImage, setActiveImage] = useState(0);

    // Fallback if no images provided
    const displayImages = images && images.length > 0 ? images : ["/images/category_trusou_1767888542931.png"];

    return (
        <div className="flex flex-col gap-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-secondary border">
                <Image
                    src={displayImages[activeImage]}
                    alt="Product Image"
                    fill
                    className="object-cover transition-all duration-500"
                    priority
                />
            </div>

            {displayImages.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-2">
                    {displayImages.map((img, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveImage(index)}
                            className={cn(
                                "relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all",
                                activeImage === index ? "border-primary ring-2 ring-primary/20" : "border-transparent opacity-70 hover:opacity-100"
                            )}
                        >
                            <Image src={img} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
