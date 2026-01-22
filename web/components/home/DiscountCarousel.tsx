"use client";

import { Container } from "@/components/ui/Container";
import { products } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ShoppingBag, Timer } from "lucide-react";

export function DiscountCarousel() {
    // Select products with oldPrice
    const saleProducts = products.filter(p => p.oldPrice);

    if (saleProducts.length === 0) return null;

    return (
        <section className="py-20 bg-rose-50/50">
            <Container>
                <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="flex items-center gap-1 px-2 py-1 bg-red-100 text-red-600 text-xs font-bold uppercase rounded-full">
                                <Timer className="h-3 w-3" /> Ofertă Limitată
                            </span>
                        </div>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold">Reduceri de Sezon</h2>
                        <p className="text-muted-foreground mt-2">Prețuri speciale pentru ultimele bucăți din stoc.</p>
                    </div>
                    <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50" asChild>
                        <Link href="/reduceri">Vezi toate reducerile</Link>
                    </Button>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
                    {saleProducts.map((product) => (
                        <div key={product.id} className="group relative bg-white border border-red-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                            {/* Sale Badge */}
                            <div className="absolute top-2 left-2 z-10 bg-red-600 text-white px-2 py-1 text-[10px] sm:text-xs font-bold uppercase rounded shadow-sm">
                                -{Math.round(((product.oldPrice! - product.price) / product.oldPrice!) * 100)}%
                            </div>

                            {/* Image Container */}
                            <div className="aspect-[3/4] relative bg-secondary/20 overflow-hidden">
                                <Image
                                    src={product.images[0]}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex items-center justify-center gap-2">
                                    <Button size="sm" className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75 shadow-lg bg-red-600 hover:bg-red-700 text-white" asChild>
                                        <Link href={`/product/${product.id}`}>
                                            Vezi Oferta
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-2 sm:p-4">
                                <Link href={`/product/${product.id}`} className="block group-hover:text-red-700 transition-colors">
                                    <h3 className="font-heading font-bold text-sm sm:text-lg leading-tight mb-1 line-clamp-2 min-h-[2.5rem]">{product.name}</h3>
                                </Link>

                                <div className="flex flex-col sm:flex-row items-start sm:items-end gap-1 sm:gap-2 mt-2">
                                    <span className="text-lg sm:text-xl font-bold text-red-600">{product.price} RON</span>
                                    <span className="text-xs sm:text-sm text-muted-foreground line-through mb-1">{product.oldPrice} RON</span>
                                </div>

                                <Button size="sm" className="w-full mt-3 bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-colors font-bold text-xs sm:text-sm" asChild>
                                    <Link href={`/product/${product.id}`}>
                                        Adaugă în Coș
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
