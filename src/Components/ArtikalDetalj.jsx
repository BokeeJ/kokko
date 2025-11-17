import { useParams } from 'react-router-dom';
import { useState } from 'react';
import katalog from '../services/Katalog.js';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import { useSwipeable } from 'react-swipeable';

function ArtikalDetalj() {
    const { id } = useParams();
    const [fullscreenIndex, setFullscreenIndex] = useState(null);
    const proizvod = katalog.find((item) => item.id === parseInt(id));

    if (!proizvod) {
        return <p className="text-white p-10">Proizvod nije pronađen.</p>;
    }

    const slike = Array.isArray(proizvod.slika) ? proizvod.slika : [proizvod.slika];

    const openFullscreen = (index) => {
        setFullscreenIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeFullscreen = () => {
        setFullscreenIndex(null);
        document.body.style.overflow = 'auto';
    };

    const nextSlide = () => {
        setFullscreenIndex((prev) => (prev + 1) % slike.length);
    };

    const prevSlide = () => {
        setFullscreenIndex((prev) => (prev - 1 + slike.length) % slike.length);
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => nextSlide(),
        onSwipedRight: () => prevSlide(),
        onSwipedUp: () => closeFullscreen(),
        preventScrollOnSwipe: true,
        trackTouch: true,
        trackMouse: false,
    });

    return (
        <div className="text-white px-5 pt-5 pb-16 relative">
            <h2 className="text-pink-300 text-3xl mb-4 text-center">{proizvod.naziv}</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center z-[90]">
                {slike.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`slika-${i}`}
                        onClick={() => openFullscreen(i)}
                        className="w-full max-h-[250px] object-cover rounded-xl cursor-pointer border border-white/20 hover:border-pink-300"
                    />
                ))}
            </div>

            <div className="mt-8 space-y-3 max-w-xl mx-auto">
                <p><span className="text-xl font-bold text-pink-300">Cena:</span> {proizvod.cena},00 RSD</p>
                <p><span className="text-xl font-bold text-pink-300">Opis:</span> {proizvod.opis}</p>

                <p><span className="text-xl font-bold text-pink-300">Veličine:</span> {proizvod.velicina.join(', ')}</p>
            </div>

            <AnimatePresence>
                {fullscreenIndex !== null && (
                    <motion.div
                        {...swipeHandlers}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center"
                    >
                        <button
                            onClick={closeFullscreen}
                            className="absolute top-4 right-4 text-white text-3xl z-50 hover:text-pink-400"
                        >
                            <IoMdClose />
                        </button>

                        <button
                            onClick={prevSlide}
                            className="absolute left-5 text-white text-4xl z-50 hover:text-pink-400"
                        >
                            ❮
                        </button>

                        <img
                            src={slike[fullscreenIndex]}
                            className="max-w-[90%] max-h-[90%] rounded-xl shadow-lg z-[99999]"
                            alt="fullscreen"
                        />

                        <button
                            onClick={nextSlide}
                            className="absolute right-5 text-white text-4xl z-50 hover:text-pink-400"
                        >
                            ❯
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default ArtikalDetalj;
