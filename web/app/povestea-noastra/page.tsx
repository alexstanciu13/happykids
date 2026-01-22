import { Container } from "@/components/ui/Container";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="bg-background">
            {/* Hero */}
            <div className="relative h-[400px] w-full bg-secondary/30">
                <Image
                    src="/images/home_story_atelier_1767890107165.png"
                    alt="Atelier Branding"
                    fill
                    className="object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="font-heading text-5xl font-bold mb-4">Povestea Noastră</h1>
                        <p className="text-xl max-w-2xl mx-auto px-4">Despre pasiune, tradiție și momente unice.</p>
                    </div>
                </div>
            </div>

            <Container className="py-20">
                <div className="prose prose-lg mx-auto text-muted-foreground">
                    <p>
                        Totul a început în 2020, dintr-o dorință simplă: să creăm hăinuțe de botez care să nu fie doar frumoase, ci și extrem de confortabile pentru bebeluși.
                        Am observat că piața era plină de materiale sintetice și rigide, așa că am decis să facem o schimbare.
                    </p>
                    <h3 className="text-foreground font-heading">Valorile Noastre</h3>
                    <ul>
                        <li><strong>Calitate fără compromis:</strong> Folosim doar bumbac organic, in spălat și mătăsuri naturale.</li>
                        <li><strong>Lucru manual:</strong> Fiecare cusătură este verificată în atelierul nostru.</li>
                        <li><strong>Design atemporal:</strong> Credem în haine care pot fi păstrate ca amintire o viață întreagă.</li>
                    </ul>
                    <p>
                        Suntem o echipă mică de oameni pasionați, croitori și designeri, care pun suflet în fiecare colet pe care îl expediem.
                        Vă mulțumim că ați ales să faceți parte din familia Happy Kids!
                    </p>
                </div>
            </Container>
        </div>
    );
}
