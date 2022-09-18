import { Link } from "react-router-dom";
import styles from "./surfboard.module.css";
import LowerNavBar from "./lowerNavBar";
import React, { useState, useEffect } from "react";

const Surfboard = () => {
  const [surfboards, setSurfboards] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5001/surfboards");
    const data = await response.json();
    setSurfboards(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.surfboardGridContainer}>
        <h2 className={styles.surfboardTitle}>Surfboards</h2>
        <ul className={styles.singleSurfboardGrid}>
          {surfboards.map((surfboard) => {
            return (
              <>
                <li className={styles.singleSurfboard} key={surfboard.id}>
                  <h3 className={styles.surfboardStrength}>
                    <u>
                      <em> {surfboard.surfboard_strength}</em>
                    </u>
                  </h3>
                  <img
                    alt="surfboard-surfboard_image"
                    className={styles.surfboardsImage}
                    src={surfboard.surfboard_image}
                  />
                </li>
                <h3 className={styles.surfboardDescription}>
                  {surfboard.surfboard_description}
                </h3>
              </>
            );
          })}
        </ul>
      </div>
      <div className="lowerNavBar">
        <LowerNavBar />
      </div>
    </div>
  );
};
export default Surfboard;
