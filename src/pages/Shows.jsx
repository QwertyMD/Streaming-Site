import React, { useEffect, useState } from "react";
import ScrollableList from "@/components/ScrollableList.jsx";
import axios from "axios";

const Shows = () => {
  const [airingToday, setAiringToday] = useState([]);
  const [onTheAir, setOnTheAir] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);

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
    fetchData("https://api.themoviedb.org/3/tv/airing_today", setAiringToday);
    fetchData("https://api.themoviedb.org/3/tv/on_the_air", setOnTheAir);
    fetchData("https://api.themoviedb.org/3/tv/popular", setPopular);
    fetchData("https://api.themoviedb.org/3/tv/top_rated", setTopRated);
  }, []);

  return (
    <div
      className="space-y-10 overflow-y-scroll bg-white/10 p-3 rounded-lg w-full"
      style={{ scrollbarWidth: "none" }}
    >
      <ScrollableList title="Airing Today" highlights={airingToday} type="tv" />
      <ScrollableList title="On The Air" highlights={onTheAir} type="tv" />
      <ScrollableList title="Popular" highlights={popular} type="tv" />
      <ScrollableList title="Top Rated" highlights={topRated} type="tv" />
    </div>
  );
};

export default Shows;
