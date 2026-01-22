"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";
import { Info, Check, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const EMPROIDERY_COLORS = [
    { name: "Auriu Regal", value: "#D4AF37", bg: "bg-[#D4AF37]" },
    { name: "Argintiu", value: "#C0C0C0", bg: "bg-[#C0C0C0]" },
    { name: "Bleumarin", value: "#000080", bg: "bg-blue-900" },
    { name: "Roz Pudrat", value: "#FFB6C1", bg: "bg-pink-300" },
    { name: "Alb", value: "#FFFFFF", bg: "bg-white border" },
];

export function ProductPersonalization() {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [color, setColor] = useState(EMPROIDERY_COLORS[0]);
    const [callMe, setCallMe] = useState(true);

    return (
        <div className="space-y-6 rounded-xl border border-primary/20 bg-primary/5 p-6 animate-in fade-in zoom-in-95 duration-500">
            <div className="flex items-center gap-2 mb-2">
                <h3 className="font-heading font-semibold text-lg text-primary">Personalizare Premium</h3>
                <span className="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-700 border border-yellow-200 rounded-full font-bold">+ 100 RON</span>
            </div>

            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="baby-name">Numele Bebelușului</Label>
                    <Input
                        id="baby-name"
                        placeholder="ex: Andrei Gabriel"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border-primary/20 focus-visible:ring-primary"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="date">Data Evenimentului</Label>
                    <Input
                        id="date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="border-primary/20 focus-visible:ring-primary"
                    />
                </div>

                <div className="space-y-2">
                    <Label>Culoare Broderie</Label>
                    <div className="flex gap-3 mt-1">
                        {EMPROIDERY_COLORS.map((c) => (
                            <button
                                key={c.name}
                                type="button"
                                onClick={() => setColor(c)}
                                className={cn(
                                    "h-8 w-8 rounded-full transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary ring-offset-2",
                                    c.bg,
                                    color.name === c.name ? "ring-2 ring-primary scale-110 shadow-md" : ""
                                )}
                                title={c.name}
                            />
                        ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Selectat: <span className="font-medium text-foreground">{color.name}</span></p>
                </div>

                <div className="flex items-start gap-2 pt-2">
                    <input
                        type="checkbox"
                        id="preview-call"
                        checked={callMe}
                        onChange={(e) => setCallMe(e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor="preview-call" className="text-sm text-muted-foreground cursor-pointer select-none">
                        Vreau să fiu contactat telefonic pentru a confirma detaliile broderiei înainte de execuție. <span className="text-primary font-medium">(Recomandat)</span>
                    </label>
                </div>
            </div>

            <div className="pt-4 border-t border-primary/10 space-y-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground bg-white/50 p-2 rounded">
                    <Info className="h-4 w-4 text-primary" />
                    <span>Timp de execuție: 24-48 ore de la confirmare.</span>
                </div>

                <Button size="lg" className="w-full text-base font-bold shadow-lg shadow-primary/20">
                    {(name || date) ? 'Adaugă Personalizat (+100 RON)' : 'Adaugă Simplu (Fără Personalizare)'}
                </Button>

                <div className="flex justify-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Check className="h-3 w-3" /> Verificare Manuală</span>
                    <span className="flex items-center gap-1"><Check className="h-3 w-3" /> Retur Gratuit (defecte)</span>
                </div>
            </div>
        </div>
    );
}
