import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Watch from "@/components/Watch.jsx";

const WatchMovie = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}`,
        {
          params: {
            api_key: "f51f867a67bf6b61d0106400668ce722",
            language: "en-US",
          },
        },
      );
      setMovieDetails(response.data);
    };

    fetchMovieDetails();
  }, [id]);

  console.log(movieDetails);

  return <Watch id={id} type="movie" details={movieDetails} />;
};

export default WatchMovie;
