import React, { useState } from 'react'

const slike = [
    '/IMG_1512.webp',
    '/IMG_1513.webp',
    '/IMG_1514.webp',
    '/IMG_1515.webp',
    '/slikabr1.webp',
    '/slikabr2.webp',
    '/slikabr3.webp',
    '/6.webp',
    '/4.webp',
]

function Galerija() {
    const [slikaUvećana, setSlikaUvećana] = useState(null)

    const zatvori = () => setSlikaUvećana(null)

    return (
        <div className="bg-black min-h-screen px-4 py-10">
            <h1 className="text-white text-3xl lg:text-5xl text-center mb-10">Galerija</h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {slike.map((src, index) => (
                    <div key={index} className="group overflow-hidden rounded-xl shadow-md cursor-pointer">
                        <img
                            src={src}
                            alt={`Kokko ${index + 1}`}
                            onClick={() => setSlikaUvećana(src)}
                            className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                ))}
            </div>

            {/* Lightbox modal */}
            {slikaUvećana && (
                <div
                    onClick={zatvori}
                    className="fixed inset-0 bg-black/90 z-[1000] flex items-center justify-center"
                >
                    <button
                        onClick={zatvori}
                        className="absolute top-5 right-5 text-white text-4xl hover:text-pink-400"
                    >
                        &times;
                    </button>
                    <img
                        src={slikaUvećana}
                        alt="Uvećana slika"
                        className="max-w-[90%] max-h-[90%] rounded-xl shadow-xl"
                    />
                </div>
            )}
        </div>
    )
}

export default Galerija
