import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import HooksCakeContainer from "./Components/HooksCakeContainer";
import IceCreamContainer from "./Components/IceCreamContainer";
import NewCakeContainer from "./Components/NewCakeContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
