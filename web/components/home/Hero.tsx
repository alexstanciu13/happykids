import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
    return (
        <div className="relative w-full h-[600px] md:h-[700px] bg-secondary overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="/images/hero_baby_christening_1767888520528.png"
                    alt="Bebeluș fericit la botez"
                    fill
                    className="object-cover object-center opacity-90"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent md:via-white/20" />
            </div>

            <Container className="relative h-full flex flex-col justify-center">
                <div className="max-w-xl space-y-6 animate-in slide-in-from-left-10 duration-700 fade-in">
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]">
                        Botezul de poveste începe cu detaliile care contează
                    </h1>
                    <p className="text-lg text-muted-foreground md:text-xl font-medium max-w-md">
                        Trusouri premium și hăinuțe personalizate cu drag pentru puiul tău. Livrare rapidă oriunde în România.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" className="w-full sm:w-auto text-base px-8 h-12" asChild>
                            <Link href="/botez">Vezi Colecția Botez</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8 h-12 bg-white/50 backdrop-blur hover:bg-white" asChild>
                            <Link href="/personalizare">Configurează Cadou</Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}
