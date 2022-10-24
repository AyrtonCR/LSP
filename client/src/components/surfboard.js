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
        <div className={styles.surfboardsBlurbContainer}>
          <h4 className={styles.surfboardsBlurb}>
            To best understand what surfboard to take out, it is helpful to
            recognize how different each break can be. Some breaks need a small
            amount of swell from a wide range of angles to turn on, and others
            may need a lot of swell from a particular angle before they become
            surfable. Big waves can be weak, and small waves can be powerful so
            it is best to learn your break and learn how it responds to
            different conditions.
          </h4>
        </div>
        <ul className={styles.singleSurfboardGrid}>
          {surfboards.map((surfboard) => {
            return (
              <>
                <div
                  className={styles.singleSurfboardDescriptionContainer}
                  key={surfboard.id}
                >
                  <h3 className={styles.surfboardStrength}>
                    <em> {surfboard.surfboard_strength}</em>
                  </h3>
                  <p className={styles.surfboardDescription}>
                    {surfboard.surfboard_description}
                  </p>
                </div>
                <div className={styles.singleSurfboardImage}>
                  <img
                    alt="surfboard-surfboard_image"
                    className={styles.surfboardsImage}
                    src={surfboard.surfboard_image}
                  />
                </div>
              </>
            );
          })}
        </ul>
      </div>
      <LowerNavBar />
    </div>
  );
};
export default Surfboard;
