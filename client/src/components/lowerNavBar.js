import { Link } from "react-router-dom";
import Contact from "./contact";
import About from "./about";
import Links from "./links";
import styles from "./lowerNavBar.module.css";

const LowerNavBar = () => {
  return (
    <div className={styles.lowerNavbarMain}>
      <div className={styles.lowerNavbarContainer}>
        <ul className={styles.lowerNav}>
          <li className={styles.lowerNavbarItem}>
            <Link
              to="/links"
              className={styles.lowerNavLink}
              element={<Links />}
            >
              <strong>Links</strong>
            </Link>
          </li>
          <li className={styles.lowerNavbarItem}>
            <Link
              to="/about"
              className={styles.lowerNavLink}
              element={<About />}
            >
              <strong> About</strong>
            </Link>
          </li>
          <li className={styles.lowerNavbarItem}>
            <Link
              to="/contact"
              className={styles.lowerNavLink}
              element={<Contact />}
            >
              <strong>Contact</strong>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LowerNavBar;
