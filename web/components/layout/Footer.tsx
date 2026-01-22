import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-secondary pt-16 pb-8 border-t border-muted">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <div className="relative h-32 w-64">
                                <Image
                                    src="/images/logo.png"
                                    alt="Happy Kids"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                            Hăinuțe și trusouri de botez create cu dragoste și atenție la detalii, pentru momentele magice din viața micuțului tău.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors">
                                <Facebook className="h-4 w-4" />
                            </Link>
                            <Link href="#" className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors">
                                <Instagram className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading font-semibold mb-4">Magazin</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/botez" className="hover:text-primary">Trusouri Botez</Link></li>
                            <li><Link href="/hainute" className="hover:text-primary">Hăinuțe Bebe</Link></li>
                            <li><Link href="/cadouri" className="hover:text-primary">Idei Cadouri</Link></li>
                            <li><Link href="/reduceri" className="hover:text-primary">Oferte Speciale</Link></li>
                        </ul>
                    </div>

                    {/* Customer Care */}
                    <div>
                        <h4 className="font-heading font-semibold mb-4">Suport Clienți</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                            <li><Link href="/livrare" className="hover:text-primary">Livrare & Retur</Link></li>
                            <li><Link href="/marimi" className="hover:text-primary">Ghid de Mărimi</Link></li>
                            <li><Link href="/termeni" className="hover:text-primary">Termeni și Condiții</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-heading font-semibold mb-4">Contact</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-primary" />
                                <span>07xx xxx xxx</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-primary" />
                                <span>contact@happykids.ro</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 text-primary mt-1" />
                                <span>Str. Exemplului nr. 1, București</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-muted/50 pt-8 text-center text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} Happy Kids. Toate drepturile rezervate.</p>
                </div>
            </Container>
        </footer>
    );
}
