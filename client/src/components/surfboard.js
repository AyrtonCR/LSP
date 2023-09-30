import { Link } from "react-router-dom";
import styles from "./surfboard.module.css";
import LowerNavBar from "./lowerNavBar";
import React, { useState, useEffect, useRef } from "react";
import Wave from "../utils/wave3.png";
import { motion, useInView, useScroll } from "framer-motion";
import LoadMongoData from "./loadingMongoData";

const API_URL = process.env.REACT_APP_API_URL;

const Surfboard = () => {
  const [surfboards, setSurfboards] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(`${API_URL}/surfboards`);
    const data = await response.json();
    console.log(data[0]);
    if (data[0] === undefined) {
      console.log("fetch error");
      console.log("loading is staying true, state will not be updated");
      setIsLoading(true);
    } else if (data[0] !== undefined) {
      setSurfboards(data);
      console.log("settings loading to false");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const ref = useRef(null);
  const isInView = useInView(ref);
  //Motion//

  //Return Data ///

  const ReturnBoardData = () => {
    return surfboards.map((surfboard) => {
      return (
        <>
          <ul className={styles.singleSurfboardGrid}>
            <div className={styles.singleSurfboardDescriptionContainer} key={surfboard.id}>
              <h3 className={styles.surfboardStrength}>
                <em> {surfboard.surfboard_strength}</em>
              </h3>
              <p className={styles.surfboardDescription}>{surfboard.surfboard_description}</p>
            </div>
            <div className={styles.singleSurfboardImage}>
              <img alt="surfboard-surfboard_image" className={styles.surfboardsImage} src={surfboard.surfboard_image} />
            </div>
          </ul>
        </>
      );
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.spaceSaver}></div>
      <div className="overflow">
        <motion.div className={styles.titleAndImage} initial={{ scale: 1, opacity: 0, x: 300 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.4 }}>
          <motion.h2 className={styles.surfboardTitle} initial={{ opacity: 0.3 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            Surfboards
          </motion.h2>
          <motion.img
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              x: { duration: 1 },
              opacity: { duration: 1.2 },
              delay: 0.5,
            }}
            className={styles.image}
            src={Wave}
            alt="wave"
          ></motion.img>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ x: { duration: 1 }, opacity: { duration: 1.9 } }}
        className={styles.surfboardGridContainer}
      >
        <div className={styles.surfboardsBlurbContainer}>
          <h4 className={styles.surfboardsBlurb}>
            Surfboards can come in many different shapes and sizes. From long to short, wide to skinny there is always a board that best fits the conditions.
          </h4>
          <h4 className={styles.surfboardsBlurb}>Below is an indication on what kind of surfboards work best in different conditions.</h4>
        </div>
        {/* Add Prop Function Here */}

        {LoadMongoData(surfboards, isLoading, ReturnBoardData)}
      </motion.div>
      <div className={styles.lowerBlurbContainerContainer}>
        <motion.div ref={ref} className={styles.lowerBlurbContainer}>
          <motion.h4
            className={styles.lowerBlurb1}
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <em>
              There are many different shapes, build materials and setups for each type of board that can completely change the way a board functions, allowing
              it to be more slow and fun, or more fast and maneuverable.{" "}
            </em>
          </motion.h4>
          <motion.div
            className={styles.lowerBlurb2Container}
            style={{
              transform: isInView ? "none" : "translateX(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <h4 className={styles.lowerBlurb2}>
              <em className={styles.lowerBlurb1Content}>This is a just a brief indication of what these types of surfboards can do. </em>
            </h4>
            <motion.h4 className={styles.lowerBlurb2}>
              <em className={styles.lowerBlurb2Content}>
                Images are from a great Christchurch shaper <br></br>
                <a className={styles.sadhanaLink} href="https://sadhanasurfboards.co.nz/">
                  @Sadhana Surfboards
                </a>
              </em>
            </motion.h4>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        style={{
          transform: isInView ? "none" : "translateY(50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <LowerNavBar />
      </motion.div>
    </div>
  );
};
export default Surfboard;
