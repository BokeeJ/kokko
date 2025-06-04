import React from "react";

function Saradnja() {
    return (
        <div className="min-h-screen px-6 py-12 bg-black text-gray-200">
            <div className="max-w-3xl mx-auto font-bebas">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-pink-400">Saradnja sa nama</h1>

                <p className="mb-4">
                    Otvoreni smo za saradnju sa influenserima, fotografima, modnim brendovima i drugim kreativcima koji prepoznaju vrednosti našeg dizajna.
                </p>

                <ul className="list-disc ml-5 space-y-2">
                    <li>Promocija proizvoda</li>
                    <li>Tematska fotografisanja</li>
                    <li>Limitirane kolekcije i zajednički projekti</li>
                </ul>

                <p className="mt-6">
                    Ako imate ideju za saradnju, pišite nam na <span className="text-pink-400">info@kokkodesign.rs</span> ili putem Instagrama:{" "}
                    <a
                        href="https://www.instagram.com/kokko.design"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-400 hover:underline"
                    >
                        @kokko.design
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Saradnja;
