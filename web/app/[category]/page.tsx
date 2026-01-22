import { products } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// Define strict category map to mock "pages"
const categoryTitles: Record<string, string> = {
    "botez": "Colecția Botez",
    "hainute": "Hăinuțe Bebe",
    "cadouri": "Idei de Cadouri",
    "accesorii": "Accesorii & Încălțăminte",
    "colectii": "Toate Colecțiile"
};

export function generateStaticParams() {
    return Object.keys(categoryTitles).map(slug => ({ category: slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const categorySlug = category;
    const title = categoryTitles[categorySlug];

    if (!title && categorySlug !== 'shop') { // Allow 'shop' as a general 'all' page if needed, or simple redirect
        // For this prototype, we'll try to match, if not found, we could show all or 404.
        // Let's genericize: if product exists in category, show it.
    }

    // Filter products
    const categoryProducts = products.filter(p => p.category === categorySlug || categorySlug === 'shop');

    // If no products found and not a valid key, 404? 
    // For safety in prototype, if empty, we might just show "No products". 
    // Actually, let's map "reduceri" and others to 'shop' or undefined.

    const displayTitle = title || `Categoria: ${categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1)}`;

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header Banner */}
            <div className="bg-secondary/30 py-12 mb-12">
                <Container>
                    <h1 className="font-heading text-4xl font-bold mb-4">{displayTitle}</h1>
                    <p className="text-muted-foreground max-w-2xl">Descoperă selecția noastră de produse create cu grijă pentru micuțul tău.</p>
                </Container>
            </div>

            <Container>
                {/* Breadcrumb / Back */}
                <div className="mb-8">
                    <Button variant="ghost" size="sm" asChild className="pl-0 hover:bg-transparent hover:text-primary">
                        <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Înapoi la prima pagină</Link>
                    </Button>
                </div>

                {/* Filters & Sort */}
                <div className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-white p-4 rounded-xl border">
                    <div className="flex gap-2 flex-wrap">
                        <Button variant="outline" size="sm" className="font-medium">
                            Toate
                        </Button>
                        <Button variant="ghost" size="sm">
                            Nou
                        </Button>
                        <Button variant="ghost" size="sm">
                            Reduceri
                        </Button>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Sortează:</span>
                        <select className="text-sm border rounded-md px-3 py-1.5 bg-background">
                            <option>Recomandate</option>
                            <option>Preț crescător</option>
                            <option>Preț descrescător</option>
                            <option>Cele mai noi</option>
                        </select>
                    </div>
                </div>

                {categoryProducts.length > 0 ? (
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-8">
                        {categoryProducts.map(product => (
                            <Link href={`/product/${product.id}`} key={product.id} className="group block">
                                <div className="relative aspect-[3/4] bg-secondary rounded-xl overflow-hidden mb-2 sm:mb-4 border hover:shadow-lg transition-all duration-300">
                                    <Image
                                        src={product.images[0]}
                                        alt={product.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {product.isNew && <span className="absolute top-2 left-2 bg-white text-foreground text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm">NOU</span>}
                                </div>
                                <div className="space-y-1 p-1">
                                    <h3 className="font-heading font-semibold text-sm sm:text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">{product.name}</h3>
                                    <p className="text-muted-foreground text-[10px] sm:text-sm line-clamp-1">{product.features[0]}</p>
                                    <p className="font-bold text-base sm:text-lg mt-1">{product.price} RON</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24 bg-secondary/10 rounded-2xl">
                        <h2 className="font-bold text-xl mb-2">Această categorie este momentan goală.</h2>
                        <p className="text-muted-foreground mb-6">Lucrăm la noi modele superbe!</p>
                        <Button asChild><Link href="/">Vezi alte produse</Link></Button>
                    </div>
                )}
            </Container>
        </div>
    );
}
