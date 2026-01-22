import { Truck, HeartHandshake, ShieldCheck, PhoneCall } from "lucide-react";
import { Container } from "@/components/ui/Container";

const features = [
    {
        icon: Truck,
        title: "Livrare Rapidă",
        description: "Expediere în 24-48h"
    },
    {
        icon: HeartHandshake,
        title: "Lucrat Manual",
        description: "Broderie personalizată"
    },
    {
        icon: ShieldCheck,
        title: "Bumbac 100%",
        description: "Certificat Oeko-Tex"
    },
    {
        icon: PhoneCall,
        title: "Suport dedicat",
        description: "Confirmăm telefonic"
    }
];

export function TrustBar() {
    return (
        <div className="bg-secondary/50 py-12 border-y border-muted/50">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <div key={feature.title} className="flex flex-col items-center text-center gap-3">
                            <div className="p-3 bg-white rounded-full text-primary shadow-sm border border-muted">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-heading font-semibold text-foreground">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
