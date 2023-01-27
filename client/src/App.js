import "./App.css";
import { Routes, Route } from "react-router-dom";
// import { HashRouter } from "react-router-dom";
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

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/surfbreak" element={<Surfbreak />} />
          <Route path="/surfboard" element={<Surfboard />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/about" element={<About />} />
          <Route path="/links" element={<Links />} />
          <Route path="/forecasts" element={<Forecasts />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
