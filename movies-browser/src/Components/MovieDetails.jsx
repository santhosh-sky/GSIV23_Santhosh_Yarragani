import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../MovieDetails.css";

const MovieDetails = () => {
  const { movieId } = useParams();
  const movie = useSelector((state) =>
    state.movies.list.find((movie) => movie.id === parseInt(movieId))
  );

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div class="movie-details-container">
      <div class="img-container">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div>
        <div class="description-container">
          <h2 class="movie-title">
            {" "}
            {movie.title} <small>({movie.vote_average})</small>
          </h2>
          <p class="movie-info">
            {movie.release_date} | {movie.popularity}
          </p>
          <p class="movie-info">
            <strong>Description:</strong>
            {movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
