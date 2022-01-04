import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "components/App";
import { ThemeProvider } from "hooks/ThemeProvider";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
