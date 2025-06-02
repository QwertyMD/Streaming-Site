import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Trash, Star, Play } from "lucide-react";
import { CollectionsContext } from "@/contexts/CollectionsContext.jsx";
import { useNavigate } from "react-router-dom";

const Collections = () => {
  const { collections, removeFromCollection } = useContext(CollectionsContext);
  const navigate = useNavigate();

  return (
    <div className="px-10 py-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
        className="grid gap-3"
      >
        <p className="text-2xl">Collections</p>
        <div className="flex flex-wrap gap-3">
          {collections.map((collection) => (
            <div
              key={`${collection.id}`}
              className="w-56 relative shrink-0 overflow-hidden rounded-lg group"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${collection.poster_path}`}
                alt=""
                className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                draggable={false}
              />
              <div className="absolute w-full h-full bottom-0 left-0 border-4 border-primeblue hidden group-hover:block space-y-1 rounded-lg bg-gradient-to-b from-primeblack px-3 py-1">
                <p className="font-bold text-xl">
                  {collection.title || collection.name}
                </p>
                <div className=" flex gap-2 items-center">
                  <Star className="text-yellow-300" />
                  <p className="text-lg">
                    {collection.vote_average.toFixed(2)}
                  </p>
                </div>
                <div className="absolute top-0 w-full h-full gap-2 items-center justify-center hidden group-hover:flex">
                  <button
                    onClick={() => navigate(collection.name ? `/tv/${collection.id}` : `/movie/${collection.id}`)}
                    className="bg-white/30 backdrop-blur-md rounded-full cursor-pointer p-2 hover:text-primered hover:bg-primeblue transition-colors"
                  >
                    <Play />
                  </button>
                  <button
                    onClick={() => removeFromCollection(collection.id)}
                    className="bg-white/30 backdrop-blur-md rounded-full cursor-pointer p-2 hover:text-primered hover:bg-primeblue transition-colors"
                  >
                    <Trash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Collections;
