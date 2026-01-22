import { Container } from "@/components/ui/Container";
import { Truck, RotateCcw, Package, Clock } from "lucide-react";

export default function ShippingPage() {
    return (
        <div className="py-20 bg-background">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <h1 className="font-heading text-4xl font-bold mb-8">Livrare & Retur</h1>

                    {/* Quick Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
                        <div className="bg-white p-6 rounded-xl border text-center">
                            <Truck className="h-8 w-8 text-primary mx-auto mb-3" />
                            <h3 className="font-bold text-sm mb-1">Livrare Rapidă</h3>
                            <p className="text-xs text-muted-foreground">24-48h în toată țara</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border text-center">
                            <Package className="h-8 w-8 text-primary mx-auto mb-3" />
                            <h3 className="font-bold text-sm mb-1">Livrare Gratuită</h3>
                            <p className="text-xs text-muted-foreground">Comenzi peste 300 RON</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border text-center">
                            <RotateCcw className="h-8 w-8 text-primary mx-auto mb-3" />
                            <h3 className="font-bold text-sm mb-1">Retur Gratuit</h3>
                            <p className="text-xs text-muted-foreground">14 zile garanție</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border text-center">
                            <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                            <h3 className="font-bold text-sm mb-1">Livrare Aceeași Zi</h3>
                            <p className="text-xs text-muted-foreground">București (comenzi până la 12:00)</p>
                        </div>
                    </div>

                    {/* Detailed Content */}
                    <div className="prose prose-lg max-w-none">
                        <h2>Livrare</h2>

                        <h3>Costuri de Livrare</h3>
                        <ul>
                            <li><strong>Livrare standard (24-48h):</strong> 20 RON</li>
                            <li><strong>Livrare gratuită:</strong> Pentru comenzi peste 300 RON</li>
                            <li><strong>Livrare în aceeași zi (București):</strong> 35 RON (comenzi plasate până la 12:00)</li>
                        </ul>

                        <h3>Timp de Procesare</h3>
                        <p>
                            Produsele standard sunt expediate în 24h de la confirmarea comenzii.
                            Produsele personalizate necesită 2-3 zile lucrătoare pentru execuție,
                            după confirmarea telefonică a detaliilor de broderie.
                        </p>

                        <h3>Urmărire Comandă</h3>
                        <p>
                            Vei primi un email cu numărul AWB imediat ce coletul este preluat de curier.
                            Poți urmări statusul comenzii în secțiunea "Contul Meu".
                        </p>

                        <h2>Politica de Retur</h2>

                        <h3>Condiții Generale</h3>
                        <ul>
                            <li>Ai dreptul să returnezi produsele în termen de <strong>14 zile</strong> de la primire</li>
                            <li>Produsele trebuie să fie în starea originală, nefolosite, cu etichetele intacte</li>
                            <li>Returnarea se face pe cheltuiala ta (poți folosi curier la alegere)</li>
                            <li>Banii se returnează în maxim 7 zile lucrătoare de la primirea coletului</li>
                        </ul>

                        <h3>Produse Personalizate</h3>
                        <p className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                            <strong>Atenție:</strong> Produsele personalizate (cu broderie, monogramă sau alte customizări)
                            nu pot fi returnate, conform legislației în vigoare. De aceea, te contactăm telefonic
                            înainte de execuție pentru a confirma toate detaliile.
                        </p>

                        <h3>Cum Returnez un Produs?</h3>
                        <ol>
                            <li>Contactează-ne la <strong>contact@happykids.ro</strong> sau <strong>07xx xxx xxx</strong></li>
                            <li>Primești un număr RMA (Return Merchandise Authorization)</li>
                            <li>Ambalează produsul în ambalajul original</li>
                            <li>Trimite coletul la adresa: <em>Str. Exemplului nr. 1, Sector 1, București</em></li>
                            <li>Banii se returnează după verificarea produsului</li>
                        </ol>

                        <h2>Întrebări Frecvente</h2>

                        <h3>Pot schimba un produs cu altul?</h3>
                        <p>
                            Da! Dacă dorești să schimbi un produs cu altul (altă mărime, altă culoare),
                            te rugăm să ne contactezi. Diferența de preț se achită sau se returnează după caz.
                        </p>

                        <h3>Ce fac dacă produsul sosește deteriorat?</h3>
                        <p>
                            Contactează-ne imediat cu fotografii ale produsului și ambalajului.
                            Vom rezolva situația în maxim 24h (înlocuire sau rambursare completă).
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}
