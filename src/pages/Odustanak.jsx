import React from "react";

function Odustanak() {
    return (
        <div className="min-h-screen px-6 py-12 bg-black text-gray-200">
            <div className="max-w-3xl mx-auto font-bebas">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-pink-400">Odustanak od kupovine</h1>

                <p className="mb-4">
                    Kupac ima pravo da odustane od kupovine u roku od 14 dana od prijema pošiljke, u skladu sa Zakonom o zaštiti potrošača.
                </p>

                <ul className="list-disc ml-5 space-y-2">
                    <li>Proizvod mora biti nekorišćen i u originalnom pakovanju.</li>
                    <li>Trošak povratne poštarine snosi kupac.</li>
                    <li>Po prijemu vraćenog proizvoda i provere ispravnosti, novac se vraća u roku od 7 radnih dana.</li>
                </ul>

                <p className="mt-6 text-sm text-gray-400">
                    Za sve dodatne informacije možete nas kontaktirati putem mejla ili Instagrama.
                </p>
            </div>
        </div>
    );
}

export default Odustanak;
