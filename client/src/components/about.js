import { Link } from "react-router-dom";
import styles from "./about.module.css";
import LowerNavBar from "./lowerNavBar";
import Southshore from "../utils/southshore.png";
import Wave from "../utils/wave3.png";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spaceSaver}></div>

      <motion.div className={styles.titleContainer} initial={{ scale: 1, opacity: 0, x: 300 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.4 }}>
        <motion.h2 className={styles.mainTitle} initial={{ opacity: 0.3 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          About Me
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

      <div className={styles.mainContainer}>
        <div className={styles.mainGrid}>
          <motion.div
            className={styles.imageGrid}
            initial={{ rotate: 300, scale: 0.5, opacity: 0 }}
            animate={{ rotate: 360, scale: 1, opacity: 1 }}
            transition={{
              rotate: { duration: 1.2 },
              scale: { duration: 1.2 },
              opacity: { duration: 1.2 },
              delay: 0.5,
            }}
          >
            <motion.img
              className={styles.image1}
              alt="ayrtons-face"
              src={Southshore}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{
                scale: { duration: 0.92 },
                delay: 1,
              }}
            ></motion.img>
          </motion.div>
          <motion.div
            className={styles.textGrid}
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              x: { duration: 1 },
              opacity: { duration: 1.2 },
              delay: 0.5,
            }}
          >
            <div className={styles.mainTextContainer}>
              <h3>
                <em className={styles.nameTag}>Hi, my name is Ayrton.</em>
              </h3>
              <p className={styles.mainText}>
                I am a recently graduated developer with experience building full-stack web applications in an agile environment to solve customers problems.
              </p>
              <p className={styles.mainText}>
                I am fortunate enough to have been a part of building, and delivering a product in the education sector that helps with educating those looking
                to get their Diploma in software development. I am based out of Christchurch and as you can probably tell I am quite passionate about surfing!
              </p>
              <p className={styles.mainText}>
                The goal of this project has been to use some of the different skills I have learnt so far to build a functional site that solves a real world
                problem, that is to provide a platform to help people in Christchurch who are looking to find some waves.
              </p>
            </div>

            <div className={styles.subTextContainer}>
              <a href="https://github.com/AyrtonCR" className={styles.subText}>
                <i className={styles.githublink}>https://github.com/AyrtonCR</i>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <LowerNavBar />
    </div>
  );
};

export default About;
