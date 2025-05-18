import Navbar from "./Components/Navbar";
import MiniBar from "./Components/MiniBar";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ScrollControl from "./services/ScrollControl";
import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./services/ScrollToTop";
import { CiMenuFries } from "react-icons/ci";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [brojac, setBrojac] = useState(0);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const korpa = JSON.parse(localStorage.getItem("korpa")) || [];
    setBrojac(korpa.length);
  }, []);

  return (
    <div className="relative min-h-screen bg-black h-full">

      {/* Dugme za mobilni meni */}
      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 w-[40px] text-pink-200 text-3xl rounded z-[100] fixed top-[20px] left-[15px]"
      >
        <CiMenuFries />
      </button>

      {/* Mobilni sidebar meni */}
      <div
        ref={menuRef}
        className={`lg:hidden fixed top-[100px] left-0 h-full w-[230px] z-[100] shadow-lg transform transition-transform duration-300 ease-in-out backdrop-blur-md bg-black/30 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <MiniBar />
        <button
          onClick={toggleMenu}
          className="mt-4 text-sm text-white border-white rounded-2xl border p-3 ml-4 hover:border-pink-200"
        >
          Zatvori
        </button>
      </div>

      <ScrollControl />

      {/* Navbar */}
      <Header />
      <Navbar brojac={brojac} />

      {/* Fini prelaz - fade */}
      <div className="h-[10px] bg-gradient-to-b from-transparent to-gray-600"></div>
      <div className="h-[90px] bg-gradient-to-t from-transparent to-gray-600"></div>

      {/* Sadržaj stranica */}
      <div className="pt-[100px] lg:pt-[200px]">
        <Outlet context={{ brojac, setBrojac }} />
      </div>

      {/* Fini prelaz - fade */}
      <div className="h-[10px] bg-gradient-to-b from-transparent to-gray-600"></div>
      <div className="h-[90px] bg-gradient-to-t from-transparent to-gray-600"></div>

      {/* Footer */}
      <Footer brojac={brojac} />
      <ScrollToTop />
    </div>
  );
}

export default App;
