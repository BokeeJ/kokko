import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Recenzije from './Recenzije.jsx'

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
        <div className="bg-black">
            {/* HERO SEKCIJA */}
            <section className="relative min-h-screen w-full">
                <img
                    src="/slikabr2.webp"
                    alt="hero"
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center text-white px-4">
                    <motion.h1
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Handmade. Every stitch.
                    </motion.h1>
                    <motion.p
                        variants={fadeInDelayed(0.4)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="text-lg max-w-xl mb-6"
                    >
                        <span className='font-mono'>KOMADI SA RUKOPISOM</span>
                    </motion.p>
                    <motion.div
                        variants={fadeInDelayed(0.6)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="flex gap-4"
                    >
                        <Link to="/katalog">
                            <button className="px-4 py-2  text-white rounded border border-white hover:bg-white hover:text-black hover:opacity-70 rounded-l  transition font-dives">
                                Pogledaj katalog
                            </button>
                        </Link>
                        <Link to="/IzaKamera">
                            <button className="px-4 py-2 text-white rounded  border border-white hover:bg-white hover:text-black hover:opacity-70 rounded-l transition font-dives">
                                Iza kamere
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* MINI GALERIJA */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
                {["/IMG_1512.webp", "/IMG_1514.webp", "/Pic1.webp", "/slikabr4.webp"].map((src, i) => (
                    <motion.div
                        key={i}
                        variants={fadeInDelayed(0.2 + i * 0.1)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="overflow-hidden rounded-xl group cursor-pointer"
                    >
                        <img
                            src={src}
                            alt={`preview-${i}`}
                            className="w-full h-[250px] object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </motion.div>
                ))}
            </section>

            {/* POZIV NA AKCIJU */}
            <section className="relative text-center py-16 px-4 bg-black">
                {/* VIDEO POZADINA */}
                <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none lg:hidden"
                >
                    <source src="/kVideo.mp4" type="video/mp4" />
                </video>

                {/* SADRŽAJ */}
                <div className="relative z-10">
                    <motion.h2
                        variants={fadeInDelayed(0.2)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="text-3xl text-white mb-4 font-bold"
                    >
                        Nosi <span className='text-pink-300'>KOKKO</span>, nosi PRIČU
                    </motion.h2>
                    <motion.p
                        variants={fadeInDelayed(0.4)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="text-pink-300 text-lg mb-6 font-dives"
                    >
                        Tvoja priča počinje ovde.
                    </motion.p>
                    <Link to="/katalog">
                        <button className="px-6 py-2 border border-white text-white rounded-xl hover:bg-opacity-40 hover:bg-pink-300 transition">
                            Pogledaj ponudu
                        </button>
                    </Link>
                </div>
            </section>

            {/* RECENZIJE */}
            <section className="bg-zinc-900 py-10">
                <Recenzije />
            </section>
        </div>
    )
}

export default Pocetna
