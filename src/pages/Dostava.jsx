import React from "react";

function Dostava() {
    return (
        <div className="min-h-screen px-6 py-12 text-gray-200 bg-black">
            <div className="max-w-3xl mx-auto font-bebas">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-pink-400">Dostava</h1>

                <p className="mb-4">
                    Sve porudžbine se šalju putem **Pošte Srbije** ili kurirske službe po izboru prodavca.
                </p>

                <p className="mb-4">
                    **Troškove dostave snosi kupac**, a iznos poštarine zavisi od težine paketa i važećeg cenovnika kurirske službe.
                    Poštarina se plaća prilikom preuzimanja pošiljke (pouzećem).
                </p>

                <p className="mb-4">
                    Nakon potvrde porudžbine, paket se šalje u roku od **1 do 3 radna dana**.
                    Rok isporuke obično traje između **1 i 3 radna dana**, u zavisnosti od lokacije.
                </p>

                <p className="mb-4">
                    Za kupce iz Lazarevca postoji mogućnost **ličnog preuzimanja** uz prethodni dogovor.
                    Prilikom popunjavanja porudžbine, napomenite opciju ličnog preuzimanja ili nas kontaktirajte radi dogovora.
                </p>

                <p className="mt-8 text-sm text-gray-400">
                    Za dodatne informacije, posetite <a href="/kontakt" className="text-pink-400 underline hover:text-pink-300">kontakt stranicu</a>.
                </p>
            </div>
        </div>
    );
}

export default Dostava;
