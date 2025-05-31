import React, { createContext, useState } from "react";

export const CollectionsContext = createContext();

export const CollectionsProvider = ({ children }) => {
  const [collections, setCollections] = useState(() => {
    return JSON.parse(localStorage.getItem("collections")) || [];
  });

  const addToCollection = (collection) => {
    setCollections((prev) => {
      const updatedCollections = prev.some((item) => item.id === collection.id)
        ? prev
        : [...prev, collection];
      localStorage.setItem("collections", JSON.stringify(updatedCollections));
      return updatedCollections;
    });
  };

  const removeFromCollection = (id) => {
    setCollections((prev) => {
      const updatedCollections = prev.filter((item) => item.id !== id);
      localStorage.setItem("collections", JSON.stringify(updatedCollections));
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
