import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

function OrderInformation() {
    const [poruka, setPoruka] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const data = {
            ime: form.ime.value,
            prezime: form.prezime.value,
            adresa: form.adresa.value,
            telefon: form.telefon.value,
        }
        console.log(data);
        form.reset();
        setPoruka(true)
        setTimeout(() => setPoruka(false), 2000)
    }




    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-5 m-5 text-black">
            <input className="w-[60%] h-[50px]  p-2 text-l" type="text" name="ime" placeholder="Unesite ime.." required />
            <input className="w-[60%] h-[50px]  p-2 text-l" type="text" name="prezime" placeholder="Unesite prezime.." required />
            <input className="w-[60%] h-[50px]  p-2 text-l" type="text" name="adresa" placeholder="Unesite adresu.." required />
            <input
                className="w-[60%] h-[50px]  p-2 text-l"
                type="text"
                name="grad"
                placeholder="Unesite grad.."
                required
            />
            <input
                className="w-[60%] h-[50px] p-2 text-l"
                type="tel"
                name="telefon"
                placeholder="Unesite broj telefona.."
                pattern="[0-9+ ]*"
                maxLength={15}
                required
                autoComplete="tel"
            />
            <button type="submit" className="w-[40%] bg-pink-500 text-white font-bold py-2 rounded hover:bg-pink-600">
                Poruči
            </button>
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
                        ✅ Poručeno!
                    </motion.div>
                )}
            </AnimatePresence>
        </form>
    )
}

export default OrderInformation
