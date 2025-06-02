import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout.jsx";
import Landing from "@/pages/Landing.jsx";
import NotFound from "@/pages/NotFound.jsx";
import Home from "@/pages/Home.jsx";
import Movies from "@/pages/Movies.jsx";
import Shows from "@/pages/Shows.jsx";
import Collections from "@/pages/Collections.jsx";
import { CollectionsProvider } from "@/contexts/CollectionsContext.jsx";
import WatchMovie from "@/pages/WatchMovie.jsx";
import WatchShow from "./pages/WatchShow";

const App = () => {
  return (
    <CollectionsProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="home" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="shows" element={<Shows />} />
            <Route path="collections" element={<Collections />} />
            <Route path="movie/:id" element={<WatchMovie />} />
            <Route path="tv/:id" element={<WatchShow />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </CollectionsProvider>
  );
};

export default App;
