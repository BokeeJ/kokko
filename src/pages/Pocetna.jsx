import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Pocetna() {
    const fadeInUp = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0, transition: { duration: 1 } }
    }

    const fadeInDelayed = (delay = 0.3) => ({
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0, transition: { duration: 1, delay } }
    })

    return (
        <div>
            <div className="p-10 w-full flex gap-5 lg:flex-row flex-col relative overflow-hidden">

                {/* Leva strana */}
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="overflow-hidden lg:w-[50%] lg:h-[940px] relative group rounded-xl"
                >
                    <img
                        className="w-full h-full object-cover transition-transform duration-1000 transform group-hover:scale-110 rounded-xl"
                        src="/slikabr2.webp"
                        alt="chickBluza"
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <motion.h2
                            variants={fadeInDelayed(0.4)}
                            className="text-3xl text-white font-bold shadow-lg shadow-black rounded-xl p-4 transition-all cursor-pointer hover:text-pink-200"
                        >
                            NOVA KOLEKCIJA
                        </motion.h2>
                    </div>
                </motion.div>

                {/* Desna strana */}
                <div className="flex flex-col lg:w-[50%] h-[940px] gap-3">

                    {/* Prva slika */}
                    <motion.div
                        variants={fadeInDelayed(0.2)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="relative flex justify-center items-center overflow-hidden group rounded-xl"
                    >
                        <img
                            className="w-full min-h-[200px] object-cover transition-transform duration-1000 transform group-hover:scale-110 rounded-xl"
                            src="/slikabr1.webp"
                            alt="chichRoze"
                        />
                        <h2 className="text-2xl text-white font-bold absolute shadow-lg shadow-black rounded-xl p-4 transition-all cursor-pointer hover:text-pink-200">
                            SNIŽENJE / AKCIJE
                        </h2>
                    </motion.div>

                    {/* Druga slika */}
                    <motion.div
                        variants={fadeInDelayed(0.4)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="relative flex justify-center items-center overflow-hidden group rounded-xl"
                    >
                        <img
                            className="w-full min-h-[200px] object-cover transition-transform duration-1000 transform group-hover:scale-110 rounded-2xl"
                            src="/slikabr4.webp"
                            alt="chichZuta"
                        />
                        <Link className='absolute' to="/katalog">
                            <h2 className="text-2xl text-white font-bold  shadow-lg shadow-black rounded-xl p-4 transition-all cursor-pointer hover:text-pink-200">
                                KATALOG
                            </h2>
                        </Link>

                    </motion.div>
                </div>
            </div>

            {/* Opis sekcija */}
            <motion.div
                variants={fadeInDelayed(0.6)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative flex flex-col justify-center items-center gap-5 p-10 overflow-hidden h-[400px]"
            >
                {/* VIDEO */}
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/kVideo.mp4" type="video/mp4" />
                    Tvoj browser ne podržava video tag.
                </video>

                {/* TAMNI SLOJ PREKO VIDEA */}
                <div className="absolute inset-0 bg-black/50 z-[1]"></div>

                {/* SADRŽAJ */}
                <div className="relative z-10 text-center">
                    <h2 className="text-4xl text-pink-300 font-bold  rounded-xl p-4">
                        O KOKKO
                    </h2>
                    <p className="text-lg text-white font-light  rounded-xl p-4 max-w-3xl">
                        <span className="text-pink-300">KOKKO</span> je brend koji se fokusira na stvaranje jedinstvenih i modernih komada odeće.
                        Naša misija je da inspirišemo ljude da izraze svoju ličnost kroz modu.
                    </p>
                </div>
            </motion.div>

        </div>
    )
}

export default Pocetna
