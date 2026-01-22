import { Container } from "@/components/ui/Container";
import { products } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Tag, Clock } from "lucide-react";

export default function SalesPage() {
    // Filter products that are marked as new or on sale (for demo, we'll show a few)
    const saleProducts = products.slice(0, 6);

    return (
        <div className="bg-background pb-20">
            {/* Hero Banner */}
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-20">
                <Container>
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <Tag className="h-5 w-5" />
                            <span className="font-bold text-sm">OFERTE SPECIALE</span>
                        </div>
                        <h1 className="font-heading text-5xl font-bold mb-4">Reduceri de până la 30%</h1>
                        <p className="text-xl opacity-90 mb-8">
                            Descoperă cele mai bune oferte pentru micuțul tău. Stocuri limitate!
                        </p>
                        <div className="flex items-center justify-center gap-2 text-sm">
                            <Clock className="h-4 w-4" />
                            <span>Oferta se termină în: <strong>3 zile, 12 ore, 45 minute</strong></span>
                        </div>
                    </div>
                </Container>
            </div>

            <Container className="py-16">
                {/* Categories Filter */}
                <div className="mb-12 flex flex-wrap gap-3 justify-center">
                    <Button variant="default" size="sm">Toate Ofertele</Button>
                    <Button variant="outline" size="sm">Trusouri Botez</Button>
                    <Button variant="outline" size="sm">Hăinuțe</Button>
                    <Button variant="outline" size="sm">Accesorii</Button>
                    <Button variant="outline" size="sm">Cadouri</Button>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {saleProducts.map((product) => (
                        <Link href={`/product/${product.id}`} key={product.id} className="group block">
                            <div className="relative aspect-[3/4] bg-secondary rounded-xl overflow-hidden mb-4 border hover:shadow-lg transition-all duration-300">
                                <Image
                                    src={product.images[0]}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Sale Badge */}
                                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                    -20%
                                </div>
                                {product.isNew && (
                                    <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                        NOU
                                    </div>
                                )}
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-heading font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-muted-foreground text-sm">{product.features[0]}</p>
                                <div className="flex items-center gap-3 mt-2">
                                    <span className="text-lg font-bold text-primary">{Math.round(product.price * 0.8)} RON</span>
                                    <span className="text-sm text-muted-foreground line-through">{product.price} RON</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Promo Banners */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white p-8 rounded-2xl">
                        <h3 className="font-heading text-2xl font-bold mb-2">Livrare Gratuită</h3>
                        <p className="mb-4 opacity-90">Pentru comenzi peste 250 RON (în loc de 300 RON)</p>
                        <Button variant="secondary">Cumpără Acum</Button>
                    </div>
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white p-8 rounded-2xl">
                        <h3 className="font-heading text-2xl font-bold mb-2">Pachet Complet Botez</h3>
                        <p className="mb-4 opacity-90">Trusou + Lumânare + Cadou = -25% reducere</p>
                        <Button variant="secondary">Vezi Oferta</Button>
                    </div>
                </div>

                {/* Newsletter CTA */}
                <div className="mt-16 bg-secondary/30 p-12 rounded-2xl text-center">
                    <h2 className="font-heading text-3xl font-bold mb-4">Nu Rata Nicio Ofertă!</h2>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Abonează-te la newsletter și primești <strong>10% reducere extra</strong> la următoarea comandă,
                        plus acces prioritar la toate ofertele speciale.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Adresa ta de email"
                            className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        />
                        <Button size="lg" className="font-bold whitespace-nowrap">
                            Vreau Reducerea
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    );
}
