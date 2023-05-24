import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./templates/Home/index.tsx";
import { GlobalStyles } from "./styles/global-styles.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <Home />
  </React.StrictMode>
);
