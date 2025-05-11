import Navbar from "./Components/Navbar";
import MiniBar from "./Components/MiniBar";
import Footer from "./Components/Footer";
import ScrollControl from "./services/ScrollControl";
import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [brojac, setBrojac] = useState(0)
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
    const korpa = JSON.parse(localStorage.getItem("korpa")) || []
    setBrojac(korpa.length)
  }, [])



  return (
    <div className="relative min-h-screen bg-black h-full">

      {/* Dugme za mobilni meni */}
      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 m-2 w-[40px] text-pink-200 text-2xl rounded z-50 absolute top-0 left-0 transition-transform duration-300 ease-in-out"
      >
        ☰
      </button>

      {/* Mobilni sidebar meni */}
      <div
        ref={menuRef}
        className={`lg:hidden fixed top-0 left-0 h-full w-[230px] z-50 shadow-lg transform transition-transform duration-300 ease-in-out backdrop-blur-md bg-black/30 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <MiniBar />
        <button onClick={toggleMenu} className="mt-4 text-sm text-white border-white rounded-2xl border p-3 ml-4 hover:border-pink-200 ">
          Zatvori
        </button>
      </div>
      <ScrollControl />
      {/* Navbar */}
      <Navbar brojac={brojac} />

      {/* Fini prelaz - fade */}
      <div className="h-[10px] bg-gradient-to-b from-transparent to-gray-600"></div><div className="h-[90px] bg-gradient-to-t from-transparent to-gray-600"></div>
      <Outlet context={{ brojac, setBrojac }} />

      {/* Main */}

      {/* Fini prelaz - fade */}
      <div className="h-[10px] bg-gradient-to-b from-transparent to-gray-600"></div><div className="h-[90px] bg-gradient-to-t from-transparent to-gray-600"></div>

      {/* Footer */}
      <Footer brojac={brojac} />



    </div>
  );
}

export default App;
