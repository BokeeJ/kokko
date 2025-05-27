import React from 'react'
import { Link } from 'react-router-dom'

function MiniBar() {
    return (
        <div className='p-3'>
            <ul className="flex flex-col justify-center lg:gap-5 gap-2 lg:text-2xl text-l font-dives text-white">
                <Link to={'/'} className="cursor-pointer hover:text-pink-200 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-pink-200 after:w-0 hover:after:w-[50%] after:transition-all after:duration-300">
                    Naslovna
                </Link>
                <Link to={'/katalog'} className="cursor-pointer hover:text-pink-200 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-pink-200 after:w-0 hover:after:w-[50%] after:transition-all after:duration-300">
                    Katalog
                </Link>
                <Link to={'/oMeni'} className="cursor-pointer hover:text-pink-200 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-pink-200 after:w-0 hover:after:w-[50%] after:transition-all after:duration-300">
                    Iza kamera
                </Link>
                <Link to={'/galerija'} className="cursor-pointer hover:text-pink-200 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-pink-200 after:w-0 hover:after:w-[50%] after:transition-all after:duration-300">
                    Galerija
                </Link>
            </ul>
        </div>
    )
}

export default MiniBar