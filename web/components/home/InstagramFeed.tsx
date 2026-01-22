import { Container } from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

const instagramPosts = [
    "/images/category_trusou_1767888542931.png",
    "/images/best_seller_costume_1767890900501.png",
    "/images/menu_featured_gown_1767890017856.png",
    "/images/best_seller_candles_1767890918950.png",
    "/images/home_story_atelier_1767890107165.png",
    "/images/category_clothes_1767888562227.png"
];

export function InstagramFeed() {
    return (
        <section className="py-24 bg-secondary/10">
            <Container>
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Instagram className="h-8 w-8 text-primary" />
                        <h2 className="font-heading text-3xl font-bold">@happykids.ro</h2>
                    </div>
                    <p className="text-muted-foreground mb-6">Urmărește-ne pentru inspirație zilnică și oferte exclusive!</p>
                    <Link
                        href="https://instagram.com/happykids.ro"
                        target="_blank"
                        className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                    >
                        Urmărește-ne pe Instagram
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {instagramPosts.map((post, index) => (
                        <Link
                            key={index}
                            href="https://instagram.com/happykids.ro"
                            target="_blank"
                            className="relative aspect-square overflow-hidden rounded-lg group"
                        >
                            <Image
                                src={post}
                                alt={`Instagram post ${index + 1}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                <Instagram className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}
