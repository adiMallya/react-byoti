import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeContextProvider } from "src/context/ThemeContext.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </Router>
  </React.StrictMode>
);
