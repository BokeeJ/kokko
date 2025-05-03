import React from 'react'
import katalog from '../services/Katalog';
//react icons
import { CiCircleRemove } from "react-icons/ci";
function Korpa() {
    katalog.map((item) => {
        { console.log(item); }
    })
    // srediti da katalog ide u korpu...
    return (
        <div className='lg:flex-row flex flex-col'>
            <div className='flex gap-2 w-full'>

                <div>
                    <img className='w-[150px] h-[200px]' src="/slikabr1.webp" alt="pinkChick" />
                </div>
                <div className='p-5 flex flex-col w-[50%]'>
                    <div>
                        <p className='text-white'><span className='text-2xl text-pink-200'>Ime</span>: Basic Chipka</p>
                        <p className='text-white'><span className='text-2xl text-pink-200'>Boja</span>:  Pink</p>
                        <p className='text-white'><span className='text-2xl text-pink-200'>Velicina</span>:  25</p>
                    </div>
                    <div className='lg:flex flex-col justify-center items-center gap-2'>
                        <CiCircleRemove color='white' size={30} />
                        <h3 className='text-white'>Ukloni</h3>
                    </div>

                </div>
            </div>
            <div className='w-[40%] gap-3'>
                <h3 className='text-white'> <span className='text-2xl text-pink-200'>Cena</span>: 1800,00rsd</h3>
                <h3 className='text-white'><span className='text-2xl text-pink-200'>Ukupno</span>: 1800,00rsd</h3>
                <button className='bg-pink-200 text-black p-1 m-5 rounded-lg'>Poruči</button>
            </div>
        </div>
    )
}

export default Korpa