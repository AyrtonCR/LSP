import "./header.css";
import { Link } from "react-router-dom";
import Main from "./main";
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
                to="/surfboard"
                className="nav-link"
                element={<Surfboard />}
              >
                <strong> Boards</strong>
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/forecasts"
                className="nav-link"
                element={<Forecasts />}
              >
                <strong>Forecasts</strong>
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/forum" className="nav-link" element={<Forum />}>
                <strong>Forum</strong>
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/links" className="nav-link" element={<Links />}>
                <strong>Links</strong>
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" className="nav-link" element={<About />}>
                <strong> About</strong>
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact" className="nav-link" element={<Contact />}>
                <strong>Contact</strong>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};
export default header;
