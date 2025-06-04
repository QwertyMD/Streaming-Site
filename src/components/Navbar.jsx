import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { CollectionsContext } from "@/contexts/CollectionsContext.jsx";
import { Search, Home, Clapperboard, Monitor, Heart } from "lucide-react";

const Navbar = () => {
  const navItems = [
    {
      name: "Search",
      icon: <Search />,
    },
    {
      name: "Home",
      icon: <Home />,
    },
    {
      name: "Movies",
      icon: <Clapperboard />,
    },
    {
      name: "Shows",
      icon: <Monitor />,
    },
    {
      name: "Collections",
      icon: <Heart />,
    },
  ];
  const { collections } = useContext(CollectionsContext);

  const mobileNav = () => {
    return (
      <div className="lg:hidden absolute bottom-3 left-3 right-3 rounded-lg bg-[#1d1f22] p-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0 }}
          className="flex gap-3 w-full justify-around"
        >
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={`/${item.name.toLowerCase()}`}
              className={(e) =>
                `flex items-center justify-center w-12 h-12 rounded-full ${
                  e.isActive && "bg-white/10"
                } transition-colors`
              }
            >
              {item.icon}
            </NavLink>
          ))}
        </motion.div>
      </div>
    );
  };

  const desktopNav = () => {
    return (
      <div className="lg:block hidden p-5 bg-white/10 rounded-lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0 }}
          className="grid justify-between items-center gap-10"
        >
          <NavLink to={"/"} className="flex items-center gap-3">
            <img
              src="OpenFlix.png"
              alt=""
              className="w-12 h-8"
              draggable={false}
            />
            <p className="text-primeblue text-2xl font-bold">
              Open<span className="text-primered font-bold">Flix</span>
            </p>
          </NavLink>

          <ul className="grid gap-3 w-64">
            {navItems.map((item, index) => (
              <li key={index} className=" cursor-pointer">
                <NavLink
                  to={`/${item.name.toLowerCase()}`}
                  className={(e) =>
                    `${e.isActive && "bg-white/10 hover:bg-white/10"} hover:bg-white/5 text-lg px-4 py-2 rounded-lg flex gap-1 relative transition-colors`
                  }
                >
                  <div className="flex gap-3 items-center">
                    {item.icon}
                    <p>{item.name}</p>
                    {item.name === "Collections" && (
                      <p className="text-sm text-white">
                        {collections.length || ""}
                      </p>
                    )}
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    );
  };

  return (
    <>
      {mobileNav()}
      {desktopNav()}
    </>
  );
};

export default Navbar;
