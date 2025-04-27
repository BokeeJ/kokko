import { CiInstagram, CiFacebook } from "react-icons/ci";

function Footer() {
    return (
        <footer
            className="w-full text-gray-400 p-6 mt-10 bg-cover bg-center relative"
            style={{ backgroundImage: "url('/black2.webp')" }}
        >
            <div className="absolute inset-0 bg-black/70"></div> {/* Crni sloj preko slike da tekst bude čitljiv */}

            <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Leva strana */}
                <div className="text-center md:text-left">
                    <img src="/2.png" alt="logoKokko" className="w-[120px] h-[90px] object-contain mx-auto md:mx-0" />
                    <p className="text-sm mt-2">© 2025 KOKKO. Sva prava zadržana.</p>
                    <p className="text-sm mt-2">Kontakt: kokko.design@gmail.com</p>
                </div>

                <hr className="border text-white w-[80%] lg:hidden md:hidden" />

                {/* Sredina - linkovi */}
                <div className="flex gap-5 text-l">
                    <a href="#naslovna" className="hover:text-pink-400 transition">Naslovna</a>
                    <a href="#katalog" className="hover:text-pink-400 transition">Katalog</a>
                    <a href="#kontakt" className="hover:text-pink-400 transition">Kontakt</a>
                    <a href="#galerija" className="hover:text-pink-400 transition">Galerija</a>
                </div>

                {/* Desna strana - društvene mreže */}
                <div className="flex gap-4">
                    <a href="https://www.instagram.com/kokko.design" target="_blank" rel="noopener noreferrer">
                        <CiInstagram className="text-3xl hover:text-pink-400 transition" />
                    </a>
                    <a href="#">
                        <CiFacebook className="text-3xl hover:text-pink-400 transition" />
                    </a>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
