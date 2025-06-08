import React, { createContext, useState } from "react";
import { toast } from "sonner";

export const CollectionsContext = createContext();

export const CollectionsProvider = ({ children }) => {
  const [collections, setCollections] = useState(() => {
    return JSON.parse(localStorage.getItem("collections")) || [];
  });

  const addToCollection = (collection) => {
    setCollections((prev) => {
      const exists = prev.some((item) => item.id === collection.id);
      if (exists) {
        toast.dismiss();
        toast.error("Already in collection");
        return prev;
      }
      const updatedCollections = [...prev, collection];
      localStorage.setItem("collections", JSON.stringify(updatedCollections));
      toast.dismiss();
      toast.success("Added to collection");
      return updatedCollections;
    });
  };

  const removeFromCollection = (id) => {
    setCollections((prev) => {
      const updatedCollections = prev.filter((item) => item.id !== id);
      localStorage.setItem("collections", JSON.stringify(updatedCollections));
      toast.dismiss();
      toast.error("Removed from collection");
      return updatedCollections;
    });
  };

  return (
    <CollectionsContext.Provider
      value={{ collections, addToCollection, removeFromCollection }}
    >
      {children}
    </CollectionsContext.Provider>
  );
};
