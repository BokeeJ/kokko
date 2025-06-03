import React from 'react';
import { CiDeliveryTruck } from 'react-icons/ci';
import '../index.css';

function Header() {
    return (
        <div className="fixed top-0 left-0 w-full h-[20px] z-[100] bg-black/80 backdrop-blur-sm overflow-hidden">
            {/* Fade levog i desnog kraja */}
            <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black z-20"></div>
            <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-black z-20"></div>

            {/* Traka sa tekstom */}
            <div className="marquee-track pointer-events-none flex items-center gap-4 text-white text-sm font-mono h-full px-4 relative z-10">
                <CiDeliveryTruck className="text-pink-800 text-lg" />
                <div className="marquee-text hover:pause">
                    Dostava besplatna preko 6.000rsd • Dostava besplatna preko 6.000rsd • Dostava besplatna preko 6.000rsd • Dostava besplatna preko 6.000rsd •
                </div>
                <div className="marquee-text hidden lg:flex hover:pause">
                    Dostava besplatna preko 6.000rsd • Dostava besplatna preko 6.000rsd • Dostava besplatna preko 6.000rsd • Dostava besplatna preko 6.000rsd •
                </div>
            </div>
        </div>
    );
}

export default Header;
