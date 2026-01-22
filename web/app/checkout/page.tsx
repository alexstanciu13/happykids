"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Lock, ShieldCheck, Truck } from "lucide-react";
import Image from "next/image";

export default function CheckoutPage() {
    return (
        <div className="min-h-screen bg-secondary/10 pb-20">
            {/* Simple Header for Checkout (Distraction Free) */}
            <div className="bg-white border-b py-4 mb-8">
                <Container className="flex items-center justify-between">
                    <h1 className="font-heading text-xl font-bold text-primary">Happy Kids <span className="text-foreground text-sm font-normal">| Checkout</span></h1>
                    <div className="flex items-center gap-1 text-xs text-green-700 font-medium">
                        <Lock className="h-3 w-3" /> Securizat SSL
                    </div>
                </Container>
            </div>

            <Container className="max-w-5xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left: Form */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Contact Info */}
                        <section className="bg-white p-6 rounded-xl border shadow-sm">
                            <h2 className="font-heading text-lg font-bold mb-4">Date de Contact</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Email</Label>
                                    <Input placeholder="email@exemplu.com" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Telefon</Label>
                                    <Input placeholder="07xx xxx xxx" />
                                    <p className="text-[10px] text-muted-foreground">Te sunăm doar pentru confirmarea comenzii.</p>
                                </div>
                            </div>
                        </section>

                        {/* Shipping Address */}
                        <section className="bg-white p-6 rounded-xl border shadow-sm">
                            <h2 className="font-heading text-lg font-bold mb-4">Adresa de Livrare</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2 md:col-span-2">
                                    <Label>Nume Complet</Label>
                                    <Input placeholder="Nume Prenume" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <Label>Adresă (Stradă, Nr, Bloc, Ap)</Label>
                                    <Input placeholder="" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Județ</Label>
                                    <Input placeholder="" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Oraș</Label>
                                    <Input placeholder="" />
                                </div>
                            </div>
                        </section>

                        {/* Payment Method */}
                        <section className="bg-white p-6 rounded-xl border shadow-sm">
                            <h2 className="font-heading text-lg font-bold mb-4">Metoda de Plată</h2>
                            <div className="space-y-3">
                                <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors bg-primary/5 border-primary">
                                    <input type="radio" name="payment" defaultChecked className="accent-primary h-4 w-4" />
                                    <span className="font-medium">Plată cu Cardul Online</span>
                                    <span className="ml-auto text-xs font-bold bg-white px-2 py-1 rounded border">0 RON Comision</span>
                                </label>
                                <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors">
                                    <input type="radio" name="payment" className="accent-primary h-4 w-4" />
                                    <span className="font-medium">Ramburs la Curier</span>
                                    <span className="ml-auto text-xs text-muted-foreground">+5 RON</span>
                                </label>
                            </div>
                        </section>

                        <Button size="lg" className="w-full text-lg h-14 font-bold">
                            Plasează Comanda
                        </Button>
                    </div>

                    {/* Right: Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-xl border shadow-sm sticky top-8">
                            <h3 className="font-heading font-bold mb-4">Comanda Ta (1 Produs)</h3>

                            <div className="flex gap-3 mb-4">
                                <div className="relative h-16 w-16 rounded overflow-hidden bg-secondary shrink-0">
                                    <Image src="/images/category_trusou_1767888542931.png" alt="Product" fill className="object-cover" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold line-clamp-2">Trusou Botez 'Royal' - 7 Piese Personalizate</p>
                                    <p className="text-sm text-muted-foreground">549 RON</p>
                                </div>
                            </div>

                            <div className="border-t my-4 pt-4 space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span>549 RON</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Livrare</span>
                                    <span>25 RON</span>
                                </div>
                            </div>

                            <div className="border-t my-4 pt-4 flex justify-between font-bold text-lg">
                                <span>Total de plată</span>
                                <span>574 RON</span>
                            </div>

                            <div className="space-y-3 mt-6 pt-6 border-t">
                                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                                    <ShieldCheck className="h-4 w-4 text-green-600 shrink-0" />
                                    <span>Garanție de retur 30 zile pentru produsele nepersonalizate.</span>
                                </div>
                                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                                    <Truck className="h-4 w-4 text-primary shrink-0" />
                                    <span>Livrare estimată: Marți, 24 Ianuarie.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    );
}
