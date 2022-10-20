import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import Main from "../main";
import Surfboard from "../surfboard";
import Forum from "../forum";
import About from "../about";
import WebLinks from "../links";
import Forecasts from "../forecasts";
import Contact from "../contact";
import Logo from "../../utils/surfing-board.jpeg";
import LoginButton from "../loginButton";

const NavLinks = () => {
  return (
    <div className={styles.NavBar}>
      <nav className={styles.header}>
        <div className={styles.navbarContainer}>
          <ul className={styles.nav}>
            <li className={styles.navbarItem}>
              <Link to="/" className={styles.headerTitle} element={<Main />}>
                <img className={styles.logo} src={Logo} alt="" width="300" />
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link
                to="/surfboard"
                className={styles.navLink}
                element={<Surfboard />}
              >
                <strong> Boards</strong>
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link
                to="/forecasts"
                className={styles.navLink}
                element={<Forecasts />}
              >
                <strong>Forecasts</strong>
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link to="/forum" className={styles.navLink} element={<Forum />}>
                <strong>Forum</strong>
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link
                to="/links"
                className={styles.navLink}
                element={<WebLinks />}
              >
                <strong>Links</strong>
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link to="/about" className={styles.navLink} element={<About />}>
                <strong> About</strong>
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link
                to="/contact"
                className={styles.navLink}
                element={<Contact />}
              >
                <strong>Contact</strong>
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <LoginButton />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavLinks;
