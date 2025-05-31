import React, { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Plus, Star } from "lucide-react";
import { CollectionsContext } from "@/contexts/CollectionsContext.jsx";

const ScrollableList = ({ title, highlights, containerRef }) => {
  const { addToCollection } = useContext(CollectionsContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0 }}
      className="grid gap-10"
    >
      <div className="grid gap-3">
        <p className="text-2xl">{title}</p>
        <div
          className="flex gap-3 overflow-x-hidden scroll-smooth"
          ref={containerRef}
        >
          {highlights.map((highlight) => (
            <div
              key={`${highlight.id}`}
              className="w-56 relative shrink-0 overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${highlight.poster_path}`}
                alt=""
                className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                draggable={false}
              />
              <div className="absolute w-full h-full bottom-0 left-0 border-4 border-primeblue hidden group-hover:block rounded-lg bg-gradient-to-b from-primeblack to-transparent px-3 py-1 text-primered">
                <p className="font-bold text-xl">
                  {highlight.title || highlight.name}
                </p>
                <div className=" flex gap-2 items-center">
                  <Star className="text-yellow-300" />
                  <p className="text-lg">{highlight.vote_average.toFixed(2)}</p>
                </div>
                <button onClick={() => addToCollection(highlight)}>
                  <Plus className="bg-primeblue rounded-full cursor-pointer" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Home = () => {
  // const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingShows, setTrendingShows] = useState([]);

  const scrollContainerRef1 = useRef(null);
  const scrollContainerRef2 = useRef(null);

  const addScrollHandler = (containerRef) => {
    useEffect(() => {
      const container = containerRef.current;

      const handleWheel = (e) => {
        if (e.shiftKey) {
          e.preventDefault();
          container.scrollLeft += e.deltaY * 2;
        }
      };

      container.addEventListener("wheel", handleWheel);

      return () => {
        container.removeEventListener("wheel", handleWheel);
      };
    }, [containerRef]);
  };

  addScrollHandler(scrollContainerRef1);
  addScrollHandler(scrollContainerRef2);

  // useEffect(() => {
  //   const fetchTrendingMovies = async () => {
  //     const response = await axios.get(
  //       "https://api.themoviedb.org/3/trending/movie/day",
  //       {
  //         params: {
  //           api_key: "f51f867a67bf6b61d0106400668ce722",
  //           language: "en-US",
  //         },
  //       },
  //     );
  //     setTrendingMovies(response.data.results);
  //   };
  //   fetchTrendingMovies();
  //
  //   const fetchTrendingShows = async () => {
  //     const response = await axios.get(
  //       "https://api.themoviedb.org/3/trending/tv/day",
  //       {
  //         params: {
  //           api_key: "f51f867a67bf6b61d0106400668ce722",
  //           language: "en-US",
  //         },
  //       },
  //     );
  //     setTrendingShows(response.data.results);
  //   };
  //   fetchTrendingShows();
  // }, []);

  const trendingMovies = [
    {
      adult: false,
      backdrop_path: "/frDS8A5vIP927KYAxTVVKRIbqZw.jpg",
      genre_ids: [14, 28, 80],
      id: 268,
      original_language: "en",
      original_title: "Batman",
      overview:
        'Batman must face his most ruthless nemesis when a deformed madman calling himself "The Joker" seizes control of Gotham\'s criminal underworld.',
      popularity: 8.1965,
      poster_path: "/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg",
      release_date: "1989-06-21",
      title: "Batman",
      video: false,
      vote_average: 7.234,
      vote_count: 8066,
    },
  ];

  console.log(trendingMovies);
  console.log(trendingShows);

  return (
    <div className="px-10 py-5 grid gap-10">
      <div className="w-full rounded-xl relative overflow-hidden">
        {trendingMovies.map((highlight) => (
          <div key={`${highlight.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${highlight.backdrop_path}`}
              alt=""
              className="w-full h-[50rem] object-cover rounded-xl blur-xl"
              draggable={false}
            />
          </div>
        ))}
      </div>
      <ScrollableList
        title="Trending Movies"
        highlights={trendingMovies}
        containerRef={scrollContainerRef1}
      />
      <ScrollableList
        title="Trending Shows"
        highlights={trendingShows}
        containerRef={scrollContainerRef2}
      />
    </div>
  );
};

export default Home;
