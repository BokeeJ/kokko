import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import FooterEnd from "./Components/FooterEnd";



function App() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <Header />
      <Navbar />
      <div className="pt-[100px] lg:pt-0">
        <Outlet />
      </div>
      <Footer />
      {/* <FooterEnd /> */}
    </div>
  );
}
export default App;