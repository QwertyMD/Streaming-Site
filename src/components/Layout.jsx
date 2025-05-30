import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="relative min-h-screen cursor-default text-white">
      <div className="absolute w-full min-h-screen bg-gradient-to-b from-primeblack/80 to-primeblack -z-20"></div>
      <div className="absolute w-full min-h-screen bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] -z-10"></div>
      <Outlet />
    </div>
  );
};

export default Layout;
