import { Play, Plus, Star } from "lucide-react";
import React, { useContext } from "react";
import { Input } from "./ui/input";
import { useNavigate } from "react-router-dom";
import { CollectionsContext } from "@/contexts/CollectionsContext.jsx";

const SearchResults = ({ results, search, change, item, type, setType }) => {
  const { addToCollection } = useContext(CollectionsContext);
  const navigate = useNavigate();

  return (
    <div className="bg-primeblack w-lg h-[40rem] overflow-y-auto rounded-lg p-3 space-y-3">
      <Input
        onChange={(e) => {
          change(e);
          search();
        }}
        className="border-primeblue focus-visible:border-primered focus-visible:ring-primered selection:bg-white selection:text-primeblack"
      />
      <div className="flex gap-3 text-primeblue items-center">
        <button
          onClick={() => setType(false)}
          className={`p-2 rounded-lg cursor-pointer transition-colors ${!type && "bg-primeblue text-primered"}`}
        >
          Movies
        </button>
        <button
          onClick={() => setType(true)}
          className={`p-2 rounded-lg cursor-pointer transition-colors ${type && "bg-primeblue text-primered"}`}
        >
          Shows
        </button>
      </div>
      {item.length >= 2 &&
        results.map((result) => (
          <div
            key={result.id}
            className="flex items-center gap-2 hover:bg-white/20 transition-colors p-2 rounded-lg"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
              alt=""
              className="h-20 rounded-lg"
              draggable={false}
            />
            <div className="transition-colors">
              <p className="">{result.title || result.name}</p>
              <div className="flex gap-2">
                <Star className="text-yellow-300" />
                <p>{result.vote_average}</p>
              </div>
              <div className="flex gap-2 mt-1">
                <button
                  onClick={() =>
                    navigate(type ? `/tv/${result.id}` : `/movie/${result.id}`)
                  }
                  className="bg-white/30 backdrop-blur-md rounded-full cursor-pointer p-1 hover:text-primered hover:bg-primeblue transition-colors"
                >
                  <Play size={20} />
                </button>
                <button
                  onClick={() => addToCollection(result)}
                  className="bg-white/30 backdrop-blur-md rounded-full cursor-pointer p-1 hover:text-primered hover:bg-primeblue transition-colors"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SearchResults;
