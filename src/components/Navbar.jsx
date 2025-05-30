import React from "react";
import { NavLink } from "react-router-dom";
import { SearchIcon } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const navItems = ["Home", "Movies", "Shows", "Collections"];

  return (
    <div className="px-10 py-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
        className="flex justify-between items-center"
      >
        <NavLink to={"/"} className="flex items-center gap-3">
          <div className="w-12 h-8 bg-cover bg-[url('OpenFlix.svg')]"></div>
          <p className="text-primeblue text-2xl font-bold">
            Open<span className="text-primered font-bold">Flix</span>
          </p>
        </NavLink>

        <ul className="flex gap-20">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="text-primeblue hover:text-primered cursor-pointer"
            >
              <NavLink
                to={`/${item.toLowerCase()}`}
                className={(e) =>
                  `${e.isActive && "text-primered bg-primeblue/10"} text-lg px-4 py-2 rounded-2xl`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="cursor-pointer">
          <SearchIcon className="text-primered" size={32} />
        </button>
      </motion.div>
    </div>
  );
};

export default Navbar;
