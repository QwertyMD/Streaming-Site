import React, { useEffect, useState } from "react";
import axios from "axios";
import ScrollableList from "@/components/ScrollableList.jsx";
import HighlightList from "@/components/HighlightList.jsx";

const Home = () => {
  const [discoverMovies, setDiscoverMovies] = useState([]);
  const [discoverShows, setDiscoverShows] = useState([]);
  const [trendingAll, setTrendingAll] = useState([]);

  useEffect(() => {
    const fetchData = async (url, set) => {
      const response = await axios.get(url, {
        params: {
          api_key: "f51f867a67bf6b61d0106400668ce722",
          language: "en-US",
        },
      });
      set(response.data.results);
    };

    fetchData("https://api.themoviedb.org/3/discover/movie", setDiscoverMovies);
    fetchData("https://api.themoviedb.org/3/discover/tv", setDiscoverShows);
    fetchData("https://api.themoviedb.org/3/trending/all/day", setTrendingAll);
  }, []);

  return (
    <div
      className="grid gap-10 overflow-y-scroll bg-white/10 p-3 rounded-lg w-full"
      style={{ scrollbarWidth: "none" }}
    >
      <HighlightList highlights={trendingAll} />
      <ScrollableList
        title="Discover Movies"
        highlights={discoverMovies}
        type="movie"
      />
      <ScrollableList
        title="Discover Shows"
        highlights={discoverShows}
        type="tv"
      />
    </div>
  );
};

export default Home;
