import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./redux/StateProvider";
import reducer, { InitialState } from "./redux/reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={InitialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
