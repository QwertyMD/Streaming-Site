import React, { useContext, useEffect, useState } from "react";
import ScrollableList from "./ScrollableList";
import { useNavigate } from "react-router-dom";
import { CollectionsContext } from "@/contexts/CollectionsContext.jsx";
import { Play, Plus, PlusCircle } from "lucide-react";
import axios from "axios";

const Watch = ({ id, type, details }) => {
  const { addToCollection } = useContext(CollectionsContext);
  const [similarItems, setSimilarItems] = useState([]);
  const navigate = useNavigate();

  const handlePrimeAct = (item) => {
    navigate(item.name ? `/tv/${item.id}` : `/movie/${item.id}`);
  };

  const handleSecAct = (item) => {
    addToCollection(item);
  };

  useEffect(() => {
    const fetchSimilarItems = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${type}/${id}/similar`,
        {
          params: {
            api_key: "f51f867a67bf6b61d0106400668ce722",
            language: "en-US",
          },
        }
      );
      setSimilarItems(response.data.results);
    };
    fetchSimilarItems();
  }, [id, type]);

  return (
    <div
      className="xl:flex gap-3 space-y-3 xl:space-y-0 w-full overflow-y-scroll"
      style={{ scrollbarWidth: "none" }}
    >
      <div
        className="space-y-3 w-full h-full bg-white/10 p-3 rounded-lg overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        <iframe
          src={`https://player.videasy.net/${type}/${id}?episodeSelector=true`}
          allow="encrypted-media"
          allowFullScreen
          className="rounded-lg w-full h-[calc(100%-3rem)]"
        ></iframe>
        <button
          onClick={() => addToCollection(details)}
          className="flex items-center justify-self-end gap-2 bg-white/10 hover:bg-white/5 transition-colors p-2 text-sm rounded-lg cursor-pointer mb-10"
        >
          <PlusCircle />
          <p>Add to Collection</p>
        </button>
        <ScrollableList title="Similar" highlights={similarItems} type={type} />
      </div>

      {details && (
        <div className="space-y-5 xl:w-xl w-full bg-white/10 p-3 rounded-lg">
          <div className="flex gap-5">
            <img
              src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
              alt=""
              className="w-44 rounded-lg"
              draggable={false}
            />
            <div className="grid gap-5 content-center">
              <div>
                <p>Status:</p>
                <p className="text-sm">{details.status}</p>
              </div>
              <div>
                <p>Production:</p>
                <div className="text-sm">
                  {details.production_companies
                    .slice(0, 4)
                    .map((company, index) => (
                      <p key={index}>{company.name}</p>
                    ))}
                </div>
              </div>
              <div>
                <p>Aired:</p>
                {type === "tv" ? (
                  <div className="text-sm">
                    <p>From: {details.first_air_date}</p>
                    <p>To: {details.last_air_date}</p>
                  </div>
                ) : (
                  <p className="text-sm">{details.release_date}</p>
                )}
              </div>
            </div>
          </div>
          <div className="grid gap-3">
            <p className="text-xl font-bold">{details.title || details.name}</p>
            <div className="bg-white/10 py-1 px-2 rounded-lg">
              <p className="text-sm">{details.overview}</p>
            </div>
            <div className="flex gap-3">
              {details.genres.map((genre) => (
                <p key={genre.id} className="bg-white/10 px-2 py-1 rounded-md">
                  {genre.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Watch;
