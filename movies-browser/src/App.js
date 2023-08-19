import React from "react";
import "./App.css";
import "./MovieList.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";
import MoviesList from "./Components/MoviesList";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<MoviesList />} />
        <Route exact path="/movie/:movieId" element={<MovieDetails />} />
        {/* <Route exact path="/path3" element={<component3 />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
