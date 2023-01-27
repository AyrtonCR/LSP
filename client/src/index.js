import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import Auth0ProviderWithHistory from "./components/Auth0ProviderWithHistory";
import {
  HashRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithHistory>
        <Routes>
          <Route path="*" element={<App />}></Route>
        </Routes>
      </Auth0ProviderWithHistory>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
