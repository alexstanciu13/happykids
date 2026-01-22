import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

export function PersonalizationShowcase() {
    return (
        <section className="py-24 bg-gradient-to-b from-secondary/30 to-background overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1 space-y-6">
                        <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full uppercase tracking-wider mb-2">
                            Serviciu Premium
                        </div>
                        <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight">
                            Unic, la fel ca <br /> <span className="text-primary">bebelușul tău</span>.
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Personalizarea nu este doar un detaliu, ci sufletul trusoului.
                            Adăugăm numele, data botezului sau un mesaj special prin broderie de înaltă calitate,
                            pentru a transforma hăinuțele în amintiri pe viață.
                        </p>

                        <ul className="space-y-4 pt-4">
                            {[
                                "Broderie realizată cu ață de mătase premium",
                                "Previzualizare gratuită a designului înainte de execuție",
                                "Gata în 24-48h fără costuri de urgență",
                                "Disponibil pe trusouri, pături și hăinuțe"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="bg-green-100 rounded-full p-1 mt-0.5">
                                        <Check className="h-3 w-3 text-green-700" />
                                    </div>
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-6">
                            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild>
                                <Link href="/contact">Solicită Ofertă Personalizată</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Visual Content - Stacked Images */}
                    <div className="order-1 lg:order-2 relative h-[500px]">
                        {/* Abstract blobs/shapes */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl -z-10" />

                        <div className="absolute top-10 right-0 w-3/4 h-[350px] rounded-2xl overflow-hidden shadow-2xl rotate-3 bg-white z-10 border-4 border-white">
                            <Image
                                src="https://images.unsplash.com/photo-1516961642265-531549e80d29?auto=format&fit=crop&q=80&w=800"
                                alt="Broderie detaliu"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute bottom-10 left-0 w-2/3 h-[250px] rounded-2xl overflow-hidden shadow-xl -rotate-6 bg-white z-20 border-4 border-white">
                            <Image
                                src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800"
                                alt="Bebeluș fericit"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Floating elements */}
                        <div className="absolute top-20 left-10 bg-white p-4 rounded-xl shadow-lg z-30 animate-bounce duration-[3000ms]">
                            <p className="font-heading font-bold text-primary text-lg">"Andrei"</p>
                            <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Exemplu Broderie</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
