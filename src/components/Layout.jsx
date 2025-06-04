import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar.jsx";

const Layout = () => {
  const location = useLocation();
  const showNavbar =
    ["/search", "/home", "/movies", "/shows", "/collections"].includes(
      location.pathname,
    ) ||
    location.pathname.startsWith("/movie/") ||
    location.pathname.startsWith("/tv/");

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
    <div
      className={`${!showNavbar && "bg-primeblack/90 pb-0"} relative min-h-screen cursor-default text-white select-none bg-primeblack flex max-h-screen p-3 lg:pb-3 pb-22 gap-3 overflow-hidden`}
    >
      {showNavbar && <Navbar />}
      <Outlet />
    </div>
  );
};

export default Layout;
