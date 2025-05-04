import React, { useState } from 'react'
import katalog from '../services/Katalog'
import { useOutletContext } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"


function Katalog() {
    const { setBrojac } = useOutletContext()
    const [odabiri, setOdabiri] = useState({})
    const [poruka, setPoruka] = useState(false)

    const handleChange = (id, tip, vrednost) => {
        setOdabiri(prev => ({
            ...prev,
            [id]: {
                ...prev[id],
                [tip]: vrednost
            }
        }))
    }

    const handleAddToCart = (item) => {
        const selekcija = odabiri[item.id] || {}
        const korpa = JSON.parse(localStorage.getItem("korpa")) || []

        korpa.push({
            id: item.id,
            naziv: item.naziv,
            slika: item.slika,
            cena: item.cena,
            boja: selekcija.boja || item.boja[0],
            velicina: selekcija.velicina || item.velicina[0]
        })

        localStorage.setItem("korpa", JSON.stringify(korpa))
        setBrojac(korpa.length)
        setPoruka(true)
        setTimeout(() => setPoruka(false), 2000)

    }

    return (
        <div className="flex flex-col gap-6 p-4">
            <AnimatePresence>
                {poruka && (
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.4 }}
                        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                       bg-green-500 text-white px-6 py-3 rounded-xl shadow-xl z-[1000] text-xl"
                    >
                        ✅ Dodato u korpu!
                    </motion.div>
                )}
            </AnimatePresence>
            {katalog.map((item) => {
                const selekcija = odabiri[item.id] || {}

                return (
                    <div key={item.id} className="flex gap-4 w-full bg-black rounded-xl shadow-md overflow-hidden">
                        {/* Slika */}
                        <div>
                            <img className="w-[150px] h-[200px] object-cover" src={item.slika} alt={item.naziv} />
                        </div>

                        {/* Podaci */}
                        <div className="p-5 flex flex-col w-[50%] justify-between">
                            <div className="space-y-2">
                                <p className="text-white text-xl">{item.naziv}</p>
                                <p className="text-white">{item.opis}</p>
                                <p className="text-white">Cena: {item.cena},00 rsd</p>

                                {/* Biranje boje */}
                                <div className="text-black">
                                    Boja:
                                    <select
                                        className="ml-2 p-1 rounded"
                                        value={selekcija.boja || item.boja[0]}
                                        onChange={(e) => handleChange(item.id, "boja", e.target.value)}
                                    >
                                        {item.boja.map((b, i) => (
                                            <option key={i} value={b}>{b}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Biranje veličine */}
                                <div className="text-black">
                                    Veličina:
                                    <select
                                        className="ml-2 p-1 rounded"
                                        value={selekcija.velicina || item.velicina[0]}
                                        onChange={(e) => handleChange(item.id, "velicina", e.target.value)}
                                    >
                                        {item.velicina.map((v, i) => (
                                            <option key={i} value={v}>{v}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Dugme */}
                            <div className="flex justify-center items-center mt-4">
                                <button
                                    onClick={() => handleAddToCart(item)}
                                    className="text-white bg-pink-500 px-4 py-2 rounded hover:bg-pink-600"
                                >
                                    Dodaj u korpu
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Katalog
