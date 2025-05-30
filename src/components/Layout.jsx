import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar.jsx";

const Layout = () => {
  const location = useLocation();
  const showNavbar = ["/home", "/movies", "/shows", "/collections"].includes(
    location.pathname,
  );

  return (
    <div className="relative min-h-screen cursor-default text-white">
      <div className="absolute w-full min-h-screen bg-gradient-to-b from-primeblack/80 to-primeblack -z-20"></div>
      <div className="absolute w-full min-h-screen bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] -z-10"></div>
      {showNavbar && <Navbar />}
      <Outlet />
    </div>
  );
};

export default Layout;
