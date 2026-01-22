"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, ShoppingBag, Heart, User, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Acasă", href: "/" },
    {
        name: "Botez", // Mapped to [category]
        href: "/botez",
        mega: true,
        columns: [
            { title: "Esențiale", items: ["Trusouri Botez", "Cufere", "Lumânări", "Seturi Complete"] },
            { title: "Îmbrăcăminte", items: ["Rochițe Botez", "Costumașe", "Seturi Tradiționale"] },
            { title: "Accesorii", items: ["Pantofiori", "Body-uri", "Pleduri & Fașe"] }
        ],
        featured: [
            { title: "Colecția Regală", image: "/images/menu_featured_trusou_1767890000162.png", href: "/colectii/regal" },
            { title: "Noutăți Rochițe", image: "/images/menu_featured_gown_1767890017856.png", href: "/colectii/rochite" }
        ]
    },
    {
        name: "Hăinuțe Bebe",
        href: "/hainute",
        subkeys: ["Body-uri Personalizate", "Salopete", "Seturi 3 Piese", "Halate", "Pijamale Bebe"]
    },
    {
        name: "Cadouri",
        href: "/cadouri",
        subkeys: ["Pentru Nași", "Pentru Bunici", "Seturi Nou Născut", "Carduri Cadou"]
    }
];

import Image from "next/image"; // Added Import

