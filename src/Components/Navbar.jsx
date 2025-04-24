import React from 'react'
//react icons
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";



function Navbar() {
    return (
        <div className='relative h-screen bg-cover bg-center' style={{ backgroundImage: "url('/profil2.webp')" }} >
            <div className='lg:hidden'>
                <div className='flex justify-evenly items-center w-full h-[80px] bg-white shadow-md px-5'>
                    {/* left side */}

                    <div>
                        <img src="/2.png" alt="logoKokko" className='w-[150px] h-[100px]  object-contain bg-transparent' />
                    </div>
                    <div className='flex gap-2 absolute right-0'>
                        <a href="https://www.instagram.com/kokko.design" target='_blank'>
                            <CiInstagram className='text-3xl cursor-pointer' color='pink' />
                        </a>
                        <CiFacebook className='text-3xl cursor-pointer ' color='pink' />
                    </div>



                </div>
            </div>

            < div className='lg:flex md:flex w-full justify-between items-center hidden'
            >
                {/* logo */}
                <div className='w-[300px] h-[140px] px-2 items-center hidden lg:flex '>
                    <img src="/2.png" alt="logoKokko" className='w-[200px] h-full object-contain bg-transparent' />
                </div>

                {/* navLinks */}
                <div className='lg:flex justify-center items-center w-[80%] hidden' >
                    <ul className="flex justify-center lg:gap-5 gap-2 lg:text-l text-l font-light">
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
                <div>
                    <div className='lg:flex gap-2 hidden'>
                        <a href="https://www.instagram.com/kokko.design" target='_blank'>
                            <CiInstagram className='text-3xl cursor-pointer hover:text-pink-400' />
                        </a>
                        <CiFacebook className='text-3xl cursor-pointer hover:text-pink-400' />
                    </div>
                </div>

            </div >
            {/* ovde staviti */}
            <div className='overflow-hidden lg:w-[50%] lg:h-[340px] p-10'>
                <img
                    className='w-full h-full object-cover transition-transform duration-700 transform hover:scale-110'
                    src="/slikabr2.webp"
                    alt="chickBluza"
                />
            </div>

        </div >
    )
}

export default Navbar