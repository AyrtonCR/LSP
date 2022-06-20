import "./header.css";
import { Link } from "react-router-dom";
import Main from "./main";
import Surfbreak from "./surfbreak";
import Surfboard from "./surfboard";
import Forum from "./forum";
import About from "./about";
import Links from "./links";
import Forecasts from "./forecasts";
import Contact from "./contact";
import Logo from "../utils/surfing-board.jpeg";

const header = () => {
  return (
    <div>
      <header className="header">
        <div className="navbar-container">
          <ul className="nav">
            <li className="navbar-item">
              <Link to="/" className="header-title" element={<Main />}>
                <img className="logo" src={Logo} alt="" width="300" />
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/surfbreak"
                className="nav-link"
                element={<Surfbreak />}
              >
                Breaks
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/surfboard"
                className="nav-link"
                element={<Surfboard />}
              >
                Boards
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/forecasts"
                className="nav-link"
                element={<Forecasts />}
              >
                Forecasts
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/forum" className="nav-link" element={<Forum />}>
                Forum
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/links" className="nav-link" element={<Links />}>
                Links
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" className="nav-link" element={<About />}>
                About
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact" className="nav-link" element={<Contact />}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};
export default header;
