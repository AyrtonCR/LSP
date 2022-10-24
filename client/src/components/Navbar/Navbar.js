import styles from "./NavBar.module.css";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <MobileNavigation />
      <Navigation />
    </div>
  );
};

export default NavBar;
