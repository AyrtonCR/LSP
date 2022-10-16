import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import Surfbreak from "./components/surfbreak";
import Surfboard from "./components/surfboard";
import Forum from "./components/forum";
import About from "./components/about";
import Links from "./components/links";
import Forecasts from "./components/forecasts";
import Contact from "./components/contact";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/surfbreak" element={<Surfbreak />}></Route>
          <Route path="/surfboard" element={<Surfboard />}></Route>
          <Route path="/forum" element={<Forum />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/links" element={<Links />}></Route>
          <Route path="/forecasts" element={<Forecasts />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
