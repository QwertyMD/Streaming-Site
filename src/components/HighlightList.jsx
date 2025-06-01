import { Play, Plus, Star } from "lucide-react";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { CollectionsContext } from "@/contexts/CollectionsContext.jsx";

const HighlightList = ({ highlights, containerRef }) => {
  const { addToCollection } = useContext(CollectionsContext);
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0 }}
      className="grid gap-10"
    >
      <div
        className="flex gap-3 overflow-hidden scroll-smooth snap-x snap-mandatory"
        ref={containerRef}
      >
        {highlights.map((highlight) => (
          <div
            key={`${highlight.id}`}
            className="w-full h-[40rem] relative shrink-0 overflow-hidden rounded-lg snap-center"
          >
            <img
              src={`https://image.tmdb.org/t/p/original${highlight.backdrop_path}`}
              alt={highlight.title || highlight.name}
              className="w-full h-full object-cover blur-lg absolute"
              draggable={false}
            />
            <img
              src={`https://image.tmdb.org/t/p/original${highlight.poster_path}`}
              alt=""
              draggable={false}
              className="w-md rounded-lg right-30 absolute rotate-12"
            />
            <div className="absolute w-full h-1/2 bottom-0 bg-gradient-to-t from-primeblack via-primeblack/30"></div>
            <div className="absolute bottom-0 left-0 w-full p-5 grid gap-3">
              <div className="flex gap-10 items-center">
                <h2 className="text-4xl font-bold text-white">
                  {highlight.title || highlight.name}
                </h2>
                <div className="flex gap-5">
                  <button className="bg-white/30 p-2 rounded-full cursor-pointer">
                    <Play />
                  </button>
                  <button
                    onClick={() => addToCollection(highlight)}
                    className="bg-white/30 p-2 rounded-full cursor-pointer"
                  >
                    <Plus />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-300" />
                  <span className="text-lg">
                    {highlight.vote_average.toFixed(2)}
                  </span>
                </div>
                <span className="text-white/70 text-sm">
                  {highlight.release_date}
                </span>
              </div>
              <p className="text-white/80 max-w-2xl">{highlight.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default HighlightList;
