import React, { useState } from 'react';

const bojaMapa = {
    Roze: '#ffc0cb',
    Braon: '#8B4513',
    Crna: '#000000',
    Bordo: '#800000',
    Zelena: '#228B22',
    Bela: '#ffffff',
    'Leopard print': '#D2B48C',
    Flower: '#FF69B4',
    Teksas: '#5D8AA8',
    'Svetlo Plava': '#ADD8E6'
};

function BojaKruzici({ boje = [], onSelect }) {
    const [izabrana, setIzabrana] = useState(null);

    const handleClick = (boja) => {
        setIzabrana(boja);
        onSelect(boja);
    };

    return (
        <div className="flex flex-wrap gap-3 mt-2">
            {boje.map((boja, i) => (
                <div
                    key={i}
                    onClick={() => handleClick(boja)}
                    className={`w-7 h-7 rounded-full border-2 cursor-pointer transition duration-300 ${izabrana === boja ? 'border-pink-400 scale-110' : 'border-white/30'
                        }`}
                    style={{ backgroundColor: bojaMapa[boja] || '#999' }}
                    title={boja}
                />
            ))}
        </div>
    );
}

export default BojaKruzici;
