import React from "react";
import { useParams } from "react-router-dom";

const WatchShow = () => {
  const { id } = useParams();

  return (
    <div className="p-5">
      <div className="w-full h-[calc(100vh-40px)]">
        <iframe
          src={`https://player.videasy.net/tv/${id}`}
          width="100%"
          height="100%"
          frameborder="0"
          allowfullscreen
          allow="encrypted-media"
        ></iframe>
      </div>
    </div>
  );
};

export default WatchShow;
