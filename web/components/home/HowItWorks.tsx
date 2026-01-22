import Image from "next/image";
import { Container } from "@/components/ui/Container";

const steps = [
    {
        id: 1,
        title: "Alegi Modelul",
        description: "Explorează colecțiile noastre și găsește stilul care se potrivește poveștii voastre.",
        image: "/images/home_step_1_choose_1767890123682.png"
    },
    {
        id: 2,
        title: "Personalizezi",
        description: "Introduci numele copilului și data botezului. Noi îți trimitem o simulare înainte.",
        image: "/images/home_step_2_customize_1767890138534.png"
    },
    {
        id: 3,
        title: "Livrare Rapidă",
        description: "Primești pachetul elegant direct acasă, gata de oferit sau de folosit.",
        image: "/images/home_step_3_delivery_1767890155067.png"
    }
];

export function HowItWorks() {
    return (
        <section className="py-24 bg-secondary/30 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <Container className="relative">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Cum comanzi trusoul perfect?</h2>
                    <p className="text-lg text-muted-foreground">Simplificăm procesul pentru ca tu să te bucuri de moment. Iată cât de ușor este:</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-[100px] left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-primary/30 -z-10"></div>

                    {steps.map((step) => (
                        <div key={step.id} className="flex flex-col items-center text-center group">
                            <div className="relative h-48 w-48 mb-8 transition-transform duration-500 group-hover:-translate-y-2">
                                <div className="absolute inset-4 bg-white rounded-full shadow-xl flex items-center justify-center p-6 border-4 border-white">
                                    <div className="relative w-full h-full">
                                        <Image src={step.image} alt={step.title} fill className="object-contain" />
                                    </div>
                                </div>
                                {/* Number Badge */}
                                <div className="absolute -top-2 right-4 h-10 w-10 bg-primary text-white font-heading font-bold text-xl flex items-center justify-center rounded-full shadow-lg border-2 border-white">
                                    {step.id}
                                </div>
                            </div>

                            <h3 className="font-heading text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed px-4">{step.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
