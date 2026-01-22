import { products } from "@/lib/data";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductPersonalization } from "@/components/product/ProductPersonalization";
import { Check, ShieldCheck, Truck, RotateCcw, Ruler, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { AddToWishlistButton } from "@/components/product/AddToWishlistButton";

// Generate params for static export
export function generateStaticParams() {
    return products.map(p => ({ slug: p.id }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = products.find(p => p.id === slug);

    if (!product) {
        return notFound();
    }

    // Upsell/Cross-sell Logic
    const recommendedProducts = product.relatedIds
        ? products.filter(p => product.relatedIds?.includes(p.id))
        : products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

    return (
        <div className="py-12 bg-background min-h-screen">
            <Container>
                {/* Main Product Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Gallery */}
                    <div>
                        <ProductGallery images={product.images} />
                    </div>

                    {/* Product Info & Form */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider">{product.category}</span>
                                {product.isNew && <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider">NOU</span>}
                            </div>
                            <div className="flex justify-between items-start gap-4">
                                <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground leading-tight">{product.name}</h1>
                                <AddToWishlistButton product={{
                                    id: product.id,
                                    name: product.name,
                                    price: product.price,
                                    image: product.images[0],
                                    inStock: product.inStock,
                                    slug: product.id
                                }} />
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-3xl font-bold text-primary">{product.price} RON</span>
                                <div className="flex items-center gap-1">
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    <span className="text-xs text-muted-foreground ml-1">(12 review-uri)</span>
                                </div>
                            </div>

                            <p className="text-muted-foreground leading-relaxed text-lg mb-6">{product.description}</p>

                            <Button variant="outline" size="sm" asChild className="gap-2">
                                <Link href="/marimi" target="_blank">
                                    <Ruler className="h-4 w-4" />
                                    Ghid de Mărimi
                                </Link>
                            </Button>
                        </div>

                        {/* Feature Highlights */}
                        <div className="grid grid-cols-2 gap-4">
                            {product.features.map(feat => (
                                <div key={feat} className="flex items-center gap-2 text-sm font-medium">
                                    <div className="h-6 w-6 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                                        <Check className="h-3.5 w-3.5 text-green-600" />
                                    </div>
                                    {feat}
                                </div>
                            ))}
                        </div>

                        <div className="h-px bg-border my-6" />

                        {/* Personalization Component */}
                        <div>
                            <h3 className="font-heading text-lg font-bold mb-4">Personalizează Produsul</h3>
                            <ProductPersonalization />
                        </div>

                        {/* Trust Signals */}
                        <div className="grid grid-cols-3 gap-4 bg-secondary/20 p-4 rounded-xl text-center">
                            <div className="flex flex-col items-center gap-1">
                                <Truck className="h-5 w-5 text-primary mb-1" />
                                <span className="text-xs font-bold">Livrare Rapidă</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <ShieldCheck className="h-5 w-5 text-primary mb-1" />
                                <span className="text-xs font-bold">Calitate Premium</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <RotateCcw className="h-5 w-5 text-primary mb-1" />
                                <span className="text-xs font-bold">Retur Simplu</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Long Description & Details Tabs */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24 border-t pt-16">
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="font-heading text-2xl font-bold mb-6">Despre Produs</h2>
                            <div className="prose prose-lg max-w-none text-muted-foreground">
                                <p>{product.longDescription || product.description}</p>
                                <p>
                                    Fiecare produs Happy Kids este lucrat manual în atelierul nostru din București.
                                    Folosim doar materiale certificate Oeko-Tex, sigure pentru pielea delicată a bebelușilor.
                                    Atenția la detalii este semnătura noastră - de la cusăturile fine până la ambalajul premium
                                    în care vei primi comanda.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="font-heading text-2xl font-bold mb-6">Specificații Tehnice</h2>
                            <div className="border rounded-lg overflow-hidden">
                                <div className="grid grid-cols-2 p-4 border-b bg-secondary/10">
                                    <span className="font-semibold">Material</span>
                                    <span className="text-muted-foreground">Bumbac 100% Premium</span>
                                </div>
                                <div className="grid grid-cols-2 p-4 border-b">
                                    <span className="font-semibold">Instrucțiuni Spălare</span>
                                    <span className="text-muted-foreground">30°C program delicat</span>
                                </div>
                                <div className="grid grid-cols-2 p-4 border-b bg-secondary/10">
                                    <span className="font-semibold">Producție</span>
                                    <span className="text-muted-foreground">Fabricat în România 🇷🇴</span>
                                </div>
                                <div className="grid grid-cols-2 p-4">
                                    <span className="font-semibold">Termen Execuție</span>
                                    <span className="text-muted-foreground">2-3 zile lucrătoare</span>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sticky Sidebar / Additional Info */}
                    <div className="lg:col-span-1">
                        <div className="bg-secondary p-8 rounded-2xl sticky top-24">
                            <h3 className="font-heading text-xl font-bold mb-4">Ai nevoie de ajutor?</h3>
                            <p className="text-muted-foreground mb-6">
                                Nu ești sigur ce mărime să alegi sau ai întrebări despre personalizare?
                                Suntem aici să te ajutăm!
                            </p>
                            <Button variant="outline" className="w-full mb-3 bg-white hover:bg-white/90">
                                Contactează-ne pe WhatsApp
                            </Button>
                            <div className="text-center">
                                <Link href="/contact" className="text-sm text-primary hover:underline">
                                    Sau trimite-ne un email
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Upsell / Related Products */}
                <div className="border-t pt-16">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="font-heading text-2xl md:text-3xl font-bold">S-ar putea să-ți placă și...</h2>
                        <Link href="/hainute" className="hidden md:flex items-center text-primary font-bold hover:gap-2 transition-all group">
                            Vezi toate produsele <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                        {recommendedProducts.map(rec => (
                            <Link href={`/product/${rec.id}`} key={rec.id} className="group">
                                <div className="relative aspect-square rounded-xl overflow-hidden bg-secondary border mb-2 sm:mb-3">
                                    <Image
                                        src={rec.images[0]}
                                        alt={rec.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {rec.inStock && (
                                        <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 bg-white/90 backdrop-blur px-1.5 py-0.5 rounded text-[8px] sm:text-[10px] font-bold shadow-sm">
                                            LIVRARE 24H
                                        </div>
                                    )}
                                </div>
                                <h3 className="font-heading font-bold text-sm sm:text-lg mb-1 group-hover:text-primary transition-colors line-clamp-1">{rec.name}</h3>
                                <p className="text-primary font-bold text-sm sm:text-base">{rec.price} RON</p>
                            </Link>
                        ))}
                    </div>
                </div>

            </Container>
        </div>
    );
}
