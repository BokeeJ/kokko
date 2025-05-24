import { CiInstagram, CiFacebook, CiShoppingCart, CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";

function Footer(props) {
    return (
        <footer
            className="w-full text-gray-400 p-6 lg:mt-10 bg-cover bg-center relative"
            style={{ backgroundImage: "url('/black2.webp')" }}
        >
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

                {/* Logo i copyright */}
                <div className="flex flex-col items-center">
                    <img
                        src="/2.webp"
                        alt="logoKokko"
                        className="w-[140px] h-[110px] object-contain"
                    />

                </div>

                {/* Navigacija / linkovi */}
                <div className="flex flex-col items-center text-center gap-2">
                    <Link to='/' className="hover:text-pink-400 transition">Početna</Link>
                    <Link to="/katalog" className="hover:text-pink-400 transition">Katalog</Link>
                    <Link to="/oMeni" className="hover:text-pink-400 transition">O nama</Link>
                    <Link to="/galerija" className="hover:text-pink-400 transition">Galerija</Link>
                    <Link to="/dodajRecenziju" className="hover:text-pink-400 transition font-bold text-pink-300">Podeli utisak</Link>
                </div>

                {/* Društvene mreže i korpa */}
                <div className="flex justify-center md:justify-end gap-4">
                    <a
                        href="https://www.instagram.com/kokko.design"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <CiInstagram className="text-3xl hover:text-pink-400 transition" />
                    </a>



                    <Link to="/korpa" className="relative">
                        <CiShoppingCart className="text-3xl hover:text-pink-400 transition" />
                        <p className="absolute -top-1 -right-2 text-[10px] w-4 h-4 flex justify-center items-center bg-pink-600 rounded-full text-white">
                            {props.brojac}
                        </p>

                    </Link>

                </div>


            </div>
        </footer>
    );
}

export default Footer;