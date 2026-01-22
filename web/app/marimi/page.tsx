import { Container } from "@/components/ui/Container";

export default function SizeGuidePage() {
    return (
        <div className="py-20 bg-background">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <h1 className="font-heading text-4xl font-bold mb-8">Ghid de Mărimi</h1>

                    <div className="prose prose-lg max-w-none">
                        <p className="lead">
                            Ghidul nostru de mărimi te ajută să alegi dimensiunea perfectă pentru micuțul tău.
                            Toate mărimile sunt orientative și pot varia ușor în funcție de producător.
                        </p>

                        <h2>Hăinuțe & Costume</h2>

                        <div className="overflow-x-auto mb-8">
                            <table className="min-w-full border-collapse border border-gray-300">
                                <thead className="bg-secondary">
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2">Mărime</th>
                                        <th className="border border-gray-300 px-4 py-2">Vârstă</th>
                                        <th className="border border-gray-300 px-4 py-2">Înălțime (cm)</th>
                                        <th className="border border-gray-300 px-4 py-2">Greutate (kg)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-bold">56</td>
                                        <td className="border border-gray-300 px-4 py-2">0-1 luni</td>
                                        <td className="border border-gray-300 px-4 py-2">50-56 cm</td>
                                        <td className="border border-gray-300 px-4 py-2">3-4 kg</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-300 px-4 py-2 font-bold">62</td>
                                        <td className="border border-gray-300 px-4 py-2">1-3 luni</td>
                                        <td className="border border-gray-300 px-4 py-2">57-62 cm</td>
                                        <td className="border border-gray-300 px-4 py-2">4-5 kg</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-bold">68</td>
                                        <td className="border border-gray-300 px-4 py-2">3-6 luni</td>
                                        <td className="border border-gray-300 px-4 py-2">63-68 cm</td>
                                        <td className="border border-gray-300 px-4 py-2">5-7 kg</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-300 px-4 py-2 font-bold">74</td>
                                        <td className="border border-gray-300 px-4 py-2">6-9 luni</td>
                                        <td className="border border-gray-300 px-4 py-2">69-74 cm</td>
                                        <td className="border border-gray-300 px-4 py-2">7-9 kg</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-bold">80</td>
                                        <td className="border border-gray-300 px-4 py-2">9-12 luni</td>
                                        <td className="border border-gray-300 px-4 py-2">75-80 cm</td>
                                        <td className="border border-gray-300 px-4 py-2">9-11 kg</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-300 px-4 py-2 font-bold">86</td>
                                        <td className="border border-gray-300 px-4 py-2">12-18 luni</td>
                                        <td className="border border-gray-300 px-4 py-2">81-86 cm</td>
                                        <td className="border border-gray-300 px-4 py-2">11-12 kg</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-bold">92</td>
                                        <td className="border border-gray-300 px-4 py-2">18-24 luni</td>
                                        <td className="border border-gray-300 px-4 py-2">87-92 cm</td>
                                        <td className="border border-gray-300 px-4 py-2">12-14 kg</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2>Încălțăminte & Botosei</h2>

                        <div className="overflow-x-auto mb-8">
                            <table className="min-w-full border-collapse border border-gray-300">
                                <thead className="bg-secondary">
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2">Mărime EU</th>
                                        <th className="border border-gray-300 px-4 py-2">Vârstă</th>
                                        <th className="border border-gray-300 px-4 py-2">Lungime picior (cm)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-bold">16</td>
                                        <td className="border border-gray-300 px-4 py-2">0-3 luni</td>
                                        <td className="border border-gray-300 px-4 py-2">9.5 cm</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-300 px-4 py-2 font-bold">17</td>
                                        <td className="border border-gray-300 px-4 py-2">3-6 luni</td>
                                        <td className="border border-gray-300 px-4 py-2">10.5 cm</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-bold">18</td>
                                        <td className="border border-gray-300 px-4 py-2">6-9 luni</td>
                                        <td className="border border-gray-300 px-4 py-2">11 cm</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-300 px-4 py-2 font-bold">19</td>
                                        <td className="border border-gray-300 px-4 py-2">9-12 luni</td>
                                        <td className="border border-gray-300 px-4 py-2">11.5 cm</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-bold">20</td>
                                        <td className="border border-gray-300 px-4 py-2">12-15 luni</td>
                                        <td className="border border-gray-300 px-4 py-2">12.5 cm</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2>Cum Măsor Corect?</h2>

                        <h3>Pentru Hăinuțe:</h3>
                        <ol>
                            <li><strong>Înălțimea:</strong> Măsoară bebelușul de la cap până la tălpi, în poziție culcată</li>
                            <li><strong>Greutatea:</strong> Cântărește bebelușul pe un cântar de precizie</li>
                            <li><strong>Recomandare:</strong> În caz de dubiu, alege mărimea mai mare - bebelușii cresc rapid!</li>
                        </ol>

                        <h3>Pentru Încălțăminte:</h3>
                        <ol>
                            <li>Așează piciorul bebelușului pe o foaie de hârtie</li>
                            <li>Marchează vârful degetului mare și călcâiul</li>
                            <li>Măsoară distanța între cele două puncte</li>
                            <li>Adaugă 0.5-1 cm pentru confort</li>
                        </ol>

                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mt-8">
                            <h3 className="mt-0">💡 Sfat Util</h3>
                            <p className="mb-0">
                                Pentru produsele de botez, recomandăm să alegi mărimea în funcție de vârsta
                                estimată a bebelușului la data ceremoniei, nu de vârsta actuală.
                                Dacă ai nelămuriri, contactează-ne și te ajutăm să alegi mărimea perfectă!
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
