import React from 'react';
import '../index.css';

function Header() {
    return (
        <div className="fixed top-0 left-0 w-full h-[20px] overflow-hidden bg-black flex items-center z-[100]">
            <div className="marquee-track pointer-events-none">
                <div className="marquee-text">
                    Dostava besplatna preko 6.000rsd • Dostava besplatna preko 6.000rsd • Dostava besplatna preko 6.000rsd • Dostava besplatna preko 6.000rsd •
                </div>
                <div className="marquee-text hidden lg:flex">
                    Dostava besplatna preko 6.000rsd • Dostava besplatna preko 6.000rsd • Dostava besplatna preko 6.000rsd • Dostava besplatna preko 6.000rsd •
                </div>
            </div>
        </div>
    );
}

export default Header;
