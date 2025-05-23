import React from 'react'

function FooterEnd() {
    return (
        <div className="bg-black text-gray-500  text-sm py-3 border-t border-gray-700 absolute w-full ml-3">
            © {new Date().getFullYear()} Designed by<a href="https://www.instagram.com/bojan_web" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline"> Bojan_web</a>
        </div>
    )
}

export default FooterEnd
