import React, { useState } from 'react';
import katalog from '../services/Katalog';
import { Link, useOutletContext } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Qr from '../services/QrKodKomponenta';

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
        const selekcija = odabiri[item.id] || {};
        const korpa = JSON.parse(localStorage.getItem('korpa')) || [];

        korpa.push({
            id: Number(item.id),
            naziv: item.naziv,
            slika: item.slika[0],
            cena: item.cena,
            boja: selekcija.boja || item.boja[0],
            velicina: selekcija.velicina || item.velicina[0],
        });

        localStorage.setItem('korpa', JSON.stringify(korpa));
        setBrojac(korpa.length);
        setPoruka(true);
        setTimeout(() => setPoruka(false), 2000);
    };

    return (
        <div className="flex flex-col h-full w-full">
            <h1 className="text-white text-3xl m-5 text-center">Katalog</h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4">
                <AnimatePresence>
                    {poruka && (
                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.4 }}
                            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-6 py-3 rounded-xl shadow-xl z-[1000] text-xl"
                        >
                            ✅ Dodato u korpu!
                        </motion.div>
                    )}
                </AnimatePresence>

                {katalog.map((item) => {
                    const selekcija = odabiri[item.id] || {};

                    return (
                        <div
                            key={item.id}
                            className="flex flex-col bg-black rounded-xl shadow-md overflow-hidden w-full border border-zinc-700 hover:border-pink-500 transition"
                        >
                            <Link to={`/katalog/${item.id}`}>
                                <img
                                    className="w-full h-[150px] object-cover hover:scale-105 transition-transform duration-300"
                                    src={item.slika[0]}
                                    alt={item.naziv}
                                />
                            </Link>

                            <div className="p-2 flex flex-col justify-between flex-grow gap-1">
                                <p className="text-pink-500 text-lg font-semibold">{item.naziv}</p>
                                <p className="text-white text-sm line-clamp-2">{item.opis}</p>
                                <p className="text-white">
                                    Cena: <span className="text-pink-400 font-bold">{item.cena},00 RSD</span>
                                </p>

                                <div className="flex flex-col gap-2 text-sm">
                                    <div className="text-white flex items-center gap-2">
                                        Boja:
                                        <select
                                            className="flex-1 p-1 rounded bg-white text-black"
                                            value={selekcija.boja || item.boja[0]}
                                            onChange={(e) => handleChange(item.id, 'boja', e.target.value)}
                                        >
                                            {item.boja.map((b, i) => (
                                                <option key={i} value={b}>
                                                    {b}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="text-white flex items-center gap-2">
                                        Veličina:
                                        <select
                                            className="flex-1 p-1 rounded bg-white text-black"
                                            value={selekcija.velicina || item.velicina[0]}
                                            onChange={(e) => handleChange(item.id, 'velicina', e.target.value)}
                                        >
                                            {item.velicina.map((v, i) => (
                                                <option key={i} value={v}>
                                                    {v}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="flex justify-center mt-4">
                                    <button
                                        onClick={() => handleAddToCart(item)}
                                        className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium"
                                    >
                                        Dodaj u korpu
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* QR kod */}
                <div className="hidden">
                    <Qr />
                </div>
            </div>
        </div>
    );
}

export default Katalog;
