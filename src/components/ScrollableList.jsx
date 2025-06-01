import React, { useContext } from 'react'
import { CollectionsContext } from "@/contexts/CollectionsContext.jsx";
import { Plus, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const ScrollableList = ({ title, highlights, containerRef }) => {
    const { addToCollection } = useContext(CollectionsContext);
  
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
        className="grid gap-10"
      >
        <div className="grid gap-3">
          <p className="text-2xl">{title}</p>
          <div
            className="flex gap-3 overflow-hidden scroll-smooth snap-x snap-mandatory"
            ref={containerRef}
          >
            {highlights.map((highlight) => (
              <div
                key={`${highlight.id}`}
                className="w-[209px] relative shrink-0 overflow-hidden rounded-lg group snap-start"
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
                  <button
                    onClick={() => addToCollection(highlight)}
                    className="bg-primeblue rounded-full cursor-pointer p-1"
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

export default ScrollableList