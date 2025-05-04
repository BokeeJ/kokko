import React from 'react'

function OrderInformation() {
    const handleSubmit = (e) => {
        e.preventDefault() // sprečava reload
        const form = e.target
        const data = {
            ime: form.ime.value,
            prezime: form.prezime.value,
            adresa: form.adresa.value,
            telefon: form.telefon.value,
        }
        console.log('Podaci za slanje:', data)
        // Ovde možeš da pozoveš funkciju za slanje mejla npr.
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-5 m-5 text-black">
            <input className="w-[60%] h-[50px] font-bold p-2 text-xl" type="text" name="ime" placeholder="Unesite ime.." required />
            <input className="w-[60%] h-[50px] font-bold p-2 text-xl" type="text" name="prezime" placeholder="Unesite prezime.." required />
            <input className="w-[60%] h-[50px] font-bold p-2 text-xl" type="text" name="adresa" placeholder="Unesite adresu.." required />
            <input
                className="w-[60%] h-[50px] font-bold p-2 text-xl"
                type="tel"
                name="telefon"
                placeholder="Unesite broj telefona.."
                pattern="[0-9+ ]*"
                maxLength={15}
                required
                autoComplete="tel"
            />
            <button type="submit" className="w-[40%] bg-pink-500 text-white font-bold py-2 rounded hover:bg-pink-600">
                Pošalji porudžbinu
            </button>
        </form>
    )
}

export default OrderInformation
