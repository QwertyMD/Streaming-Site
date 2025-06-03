import React, { useEffect, useState } from "react";
import SearchResults from "@/components/SearchResults.jsx";
import axios from "axios";
import { Input } from "@/components/ui/input.jsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.jsx";
import { ArrowBigDown } from "lucide-react";
import { motion } from "framer-motion";

const Search = () => {
  const [searchItem, setSearchItem] = useState("");

  const [searchResults, setSearchResults] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const fetchSearch = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/${category === "All" ? "multi" : category === "Movies" ? "movie" : "tv"}`,
        {
          params: {
            api_key: "f51f867a67bf6b61d0106400668ce722",
            language: "en-US",
            query: searchItem,
          },
        },
      );
      const filteredResults = response.data.results.filter(
        (result) => result.media_type !== "person",
      );
      setSearchResults(filteredResults);
    };
    fetchSearch();
    // console.log(searchResults);
  }, [searchItem, category]);

  return (
    <div
      className="w-full bg-white/5 p-3 rounded-lg overflow-y-scroll"
      style={{ scrollbarWidth: "none" }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
        className="grid gap-3"
      >
        <p>Search</p>
        <Input
          onChange={(e) => setSearchItem(e.target.value)}
          className="selection:bg-white selection:text-primeblack border-none bg-white/5 !text-base"
          placeholder="What are you looking for?"
        />
        <DropdownMenu>
          <DropdownMenuTrigger className="flex justify-between px-3 py-1 bg-white/5 rounded-sm focus:outline-none text-sm w-32 text-start">
            <p>{category}</p>
            <ArrowBigDown size={20} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white/5 backdrop-blur-3xl border-none text-white">
            <DropdownMenuItem onClick={() => setCategory("All")}>
              All
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setCategory("Movies")}>
              Movies
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setCategory("Shows")}>
              Shows
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <SearchResults results={searchResults} type={category} />
      </motion.div>
    </div>
  );
};

export default Search;