// Add import at the top (I'll handle imports in a separate block if needed, but here I assume I replace the component body mainly)
import { useWishlist } from "@/context/WishlistContext";
import { WishlistButton } from "@/components/layout/WishlistButton";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMega, setActiveMega] = useState<string | null>(null);
    // Use the context safely (might be null if provider missing, but we will add it)
    // To avoid hydration errors or errors before provider is up, handle gracefully or assume Step 2 adds provider.

    // Simplest way: just use the hooks assuming standard setup. 
    // We need to move the component logic inside.

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
            {/* Top Bar - Enhanced */}
            <div className="bg-primary px-4 py-2 text-center text-xs font-medium text-white tracking-wide">
                <span className="opacity-90">✨ Livrare Gratuită la comenzi peste 300 RON • Personalizare Inclusă pentru Trusouri ✨</span>
            </div>

            <Container>
                {/* Added relative for absolute positioning of mobile logo, responsive height */}
                <div className="relative flex h-24 lg:h-36 items-center justify-between">
                    {/* Mobile Menu Button - Left */}
                    <div className="flex lg:hidden z-10">
                        <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>

                    {/* Logo - Absolute Center on Mobile, Static on Desktop */}
                    <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:transform-none lg:flex-1 lg:justify-start">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="relative h-20 lg:h-32 w-auto">
                                <Image
                                    src="/images/logo.png"
                                    alt="Happy Kids Logo"
                                    height={128}
                                    width={360}
                                    className="object-contain h-20 lg:h-32 w-auto"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation - Visual Mega Menu */}
                    <nav className="hidden lg:flex lg:gap-x-8 h-full">
                        {navigation.map((item) => (
                            <div
                                key={item.name}
                                className="relative group h-full flex items-center"
                                onMouseEnter={() => item.mega && setActiveMega(item.name)}
                                onMouseLeave={() => setActiveMega(null)}
                            >
                                <Link
                                    href={item.href}
                                    className="flex items-center text-sm font-semibold text-foreground hover:text-primary transition-colors py-2 px-1 relative"
                                >
                                    {item.name}
                                    {(item.mega || item.subkeys) && <ChevronDown className="ml-1 h-3 w-3 opacity-50 group-hover:rotate-180 transition-transform duration-300" />}
                                    {/* Underline Indicator - FIXED POSITION */}
                                    <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                                </Link>

                                {/* Visual Mega Menu */}
                                {item.mega && (
                                    <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[900px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 bg-white border border-t-0 rounded-b-2xl shadow-2xl overflow-hidden z-50">
                                        <div className="grid grid-cols-12 gap-0">
                                            {/* Links Section */}
                                            <div className="col-span-8 bg-white p-8 grid grid-cols-3 gap-8">
                                                {item.columns?.map((col) => (
                                                    <div key={col.title}>
                                                        <h3 className="font-heading font-bold text-primary mb-4 border-b border-muted pb-2">{col.title}</h3>
                                                        <ul className="space-y-3">
                                                            {col.items.map((sub) => (
                                                                <li key={sub}>
                                                                    <Link href="#" className="text-sm text-gray-600 hover:text-primary hover:translate-x-1 transition-all block font-medium">
                                                                        {sub}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Featured Visuals Section */}
                                            <div className="col-span-4 bg-secondary/30 p-8 flex flex-col gap-6 border-l border-muted">
                                                <h3 className="font-heading font-bold text-foreground">Recomandate</h3>
                                                {item.featured?.map((feat) => (
                                                    <Link key={feat.title} href={feat.href} className="group/card block relative aspect-video rounded-lg overflow-hidden border border-muted/50 shadow-sm hover:shadow-md transition-all">
                                                        <Image src={feat.image} alt={feat.title} fill className="object-cover group-hover/card:scale-105 transition-transform duration-500" />
                                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                                                            <span className="text-white text-sm font-bold flex items-center justify-between">
                                                                {feat.title}
                                                                <ArrowRight className="h-3 w-3 opacity-0 group-hover/card:opacity-100 transition-opacity" />
                                                            </span>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Standard Dropdown */}
                                {item.subkeys && (
                                    <div className="absolute top-[100px] left-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 bg-white border border-t-0 rounded-b-xl shadow-xl p-5 z-50">
                                        <ul className="space-y-3">
                                            {item.subkeys.map((sub) => (
                                                <li key={sub}>
                                                    <Link href="#" className="text-sm text-gray-600 hover:text-primary hover:translate-x-1 transition-all block font-medium border-b border-transparent hover:border-muted/50 pb-1">{sub}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Actions - Right */}
                    <div className="flex flex-1 lg:flex-none items-center justify-end gap-1 lg:gap-3 z-10">
                        <Button variant="ghost" size="icon" className="hidden lg:flex hover:bg-secondary/50">
                            <Search className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="hidden lg:flex hover:bg-secondary/50" asChild>
                            <Link href="/account">
                                <User className="h-5 w-5" />
                            </Link>
                        </Button>
                        {/* Wishlist Button with Dynamic Count */}
                        <WishlistButton />

                        <Button variant="ghost" size="icon" className="relative group hover:bg-secondary/50" asChild>
                            <Link href="/cart">
                                <ShoppingBag className="h-5 w-5" />
                                <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white shadow-sm group-hover:scale-110 transition-transform">2</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </Container>

            {/* Mobile Menu Overlay - Corrected Position & Integrated Tools */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full h-[calc(100vh-100px)] min-h-screen bg-background border-t border-muted shadow-2xl z-40 overflow-y-auto animate-in slide-in-from-top-2 duration-200">

                    {/* Integrated Search & Account */}
                    <div className="p-4 grid gap-4 bg-secondary/10 border-b border-muted">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Caută produse..."
                                className="w-full h-10 pl-9 pr-4 rounded-md border border-input bg-white text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            />
                        </div>
                        <Link
                            href="/account"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 p-3 bg-white border rounded-lg hover:shadow-sm transition-all active:scale-95"
                        >
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <User className="h-4 w-4" />
                            </div>
                            <span className="font-bold">Contul Meu / Autentificare</span>
                        </Link>
                    </div>

                    <div className="p-4 space-y-1 pb-32">
                        {navigation.map((item) => (
                            <div key={item.name} className="border-b last:border-0 border-muted">
                                <button className="flex w-full justify-between items-center py-4 text-left font-bold text-lg select-none active:text-primary">
                                    {item.name}
                                    {(item.mega || item.subkeys) && <ChevronDown className="h-5 w-5 text-muted-foreground" />}
                                </button>

                                {item.mega && (
                                    <div className="pl-4 pb-4 space-y-4 animate-in slide-in-from-top-1">
                                        {item.columns?.map(col => (
                                            <div key={col.title}>
                                                <h4 className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">{col.title}</h4>
                                                <ul className="space-y-2 border-l-2 border-muted pl-3">
                                                    {col.items.map(sub => (
                                                        <li key={sub}><Link href="#" className="block py-1 text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>{sub}</Link></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {item.subkeys && (
                                    <div className="pl-4 pb-4">
                                        <ul className="space-y-2 border-l-2 border-muted pl-3">
                                            {item.subkeys.map(sub => (
                                                <li key={sub}><Link href="#" className="block py-1 text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>{sub}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
