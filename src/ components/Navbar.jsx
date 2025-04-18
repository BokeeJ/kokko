import React from 'react'
//react icons
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";

function Navbar() {
    return (
        <div>
            {/* header */}
            <div className='flex bg-pink-100 justify-between'>
                <div className='flex'>
                    <CiInstagram className='cursor-pointer m-2' size={40} />
                    <CiFacebook className='cursor-pointer m-2' size={40} />
                </div>
                <div className='flex items-center gap-2'>
                    <img src="/english2.jpg" className='w-7 h-7' alt="logoENG" />
                    <h2 className=' text-2xl'>|</h2>
                    <img src="/serb.jpg" className='h-7 w-7' alt="logoSRP" />
                    {/* slika logoa */}
                </div>

            </div>
            {/* nav */}
            <div className=''>
                <img src="/logo.svg" alt="logoKokko" className='' />
            </div>

        </div>
    )
}

export default Navbar