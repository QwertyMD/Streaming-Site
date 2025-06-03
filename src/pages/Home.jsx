import React, { useEffect, useState } from "react";
import axios from "axios";
import ScrollableList from "@/components/ScrollableList.jsx";
import HighlightList from "@/components/HighlightList.jsx";

const Home = () => {
  const [discoverMovies, setDiscoverMovies] = useState([]);
  const [discoverShows, setDiscoverShows] = useState([]);
  const [trendingAll, setTrendingAll] = useState([]);

  const scroll = (ref, direction) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === "left" ? -1000 : 1000,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie",
        {
          params: {
            api_key: "f51f867a67bf6b61d0106400668ce722",
            language: "en-US",
          },
        },
      );
      setDiscoverMovies(response.data.results);
    };
    fetchTrendingMovies();

    const fetchTrendingShows = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/tv",
        {
          params: {
            api_key: "f51f867a67bf6b61d0106400668ce722",
            language: "en-US",
          },
        },
      );
      setDiscoverShows(response.data.results);
    };
    fetchTrendingShows();

    const fetchTrendingAll = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/trending/all/day",
        {
          params: {
            api_key: "f51f867a67bf6b61d0106400668ce722",
            language: "en-US",
          },
        },
      );
      setTrendingAll(response.data.results);
    };
    fetchTrendingAll();
  }, []);

  // console.log(discoverMovies);
  // console.log(discoverShows);
  // console.log(trendingAll);

  return (
    <div
      className="grid gap-10 overflow-y-scroll bg-white/10 p-3 rounded-lg"
      style={{ scrollbarWidth: "none" }}
    >
      <HighlightList highlights={trendingAll} scroll={scroll} />
      <ScrollableList
        title="Discover Movies"
        highlights={discoverMovies}
        type="movie"
        scroll={scroll}
      />
      <ScrollableList
        title="Discover Shows"
        highlights={discoverShows}
        type="tv"
        scroll={scroll}
      />
    </div>
  );
};

export default Home;
