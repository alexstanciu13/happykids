"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, X } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";

export default function WishlistPage() {
    const { items, removeItem } = useWishlist();

    return (
        <div className="min-h-screen bg-background py-12">
            <Container>
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="font-heading text-3xl font-bold mb-2">Favorite</h1>
                        <p className="text-muted-foreground">Produsele pe care le iubești, salvate pentru mai târziu.</p>
                    </div>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">
                        {items.length} produse
                    </span>
                </div>

                {items.length > 0 ? (
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                        {items.map((item) => (
                            <div key={item.id} className="group relative bg-white border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                                {/* Image */}
                                <div className="aspect-[3/4] relative bg-secondary">
                                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="absolute top-1 right-1 sm:top-2 sm:right-2 p-1 sm:p-1.5 bg-white/80 backdrop-blur rounded-full text-muted-foreground hover:text-red-500 transition-colors z-10"
                                    >
                                        <X className="h-3 w-3 sm:h-4 sm:w-4" />
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="p-2 sm:p-4 space-y-1 sm:space-y-3">
                                    <h3 className="font-heading font-semibold text-xs sm:text-sm line-clamp-2 min-h-[2rem] sm:min-h-[2.5rem]">
                                        <Link href={`/product/${item.slug || item.id}`} className="hover:text-primary transition-colors">
                                            {item.name}
                                        </Link>
                                    </h3>
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                        <span className="font-bold text-sm sm:text-base">{item.price} RON</span>
                                        {item.inStock && <span className="text-[9px] sm:text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full font-medium w-fit">In Stoc</span>}
                                    </div>
                                    <Button className="w-full text-xs h-7 sm:h-9" size="sm" asChild>
                                        <Link href={`/product/${item.slug || item.id}`}>
                                            <ShoppingBag className="mr-1 sm:mr-2 h-3 w-3" /> <span className="hidden sm:inline">Vezi Produs</span><span className="sm:hidden">Vezi</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-secondary/10 rounded-xl border border-dashed border-muted-foreground/20">
                        <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-muted-foreground">
                            <ShoppingBag className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Nu ai niciun produs salvat</h3>
                        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                            Explorează colecția noastră și salvează produsele favorite pentru a le găsi mai ușor.
                        </p>
                        <Button className="mt-4" asChild><Link href="/">Mergi la Cumpărături</Link></Button>
                    </div>
                )}
            </Container>
        </div>
    );
}
