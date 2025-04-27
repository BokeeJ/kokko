import React from 'react';

function Main() {
    return (
        <div className="p-10 w-full flex gap-5 lg:flex-row flex-col relative overflow-hidden">

            {/* Leva strana */}
            <div className="overflow-hidden lg:w-[50%] lg:h-[940px] relative group rounded-xl">
                <img
                    className="w-full h-full object-cover transition-transform duration-1000 transform group-hover:scale-110 sm:hover:scale-100 rounded-xl"
                    src="/slikabr2.webp"
                    alt="chickBluza"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                    <h2 className="text-3xl text-white font-bold opacity-0 animate-fadeInUp animation-delay-0 shadow-lg shadow-black rounded-xl p-4 transition-all cursor-pointer hover:text-pink-200">
                        NOVA KOLEKCIJA
                    </h2>
                </div>
            </div>

            {/* Desna strana */}
            <div className="flex flex-col lg:w-[50%] h-[940px] gap-3">

                {/* Prva slika */}
                <div className="relative flex justify-center items-center overflow-hidden group rounded-xl">
                    <img
                        className="w-full min-h-[200px] object-cover transition-transform duration-1000 transform group-hover:scale-110 sm:hover:scale-100  rounded-xl"
                        src="/slikabr1.webp"
                        alt="chichRoze"
                    />
                    <h2 className="text-2xl text-white font-bold opacity-0 animate-fadeInUp animation-delay-200 absolute shadow-lg shadow-black rounded-xl p-4 transition-all cursor-pointer hover:text-pink-200">
                        SNIŽENJE/AKCIJE
                    </h2>
                </div>

                {/* Druga slika */}
                <div className="relative flex justify-center items-center overflow-hidden group rounded-xl">
                    <img
                        className="w-full min-h-[200px] object-cover transition-transform duration-1000 transform group-hover:scale-110 sm:hover:scale-100 rounded-2xl"
                        src="/slikabr4.webp"
                        alt="chichZuta"
                    />
                    <h2 className="text-2xl text-white font-bold opacity-0 animate-fadeInUp animation-delay-400 absolute shadow-lg shadow-black rounded-xl p-4 transition-all cursor-pointer hover:text-pink-200">
                        KATALOG
                    </h2>
                </div>

            </div>
        </div>
    );
}

export default Main;
