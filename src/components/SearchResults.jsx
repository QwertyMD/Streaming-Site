import { Play, Plus, Star } from "lucide-react";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CollectionsContext } from "@/contexts/CollectionsContext.jsx";

const SearchResults = ({ results, type }) => {
  const { addToCollection } = useContext(CollectionsContext);
  const navigate = useNavigate();

  return (
    <div className="space-y-3">
      <div className="flex gap-3 flex-wrap">
        {results.map(
          (result) =>
            result.poster_path && (
              <div
                key={`${result.id}`}
                className="w-48 relative shrink-0 overflow-hidden rounded-lg group"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                  alt=""
                  className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                  draggable={false}
                />
                <div className="absolute w-full h-full bottom-0 left-0 border-4 bg-primeblack/50 border-white/50 backdrop-blur-xs hidden group-hover:block space-y-1 rounded-lg px-3 py-1">
                  <p className="font-bold text-xl">
                    {result.title || result.name}
                  </p>
                  <div className=" flex gap-2 items-center">
                    <Star className="text-yellow-300" />
                    <p className="text-lg">
                      {result.vote_average
                        ? result.vote_average.toFixed(2)
                        : "NA"}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-5 w-full h-full gap-2 items-end justify-center hidden group-hover:flex">
                  <button
                    onClick={() => {
                      navigate(
                        type === "All"
                          ? `/${result.media_type}/${result.id}`
                          : type === "Movies"
                            ? `/movie/${result.id}`
                            : `/tv/${result.id}`,
                      );
                    }}
                    className="bg-white/30 backdrop-blur-md rounded-full cursor-pointer p-2  hover:bg-white/10 transition-colors"
                  >
                    <Play />
                  </button>
                  <button
                    onClick={() => addToCollection(result)}
                    className="bg-white/30 backdrop-blur-md rounded-full cursor-pointer p-2  hover:bg-white/10 transition-colors"
                  >
                    <Plus />
                  </button>
                </div>
              </div>
            ),
        )}
      </div>
    </div>
  );
};

export default SearchResults;
