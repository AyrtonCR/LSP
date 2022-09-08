import "./lowerNavBar.css";
import { Link } from "react-router-dom";
import Contact from "./contact";
import About from "./about";
import Links from "./links";

const LowerNavBar = () => {
  return (
    <div>
      <header className="lowerNavbar">
        <div className="lowerNavbarContainer">
          <ul className="lowerNav">
            <li className="lowerNavbarItem">
              <Link to="/links" className="lowerNavLink" element={<Links />}>
                <strong>Links</strong>
              </Link>
            </li>
            <li className="lowerNavbarItem">
              <Link to="/about" className="lowerNavLink" element={<About />}>
                <strong> About</strong>
              </Link>
            </li>
            <li className="lowerNavbarItem">
              <Link
                to="/contact"
                className="lowerNavLink"
                element={<Contact />}
              >
                <strong>Contact</strong>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default LowerNavBar;
