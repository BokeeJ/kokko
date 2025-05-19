import { CiInstagram, CiFacebook, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";


function Footer(props) {

    return (
        <footer
            className="w-full text-gray-400 p-6 lg:mt-10 bg-cover bg-center relative"
            style={{ backgroundImage: "url('/black2.webp')" }}
        >
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Leva strana */}
                <div className="text-center md:text-left flex flex-col justify-center items-center">
                    <img src="/2.png" alt="logoKokko" className="w-[140px] h-[110px] object-contain mx-auto md:mx-0" />
                    <p className="text-sm mt-2">© 2025 KOKKO. Sva prava zadržana.</p>

                </div>





                {/* Desna strana - društvene mreže */}
                <div className="flex gap-4">

                    <a href="https://www.instagram.com/kokko.design" target="_blank" rel="noopener noreferrer">
                        <CiInstagram className="text-3xl hover:text-pink-400 transition" />
                    </a>
                    <a href="#">
                        <CiFacebook className="text-3xl hover:text-pink-400 transition" />
                    </a>

                    <Link to='/korpa'>
                        <CiShoppingCart className='text-3xl hover:text-pink-400 transition' />
                    </Link>
                    <p className='text-white absolute text-[10px] ml-[110px] mt-5  w-4 h-4 flex justify-center items-center bg-pink-600 rounded-full'>{props.brojac}</p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
