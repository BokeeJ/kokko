import React, { useEffect, useState } from 'react'

function Recenzije() {
    const [recenzije, setRecenzije] = useState([])
    const [prikaziSve, setPrikaziSve] = useState(false)

    useEffect(() => {
        fetch('https://kokko-backend.onrender.com/api/recenzije')
            .then(res => res.json())
            .then(data => setRecenzije(data))
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
        <div
            className="p-5 max-w-2xl mx-auto text-white bg-cover bg-center rounded-xl"
            style={{ backgroundImage: "url('/black2.webp')" }}
        >
            <div className="bg-black/70 p-6 rounded-xl">
                <h2 className="text-3xl mb-4 text-center">Recenzije kupaca</h2>

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
                    <div className="text-center">
                        <button
                            onClick={() => setPrikaziSve(!prikaziSve)}
                            className="text-pink-400 hover:text-pink-200 underline"
                        >
                            {prikaziSve ? 'Zatvori recenzije' : 'Prikaži sve recenzije'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Recenzije
