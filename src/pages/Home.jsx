import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import ScrollableList from "@/components/ScrollableList.jsx";
import HighlightList from "@/components/HighlightList.jsx";

const Home = () => {
  const [discoverMovies, setDiscoverMovies] = useState([]);
  const [discoverShows, setDiscoverShows] = useState([]);
  const [trendingAll, setTrendingAll] = useState([]);

  const scrollContainerRef1 = useRef(null);
  const scrollContainerRef2 = useRef(null);
  const scrollContainerRef3 = useRef(null);

  const addScrollHandler = (containerRef) => {
    useEffect(() => {
      const container = containerRef.current;

      const handleWheel = (e) => {
        if (e.shiftKey) {
          e.preventDefault();
          container.scrollLeft += e.deltaY * 6;
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
  addScrollHandler(scrollContainerRef3);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie",
        {
          params: {
            api_key: "f51f867a67bf6b61d0106400668ce722",
            language: "en-US",
          },
        }
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
        }
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
          },
        }
      );
      setTrendingAll(response.data.results);
    };
    fetchTrendingAll();
  }, []);

  return (
    <div className="px-10 py-5 grid gap-10">
      <HighlightList
        highlights={trendingAll}
        containerRef={scrollContainerRef3}
      />
      <ScrollableList
        title="Discover Movies"
        highlights={discoverMovies}
        containerRef={scrollContainerRef1}
      />
      <ScrollableList
        title="Discover Shows"
        highlights={discoverShows}
        containerRef={scrollContainerRef2}
      />
    </div>
  );
};

export default Home;
