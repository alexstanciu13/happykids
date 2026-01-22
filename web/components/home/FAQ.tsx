"use client";

import { Container } from "@/components/ui/Container";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Cât durează livrarea?",
        answer: "Livrăm în 24-48h în toată țara prin curier rapid. Pentru București, livrarea se face în aceeași zi pentru comenzile plasate până la ora 12:00."
    },
    {
        question: "Pot personaliza orice produs?",
        answer: "Da! Majoritatea produselor noastre pot fi personalizate cu numele bebelușului, data botezului sau alte detalii speciale. Înainte de execuție, te contactăm telefonic pentru confirmare."
    },
    {
        question: "Ce materiale folosiți?",
        answer: "Folosim exclusiv bumbac 100% certificat Oeko-Tex, mătase naturală și dantelă de calitate superioară. Toate materialele sunt hipoalergenice și sigure pentru pielea delicată a bebelușilor."
    },
    {
        question: "Pot returna produsele personalizate?",
        answer: "Produsele personalizate nu pot fi returnate, însă înainte de execuție te contactăm pentru confirmare. Produsele standard pot fi returnate în 14 zile dacă nu au fost folosite."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-background">
            <Container>
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Întrebări Frecvente</h2>
                        <p className="text-muted-foreground">Tot ce trebuie să știi despre produsele și serviciile noastre.</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border rounded-xl overflow-hidden bg-white">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-secondary/20 transition-colors"
                                >
                                    <span className="font-semibold text-foreground">{faq.question}</span>
                                    <ChevronDown
                                        className={cn(
                                            "h-5 w-5 text-muted-foreground transition-transform",
                                            openIndex === index && "rotate-180"
                                        )}
                                    />
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 pb-4 text-muted-foreground leading-relaxed">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
