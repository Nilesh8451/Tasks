import React from "react";
import "./App.css";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Shop from "./Shop";
import User from "./User";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/shop" component={Shop} exact />
          <Route path="/shop/:id" component={User} exact />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return <h2>Home Page</h2>;
};

export default App;
