import React, { useEffect, useState } from "react";
import axios from "axios";
import ScrollableList from "@/components/ScrollableList.jsx";

const Movies = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

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

    fetchData("https://api.themoviedb.org/3/movie/now_playing", setNowPlaying);
    fetchData("https://api.themoviedb.org/3/movie/popular", setPopular);
    fetchData("https://api.themoviedb.org/3/movie/top_rated", setTopRated);
    fetchData("https://api.themoviedb.org/3/movie/upcoming", setUpcoming);
  }, []);

  return (
    <div
      className="space-y-10 overflow-y-scroll bg-white/10 p-3 rounded-lg w-full"
      style={{ scrollbarWidth: "none" }}
    >
      <ScrollableList
        title="Now Playing"
        highlights={nowPlaying}
        type="movie"
      />
      <ScrollableList title="Popular" highlights={popular} type="movie" />
      <ScrollableList title="Top Rated" highlights={topRated} type="movie" />
      <ScrollableList title="Upcoming" highlights={upcoming} type="movie" />
    </div>
  );
};

export default Movies;
