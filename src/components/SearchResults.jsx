import { Star } from "lucide-react";
import React from "react";
const SearchResults = ({ results }) => {
  return (
    <div>
      {results.map((result) => (
        <div
          key={result.id}
          className="flex items-center gap-2 hover:bg-white/10 transition-colors group p-2 rounded-lg"
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
            alt=""
            className="h-20 rounded-lg"
            draggable={false}
          />
          <div className="group-hover:text-primered transition-colors">
            <p className="">{result.title || result.name}</p>
            <div className="flex gap-2">
              <Star className="text-yellow-300" />
              <p>{result.vote_average.toFixed(2)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
