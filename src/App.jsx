import React from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Glavni sadržaj stranica */}
      <Outlet />
    </div>
  );
}

export default App;
