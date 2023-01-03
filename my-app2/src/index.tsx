import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import {
  EnumFromRCore,
  InterfaceFromRCore,
  InterfaceFromRPl1,
  InterfaceFromWPl1,
} from "@abdurahmanus/w-core";

const a = EnumFromRCore.A;
const b: InterfaceFromRCore = {
  a: "a",
  b: 123,
};
const c: InterfaceFromWPl1 = {
  pl1: 12,
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
