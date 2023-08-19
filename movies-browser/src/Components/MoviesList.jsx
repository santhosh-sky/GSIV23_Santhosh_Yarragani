import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesAsync, selectFilteredMovies } from "../slices/movieSlice";
import { Link } from "react-router-dom";

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectFilteredMovies);
  console.log("movies", movies);

  useEffect(() => {
    dispatch(fetchMoviesAsync());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="movie-list">
        <div className="movie-cards">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>

              <div class="movie-details">
                {/* <h5> */}
                <Link to={`/movie/${movie.id}`}>
                  <h3>{movie.title}</h3>
                </Link>

                {/* </h5> */}
                <h5 class="right-rating">({movie.vote_average})</h5>
              </div>
              <p className="truncate-text">{movie.overview}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
