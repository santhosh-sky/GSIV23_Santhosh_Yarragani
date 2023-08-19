import React, { useState } from "react";
import "../Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../slices/movieSlice";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchQuery = useSelector((state) => state.movies.searchQuery);
  const isMovieListRoute = location.pathname === "/";
  // const menuItems = [
  //   { path: "/", label: "Home" },
  //   { path: "/movies", label: "Movies" },
  // ];
  const handleSearchChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };
  return (
    <div className="navbar">
      <div className="search-bar">
        {isMovieListRoute ? (
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        ) : (
          <p>Movie Details</p>
        )}
      </div>
      <Link className="home" to={`/`}>
        Home
      </Link>
    </div>
  );
};

export default Navbar;
