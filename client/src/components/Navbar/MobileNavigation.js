import styles from "./NavBar.module.css";
import NavLinks from "./NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

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
      size="40px"
      onClick={() => setOpen(!open)}
    />
  );
  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className={styles.MobileNavigation}>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu />}
    </nav>
  );
};

export default MobileNavigation;
