import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { CollectionsContext } from "@/contexts/CollectionsContext.jsx";

const Navbar = () => {
  const navItems = ["Search", "Home", "Movies", "Shows", "Collections"];
  const { collections } = useContext(CollectionsContext);

  return (
    <div className="p-5 bg-white/5 rounded-lg">
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
            <li
              key={index}
              className="text-primeblue hover:text-primered cursor-pointer"
            >
              <NavLink
                to={`/${item.toLowerCase()}`}
                className={(e) =>
                  `${e.isActive && "text-primered bg-primeblue/10"} text-lg px-4 py-2 rounded-2xl flex gap-1 relative`
                }
              >
                {item}{" "}
                {item === "Collections" && (
                  <p className="text-sm text-white">
                    {collections.length || ""}
                  </p>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
