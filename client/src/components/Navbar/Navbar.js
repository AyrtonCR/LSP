import styles from "./NavBar.module.css";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <nav className="header">
        <div className="navbar-container">
          <MobileNavigation />
          <Navigation />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
