import React, { useContext } from "react";
import { Trash, Play } from "lucide-react";
import { CollectionsContext } from "@/contexts/CollectionsContext.jsx";
import { useNavigate } from "react-router-dom";
import UnscrollableList from "@/components/UnscrollableList";

const Collections = () => {
  const { collections, removeFromCollection } = useContext(CollectionsContext);
  const navigate = useNavigate();

  const handlePrimeAct = (item) => {
    navigate(item.name ? `/tv/${item.id}` : `/movie/${item.id}`);
  };

  const handleSecAct = (item) => {
    removeFromCollection(item.id);
  };

  return (
    <div
      className="overflow-y-scroll bg-white/10 p-3 rounded-lg w-full"
      style={{ scrollbarWidth: "none" }}
    >
      <UnscrollableList
        title="Collections"
        items={collections}
        primeAct={handlePrimeAct}
        secAct={handleSecAct}
        PrimeIcon={Play}
        SecIcon={Trash}
      />
    </div>
  );
};

export default Collections;
