import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const collections = [
    {
        title: "Micul Prinț",
        description: "Costumașe de catifea pentru băieți",
        image: "/images/best_seller_costume_1767890900501.png",
        link: "/colectii/costume-baieti"
    },
    {
        title: "Lumină Sfântă",
        description: "Lumânări de botez decorate cu flori naturale",
        image: "/images/best_seller_candles_1767890918950.png",
        link: "/colectii/lumanari"
    }
];

export function FeaturedCollections() {
    return (
        <section className="py-24 bg-white">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="font-heading text-3xl font-bold mb-2">Colecții în Tendințe</h2>
                        <p className="text-muted-foreground">Cele mai apreciate alegeri ale clienților noștri în această lună.</p>
                    </div>
                    <Button variant="outline" className="group" asChild>
                        <Link href="/shop">
                            Vezi toate produsele <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {collections.map((col) => (
                        <Link key={col.title} href={col.link} className="group relative block overflow-hidden rounded-2xl aspect-[16/9] md:aspect-[2/1]">
                            <Image src={col.image} alt={col.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                                <h3 className="text-white font-heading text-2xl font-bold mb-1 translate-y-2 group-hover:translate-y-0 transition-transform">{col.title}</h3>
                                <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">{col.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}
