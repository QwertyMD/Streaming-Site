import React from "react";

const Watch = ({ id, type, details }) => {
  return (
    <div
      className="flex gap-3 w-full overflow-y-scroll"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="w-full h-2/3 bg-white/10 p-3 rounded-lg">
        <iframe
          src={`https://player.videasy.net/${type}/${id}`}
          width="100%"
          height="100%"
          allow="encrypted-media"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>

      {details && (
        <div className="space-y-5 w-xl bg-white/10 p-3 rounded-lg">
          <div className="flex gap-5">
            <img
              src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
              alt=""
              className="w-48 rounded-lg"
              draggable={false}
            />
            <div className="grid gap-5 content-center">
              <div className="">
                <p>Status:</p>
                <p className="text-sm">{details.status}</p>
              </div>
              <div className="">
                <p>Production:</p>
                <p className="text-sm">
                  {details.production_companies
                    .map((company) => company.name)
                    .join("\n")}
                </p>
              </div>
              <div className="">
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
