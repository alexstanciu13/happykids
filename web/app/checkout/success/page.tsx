"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function OrderSuccessPage() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center py-20">
            <Container className="text-center max-w-lg">
                <div className="mb-8 flex justify-center">
                    <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 animate-in zoom-in duration-500">
                        <CheckCircle2 className="h-12 w-12" />
                    </div>
                </div>

                <h1 className="font-heading text-4xl font-bold mb-4">Comandă Confirmată!</h1>
                <p className="text-muted-foreground text-lg mb-8">
                    Îți mulțumim, <span className="font-bold text-foreground">Andreea</span>! Comanda ta <span className="font-mono bg-secondary px-2 py-0.5 rounded text-sm text-foreground">#HK-8291</span> a fost înregistrată cu succes.
                </p>

                <div className="bg-secondary/20 p-6 rounded-xl border border-secondary mb-8 text-left">
                    <h3 className="font-bold mb-2 text-sm uppercase tracking-wider text-muted-foreground">Ce urmează?</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex gap-2 items-start">
                            <span className="bg-primary/20 text-primary h-5 w-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</span>
                            <span>Vei primi un email de confirmare în scurt timp.</span>
                        </li>
                        <li className="flex gap-2 items-start">
                            <span className="bg-primary/20 text-primary h-5 w-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</span>
                            <span>Te vom suna pentru a confirma detaliile personalizării.</span>
                        </li>
                        <li className="flex gap-2 items-start">
                            <span className="bg-primary/20 text-primary h-5 w-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0">3</span>
                            <span>Coletul va fi expediat în 24-48h.</span>
                        </li>
                    </ul>
                </div>

                <div className="flex gap-4 justify-center">
                    <Button variant="outline" asChild>
                        <Link href="/account">Vezi Comanda</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/">Continuă Cumpărăturile <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </div>
            </Container>
        </div>
    );
}
