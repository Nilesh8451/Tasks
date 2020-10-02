import React, { useContext, useState } from "react";
import AddMovies from "./AddMovies";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
      <AddMovies />
      {movies.map((movie) => {
        return <Movie movie={movie} key={movie.id} />;
      })}
    </div>
  );
};

export default MovieList;
