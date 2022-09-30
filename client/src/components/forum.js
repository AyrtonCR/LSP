import { Link } from "react-router-dom";
import styles from "./forum.module.css";
import forecastStyles from "./forecasts.module.css";
import LowerNavBar from "./lowerNavBar";

const Forum = () => {
  return (
    <div className={styles.container}>
      <h2>Surfs Up Forum</h2>
      <h3>
        Description about what how this page is a forum where people can create
        an account and let people know if the surf is cranking near them.
      </h3>
      <div className={styles.mainGrid}>
        <div className={styles.singleItemMainGrid}>
          <div className={styles.singleItemGrid1}>
            <image></image>
          </div>
          <div className={styles.singleItemGrid2}>
            <p>name</p>
            <p>description</p>
          </div>
        </div>
      </div>
      <div className={forecastStyles.lowerNavBar}>
        <LowerNavBar />
      </div>
    </div>
  );
};

export default Forum;
