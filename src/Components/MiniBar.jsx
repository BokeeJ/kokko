import React from 'react'

function MiniBar() {
    return (
        <div className='p-3'>
            <ul className="flex flex-col justify-center lg:gap-5 gap-2 lg:text-2xl text-l font-normal">
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
    )
}

export default MiniBar