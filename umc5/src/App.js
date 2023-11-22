import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Celebrity from "./Pages/Celebrity";
import TV from "./Pages/TV";
import MovieDetail from "./Pages/MovieDetail";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import TVShowDetail from "./Pages/TVShowDetail";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="root-wrap">
      {/* <BrowserRouter basename="/umc-week7-exercise/"> */}
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />{" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-programs" element={<TV />} />
          <Route path="/people" element={<Celebrity />} />
          <Route path="/movie/:title" element={<MovieDetail />} />
          <Route path="/tv-programs/:title" element={<TVShowDetail />} />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/signin" />
          <Route path="/lookfor" />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;