"use client";

import { Container } from "@/components/ui/Container";
import { products } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ShoppingBag, Star } from "lucide-react";
import { AddToWishlistButton } from "@/components/product/AddToWishlistButton";

export function BestSellers() {
    // Select top products (simulated)
    const bestSellers = products.slice(0, 4);

    return (
        <section className="py-20 bg-background">
            <Container>
                <div className="text-center mb-12">
                    <span className="text-primary font-medium tracking-wider uppercase text-sm">Cele mai apreciate</span>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">Alegerile Mămicilor</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Acestea sunt produsele pe care părinții le aleg cel mai des pentru momentele speciale.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
                    {bestSellers.map((product) => (
                        <div key={product.id} className="group relative bg-white border border-border/50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                            {/* Badge */}
                            {product.isNew && (
                                <div className="absolute top-2 left-2 z-10 bg-green-100 text-green-700 px-1.5 py-0.5 text-[9px] sm:text-[10px] sm:px-2 sm:py-1 font-bold uppercase rounded-sm">
                                    NOU
                                </div>
                            )}

                            {/* Image Container */}
                            <div className="aspect-[3/4] relative bg-secondary/20 overflow-hidden">
                                <Image
                                    src={product.images[0]}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Overlay Actions - Hidden on mobile usually, keeping for consistency */}
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex items-center justify-center gap-2">
                                    <Button size="sm" className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75 shadow-lg" asChild>
                                        <Link href={`/product/${product.id}`}>
                                            Vezi Detalii
                                        </Link>
                                    </Button>
                                </div>

                                {/* Wishlist Button */}
                                <div className="absolute top-1 right-1 sm:top-2 sm:right-2">
                                    <AddToWishlistButton product={{
                                        id: product.id,
                                        name: product.name,
                                        price: product.price,
                                        image: product.images[0],
                                        inStock: product.inStock,
                                        slug: product.id
                                    }} />
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-2 sm:p-4">
                                <Link href={`/product/${product.id}`} className="block group-hover:text-primary transition-colors">
                                    <h3 className="font-heading font-bold text-sm sm:text-lg leading-tight mb-1 line-clamp-2 min-h-[2.5rem]">{product.name}</h3>
                                </Link>

                                <div className="flex items-center gap-1 mb-2 sm:mb-3">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-yellow-400 text-yellow-400" />
                                    ))}
                                    <span className="text-[10px] sm:text-xs text-muted-foreground ml-1">(12)</span>
                                </div>

                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mt-auto">
                                    <span className="text-base sm:text-xl font-bold">{product.price} RON</span>
                                    <Button size="icon" variant="secondary" className="rounded-full h-8 w-8 hover:bg-primary hover:text-white transition-colors hidden sm:flex" asChild>
                                        <Link href={`/product/${product.id}`}>
                                            <ShoppingBag className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button variant="outline" size="lg" className="px-8 border-primary text-primary hover:bg-primary hover:text-white transition-colors" asChild>
                        <Link href="/botez">Vezi Toată Colecția</Link>
                    </Button>
                </div>
            </Container>
        </section>
    );
}
