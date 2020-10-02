import React, { useContext, useState } from "react";
import { MovieContext } from "./MovieContext";

const AddMovies = () => {
  const [movies, setMovies] = useContext(MovieContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setMovies([
      ...movies,
      {
        name: name,
        price: price,
        id: movies.length + 1,
      },
    ]);
  };

  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
    </form>
  );
};

export default AddMovies;
