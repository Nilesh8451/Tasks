import React from "react";

import "./App.css";
import ComponentC from "./Components/ComponentC";
import Reducer from "./Components/Hooks/Reducer";
import { MovieProvider } from "./Components/OtherWay/MovieContext";
import MovieList from "./Components/OtherWay/MovieList";
import Navbar from "./Components/OtherWay/Navbar";
import { UserProvider } from "./Components/userContext";

function App() {
  return (
    // <div className="App">
    //   <UserProvider value="Nilesh">
    //     <ComponentC />
    //   </UserProvider>
    // </div>

    // <div className="App">
    //   <MovieProvider>
    //     <Navbar />
    //     <MovieList />
    //   </MovieProvider>
    // </div>
    <div className="App">
      <Reducer />
    </div>
  );
}

export default App;
