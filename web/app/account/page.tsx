"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { User, Package, Heart, LogOut, MapPin, ChevronRight, Box } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function AccountPage() {
    const [activeTab, setActiveTab] = useState<"profile" | "orders" | "addresses">("profile");

    const orders = [
        { id: "#HK-2024-001", date: "05 Ian 2026", total: 450, status: "Livrat", statusColor: "text-green-600 bg-green-50" },
        { id: "#HK-2023-892", date: "20 Dec 2025", total: 1250, status: "În Procesare", statusColor: "text-blue-600 bg-blue-50" }
    ];

    return (
        <div className="min-h-screen bg-secondary/10 py-12">
            <Container>
                <h1 className="font-heading text-3xl font-bold mb-8">Contul Meu</h1>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar Navigation */}
                    <div className="lg:col-span-1 space-y-2">
                        <Button
                            variant={activeTab === "profile" ? "secondary" : "ghost"}
                            className={cn("w-full justify-start font-bold", activeTab === "profile" ? "bg-white shadow-sm" : "")}
                            onClick={() => setActiveTab("profile")}
                        >
                            <User className="mr-2 h-4 w-4" /> Date Personale
                        </Button>
                        <Button
                            variant={activeTab === "orders" ? "secondary" : "ghost"}
                            className={cn("w-full justify-start font-bold", activeTab === "orders" ? "bg-white shadow-sm" : "")}
                            onClick={() => setActiveTab("orders")}
                        >
                            <Package className="mr-2 h-4 w-4" /> Comenzile Mele
                        </Button>
                        <Button
                            variant={activeTab === "addresses" ? "secondary" : "ghost"}
                            className={cn("w-full justify-start font-bold", activeTab === "addresses" ? "bg-white shadow-sm" : "")}
                            onClick={() => setActiveTab("addresses")}
                        >
                            <MapPin className="mr-2 h-4 w-4" /> Adrese Livrare
                        </Button>
                        <Button
                            variant="ghost"
                            className="w-full justify-start"
                            asChild
                        >
                            <Link href="/wishlist">
                                <Heart className="mr-2 h-4 w-4" /> Favorite
                            </Link>
                        </Button>
                        <div className="pt-4 border-t mt-4">
                            <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
                                <LogOut className="mr-2 h-4 w-4" /> Deconectare
                            </Button>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-xl shadow-sm border p-8 min-h-[500px] animate-in fade-in slide-in-from-bottom-2 duration-500">

                            {/* PROFILE TAB */}
                            {activeTab === "profile" && (
                                <div className="space-y-8">
                                    <div>
                                        <h2 className="font-heading text-xl font-bold mb-1">Date Personale</h2>
                                        <p className="text-sm text-muted-foreground">Gestionează informațiile tale personale.</p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label>Prenume</Label>
                                            <Input defaultValue="Andreea" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Nume</Label>
                                            <Input defaultValue="Popescu" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Email</Label>
                                            <Input defaultValue="andreea.popescu@gmail.com" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Telefon</Label>
                                            <Input defaultValue="0722 123 456" />
                                        </div>
                                    </div>
                                    <Button>Salvează Modificările</Button>
                                </div>
                            )}

                            {/* ORDERS TAB */}
                            {activeTab === "orders" && (
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="font-heading text-xl font-bold mb-1">Istoric Comenzi</h2>
                                        <p className="text-sm text-muted-foreground">Urmărește statusul comenzilor tale.</p>
                                    </div>
                                    <div className="space-y-4">
                                        {orders.map((order) => (
                                            <div key={order.id} className="border rounded-lg p-4 hover:border-primary/50 transition-colors flex flex-col sm:flex-row items-center justify-between gap-4">
                                                <div className="flex items-center gap-4 w-full sm:w-auto">
                                                    <div className="h-12 w-12 bg-secondary rounded-full flex items-center justify-center">
                                                        <Box className="h-6 w-6 text-primary" />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold">{order.id}</p>
                                                        <p className="text-xs text-muted-foreground">{order.date}</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                                                    <div className="text-right">
                                                        <p className="font-bold">{order.total} RON</p>
                                                        <span className={cn("text-xs font-bold px-2 py-0.5 rounded-full", order.statusColor)}>
                                                            {order.status}
                                                        </span>
                                                    </div>
                                                    <Button variant="outline" size="sm">
                                                        Detalii <ChevronRight className="ml-1 h-3 w-3" />
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* ADDRESSES TAB */}
                            {activeTab === "addresses" && (
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h2 className="font-heading text-xl font-bold mb-1">Adresele Mele</h2>
                                            <p className="text-sm text-muted-foreground">Gestionează adresele de livrare.</p>
                                        </div>
                                        <Button size="sm">Adaugă Adresă</Button>
                                    </div>
                                    <div className="border rounded-lg p-4 relative bg-gray-50/50">
                                        <div className="absolute top-4 right-4 text-xs font-bold bg-secondary text-primary px-2 py-1 rounded">
                                            PRINCIPALĂ
                                        </div>
                                        <p className="font-bold mb-2">Andreea Popescu</p>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            Str. Exemplului nr. 24, Bloc 3, Ap. 12<br />
                                            Sector 1, București<br />
                                            0722 123 456
                                        </p>
                                        <div className="flex gap-2">
                                            <Button variant="outline" size="sm" className="h-8">Editează</Button>
                                            <Button variant="ghost" size="sm" className="h-8 text-red-500 hover:text-red-600 hover:bg-red-50">Șterge</Button>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
