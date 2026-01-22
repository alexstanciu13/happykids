"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Trash2, Plus, Minus, ArrowRight, Truck } from "lucide-react";

export default function CartPage() {
    // Mock Cart Data
    const cartItems = [
        {
            id: 1,
            name: "Trusou Botez 'Royal' - 7 Piese Personalizate",
            price: 549,
            image: "/images/category_trusou_1767888542931.png",
            quantity: 1,
            details: "Broderie: Auriu Regal, Nume: Andrei"
        }
    ];

    const upsellItems = [
        {
            id: 101,
            name: "Bavețică Personalizată",
            price: 45,
            image: "/images/cart_product_bib_1767889418338.png",
        },
        {
            id: 102,
            name: "Botosei Tricotați Manual",
            price: 65,
            image: "/images/cart_product_socks_1767889437991.png",
        }
    ];

    const subtotal = 549; // Mock total
    const shippingThreshold = 600;
    const remainingForFreeShipping = Math.max(0, shippingThreshold - subtotal);
    const progressPercent = Math.min(100, (subtotal / shippingThreshold) * 100);

    return (
        <div className="py-12 bg-background min-h-screen">
            <Container>
                <h1 className="font-heading text-3xl font-bold mb-8">Coșul Tău</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Cart Items Column */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Free Shipping Progress */}
                        <div className="bg-secondary/30 border border-muted p-4 rounded-lg">
                            <div className="flex items-center gap-2 mb-2 text-sm font-medium">
                                <Truck className="h-4 w-4 text-primary" />
                                {remainingForFreeShipping > 0
                                    ? <span>Mai adaugă produse de <span className="text-primary font-bold">{remainingForFreeShipping} RON</span> pentru Livrare Gratuită!</span>
                                    : <span className="text-green-600 font-bold">Felicitări! Ai Livrare Gratuită.</span>
                                }
                            </div>
                            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-primary transition-all duration-500" style={{ width: `${progressPercent}%` }}></div>
                            </div>
                        </div>

                        {/* Items List */}
                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex gap-4 p-4 border rounded-xl bg-white">
                                    <div className="relative h-24 w-24 rounded-md overflow-hidden bg-secondary">
                                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-heading font-semibold text-lg">{item.name}</h3>
                                                <p className="text-sm text-muted-foreground">{item.details}</p>
                                            </div>
                                            <p className="font-bold text-lg">{item.price} RON</p>
                                        </div>

                                        <div className="flex justify-between items-center mt-4">
                                            <div className="flex items-center gap-3 border rounded-md px-2 py-1">
                                                <button className="p-1 hover:text-primary"><Minus className="h-3 w-3" /></button>
                                                <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                                                <button className="p-1 hover:text-primary"><Plus className="h-3 w-3" /></button>
                                            </div>
                                            <button className="text-muted-foreground hover:text-red-500 transition-colors">
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Upsell Section */}
                        <div className="mt-8 pt-8 border-t">
                            <h3 className="font-heading font-semibold text-lg mb-4">Completează setul cu...</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {upsellItems.map(item => (
                                    <div key={item.id} className="flex gap-3 items-center p-3 border border-dashed border-primary/30 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                                        <div className="relative h-16 w-16 rounded overflow-hidden">
                                            <Image src={item.image} alt={item.name} fill className="object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-medium text-sm line-clamp-1">{item.name}</h4>
                                            <div className="flex justify-between items-center mt-1">
                                                <span className="font-bold text-sm">{item.price} RON</span>
                                                <Button size="sm" variant="secondary" className="h-7 text-xs">+ Adaugă</Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Checkout Summary Column */}
                    <div className="lg:col-span-1">
                        <div className="bg-secondary/20 p-6 rounded-xl border space-y-4 sticky top-24">
                            <h3 className="font-heading font-bold text-xl">Sumar Comandă</h3>

                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span>{subtotal} RON</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Livrare</span>
                                    <span>{remainingForFreeShipping > 0 ? "25 RON" : "0 RON"}</span>
                                </div>
                            </div>

                            <div className="border-t pt-4 flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>{subtotal + (remainingForFreeShipping > 0 ? 25 : 0)} RON</span>
                            </div>

                            <Button className="w-full h-12 text-base font-bold" asChild>
                                <Link href="/checkout">
                                    Finalizează Comanda <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>

                            <div className="text-xs text-center text-muted-foreground pt-2">
                                <p>🔒 Plată securizată cu cardul sau ramburs.</p>
                                <p>Livrare în 24-48h lucrătoare.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    );
}
