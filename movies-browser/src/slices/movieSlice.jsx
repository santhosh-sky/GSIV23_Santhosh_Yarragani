import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "../api";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    searchQuery: "",
  },
  reducers: {
    setMovies: (state, action) => {
      state.list = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setMovies, setSearchQuery } = movieSlice.actions;

export const fetchMoviesAsync = () => async (dispatch) => {
  try {
    const moviesData = await fetchMovies();
    console.log("moviesData,", moviesData);
    dispatch(setMovies(moviesData));
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};

export const selectFilteredMovies = (state) => {
  const { list, searchQuery } = state.movies;
  if (!searchQuery) {
    return list;
  }
  const normalizedQuery = searchQuery.toLowerCase();
  return list.filter((movie) =>
    movie.title.toLowerCase().includes(normalizedQuery)
  );
};

export default movieSlice.reducer;
