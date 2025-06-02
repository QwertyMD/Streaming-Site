import React from "react";
import { useParams } from "react-router-dom";

const WatchShow = () => {
  const { id } = useParams();
  return (
    <div className="p-5">
      <div className="w-full h-[calc(100vh-40px)]">
        <iframe
          src={`https://vidsrc.xyz/embed/tv?tmdb=${id}`}
          title="Movie Player"
          allowFullScreen
          className="w-full h-full rounded-lg border-4 border-primeblue"
        ></iframe>
      </div>
    </div>
  );
};

export default WatchShow;
