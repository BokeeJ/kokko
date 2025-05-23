import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

function DodajRecenziju() {
    const [forma, setForma] = useState({ ime: '', komentar: '', ocena: 5 })
    const [poruka, setPoruka] = useState('')
    const [loading, setLoading] = useState(false)
    const [captcha, setCaptcha] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        if (e.target.faks_broj.value !== "") {
            setPoruka("❌ Spam pokušaj blokiran.")
            setLoading(false)
            return
        }

        if (!captcha) {
            setPoruka("❌ Molimo potvrdite da niste robot.")
            setLoading(false)
            return
        }

        fetch('https://kokko-backend.onrender.com/api/recenzije', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(forma)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Odgovor servera:', data)
                if (data.success) {
                    setPoruka('✅ Hvala na recenziji!')
                    setForma({ ime: '', komentar: '', ocena: 5 })
                } else {
                    setPoruka('❌ Došlo je do greške.')
                }
            })
            .catch(() => setPoruka('❌ Server greška.'))
            .finally(() => setLoading(false))
    }

    return (
        <div className="p-5 max-w-xl mx-auto text-white">
            <h2 className="text-3xl mb-4 text-center">Dodaj recenziju</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 bg-zinc-900 p-4 rounded">
                <input
                    type="text"
                    name="ime"
                    placeholder="Vaše ime"
                    className="p-2 rounded text-black"
                    value={forma.ime}
                    onChange={e => setForma({ ...forma, ime: e.target.value })}
                    required
                />

                <textarea
                    name="komentar"
                    placeholder="Vaš komentar"
                    className="p-2 rounded text-black"
                    rows={4}
                    value={forma.komentar}
                    onChange={e => setForma({ ...forma, komentar: e.target.value })}
                    required
                ></textarea>

                <label className="text-sm">Ocena:</label>
                <select
                    name="ocena"
                    className="p-2 rounded text-black w-[100px]"
                    value={forma.ocena}
                    onChange={e => setForma({ ...forma, ocena: parseInt(e.target.value) })}
                >
                    {[5, 4, 3, 2, 1].map((val) => (
                        <option key={val} value={val}>{val}</option>
                    ))}
                </select>

                {/* Honeypot polje */}
                <input
                    type="text"
                    name="faks_broj"
                    autoComplete="off"
                    className="hidden"
                />

                {/* reCAPTCHA */}
                <ReCAPTCHA
                    sitekey="6Le1lEYrAAAAAMSAsTmeqRvbRxKNgYZ-NlD-_kIf"
                    onChange={(value) => setCaptcha(value)}
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded transition"
                >
                    {loading ? 'Slanje...' : 'Pošalji recenziju'}
                </button>

                {poruka && <p className="text-sm mt-2 text-center">{poruka}</p>}
            </form>
        </div>
    )
}

export default DodajRecenziju
