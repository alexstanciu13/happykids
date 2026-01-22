"use client";

import { Container } from "@/components/ui/Container";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        id: 1,
        name: "Ana Maria Popescu",
        role: "Mămică fericită",
        image: "/images/hero_baby_christening_1767888520528.png", // Reusing hero image crop for avatar feel
        content: "Am comandat trusoul 'Royal' și am fost impresionată de calitatea materialelor. Broderia este impecabilă, exact cum mi-am dorit! Recomand cu drag.",
        rating: 5,
        date: "Acum 2 zile"
    },
    {
        id: 2,
        name: "Elena Dumitrescu",
        role: "Nașă de botez",
        image: "/images/category_clothes_1767888562227.png", // Reuse
        content: "Totul a ajuns foarte repede, în 24 de ore. Ambalajul este superb, nici nu a mai trebuit să împachetez cadoul. Mulțumesc Happy Kids!",
        rating: 5,
        date: "Săptămâna trecută"
    },
    {
        id: 3,
        name: "Cristina Ionescu",
        role: "Mămică",
        image: "/images/category_trusou_1767888542931.png", // Reuse
        content: "Mi-a plăcut foarte mult opțiunea de confirmare telefonică. Am modificat culoarea broderiei în ultimul moment și au fost foarte înțelegători.",
        rating: 5,
        date: "Acum 3 săptămâni"
    }
];

export function Testimonials() {
    return (
        <section className="py-24 bg-primary/5">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ce spun părinții și nașii</h2>
                    <p className="text-lg text-muted-foreground">Încrederea voastră este cea mai importantă carte de vizită pentru noi.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t) => (
                        <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-muted hover:shadow-md transition-shadow flex flex-col h-full">
                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`h-5 w-5 ${i < t.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                                ))}
                            </div>

                            <p className="text-foreground leading-relaxed flex-1 italic">"{t.content}"</p>

                            <div className="mt-8 flex items-center gap-4 border-t pt-6">
                                <div className="relative h-12 w-12 rounded-full overflow-hidden bg-gray-100 ring-2 ring-primary/20">
                                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-foreground">{t.name}</h4>
                                    <p className="text-xs text-muted-foreground">{t.role} • {t.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
