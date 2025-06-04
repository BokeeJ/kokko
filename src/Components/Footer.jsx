import { CiInstagram, CiShoppingCart, CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";

function Footer({ brojac }) {
    return (
        <footer
            className="w-full text-gray-300 p-6 bg-cover bg-center relative"
            style={{ backgroundImage: "url('/black2.webp')" }}
        >
            <div className="absolute inset-0 bg-black/80"></div>

            <div className="relative max-w-6xl mx-auto flex flex-col gap-8 items-center justify-center">
                {/* Logo u sredini */}


                {/* Donje sekcije: linkovi i ikonice */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Info linkovi */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2 font-bebas">
                        <Link to="/dostava" className="hover:text-pink-400 transition">Dostava</Link>
                        <Link to="/odustanak" className="hover:text-pink-400 transition">Odustanak od kupovine</Link>
                        <Link to="/saradnja" className="hover:text-pink-400 transition">Saradnja sa nama</Link>
                        <Link to="/kontakt" className="hover:text-pink-400 transition">Kontakt</Link>

                    </div>

                    {/* Ikonice i kontakt */}
                    <div className="flex flex-col items-center md:items-end gap-3">
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/kokko.design"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <CiInstagram className="text-3xl hover:text-pink-400 transition" />
                            </a>
                            <a href="mailto:"
                                target="_blank"
                                rel="noopener noreferrer"> <CiMail className="text-3xl hover:text-pink-400 transition" size={30} /></a>
                            <Link to="/korpa" className="relative">
                                <CiShoppingCart className="text-3xl hover:text-pink-400 transition" />
                                <span className="absolute -top-1 -right-2 text-[10px] w-4 h-4 flex justify-center items-center bg-pink-600 rounded-full text-white">
                                    {brojac}
                                </span>
                            </Link>
                        </div>
                        <div className="text-sm text-gray-400 flex items-center gap-1">


                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <img
                        src="/noviLogo1.webp"
                        alt="logoKokko"
                        className="w-[140px] h-[110px] object-contain"
                    />
                    <p className="text-sm text-gray-400">2023 Kokko Design</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
