import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle2, CloudSun, Snowflake } from "lucide-react";

export default function GuidePage() {
    return (
        <div className="py-16 bg-background">
            <Container className="max-w-3xl">
                <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-5 duration-700">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase">Ghidul Părinților și Nașilor</span>
                    <h1 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-6">
                        Cum alegi trusoul de botez perfect?
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        3 Pași simpli pentru a te asigura că ai tot ce trebuie pentru biserică și pentru confortul bebelușului.
                    </p>
                </div>

                <div className="space-y-12">
                    {/* Step 1 */}
                    <section className="bg-secondary/30 p-8 rounded-2xl border border-muted">
                        <div className="flex items-start gap-4">
                            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary text-white font-bold text-xl shrink-0">
                                1
                            </div>
                            <div className="space-y-4">
                                <h2 className="font-heading text-2xl font-bold">Stabilește Tema & Sezonul</h2>
                                <p className="text-muted-foreground">
                                    Confortul bebelușului este prioritar. Materialul trusoului trebuie ales în funcție de temperatură.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                    <div className="bg-white p-4 rounded-xl border border-muted flex items-center gap-3">
                                        <CloudSun className="text-orange-400 h-8 w-8" />
                                        <div>
                                            <div className="font-bold">Vara</div>
                                            <div className="text-sm text-muted-foreground">Pânză topită, In, Bumbac subțire</div>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-muted flex items-center gap-3">
                                        <Snowflake className="text-blue-400 h-8 w-8" />
                                        <div>
                                            <div className="font-bold">Iarna</div>
                                            <div className="text-sm text-muted-foreground">Catifea, Fleece, Tricotaj dens</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Step 2 */}
                    <section className="bg-secondary/30 p-8 rounded-2xl border border-muted">
                        <div className="flex items-start gap-4">
                            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary text-white font-bold text-xl shrink-0">
                                2
                            </div>
                            <div className="space-y-4">
                                <h2 className="font-heading text-2xl font-bold">Verifică Lista de Biserică</h2>
                                <p className="text-muted-foreground">
                                    Un set complet de botez trebuie să conțină elementele canonice cerute de preot. La Happy Kids, toate seturile includ standard:
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                                    {[
                                        "Prosop mare pentru bebeluș (cu capișon)",
                                        "Pânză de mir (Crâșmă)",
                                        "Fașă (albă sau colorată)",
                                        "Sticluță pentru mir",
                                        "Săpun natural",
                                        "Prosop pentru preot"
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-2 text-sm">
                                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Step 3 */}
                    <section className="bg-secondary/30 p-8 rounded-2xl border border-muted">
                        <div className="flex items-start gap-4">
                            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary text-white font-bold text-xl shrink-0">
                                3
                            </div>
                            <div className="space-y-4">
                                <h2 className="font-heading text-2xl font-bold">Personalizarea face diferența</h2>
                                <p className="text-muted-foreground">
                                    Transformă trusoul într-o amintire pe viață brodând numele și data botezului.
                                </p>
                                <div className="bg-white p-6 rounded-xl border border-primary/20 bg-primary/5">
                                    <h3 className="font-bold text-primary mb-2">Sfatul Designerului Happy Kids:</h3>
                                    <p className="text-sm italic">
                                        "Pentru un look regal, alege broderia Aurie pe trusou alb. Pentru un stil modern și discret, alege broderia în culoarea tematică (ex. Roz Pudrat sau Bleu) pe pânză ivoire."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <div className="text-center pt-8">
                        <h3 className="text-2xl font-bold mb-6">Gata să alegi trusoul perfect?</h3>
                        <div className="flex justify-center gap-4">
                            <Button size="lg" className="h-14 px-8 text-lg" asChild>
                                <Link href="/botez">Vezi Colecția de Trusouri</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
