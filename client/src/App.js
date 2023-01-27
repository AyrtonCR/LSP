import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/footer";
import Main from "./components/main";
import Surfbreak from "./components/surfbreak";
import Surfboard from "./components/surfboard";
import Forum from "./components/forum";
import About from "./components/about";
import Links from "./components/links";
import Forecasts from "./components/forecasts";
import Contact from "./components/contact";

const App = () => {
  return (
    <div className="container">
      <NavBar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route exact path="/surfbreak" element={<Surfbreak />} />
        <Route exact path="/surfboard" element={<Surfboard />} />
        <Route exact path="/forum" element={<Forum />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/links" element={<Links />} />
        <Route exact path="/forecasts" element={<Forecasts />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
