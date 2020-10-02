import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import HooksCakeContainer from "./Components/HooksCakeContainer";
import IceCreamContainer from "./Components/IceCreamContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <IceCreamContainer />
        <HooksCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
