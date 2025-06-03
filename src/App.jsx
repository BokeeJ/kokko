import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <div className="pt-[100px] lg:pt-0">
        <Outlet />
      </div>
    </div>
  );
}
export default App;