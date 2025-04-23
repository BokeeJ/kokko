import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import MiniBar from "./Components/MiniBar";
import { useState } from "react";


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">

      {/* Dugme za meni */}
      {/* MiniBar sa animacijom */}
      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 m-2 w-[40px]  text-pink-200 text-2xl rounded z-50 absolute top-0 left-0 transition-transform duration-300 ease-in-out"
      >
        ☰
      </button>
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-[230px] bg-pink-100 z-50 shadow-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <MiniBar />
        <button onClick={toggleMenu} className="mt-4 text-sm text-gray-700 border-black border p-1 ml-4">
          Zatvori
        </button>
      </div>
      {/*  */}

      <Navbar />
      <Main />
    </div>
  );
}

export default App;
