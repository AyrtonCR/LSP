import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import styles from "./NavBar.module.css";
import NavLinks from "./NavLinks";
import Main from "../main";
import Logo from "../../utils/surfing-board.jpeg";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <GiHamburgerMenu
      className={styles.Hamburger}
      size="1.8rem"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <AiFillCloseCircle
      className={styles.Hamburger}
      size="1.8rem"
      onClick={() => setOpen(!open)}
    />
  );
  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className={styles.MobileNavigation}>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu />}
      <Link to="/" className={styles.headerTitle} element={<Main />}>
        <img
          src={Logo}
          alt="surfboard_logo"
          className={styles.mobileLogo}
        ></img>
      </Link>
    </nav>
  );
};

export default MobileNavigation;
