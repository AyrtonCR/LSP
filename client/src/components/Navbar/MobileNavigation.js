import styles from "./NavBar.module.css";
import NavLinks from "./NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.MobileNavigation}>
      <GiHamburgerMenu
        className={styles.Hamburger}
        size="40px"
        onClick={() => setOpen(!open)}
      />
      {open && <NavLinks />}
    </nav>
  );
};

export default MobileNavigation;
