import React from 'react';
import {
    CiInstagram,
    CiFacebook,
    CiShoppingCart,
} from 'react-icons/ci';

import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div className='sticky top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md opacity-90'>
            {/* Pozadinska slika samo na desktopu */}
            <img
                src='/black2.webp'
                alt='Background'
                className='absolute inset-0 w-full h-full object-cover z-0 lg:flex hidden '
            />


            {/* Mobilna verzija */}
            <div className='lg:hidden relative z-10 overflow-hidden'>
                <div className='relative w-full h-[100px] bg-black/80 shadow-md px-5 flex items-center justify-between'>

                    <Link to='/' className='absolute left-1/2 transform -translate-x-1/2'>
                        <img
                            src='/noviLogo1.webp'
                            alt='logoKokko'
                            className='h-[90px] object-contain'
                        />
                    </Link>

                    {/* Ikonice desno */}
                    <div className='flex items-center gap-4 ml-auto'>
                        <a
                            href='https://www.instagram.com/kokko.design'
                            target='_blank'
                            rel='noopener noreferrer'>
                            <CiInstagram className='text-xl text-pink-200 hover:text-pink-500 cursor-pointer' />
                        </a>

                        <div className='relative'>
                            <Link to='/korpa'>
                                <CiShoppingCart className='text-xl text-pink-200 hover:text-pink-500 cursor-pointer' />
                            </Link>
                            <span className='absolute -top-1 -right-1 text-[10px] w-3 h-3 flex items-center justify-center bg-pink-600 text-white rounded-full'>
                                {props.brojac}
                            </span>
                        </div>
                    </div>
                </div>
            </div>



            {/* Desktop verzija */}
            <div className='hidden lg:flex w-full h-[150px] justify-between items-center px-8 relative z-10'>
                {/* Logo */}
                <div className='flex items-center'>
                    <Link to='/'>
                        <img
                            src='/noviLogo1.webp'
                            alt='logoKokko'
                            className='w-[200px] h-[140px] object-contain'
                        />
                    </Link>
                </div>

                {/* Navigacija */}
                <div className='flex-1 flex justify-center'>
                    <ul className='flex gap-10 text-white text-xl font-dives'>
                        <li>
                            <Link
                                to='/'
                                className='hover:text-pink-200 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-pink-200 after:w-0 hover:after:w-full after:transition-all after:duration-300'>
                                Naslovna
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/katalog'
                                className='hover:text-pink-200 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-pink-200 after:w-0 hover:after:w-full after:transition-all after:duration-300'>
                                Katalog
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/oMeni'
                                className='hover:text-pink-200 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-pink-200 after:w-0 hover:after:w-full after:transition-all after:duration-300'>
                                Iza kamera
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/galerija'
                                className='hover:text-pink-200 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-pink-200 after:w-0 hover:after:w-full after:transition-all after:duration-300'>
                                Galerija
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Ikonice */}
                <div className='flex gap-4 items-center relative'>
                    <a
                        href='https://www.instagram.com/kokko.design'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <CiInstagram className='text-3xl text-white hover:text-pink-300 cursor-pointer' />
                    </a>

                    <div className='relative'>
                        <Link to='/korpa'>
                            <CiShoppingCart className='text-3xl text-white hover:text-pink-300 cursor-pointer' />
                        </Link>
                        <h6 className='text-white absolute -top-2 -right-2 w-4 h-4 flex justify-center items-center bg-pink-600 rounded-full text-xs'>
                            {props.brojac}
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
