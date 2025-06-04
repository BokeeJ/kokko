import { useParams } from 'react-router-dom';
import { useState } from 'react';
import katalog from '../services/Katalog.js';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../styles.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import BojaKruzici from '../services/BojaKruzici.jsx';

function ArtikalDetalj() {
    const { id } = useParams();
    const [fullscreenSlika, setFullscreenSlika] = useState(null);
    const proizvod = katalog.find((item) => item.id === parseInt(id));

    if (!proizvod) {
        return <p className="text-white p-10">Proizvod nije pronađen.</p>;
    }

    const slike = Array.isArray(proizvod.slika) ? proizvod.slika : [proizvod.slika];

    return (
        <div className="text-white p-10 relative z-0">
            <h2 className="text-pink-300 text-3xl mb-4">{proizvod.naziv}</h2>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper z-0"
            >
                {slike.map((src, i) => (
                    <SwiperSlide key={i} className="flex justify-center items-center !w-auto !h-auto">
                        <img
                            src={src}
                            alt={`slika-${i}`}
                            onClick={() => setFullscreenSlika(src)}
                            className="max-w-[250px] max-h-[350px] object-cover rounded-xl cursor-pointer pointer-events-auto"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="mt-6 space-y-2">
                <p><span className="text-xl font-bold text-pink-300">Cena:</span> {proizvod.cena},00 RSD</p>
                <p><span className="text-xl font-bold text-pink-300">Opis:</span> {proizvod.opis}</p>
                <p><span className="text-xl font-bold text-pink-300">Boje:</span> {proizvod.boja.join(', ')}</p>
                <p><span className="text-xl font-bold text-pink-300">Veličine:</span> {proizvod.velicina.join(', ')}</p>
            </div>

            {fullscreenSlika && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999]"
                    onClick={() => setFullscreenSlika(null)}
                >
                    <img src={fullscreenSlika} className="max-w-[90%] max-h-[90%] rounded-xl shadow-lg" />

                </div>
            )}
        </div>
    );
}

export default ArtikalDetalj;
