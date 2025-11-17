import React, { useState } from 'react';
import katalog from '../services/Katalog';
import { Link, useOutletContext } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Qr from '../services/QrKodKomponenta';
import BojeKruzici from '../services/BojaKruzici';

function Katalog() {
    const { setBrojac } = useOutletContext();
    const [odabiri, setOdabiri] = useState({});
    const [poruka, setPoruka] = useState(false);

    const handleChange = (id, tip, vrednost) => {
        setOdabiri((prev) => ({
            ...prev,
            [id]: {
                ...prev[id],
                [tip]: vrednost,
            },
        }));
    };

    const handleAddToCart = (item) => {
        if (item.stanje === false) return; // sigurnosna blokada

        const selekcija = odabiri[item.id] || {};
        const korpa = JSON.parse(localStorage.getItem('korpa')) || [];

        korpa.push({
            id: Number(item.id),
            naziv: item.naziv,
            slika: item.slika[0],
            cena: item.cena,
            boja: selekcija.boja || item.boja?.[0],
            velicina: selekcija.velicina || item.velicina?.[0],
        });

        localStorage.setItem('korpa', JSON.stringify(korpa));
        setBrojac(korpa.length);
        setPoruka(true);
        setTimeout(() => setPoruka(false), 2000);
    };

    return (
        <div className="flex flex-col h-full w-full">
            <h1 className="text-white text-3xl lg:text-5xl text-center mb-10 font-bebas mt-5">
                Katalog
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4">

                {/* 🔔 PORUKA */}
                <AnimatePresence>
                    {poruka && (
                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.4 }}
                            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                            bg-pink-300 text-white px-6 py-3 rounded-xl shadow-xl z-[1000] 
                            text-xl justify-center items-center flex max-w-[90%] text-center"
                        >
                            ✅ Dodato u korpu!
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* ♻️ PRIKAZ PROIZVODA */}
                {katalog.map((item) => {
                    const selekcija = odabiri[item.id] || {};
                    const nemaNaStanju = item.stanje === false;

                    return (
                        <div
                            key={item.id}
                            className="relative flex flex-col bg-black rounded-xl shadow-md border border-zinc-700 overflow-hidden"
                        >
                            {/* 🖼️ SLIKA */}
                            {nemaNaStanju ? (
                                <div className="relative">
                                    <img
                                        className="w-full h-[150px] object-cover"
                                        src={item.slika[0]}
                                        alt={item.naziv}
                                    />
                                    {/* 🔴 OVERLAY */}
                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                        <span className="text-white text-lg font-bold uppercase tracking-wider">
                                            Rasprodato
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <Link to={`/katalog/${item.id}`}>
                                    <img
                                        className="w-full h-[150px] object-cover hover:scale-105 transition-transform duration-300"
                                        src={item.slika[0]}
                                        alt={item.naziv}
                                    />
                                </Link>
                            )}

                            {/* 📦 PODACI */}
                            <div className="p-2 flex flex-col gap-1 flex-grow">
                                <p className="text-pink-300 text-lg font-semibold">{item.naziv}</p>
                                <p className="text-white text-sm line-clamp-2">{item.opis}</p>
                                <p className="text-white">
                                    Cena:{' '}
                                    <span className="text-pink-300 font-bold">
                                        {item.cena},00 RSD
                                    </span>
                                </p>

                                {/* 📏 VELIČINA */}
                                <div className="text-white flex items-center gap-2 mt-1">
                                    Veličina:
                                    <select
                                        disabled={nemaNaStanju}
                                        className="flex-1 p-1 rounded bg-white text-black disabled:opacity-50 disabled:cursor-not-allowed"
                                        value={selekcija.velicina || item.velicina?.[0]}
                                        onChange={(e) =>
                                            handleChange(item.id, 'velicina', e.target.value)
                                        }
                                    >
                                        {item.velicina?.map((v, i) => (
                                            <option key={i} value={v}>
                                                {v}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* 🛒 DUGME */}
                                <button
                                    onClick={() => handleAddToCart(item)}
                                    disabled={nemaNaStanju}
                                    className={`mt-3 text-white px-4 py-2 rounded-lg font-medium transition
                                        ${nemaNaStanju
                                            ? 'bg-zinc-700 opacity-60 cursor-not-allowed'
                                            : 'hover:border hover:border-pink-400'
                                        }`}
                                >
                                    {nemaNaStanju ? 'Nema na stanju' : 'Dodaj u korpu'}
                                </button>
                            </div>
                        </div>
                    );
                })}

                <div className="hidden">
                    <Qr />
                </div>
            </div>
        </div>
    );
}

export default Katalog;
