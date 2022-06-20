import { Link } from "react-router-dom";
import Main from "./main";
import Surfbreak from "./surfbreak";
import Surfboard from "./surfboard";
import Forum from "./forum";
import About from "./about";
import Links from "./links";
import Forecasts from "./forecasts";
import Contact from "./contact";

const header = () => {
  return (
    <div className="navbar-container">
      <ul>
        <li>
          <Link to="/" element={<Main />}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/surfbreak" element={<Surfbreak />}>
            Breaks
          </Link>
        </li>
        <li>
          <Link to="/surfboard" element={<Surfboard />}>
            Boards
          </Link>
        </li>
        <li>
          <Link to="/forecasts" element={<Forecasts />}>
            Forecasts
          </Link>
        </li>
        <li>
          <Link to="/forum" element={<Forum />}>
            Forum
          </Link>
        </li>
        <li>
          <Link to="/about" element={<About />}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" element={<Contact />}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/links" element={<Links />}>
            Links
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default header;
