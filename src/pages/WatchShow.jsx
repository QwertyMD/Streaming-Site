import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Watch from "@/components/Watch.jsx";

const WatchShow = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    const fetchShowDetails = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}`,
        {
          params: {
            api_key: "f51f867a67bf6b61d0106400668ce722",
            language: "en-US",
          },
        },
      );
      setShowDetails(response.data);
    };
    fetchShowDetails();
  }, [id]);

  console.log(showDetails);

  return <Watch id={id} type="tv" details={showDetails} />;
};

export default WatchShow;
