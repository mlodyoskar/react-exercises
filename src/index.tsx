import React from "react";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";

document.body.innerHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById("app")!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
