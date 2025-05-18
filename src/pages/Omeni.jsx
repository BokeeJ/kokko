import React from 'react'

function Omeni() {
    return (
        <div>
            <section className="bg-black text-white py-12 px-4 lg:px-20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl lg:text-5xl font-light mb-10 text-center text-pink-300">Iza kamere</h2>

                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        {/* Slika šivenja */}
                        <div className="w-full flex justify-center mt-10">
                            <video
                                controls
                                className="max-w-[400px] w-full h-[400px] rounded-xl shadow-lg"
                            >
                                <source src="/Snimak.mp4" type="video/mp4" />

                            </video>
                        </div>


                        {/* Tekst */}
                        <div className="space-y-6 text-lg text-gray-200">
                            <p>
                                Svaki komad odeće koji vidiš u Katalogu nastaje iz mog malog ateljea, pod prstima, iglom i mašinom. Nema
                                šablona, nema automatizacije. Samo ja, materijal i ljubav prema svakom detalju.
                            </p>
                            <p>
                                Prvo biram tkaninu — volim da je osećam pod rukom, da znam da će lepo pasti na telo. Zatim krojim,
                                testiram, šijem. Nekad ide brzo, nekad prepravljam, menjam konac tri puta dok ne bude „baš to“.
                            </p>
                            <p className="italic text-pink-300">
                                Svaka bluza i svaka haljina ima svoju malu priču. A najlepši deo je kad postane deo tvoje.
                            </p>
                        </div>
                    </div>

                    {/* Dodatne slike ispod */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                        <img src="/sivenje2.jpg" alt="Atelje" className="rounded-xl shadow-md object-cover w-full h-[250px]" />
                        <img src="/materijal.jpg" alt="Tkanine" className="rounded-xl shadow-md object-cover w-full h-[250px]" />
                        <img src="/detalji.jpg" alt="Detalji" className="rounded-xl shadow-md object-cover w-full h-[250px]" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Omeni