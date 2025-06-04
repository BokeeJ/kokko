import React from 'react';
import { CiDeliveryTruck } from 'react-icons/ci';
import '../index.css';

function Header() {
    return (
        <div className="fixed top-0 left-0 w-full h-[24px] z-[100] bg-black/80 backdrop-blur-sm overflow-hidden">
            {/* Fade ivice */}
            <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black z-20" />
            <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-black z-20" />

            {/* Marquee */}
            <div className="marquee-container">
                <div className="marquee-content">
                    {Array(2).fill(
                        <div className="marquee-text">
                            <CiDeliveryTruck className="text-pink-600 text-lg mx-2" />
                            Dostava besplatna preko 6.000rsd • Dostava besplatna preko 6.000rsd •
                            Dostava besplatna preko 6.000rsd • Dostava besplatna preko 6.000rsd •
                            <CiDeliveryTruck className="text-pink-600 text-lg mx-2" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
