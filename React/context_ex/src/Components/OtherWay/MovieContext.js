import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$20",
      id: 1,
    },
    {
      name: "Hera Pheri",
      price: "$25",
      id: 2,
    },
    {
      name: "3 Idiots",
      price: "$30",
      id: 3,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
