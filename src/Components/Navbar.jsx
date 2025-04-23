import React from 'react'
//react icons
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";


function Navbar() {
    return (
        <div>
            <div className='lg:hidden'>
                <div className='flex justify-around items-center w-full h-[80px] bg-white shadow-md px-5'>
                    {/* left side */}
                    <div>
                        <GiHamburgerMenu size={20} />
                    </div>
                    <div>
                        <img src="/logo.svg" alt="logoKokko" className='w-[150px] h-[50px] object-cover bg-transparent' />
                    </div>
                    <div className='flex gap-2'>
                        <CiInstagram className='text-3xl cursor-pointer hover:text-pink-400' />
                        <CiFacebook className='text-3xl cursor-pointer hover:text-pink-400' />
                    </div>



                </div>
            </div>

            < div className='flex w-full h-[200px] justify-center lg:block md:block hidden' >
                {/* logo */}
                <div className='w-[500px] h-[200px] px-4 flex items-center hidden lg:block '>
                    <img src="/logo.svg" alt="logoKokko" className='w-[400px] h-full object-cover bg-transparent' />
                </div>

                {/* navLinks */}
                <div className='flex justify-center items-center w-[80%] hidden' >
                    <ul className="flex justify-center lg:gap-5 gap-2 lg:text-3xl text-l font-light">
                        <li className="cursor-pointer hover:text-pink-400 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-pink-400 after:w-0 hover:after:w-full after:transition-all after:duration-300">
                            Naslovna
                        </li>
                        <li className="cursor-pointer hover:text-pink-400 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-pink-400 after:w-0 hover:after:w-full after:transition-all after:duration-300">
                            Katalog
                        </li>
                        <li className="cursor-pointer hover:text-pink-400 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-pink-400 after:w-0 hover:after:w-full after:transition-all after:duration-300">
                            Kontakt
                        </li>
                        <li className="cursor-pointer hover:text-pink-400 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-pink-400 after:w-0 hover:after:w-full after:transition-all after:duration-300">
                            Galerija
                        </li>
                    </ul>

                </div>

            </div >


        </div >
    )
}

export default Navbar