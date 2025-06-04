import React from "react";
import { CiInstagram, CiMail } from "react-icons/ci";

function Kontakt() {
    return (
        <div className="min-h-screen px-6 py-12 bg-black text-gray-200">
            <div className="max-w-3xl mx-auto font-bebas">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-pink-400">Kontakt</h1>

                <p className="mb-6">
                    Ukoliko imate bilo kakva pitanja, sugestije ili želite da nas kontaktirate u vezi porudžbina,
                    slobodno se javite putem sledećih kanala:
                </p>

                <div className="flex flex-col gap-4 text-lg">
                    <div className="flex items-center gap-3">
                        <CiInstagram className="text-3xl text-pink-300" />
                        <a
                            href="https://www.instagram.com/kokko.design"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-400 transition"
                        >
                            Instagram
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        <CiMail className="text-3xl text-pink-300" />
                        <a
                            href="mailto:kkaranovic14@gmail.com"
                            className="hover:text-pink-400 transition"
                        >
                            E-Mail
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Kontakt;
