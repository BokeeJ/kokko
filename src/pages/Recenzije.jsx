import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Recenzije() {
    const [recenzije, setRecenzije] = useState([])
    const [prikaziSve, setPrikaziSve] = useState(false)

    useEffect(() => {
        fetch('https://kokko-backend.onrender.com/api/recenzije')
            .then(res => res.json())
            .then(data => {
                const obrnuto = data.reverse();
                setRecenzije(obrnuto)
            })
            .catch(err => console.error('Greška pri učitavanju:', err))
    }, [])

    const renderZvezdice = (broj) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < broj ? 'text-yellow-400' : 'text-gray-500'}>
                ★
            </span>
        ))
    }

    const recenzijeZaPrikaz = Array.isArray(recenzije)
        ? (prikaziSve ? recenzije : recenzije.slice(0, 2))
        : [];

    return (
        <div className="relative p-5 max-w-2xl mx-auto text-white w-full rounded-xl overflow-hidden touch-pan-y">
            {/* Pozadinska slika */}
            <img
                src="/black2.webp"
                alt="pozadina"
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none select-none"
            />

            {/* Sadržaj preko pozadine */}
            <div className="relative z-10 bg-black/70 p-6 rounded-xl">
                <h2 className="text-3xl mb-4 text-center font-dives">Utisci</h2>

                <div className="space-y-4 mb-8">
                    {recenzijeZaPrikaz.map((r, i) => (
                        <div key={i} className="bg-zinc-800 p-4 rounded shadow">
                            <p className="font-bold text-pink-400">{r.ime}</p>
                            <div className="mb-1">{renderZvezdice(Number(r.ocena))}</div>
                            <p>{r.komentar}</p>
                        </div>
                    ))}
                </div>

                {recenzije.length > 2 && (
                    <div className="text-center flex flex-col font-bebas">
                        <button
                            onClick={() => setPrikaziSve(!prikaziSve)}
                            className="text-pink-400 hover:text-pink-200 underline"
                        >
                            {prikaziSve ? 'Zatvori utiske' : 'Prikaži sve utiske'}
                        </button>
                        <Link to="/dodajRecenziju" className="text-pink-400 hover:text-pink-200 underline">Podeli utisak</Link>

                    </div>
                )}
            </div>
        </div>
    )
}

export default Recenzije
