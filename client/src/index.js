import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import Auth0ProviderWithHistory from "./components/Auth0ProviderWithHistory";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
