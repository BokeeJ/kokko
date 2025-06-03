import React from 'react';
import { Link } from 'react-router-dom';

function Pocetna() {
    return (
        <div className="bg-black text-white min-h-screen">
            {/* HERO SEKCIJA */}
            <section
                className="min-h-screen w-full flex items-center justify-center text-center px-4"
                style={{
                    backgroundImage: `url('/slikabr2.webp')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div>
                    <h1 className="text-4xl font-bold mb-6">Handmade. Every stitch.</h1>
                    <p className="mb-6 font-mono">KOMADI SA RUKOPISOM</p>
                    <div className="flex gap-4 justify-center">
                        <Link to="/katalog">
                            <button className="px-6 py-2 bg-pink-500 text-white rounded">Katalog</button>
                        </Link>
                        <Link to="/Omeni">
                            <button className="px-6 py-2 border border-white text-white rounded">O meni</button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* TEST SEKCIJA */}
            <section className="p-10 bg-zinc-900">
                <p className="mb-4">Test sekcija 1</p>
                <div className="h-[300px] bg-pink-200 mb-4 rounded"></div>
                <p className="mb-4">Test sekcija 2</p>
                <div className="h-[300px] bg-pink-400 mb-4 rounded"></div>
                <p className="mb-4">Test sekcija 3</p>
                <div className="h-[300px] bg-pink-600 mb-4 rounded"></div>
            </section>
        </div>
    );
}

export default Pocetna;
