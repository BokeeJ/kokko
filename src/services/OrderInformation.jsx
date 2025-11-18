import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

function OrderInformation() {
    const [poruka, setPoruka] = useState(false);
    const [loading, setLoading] = useState(false);
    const [captcha, setCaptcha] = useState(null);
    const navigate = useNavigate();
    const { setBrojac } = useOutletContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        if (e.target.broj_faksa.value !== "") {
            console.warn("Spam detektovan: honeypot nije prazan.");
            setLoading(false);
            return;
        }

        if (!captcha) {
            alert("Molimo potvrdite da niste robot.");
            setLoading(false);
            return;
        }

        const form = e.target;
        const korpa = JSON.parse(localStorage.getItem("korpa")) || [];

        let proizvodiTekst = "";
        let ukupno = 0;
        korpa.forEach((item) => {
            proizvodiTekst += `- ${item.naziv}, Veličina: ${item.velicina} — ${item.cena} RSD\n`;
            ukupno += item.cena;
        });
        proizvodiTekst += `\nUkupno: ${ukupno} RSD`;

        form.proizvodi.value = proizvodiTekst;

        emailjs.sendForm(
            'service_qby22un',
            'template_i9sofyc',
            form,
            'V-19CuRw6fsHeW7fW'
        )
            .then(() => {
                setLoading(false);
                setPoruka(true);
                form.reset();
                setTimeout(() => {
                    setPoruka(false);
                    navigate('/hvala');
                }, 2500);
                localStorage.removeItem("korpa");
                localStorage.removeItem("brojac");
                setBrojac(0);
                setCaptcha(null);
            })
            .catch((error) => {
                setLoading(false);
                console.error('Greška pri slanju:', error);
                alert("Greška pri slanju porudžbine.");
            });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-5 m-5 text-black max-w-xl mx-auto">
            <input type="text" name="ime" placeholder="Unesite ime..." required className="w-full h-[50px] p-2 rounded" />
            <input type="text" name="prezime" placeholder="Unesite prezime..." required className="w-full h-[50px] p-2 rounded" />
            <input type="text" name="adresa" placeholder="Unesite adresu..." required className="w-full h-[50px] p-2 rounded" />
            <input type="text" name="grad" placeholder="Unesite grad..." required className="w-full h-[50px] p-2 rounded" />
            <input type="email" className='w-full h-[50px] p-2 rounded' name="email" placeholder="Vaš email..." />
            <input
                type="tel"
                name="telefon"
                placeholder="Unesite broj telefona..."
                pattern="[0-9+ ]*"
                maxLength={15}
                required
                className="w-full h-[50px] p-2 rounded"
                autoComplete="tel"
            />
            <textarea
                name="napomena"
                placeholder="Napomena (opcionalno)"
                rows={3}
                className="w-full p-2 rounded resize-none"
            ></textarea>


            <input
                type="text"
                name="broj_faksa"
                autoComplete="off"
                className="hidden"
            />

            {/* Google reCAPTCHA */}
            <ReCAPTCHA
                sitekey="6Le1lEYrAAAAAMSAsTmeqRvbRxKNgYZ-NlD-_kIf"
                onChange={(value) => setCaptcha(value)}
            />

            <input type="hidden" name="proizvodi" />

            <button
                type="submit"
                disabled={loading}
                className={`w-full bg-pink-300 text-white font-bold py-2 rounded hover:bg-pink-300 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                {loading ? 'Slanje...' : 'Poruči'}
            </button>

            <AnimatePresence>
                {poruka && (
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.4 }}
                        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                           bg-pink-300 text-white px-6 py-3 rounded-xl shadow-xl z-[1000] text-xl"
                    >
                        ✅ Poručeno!
                    </motion.div>
                )}
            </AnimatePresence>
        </form>
    );
}

export default OrderInformation;
