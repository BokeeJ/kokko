import React from 'react'

function Main() {
    return (
        <div className='p-10 w-full flex gap-5 lg:flex-row flex-col'>
            {/* leva strana */}
            <div className='overflow-hidden lg:w-[50%] lg:h-[940px]'>
                <img
                    className='w-full h-full object-cover transition-transform duration-700 transform hover:scale-110'
                    src="/slikabr2.webp"
                    alt="chickBluza"
                />
            </div>
            {/* desna strana */}
            <div className='flex flex-col lg:w-[50%]  h-[700px] gap-3'>

                <img className='lg:h-[300px] w-full object-cover transition-transform duration-700 transform hover:scale-110' src="/slikabr1.webp" alt="chichRoze" />


                <img className='lg:h-[300px] w-full object-cover transition-transform duration-700 transform hover:scale-110' src="/slikabr3.webp" alt="chichBraon" />


                <img className='lg:h-[300px] object-cover w-full transition-transform duration-700 transform hover:scale-110' src="/slikabr4.webp" alt="chichZuta" />

            </div>

        </div>
    )
}

export default Main