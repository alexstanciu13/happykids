import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const categories = [
    {
        title: "Trusouri Botez",
        description: "Seturi complete gata de biserică",
        image: "/images/category_trusou_1767888542931.png",
        href: "/botez",
        cols: "md:col-span-2"
    },
    {
        title: "Hăinuțe Bebe",
        description: "Bumbac organic pentru piele sensibilă",
        image: "/images/category_clothes_1767888562227.png",
        href: "/hainute",
        cols: "md:col-span-1"
    },
    {
        title: "Cadouri & Seturi",
        description: "Surprize pentru nași și bunici",
        image: "/images/category_gifts_1767888581315.png",
        href: "/cadouri",
        cols: "md:col-span-3"
    }
];

export function CategoryGrid() {
    return (
        <section className="py-20">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="font-heading text-3xl font-bold mb-4">Descoperă Colecțiile Happy Kids</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Fiecare produs este gândit să aducă bucurie și confort. Alege calitatea premium pentru momentele unice.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categories.map((cat, i) => (
                        <Link
                            key={cat.title}
                            href={cat.href}
                            className={`group relative overflow-hidden rounded-2xl aspect-[4/3] ${cat.cols}`}
                        >
                            <Image
                                src={cat.image}
                                alt={cat.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                                <h3 className="font-heading text-2xl font-bold mb-2">{cat.title}</h3>
                                <p className="font-medium opacity-90 mb-4">{cat.description}</p>
                                <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <Button variant="secondary" size="sm">Vezi Produse</Button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}
