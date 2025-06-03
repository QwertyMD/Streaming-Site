import React, { useContext, useRef } from "react";
import { CollectionsContext } from "@/contexts/CollectionsContext.jsx";
import { ArrowRight, ArrowLeft, Play, Plus, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ScrollableList = ({ title, highlights, type, scroll }) => {
  const { addToCollection } = useContext(CollectionsContext);
  const navigate = useNavigate();
  const containerRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0 }}
      className="grid gap-10"
    >
      <div className="grid gap-3">
        <div className="flex items-center justify-between">
          <p className="text-xl">{title}</p>
          <div className="flex gap-3">
            <button
              onClick={()=> scroll(containerRef, "left")}
              className="cursor-pointer bg-white/10 rounded-full p-1"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={() => scroll(containerRef, "right")}
              className="cursor-pointer bg-white/10 rounded-full p-1"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
        <div
          className="flex gap-3 overflow-hidden scroll-smooth snap-x snap-mandatory"
          ref={containerRef}
        >
          {highlights.map((highlight) => (
            <div
              key={`${highlight.id}`}
              className="w-48 relative shrink-0 overflow-hidden rounded-lg group snap-center"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${highlight.poster_path}`}
                alt=""
                className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                draggable={false}
              />
              <div className="absolute w-full h-full bottom-0 left-0 border-4 border-primeblue hidden group-hover:block space-y-1 rounded-lg bg-gradient-to-b from-primeblack px-3 py-1">
                <p className="font-bold text-xl">
                  {highlight.title || highlight.name}
                </p>
                <div className=" flex gap-2 items-center">
                  <Star className="text-yellow-300" />
                  <p className="text-lg">{highlight.vote_average.toFixed(2)}</p>
                </div>
              </div>
              <div className="absolute top-0 w-full h-full gap-2 items-center justify-center hidden group-hover:flex">
                <button
                  onClick={() => navigate(`/${type}/${highlight.id}`)}
                  className="bg-white/30 backdrop-blur-md rounded-full cursor-pointer p-2 hover:text-primered hover:bg-primeblue transition-colors"
                >
                  <Play />
                </button>
                <button
                  onClick={() => addToCollection(highlight)}
                  className="bg-white/30 backdrop-blur-md rounded-full cursor-pointer p-2 hover:text-primered hover:bg-primeblue transition-colors"
                >
                  <Plus />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollableList;
