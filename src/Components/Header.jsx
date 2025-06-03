import React from 'react';
import '../index.css';

function Header() {
    return (
        <div className="relative w-full h-[20px] overflow-hidden bg-black flex items-center z-[100]">
            <div className="marquee-track">
                <div className="marquee-text ">
                    Dostava besplatna preko 6.000rsd • Dostava besplatna preko 6.000rsd • Dostava besplatna preko 6.000rsd • Dostava besplatna preko 6.000rsd • Dostava besplatna preko 6.000rsd •
                </div>
                <div className="marquee-text lg:flex hidden">
                    Dostava besplatna preko 6.000rsd • Dostava besplatna preko 6.000rsd • Dostava besplatna preko 6.000rsd • Dostava besplatna preko 6.000rsd • Dostava besplatna preko 6.000rsd •
                </div>
            </div>
        </div>
    );
}

export default Header;
