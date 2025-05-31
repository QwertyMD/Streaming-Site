import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar.jsx";

const Layout = () => {
  const location = useLocation();
  const showNavbar = ["/home", "/movies", "/shows", "/collections"].includes(
    location.pathname,
  );

  useEffect(() => {
    const disableRightClick = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  return (
    <div className="relative min-h-screen cursor-default text-white select-none bg-primeblack/90">
      {showNavbar && <Navbar />}
      <Outlet />
    </div>
  );
};

export default Layout;
