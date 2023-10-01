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
    <div className={styles.NavBarDesktop}>
      <nav className={styles.header}>
        <div className={styles.navbarContainer}>
          <ul className={styles.nav}>
            <motion.li className={styles.navbarItem} initial={animateFrom} animate={animateTo} transition={{ delay: 0.05 }}>
              <Link to="/" className={styles.headerTitle} element={<Main />} onClick={() => props.isMobile && props.closeMobileMenu()}>
                <img className={styles.logo} src={Logo} alt="surfboard_logo" width="300" />
              </Link>
            </motion.li>
            <motion.li
              className={styles.navbarItem}
              onClick={() => props.isMobile && props.closeMobileMenu()}
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.1 }}
            >
              <Link to="/surfboard" className={styles.navLink} element={<Surfboard />} onClick={() => props.isMobile && props.closeMobileMenu()}>
                <strong> Boards</strong>
              </Link>
            </motion.li>
            <motion.li className={styles.navbarItem} initial={animateFrom} animate={animateTo} transition={{ delay: 0.2 }}>
              <Link to="/forecasts" className={styles.navLink} element={<Forecasts />} onClick={() => props.isMobile && props.closeMobileMenu()}>
                <strong>Forecasts</strong>
              </Link>
            </motion.li>
            <motion.li className={styles.navbarItem} initial={animateFrom} animate={animateTo} transition={{ delay: 0.3 }}>
              <Link to="/forum" className={styles.navLink} element={<Forum />} onClick={() => props.isMobile && props.closeMobileMenu()}>
                <strong>Forum</strong>
              </Link>
            </motion.li>
            <motion.li className={styles.navbarItem} initial={animateFrom} animate={animateTo} transition={{ delay: 0.4 }}>
              <Link to="/links" className={styles.navLink} element={<WebLinks />} onClick={() => props.isMobile && props.closeMobileMenu()}>
                <strong>Links</strong>
              </Link>
            </motion.li>
            <motion.li className={styles.navbarItem} initial={animateFrom} animate={animateTo} transition={{ delay: 0.5 }}>
              <Link to="/about" className={styles.navLink} element={<About />} onClick={() => props.isMobile && props.closeMobileMenu()}>
                <strong> About</strong>
              </Link>
            </motion.li>
            <motion.li className={styles.navbarItem} initial={animateFrom} animate={animateTo} transition={{ delay: 0.6 }}>
              <Link to="/contact" className={styles.navLink} element={<Contact />} onClick={() => props.isMobile && props.closeMobileMenu()}>
                <strong>Contact</strong>
              </Link>
            </motion.li>
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
