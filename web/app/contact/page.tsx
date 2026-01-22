import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="py-20 bg-background">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="font-heading text-4xl font-bold mb-4">Contactează-ne</h1>
                    <p className="text-muted-foreground">
                        Suntem aici să te ajutăm cu orice întrebare despre produsele noastre sau comanda ta.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Info */}
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                                <Phone className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Telefon</h3>
                                <p className="text-muted-foreground mb-1">Luni - Vineri: 09:00 - 18:00</p>
                                <a href="tel:0700000000" className="text-primary font-bold hover:underline">07xx xxx xxx</a>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Email</h3>
                                <p className="text-muted-foreground mb-1">Răspundem în maxim 24h.</p>
                                <a href="mailto:contact@happykids.ro" className="text-primary font-bold hover:underline">contact@happykids.ro</a>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Atelier & Showroom</h3>
                                <p className="text-muted-foreground">Strada Exemplului Nr. 1, Sector 1, București</p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border">
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Nume</label>
                                    <Input placeholder="Numele tău" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Telefon</label>
                                    <Input placeholder="07xx.." />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <Input type="email" placeholder="email@exemplu.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Mesaj</label>
                                <textarea
                                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Cum te putem ajuta?"
                                ></textarea>
                            </div>
                            <Button className="w-full">Trimite Mesaj</Button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
}
