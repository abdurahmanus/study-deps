import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import {
  EnumFromRCore,
  InterfaceFromRCore,
  InterfaceFromRPl1,
} from "@abdurahmanus/r-core";

const a = EnumFromRCore.A;
const c: InterfaceFromRCore = {
  a: "",
};
const d: InterfaceFromRPl1 = {
  pl1: "sss",
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
