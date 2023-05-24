import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./templates/Home/index.tsx";
import { ThemeProvider } from "styled-components";

import { theme } from "./styles/theme.ts";
import { GlobalStyles } from "./styles/global-styles.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);
