import styles from "./NavBar.module.css";
import NavLinks from "./NavLinks";

const Navigation = () => {
  return (
    <div className={styles.Navigation}>
      <NavLinks />
    </div>
  );
};

export default Navigation;
