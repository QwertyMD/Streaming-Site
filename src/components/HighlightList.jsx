import { ArrowLeft, ArrowRight, Play, Plus, Star } from "lucide-react";
import React, { useContext, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CollectionsContext } from "@/contexts/CollectionsContext.jsx";
import { useNavigate } from "react-router-dom";

const HighlightList = ({ highlights }) => {
  const { addToCollection } = useContext(CollectionsContext);
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const handleScroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = ref.current.offsetWidth;
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setInterval(() => {
      handleScroll(containerRef, "right");
    }, 5000);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0 }}
      className="grid gap-3"
    >
      <div className="flex items-center justify-between">
        <p className="text-xl">Trending</p>

        <div className="flex gap-3">
          <button
            onClick={() => handleScroll(containerRef, "left")}
            className="cursor-pointer bg-white/10 rounded-full p-1"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={() => handleScroll(containerRef, "right")}
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
            className="w-full h-[18rem] md:h-[40vw] lg:h-[40rem] relative shrink-0 overflow-hidden rounded-lg snap-center"
          >
            <img
              src={`https://image.tmdb.org/t/p/original${highlight.backdrop_path}`}
              alt={highlight.title || highlight.name}
              className="w-full h-full object-cover lg:blur-lg absolute"
              draggable={false}
            />
            <img
              src={`https://image.tmdb.org/t/p/original${highlight.poster_path}`}
              alt=""
              draggable={false}
              className="w-md rounded-lg -top-10 right-30 hidden lg:block absolute rotate-12"
            />
            <div className="absolute w-full h-1/2 bottom-0 bg-gradient-to-t from-primeblack via-primeblack/30"></div>
            <div className="absolute bottom-0 left-0 w-full p-5 grid gap-3">
              <div className="flex gap-10 items-center">
                <h2 className="text-2xl md:text-4xl font-bold text-white">
                  {highlight.title || highlight.name}
                </h2>
                <div className="flex gap-5">
                  <button
                    onClick={() =>
                      navigate(
                        highlight.media_type === "tv"
                          ? `/tv/${highlight.id}`
                          : `/movie/${highlight.id}`
                      )
                    }
                    className="bg-white/30 backdrop-blur-md rounded-full cursor-pointer p-2  hover:bg-white/10 transition-colors"
                  >
                    <Play />
                  </button>
                  <button
                    onClick={() => addToCollection(highlight)}
                    className="bg-white/30 backdrop-blur-md rounded-full cursor-pointer p-2  hover:bg-white/10 transition-colors"
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
              <p className="hidden md:block text-white/80 max-w-2xl">
                {highlight.overview}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default HighlightList;
