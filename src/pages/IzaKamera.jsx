import React from 'react';

function IzaKamera() {
    const videoSnimci = [
        "/snimak2.mp4",
        "/snimak0.mp4",
        "/snimak3.mp4",
        "/snimak4.mp4",
        "/snimak5.mp4",
        "/snimak6.mp4",
        "/snimak7.mp4"
    ];

    return (
        <div>
            <section className="bg-black text-white py-12 px-4 lg:px-20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-white text-3xl lg:text-5xl text-center mb-10 font-bebas">Iza kamere</h2>

                    <div className="flex justify-center items-center">

                        {/* Tekst */}
                        <div className="space-y-6 text-lg text-gray-200 text-center">
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

                    {/* Dodatni videi */}
                    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-16">
                        {videoSnimci.map((src, index) => (
                            <video
                                key={index}
                                controls
                                className="w-full h-auto rounded-xl shadow-lg object-cover"
                            >
                                <source src={src} type="video/mp4" />
                            </video>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default IzaKamera;
