import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import "./Navbar.css";
const Navbar = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="navbar">
      <h3>Nilesh</h3>
      <p>List of Movies: {movies.length}</p>
    </div>
  );
};

export default Navbar;
