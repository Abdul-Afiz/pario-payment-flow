import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import AppTheme from "./Styles/app-theme";
import GlobalStyle from "./Styles/global-styles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={AppTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
