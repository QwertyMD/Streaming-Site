import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { SearchIcon } from "lucide-react";
import { motion } from "framer-motion";
import { CollectionsContext } from "@/contexts/CollectionsContext.jsx";

const Navbar = () => {
  const navItems = ["Home", "Movies", "Shows", "Collections"];
  const { collections } = useContext(CollectionsContext);

  return (
    <div className="px-10 py-5 sticky top-0 z-10 backdrop-blur-3xl bg-gradient-to-b from-primeblack">
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
                  `${e.isActive && "text-primered bg-primeblue/10"} text-lg px-4 py-2 rounded-2xl flex relative`
                }
              >
                {item} {item === "Collections" && <p className="text-sm text-white rounded-full absolute right-2 top-1">{collections.length || ""}</p>}
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
