export const fetchMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGNmYzBiYjdlNGZhMWJlNTYzODk4NmRiYWUyYTJjNyIsInN1YiI6IjYwZDllMDZmNjZhN2MzMDA3ZjI3NmU5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._d9jZ2m_uEp7U7baGOCwZT6Xo9IB3IxxfwEaifg8BAA",
    },
  };
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
      options
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const moviesData = await response.json();
    return moviesData.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
