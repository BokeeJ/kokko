import React from 'react';
import { CiInstagram, CiFacebook } from "react-icons/ci";

function Navbar() {
    return (
        <div className="relative w-full h-[100px] lg:h-[200px] overflow-hidden">
            {/* Pozadinska slika */}
            <img
                src="/black2.webp"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover z-0 lg:flex hidden"
            />

            {/* Mobilna verzija */}
            <div className="lg:hidden relative z-10">
                <div className="flex justify-center items-center w-full h-[80px] bg-black shadow-md px-5">
                    {/* Logo */}
                    <div className=''>
                        <img src="/2.png" alt="logoKokko" className="w-[120px] h-[90px] object-contain" />
                    </div>

                    {/* Ikonice */}
                    <div className="flex gap-3 right-3 absolute">
                        <a href="https://www.instagram.com/kokko.design" target="_blank" rel="noopener noreferrer">
                            <CiInstagram className="text-xl text-pink-200 hover:text-pink-500 cursor-pointer" />
                        </a>
                        <a href="#">
                            <CiFacebook className="text-xl text-pink-200 hover:text-pink-500 cursor-pointer" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Desktop verzija */}
            <div className="hidden lg:flex w-full h-full justify-between items-center px-8 relative z-10">
                {/* Logo */}
                <div className="flex items-center">
                    <img src="/2.png" alt="logoKokko" className="w-[200px] h-[140px] object-contain" />
                </div>

                {/* Navigacija */}
                <div className="flex-1 flex justify-center">
                    <ul className="flex gap-10 text-white text-lg font-light">
                        {["Naslovna", "Katalog", "Kontakt", "Galerija"].map((item, index) => (
                            <li key={index} className="cursor-pointer hover:text-pink-200 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-pink-200 after:w-0 hover:after:w-full after:transition-all after:duration-300">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Ikonice */}
                <div className="flex gap-4 items-center">
                    <a href="https://www.instagram.com/kokko.design" target="_blank" rel="noopener noreferrer">
                        <CiInstagram className="text-3xl text-white hover:text-pink-300 cursor-pointer" />
                    </a>
                    <a href="#">
                        <CiFacebook className="text-3xl text-white hover:text-pink-300 cursor-pointer" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
