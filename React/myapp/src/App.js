import React from "react";
import "./App.css";
import Person from "./Components/Person/Person";
import Vehical from "./Components/ClassComponent/Vehical";
import Increment from "./Components/Increment/Increment";
import EventBind from "./Components/EventBind/EventBind";
import Lists from "./Components/ListRender/Lists";
import Clock from "./Components/Lifecycle/Clock";

function App() {
  return (
    <div className="App">
      {/* I am Nilesh
      <Person name="Nilesh" age="21">
        My Favorite Editor is Vs code
      </Person>
      <Person name="Omkar" age="10">
        <p>My Favorite Editor is Sublime Text</p>
        <a>Read More about me ...</a>
      </Person>
      <Person name="Dipali" age="20">
        My Favorite Editor is Vs code
      </Person> */}
      {/* 
      
      */}

      {/* <Vehical name="Nilesh" />
      <Vehical name="Kamesh" /> */}

      {/* <Increment /> */}

      {/* <EventBind /> */}

      {/* <Lists /> */}

      <Clock />
    </div>
  );
}

export default App;
