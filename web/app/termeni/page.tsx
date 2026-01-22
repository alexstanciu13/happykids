import { Container } from "@/components/ui/Container";

export default function TermsPage() {
    return (
        <div className="py-20 bg-background">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <h1 className="font-heading text-4xl font-bold mb-4">Termeni și Condiții</h1>
                    <p className="text-sm text-muted-foreground mb-8">Ultima actualizare: Ianuarie 2026</p>

                    <div className="prose prose-lg max-w-none">
                        <h2>1. Informații Generale</h2>
                        <p>
                            Prezentul document reprezintă Termenii și Condițiile de utilizare a site-ului
                            <strong> happykids.ro</strong>, operat de <strong>Happy Kids SRL</strong>,
                            cu sediul în București, România.
                        </p>
                        <p>
                            Prin accesarea și utilizarea acestui site, acceptați în totalitate termenii și
                            condițiile prezentate mai jos. Dacă nu sunteți de acord cu acești termeni,
                            vă rugăm să nu utilizați site-ul.
                        </p>

                        <h2>2. Definiții</h2>
                        <ul>
                            <li><strong>Vânzător:</strong> Happy Kids SRL</li>
                            <li><strong>Client/Utilizator:</strong> Orice persoană fizică sau juridică care accesează site-ul</li>
                            <li><strong>Comandă:</strong> Solicitarea de achiziție a unuia sau mai multor produse</li>
                            <li><strong>Produs:</strong> Orice articol disponibil spre vânzare pe site</li>
                        </ul>

                        <h2>3. Înregistrare și Cont</h2>
                        <p>
                            Pentru a plasa o comandă, nu este obligatorie crearea unui cont. Totuși,
                            crearea unui cont vă oferă avantaje precum:
                        </p>
                        <ul>
                            <li>Salvarea adreselor de livrare</li>
                            <li>Istoric comenzi</li>
                            <li>Acces rapid la wishlist</li>
                            <li>Oferte exclusive pentru clienți înregistrați</li>
                        </ul>
                        <p>
                            Vă angajați să furnizați informații corecte și actualizate la înregistrare și
                            să păstrați confidențialitatea datelor de acces.
                        </p>

                        <h2>4. Comenzi și Prețuri</h2>

                        <h3>4.1 Plasarea Comenzii</h3>
                        <p>
                            Comanda se consideră validă după confirmarea prin email. Ne rezervăm dreptul
                            de a refuza sau anula orice comandă în cazul unor suspiciuni de fraudă sau
                            indisponibilitate a produselor.
                        </p>

                        <h3>4.2 Prețuri</h3>
                        <p>
                            Toate prețurile afișate pe site sunt exprimate în RON și includ TVA.
                            Ne rezervăm dreptul de a modifica prețurile fără notificare prealabilă,
                            însă comenzile confirmate vor respecta prețul de la momentul plasării.
                        </p>

                        <h3>4.3 Plata</h3>
                        <p>Acceptăm următoarele metode de plată:</p>
                        <ul>
                            <li>Card bancar (Visa, Mastercard)</li>
                            <li>Ramburs la curier</li>
                            <li>Transfer bancar</li>
                        </ul>

                        <h2>5. Livrare</h2>
                        <p>
                            Detalii complete despre livrare și costuri sunt disponibile în secțiunea
                            <a href="/livrare" className="text-primary hover:underline"> Livrare & Retur</a>.
                        </p>
                        <p>
                            Termenele de livrare sunt orientative. Nu ne asumăm răspunderea pentru
                            întârzierile cauzate de forță majoră sau de serviciile de curierat.
                        </p>

                        <h2>6. Drept de Retragere și Returnare</h2>
                        <p>
                            Conform legislației în vigoare (OUG 34/2014), aveți dreptul să vă retrageți
                            din contract în termen de 14 zile de la primirea produsului, fără a fi
                            necesar să justificați decizia.
                        </p>
                        <p className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                            <strong>Excepție:</strong> Produsele personalizate (cu broderie, monogramă)
                            nu pot fi returnate conform art. 16, lit. c) din OUG 34/2014.
                        </p>

                        <h2>7. Garanție și Reclamații</h2>
                        <p>
                            Toate produsele beneficiază de garanție conform legislației în vigoare.
                            În cazul unor defecte de fabricație, vă rugăm să ne contactați în termen
                            de 48h de la primirea produsului.
                        </p>

                        <h2>8. Proprietate Intelectuală</h2>
                        <p>
                            Tot conținutul site-ului (texte, imagini, logo-uri, design) este proprietatea
                            Happy Kids SRL și este protejat de legile dreptului de autor.
                            Reproducerea fără acordul scris este interzisă.
                        </p>

                        <h2>9. Protecția Datelor Personale</h2>
                        <p>
                            Ne angajăm să protejăm datele dumneavoastră personale conform GDPR.
                            Informațiile colectate sunt utilizate exclusiv pentru procesarea comenzilor
                            și îmbunătățirea serviciilor. Nu vom partaja datele cu terțe părți fără
                            consimțământul dumneavoastră.
                        </p>

                        <h2>10. Răspundere</h2>
                        <p>
                            Nu ne asumăm răspunderea pentru:
                        </p>
                        <ul>
                            <li>Daune indirecte sau consecvente</li>
                            <li>Pierderi de profit sau oportunități</li>
                            <li>Erori de utilizare a produselor</li>
                            <li>Întârzieri cauzate de forță majoră</li>
                        </ul>

                        <h2>11. Modificări ale Termenilor</h2>
                        <p>
                            Ne rezervăm dreptul de a modifica acești termeni în orice moment.
                            Modificările intră în vigoare imediat după publicarea pe site.
                            Vă recomandăm să verificați periodic această pagină.
                        </p>

                        <h2>12. Legea Aplicabilă și Jurisdicție</h2>
                        <p>
                            Prezentul contract este guvernat de legea română. Orice litigiu va fi
                            soluționat pe cale amiabilă sau, în caz contrar, de instanțele competente
                            din România.
                        </p>

                        <h2>13. Contact</h2>
                        <p>
                            Pentru orice întrebări legate de acești termeni, ne puteți contacta la:
                        </p>
                        <ul>
                            <li><strong>Email:</strong> contact@happykids.ro</li>
                            <li><strong>Telefon:</strong> 07xx xxx xxx</li>
                            <li><strong>Adresă:</strong> Str. Exemplului nr. 1, Sector 1, București</li>
                        </ul>

                        <div className="bg-gray-100 p-6 rounded-lg mt-8">
                            <p className="text-sm text-muted-foreground mb-0">
                                <strong>Happy Kids SRL</strong><br />
                                CUI: RO12345678<br />
                                Nr. Reg. Com.: J40/1234/2020<br />
                                Capital social: 10.000 RON
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
