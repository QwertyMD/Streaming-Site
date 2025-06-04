import { Play, Plus } from "lucide-react";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CollectionsContext } from "@/contexts/CollectionsContext.jsx";
import UnscrollableList from "./UnscrollableList";

const SearchResults = ({ results, type }) => {
  const { addToCollection } = useContext(CollectionsContext);
  const navigate = useNavigate();

  const handlePrimeAct = (item) => {
    navigate(
      type === "All"
        ? `/${item.media_type}/${item.id}`
        : type === "Movies"
          ? `/movie/${item.id}`
          : `/tv/${item.id}`
    );
  };

  const handleSecAct = (item) => {
    addToCollection(item);
  };

  return (
    <UnscrollableList
      items={results}
      primeAct={handlePrimeAct}
      secAct={handleSecAct}
      PrimeIcon={Play}
      SecIcon={Plus}
    />
  );
};

export default SearchResults;
