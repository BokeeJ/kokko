import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import MiniBar from "./Components/MiniBar";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
        className={`lg:hidden fixed top-0 left-0 h-full w-[230px] bg-pink-100 z-50 shadow-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <MiniBar />
        <button onClick={toggleMenu} className="mt-4 text-sm text-gray-700 border-black border p-1 ml-4">
          Zatvori
        </button>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Fini prelaz - fade */}
      <div className="h-[10px] bg-gradient-to-b from-transparent to-gray-600"></div><div className="h-[90px] bg-gradient-to-t from-transparent to-gray-600"></div>

      {/* Main */}
      <Main />
      {/* Fini prelaz - fade */}
      <div className="h-[10px] bg-gradient-to-b from-transparent to-gray-600"></div><div className="h-[90px] bg-gradient-to-t from-transparent to-gray-600"></div>

      {/* Footer */}
      <Footer />



    </div>
  );
}

export default App;
