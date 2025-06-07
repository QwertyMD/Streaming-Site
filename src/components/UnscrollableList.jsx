import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const UnscrollableList = ({
  title,
  items,
  primeAct,
  secAct,
  PrimeIcon,
  SecIcon,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0 }}
      className="grid gap-3"
    >
      <p className="text-xl">{title}</p>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <div
            onClick={() => primeAct(item)}
            key={`${item.id}`}
            className="w-36 md:w-42 lg:w-48 relative shrink-0 overflow-hidden rounded-lg group cursor-pointer"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt=""
              className="w-full h-full group-hover:scale-110 transition-transform duration-500"
              draggable={false}
            />
            <div className="absolute w-full h-full bottom-0 left-0 border-4 bg-primeblack/50 border-white/50 backdrop-blur-xs hidden group-hover:block space-y-1 rounded-lg px-3 py-1">
              <p className="font-bold text-xl">{item.title || item.name}</p>
              <div className=" flex gap-2 items-center">
                <Star className="text-yellow-300" />
                <p className="text-lg">{item.vote_average.toFixed(2)}</p>
              </div>
            </div>
            <div className="absolute bottom-5 w-full h-full gap-2 items-end justify-center hidden group-hover:flex">
              <button
                onClick={() => primeAct(item)}
                className="bg-white/30 backdrop-blur-md rounded-full cursor-pointer p-2  hover:bg-white/10 transition-colors"
              >
                <PrimeIcon />
              </button>
              <button
                onClick={(e) => {
                  secAct(item);
                  e.stopPropagation();
                }}
                className="bg-white/30 backdrop-blur-md rounded-full cursor-pointer p-2  hover:bg-white/10 transition-colors"
              >
                <SecIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default UnscrollableList;
