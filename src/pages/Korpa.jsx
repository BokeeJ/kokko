import React, { useEffect, useState } from 'react'
import { Link, useOutletContext } from "react-router-dom"

function Korpa() {

    const { setBrojac } = useOutletContext();
    const [artikli, setArtikli] = useState([])


    useEffect(() => {
        const podaci = JSON.parse(localStorage.getItem("korpa")) || []
        setArtikli(podaci)

    }, [])

    const obrisiArtikal = (index) => {
        const novaKorpa = [...artikli]
        novaKorpa.splice(index, 1)
        setArtikli(novaKorpa)
        localStorage.setItem("korpa", JSON.stringify(novaKorpa))
        setBrojac(novaKorpa.length)
    }

    let korpaPrazna = artikli.length === 0;


    return (
        <div className='lg:flex justify-between'>
            {/* korpa */}
            <div className="p-5 flex flex-col gap-6">
                <h2 className="text-2xl text-white">Tvoja korpa</h2>
                {artikli.length === 0 ? (
                    <p className="text-gray-400">Korpa je prazna.</p>
                ) : (
                    artikli.map((artikal, i) => (

                        <div key={i} className="flex gap-4 bg-black p-4 rounded-xl items-center">
                            <Link to={`/katalog/${artikal.id}`}>
                                <img
                                    src={artikal.slika}
                                    alt={artikal.naziv}
                                    className="w-[100px] h-[120px] object-cover"
                                /></Link>
                            <div className="flex flex-col gap-1 text-white">
                                <p className='text-pink-300 font-bold'>{artikal.naziv}</p>
                                <p><span className='text-pink-300'>Boja:</span> {artikal.boja}</p>
                                <p><span className='text-pink-300'>Veličina:</span> {artikal.velicina}</p>
                                <p><span className='text-pink-300'>Cena:</span> {artikal.cena},00 RSD</p>

                                <button
                                    onClick={() => obrisiArtikal(i)}
                                    className="mt-2 text-sm text-pink-400 hover:underline"
                                >
                                    Ukloni iz korpe
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            {/* zavrsno */}
            <div className='m-5 p-5'>
                <h2 className="text-2xl text-white">Ukupna cena</h2>
                <p className="text-white">
                    {artikli.reduce((ukupno, artikal) => ukupno + artikal.cena, 0)},00 RSD
                </p>
                {korpaPrazna ? <button
                    disabled
                    className="mt-4 text-white bg-gray-500 px-4 py-2 rounded opacity-50 cursor-not-allowed"
                >
                    Nastavi
                </button>
                    : <div className='flex flex-col'>
                        <Link className='mt-4  text-white bg-pink-500 px-4 py-2  rounded hover:bg-pink-600' to={'/katalog'}>Nastavi sa kupovinom</Link>
                        <Link className="mt-4  text-white bg-pink-500 px-4 py-2 rounded hover:bg-pink-600" to={'/order'}>
                            Nastavi sa placanjem
                        </Link></div>}

            </div>
        </div>

    )
}

export default Korpa
