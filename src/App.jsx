import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout.jsx";
import Landing from "@/components/Landing.jsx";
import NotFound from "@/pages/NotFound.jsx";
import Home from "@/pages/Home.jsx";
import Movies from "@/pages/Movies.jsx";
import Shows from "@/pages/Shows.jsx";
import Collections from "@/pages/Collections.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="home" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="shows" element={<Shows />} />
          <Route path="collections" element={<Collections />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
