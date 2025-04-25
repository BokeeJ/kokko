import React from 'react';

function Main() {
    return (
        <div className="p-10 w-full flex gap-5 lg:flex-row flex-col relative overflow-hidden">
            {/* Leva strana */}
            <div className="overflow-hidden lg:w-[50%] lg:h-[940px] relative">
                <img
                    className="w-full h-full object-cover transition-transform duration-700 transform hover:scale-110 sm:hover:scale-100"
                    src="/slikabr2.webp"
                    alt="chickBluza"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                    <h2 className="text-3xl text-white font-bold opacity-0 animate-fadeInUp animation-delay-0">
                        NOVA KOLEKCIJA
                    </h2>
                </div>
            </div>

            {/* Desna strana */}
            <div className="flex flex-col lg:w-[50%] min-h-[700px] gap-3">
                {/* Prva slika */}
                <div className="relative flex justify-center items-center overflow-hidden">
                    <img
                        className="w-full min-h-[200px] object-cover transition-transform duration-1000 transform hover:scale-110 sm:hover:scale-100"
                        src="/slikabr1.webp"
                        alt="chichRoze"
                    />
                    <h2 className="text-2xl text-white font-bold opacity-0 animate-fadeInUp animation-delay-200 absolute">
                        SNIŽENJE/AKCIJE
                    </h2>
                </div>

                {/* Druga slika */}
                <div className="relative flex justify-center items-center overflow-hidden">
                    <img
                        className="w-full min-h-[200px] object-cover transition-transform duration-1000 transform hover:scale-110 sm:hover:scale-100"
                        src="/slikabr3.webp"
                        alt="chichBraon"
                    />
                    <h2 className="text-2xl text-white font-bold opacity-0 animate-fadeInUp animation-delay-400 absolute">
                        KATALOG
                    </h2>
                </div>

                {/* Treća slika */}
                <div className="relative flex justify-center items-center overflow-hidden">
                    <img
                        className="w-full min-h-[200px] object-cover transition-transform duration-1000 transform hover:scale-110 sm:hover:scale-100"
                        src="/slikabr4.webp"
                        alt="chichZuta"
                    />
                    <h2 className="text-2xl text-white font-bold opacity-0 animate-fadeInUp animation-delay-600 absolute">
                        KOLEKCIJE
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Main;
