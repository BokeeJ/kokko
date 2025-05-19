import React from 'react';
import {
    CiInstagram,
    CiFacebook,
    CiShoppingCart,
} from 'react-icons/ci';

import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div className='fixed lg:static top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md opacity-90'>
            {/* Pozadinska slika samo na desktopu */}
            <img
                src='/black2.webp'
                alt='Background'
                className='absolute inset-0 w-full h-full object-cover z-0 lg:flex hidden'
            />

            {/* Mobilna verzija */}
            <div className='lg:hidden relative z-10'>
                <div className='flex justify-center items-center w-full h-[100px] bg-black/80 shadow-md px-5'>
                    {/* Logo */}
                    <div>
                        <Link to={'/'}>
                            <img
                                src='/2.png'
                                alt='logoKokko'
                                className='w-[120px] h-[90px] object-contain'
                            />
                        </Link>
                    </div>

                    {/* Ikonice */}
                    <div className='flex gap-3 right-3 absolute'>
                        <a
                            href='https://www.instagram.com/kokko.design'
                            target='_blank'
                            rel='noopener noreferrer'>
                            <CiInstagram className='text-xl text-pink-200 hover:text-pink-500 cursor-pointer' />
                        </a>
                        <a href='#'>
                            <CiFacebook className='text-xl text-pink-200 hover:text-pink-500 cursor-pointer' />
                        </a>
                        <Link to='/korpa'>
                            <CiShoppingCart className='text-xl text-pink-200 hover:text-pink-500 cursor-pointer' />
                        </Link>
                        <p className='text-white absolute text-[10px] right-0 mt-4 w-3 h-3 flex justify-center items-center bg-pink-600 rounded-full'>{props.brojac}</p>
                    </div>
                </div>
            </div>

            {/* Desktop verzija */}
            <div className='hidden lg:flex w-full h-[200px] justify-between items-center px-8 relative z-10'>
                {/* Logo */}
                <div className='flex items-center'>
                    <Link to={'/'}>
                        <img
                            src='/2.png'
                            alt='logoKokko'
                            className='w-[200px] h-[140px] object-contain'
                        />
                    </Link>
                </div>

                {/* Navigacija */}
                <div className='flex-1 flex justify-center'>
                    <ul className='flex gap-10 text-white text-lg font-light'>
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
                <div className='flex gap-4 items-center'>
                    <a
                        href='https://www.instagram.com/kokko.design'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <CiInstagram className='text-3xl text-white hover:text-pink-300 cursor-pointer' />
                    </a>
                    <a href='#'>
                        <CiFacebook className='text-3xl text-white hover:text-pink-300 cursor-pointer' />
                    </a>
                    <Link to='/korpa'>
                        <CiShoppingCart className='text-3xl text-white hover:text-pink-300 cursor-pointer' />
                    </Link>
                    <h6 className='text-white absolute right-5 mt-5 w-4 h-4 flex justify-center items-center bg-pink-600 rounded-full'>
                        {props.brojac}
                    </h6>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
