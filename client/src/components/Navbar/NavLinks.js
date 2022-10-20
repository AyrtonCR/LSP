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

import { motion } from "framer-motion";

const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -20 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <div className={styles.NavBar}>
      <nav className={styles.header}>
        <div className={styles.navbarContainer}>
          <ul className={styles.nav}>
            <li className={styles.navbarItem}>
              <Link
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.05 }}
                to="/"
                className={styles.headerTitle}
                element={<Main />}
                onClick={() => props.isMobile && props.closeMobileMenu()}
              >
                <motion.img
                  className={styles.logo}
                  src={Logo}
                  alt=""
                  width="300"
                />
              </Link>
            </li>
            <li
              className={styles.navbarItem}
              onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              <motion.Link
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.1 }}
                to="/surfboard"
                className={styles.navLink}
                element={<Surfboard />}
                onClick={() => props.isMobile && props.closeMobileMenu()}
              >
                <strong> Boards</strong>
              </motion.Link>
            </li>
            <li className={styles.navbarItem}>
              <motion.Link
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.2 }}
                to="/forecasts"
                className={styles.navLink}
                element={<Forecasts />}
                onClick={() => props.isMobile && props.closeMobileMenu()}
              >
                <strong>Forecasts</strong>
              </motion.Link>
            </li>
            <li className={styles.navbarItem}>
              <motion.Link
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.3 }}
                to="/forum"
                className={styles.navLink}
                element={<Forum />}
                onClick={() => props.isMobile && props.closeMobileMenu()}
              >
                <strong>Forum</strong>
              </motion.Link>
            </li>
            <li className={styles.navbarItem}>
              <motion.Link
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.4 }}
                to="/links"
                className={styles.navLink}
                element={<WebLinks />}
                onClick={() => props.isMobile && props.closeMobileMenu()}
              >
                <strong>Links</strong>
              </motion.Link>
            </li>
            <li className={styles.navbarItem}>
              <motion.Link
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.5 }}
                to="/about"
                className={styles.navLink}
                element={<About />}
                onClick={() => props.isMobile && props.closeMobileMenu()}
              >
                <strong> About</strong>
              </motion.Link>
            </li>
            <li className={styles.navbarItem}>
              <motion.Link
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.6 }}
                to="/contact"
                className={styles.navLink}
                element={<Contact />}
                onClick={() => props.isMobile && props.closeMobileMenu()}
              >
                <strong>Contact</strong>
              </motion.Link>
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
