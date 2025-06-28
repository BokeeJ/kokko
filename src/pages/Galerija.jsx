import React, { useState, useRef, useEffect } from 'react';

const slike = [
    '/IMG_1512.webp',
    '/IMG_1513.webp',
    '/galerija1.webp',
    '/galerija2.webp',
    '/galerija3.webp',
    '/galerija4.webp',
    '/galerija5.webp',
    '/galerija6.webp',
    '/galerija7.webp',
    '/galerija8.webp',
    '/galerija9.webp',
    '/galerija10.webp',
    '/galerija11.webp',
    '/galerija12.webp',
    '/galerija13.webp',
    '/galerija14.webp',
    '/galerija15.webp',
];

function Galerija() {
    const [fullscreenIndex, setFullscreenIndex] = useState(null);
    const startY = useRef(null);
    const startX = useRef(null);

    const openFullscreen = (index) => setFullscreenIndex(index);
    const closeFullscreen = () => setFullscreenIndex(null);

    const handleTouchStart = (e) => {
        startY.current = e.touches[0].clientY;
        startX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        if (startY.current === null || startX.current === null) return;
        const endY = e.changedTouches[0].clientY;
        const endX = e.changedTouches[0].clientX;

        const deltaY = startY.current - endY;
        const deltaX = startX.current - endX;

        if (Math.abs(deltaY) > Math.abs(deltaX)) {
            if (deltaY > 50) closeFullscreen(); // swipe up
        } else {
            if (deltaX > 50) {
                setFullscreenIndex((prev) => (prev + 1) % slike.length); // swipe left
            } else if (deltaX < -50) {
                setFullscreenIndex((prev) => (prev - 1 + slike.length) % slike.length); // swipe right
            }
        }

        startY.current = null;
        startX.current = null;
    };

    useEffect(() => {
        document.body.style.overflow = fullscreenIndex !== null ? 'hidden' : 'auto';
        return () => (document.body.style.overflow = 'auto');
    }, [fullscreenIndex]);

    return (
        <div className="bg-black min-h-screen px-4 py-10">
            <h1 className="text-white text-3xl lg:text-5xl text-center mb-10 font-bebas">Galerija</h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {slike.map((src, index) => (
                    <div key={index} className="group overflow-hidden rounded-xl shadow-md cursor-pointer">
                        <img
                            src={src}
                            alt={`Kokko ${index + 1}`}
                            onClick={() => openFullscreen(index)}
                            className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                ))}
            </div>

            {fullscreenIndex !== null && (
                <div
                    className="fixed inset-0 bg-black/90 z-[99999] flex items-center justify-center"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <button
                        onClick={closeFullscreen}
                        className="absolute top-5 right-5 text-white text-4xl hover:text-pink-400"
                    >
                        &times;
                    </button>
                    <img
                        src={slike[fullscreenIndex]}
                        alt="Fullscreen"
                        className="max-w-[90%] max-h-[90%] rounded-xl shadow-xl"
                    />
                </div>
            )}
        </div>
    );
}

export default Galerija;
