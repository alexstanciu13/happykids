"use client";
import { useWishlist } from "@/context/WishlistContext";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function WishlistButton() {
    const { items } = useWishlist();

    return (
        <Button variant="ghost" size="icon" className="group hover:bg-secondary/50" asChild>
            <Link href="/wishlist">
                <Heart className="h-5 w-5 group-hover:fill-red-400 group-hover:text-red-400 transition-colors" />
                {items.length > 0 && (
                    <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white shadow-sm transition-transform">
                        {items.length}
                    </span>
                )}
            </Link>
        </Button>
    );
}
