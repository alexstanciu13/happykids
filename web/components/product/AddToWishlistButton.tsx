"use client";

import { Button } from "@/components/ui/Button";
import { Heart } from "lucide-react";
import { useWishlist, WishlistItem } from "@/context/WishlistContext";
import { cn } from "@/lib/utils";

export function AddToWishlistButton({ product }: { product: WishlistItem }) {
    const { addItem, removeItem, isInWishlist } = useWishlist();
    const isAdded = isInWishlist(product.id);

    const toggleWishlist = () => {
        if (isAdded) {
            removeItem(product.id);
        } else {
            addItem(product);
        }
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            className={cn("hover:bg-red-50 hover:text-red-500 transition-colors", isAdded && "text-red-500")}
            onClick={toggleWishlist}
        >
            <Heart className={cn("h-6 w-6", isAdded ? "fill-current" : "")} />
        </Button>
    );
}
