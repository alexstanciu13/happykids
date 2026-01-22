import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { PenTool, Scissors, Heart } from "lucide-react";

export function OurStory() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* visual */}
                    <div className="relative isolate order-2 lg:order-1">
                        <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700">
                            <Image
                                src="/images/home_story_atelier_1767890107165.png"
                                alt="Atelier Happy Kids"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* decorative blob */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/50 rounded-full blur-3xl opacity-60"></div>
                    </div>

                    {/* content */}
                    <div className="order-1 lg:order-2 space-y-8 animate-in slide-in-from-right-10 duration-700">
                        <div>
                            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">Povestea Noastră</span>
                            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                                Fiecare fir este cusut cu grijă în atelierul nostru
                            </h2>
                            <div className="w-20 h-1 bg-primary mb-6"></div>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Happy Kids a pornit din dorința de a oferi bebelușilor confortul absolut în primele lor momente speciale.
                                Într-o lume a producției de masă, noi am ales drumul meșteșugului.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                                Fiecare trusou este tăiat, cusut și brodat manual în atelierul nostru din București, folosind doar bumbac organic certificat și dantele fine.
                                Nu vindem doar produse, ci amintiri care vor fi păstrate o viață.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                            <div className="flex flex-col gap-2">
                                <div className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center text-primary">
                                    <Scissors className="h-5 w-5" />
                                </div>
                                <h4 className="font-bold text-sm">Design Unic</h4>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center text-primary">
                                    <PenTool className="h-5 w-5" />
                                </div>
                                <h4 className="font-bold text-sm">Broderie Fină</h4>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center text-primary">
                                    <Heart className="h-5 w-5" />
                                </div>
                                <h4 className="font-bold text-sm">Pasiune Pură</h4>
                            </div>
                        </div>

                        <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
                            <Link href="/povestea-noastra">Descoperă Atelierul</Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
