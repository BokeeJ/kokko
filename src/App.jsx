import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";

import Navbar from "./Components/Navbar";
import MiniBar from "./Components/MiniBar";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ScrollControl from "./services/ScrollControl";
import DefaultTopScroll from "./services/DefaultTopScroll";
import ScrollToTop from "./services/ScrollToTop";
import FooterEnd from "./Components/FooterEnd";

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

  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.classList.add("noscroll");
    } else {
      body.classList.remove("noscroll");
    }
  }, [isOpen]);

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Dugme za mobilni meni */}
      <button
        onClick={toggleMenu}
        className={`lg:hidden p-2 w-[40px] text-pink-200 text-3xl rounded z-[110] fixed top-[47px] left-[15px] transition-opacity duration-400 ${isOpen ? "opacity-10 pointer-events-none" : "opacity-100"
          }`}
      >
        <CiMenuFries />
      </button>

      {/* Mobilni sidebar meni */}
      <div
        ref={menuRef}
        className={`lg:hidden fixed top-[100px] left-0 h-[calc(100vh-100px)] w-[230px] z-[110] shadow-lg transform transition-transform duration-300 ease-in-out backdrop-blur-md bg-black/30 overflow-y-auto ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
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

      {/* Fiksiran Header */}
      <div className="fixed top-0 left-0 w-full z-[100]">
        <Header />
      </div>

      {/* Fiksiran Navbar odmah ispod Headera */}
      <div className="fixed top-[20px] left-0 w-full z-[90]">
        <Navbar brojac={brojac} />
      </div>
      {/* Blagi fade prelaz ispod Navbar-a */}
      <div className="h-[40px] w-full bg-gradient-to-b from-black/80 to-transparent z-[85] relative shadow-lg" />


      {/* Offset da se sadržaj ne poklapa sa Header + Navbar */}
      <div className="pt-[120px]">
        <DefaultTopScroll />
        <Outlet context={{ brojac, setBrojac, isOpen }} />
      </div>

      {/* Fade efekti */}
      <div className="h-[10px] bg-gradient-to-b from-transparent to-gray-600"></div>
      <div className="h-[90px] bg-gradient-to-t from-transparent to-gray-600"></div>

      {/* Footer sekcije */}
      <Footer brojac={brojac} />
      <ScrollToTop />
      <FooterEnd />
    </div>
  );
}

export default App;
