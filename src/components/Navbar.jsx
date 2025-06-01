import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { SearchIcon } from "lucide-react";
import { motion } from "framer-motion";
import { CollectionsContext } from "@/contexts/CollectionsContext.jsx";
import { Input } from "./ui/input";
import SearchResults from "./SearchResults";
import axios from "axios";

const Navbar = () => {
  const navItems = ["Home", "Movies", "Shows", "Collections"];
  const { collections } = useContext(CollectionsContext);
  const [searchItem, setSearchItem] = useState();
  const [searchResults, setSearchResults] = useState([]);

  const fetchSearch = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/search/movie",
      {
        params: {
          api_key: "f51f867a67bf6b61d0106400668ce722",
          language: "en-US",
          query: searchItem,
        },
      }
    );
    setSearchResults(response.data.results);
  };

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
                {item}{" "}
                {item === "Collections" && (
                  <p className="text-sm text-white rounded-full absolute right-2 top-1">
                    {collections.length || ""}
                  </p>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 relative">
          <button className="cursor-pointer">
            <SearchIcon className="text-primered" size={32} />
          </button>
          <Input
            onChange={(e) => {
              setSearchItem(e.target.value);
              fetchSearch();
              console.log(searchResults);
            }}
            className="border-primeblue focus-visible:border-primered focus-visible:ring-primered w-96 selection:bg-white selection:text-primeblack"
          />
          {searchItem >= 2 && (
            <div className="absolute top-20 bg-primeblack w-full h-96 overflow-y-scroll rounded-lg">
              <SearchResults results={searchResults} />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
