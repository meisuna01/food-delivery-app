import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const LayOut = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* ✅ Navbar appears on all pages */}
      <Navbar />

      {/* ✅ Outlet renders child pages like Home, Login, SignUp, etc. */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* ✅ Footer appears on all pages */}
      <Footer />
    </div>
  );
};

export default LayOut;
