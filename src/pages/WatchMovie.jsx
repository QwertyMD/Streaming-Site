import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        }
      );
      setMovieDetails(response.data);
    };

    fetchMovieDetails();
  }, [id]);

  console.log(movieDetails);

  return (
    <div className="p-5 space-y-10">
      <div className="w-full h-[calc(100vh-40px)]">
        <iframe
          src={`https://player.videasy.net/movie/${id}`}
          width="100%"
          height="100%"
          frameborder="0"
          allowfullscreen
          allow="encrypted-media"
        ></iframe>
      </div>

      {movieDetails && (
        <div className="grid">
          <h1 className="text-4xl font-bold text-primeblue">
            {movieDetails.title}
          </h1>
          <div className="flex gap-5">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
              className="w-64 rounded-lg"
            />
            <div className="grid gap-3">
              <p className="text-lg text-gray-400">
                <span className="font-bold">Release Date:</span>{" "}
                {movieDetails.release_date}
              </p>
              <p className="text-lg text-gray-400">
                <span className="font-bold">Rating:</span>{" "}
                {movieDetails.vote_average.toFixed(1)}
              </p>
              <p className="text-lg text-gray-400">
                <span className="font-bold">Genres:</span>{" "}
                {movieDetails.genres.map((genre) => genre.name).join(", ")}
              </p>
              <p className="text-lg text-gray-400">
                <span className="font-bold">Runtime:</span>{" "}
                {movieDetails.runtime} minutes
              </p>
            </div>
          </div>
          <p className="text-gray-300">{movieDetails.overview}</p>
        </div>
      )}
    </div>
  );
};

export default WatchMovie;
