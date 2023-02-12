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

      <motion.div
        className={styles.titleContainer}
        initial={{ scale: 1, opacity: 0, x: 300 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.4 }}
      >
        <motion.h2
          className={styles.mainTitle}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
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
              <p className={styles.mainText}>
                Hi, my name is Ayrton and I am a student in the last stages of
                completing my Diploma in Web Development and Design. I am based
                out of Christchurch and as you can probably tell I am quite
                passionate about surfing!
              </p>
              <p className={styles.mainText}>
                The goal of this project has been to use the different skills I
                have learnt to build a functional site for people in
                Christchurch who are looking to find some waves. Once the
                project is complete I will do a full retrospective on the
                process and find areas to be improved. The plan is to then
                rebuild the site, possibly in a different language, improving on
                the previous version!
              </p>
              <p className={styles.mainText}>
                I am really enjoying the transition from physical trade work to
                coding, and am finding the learning and designing process
                stimulating and really fun. It is great to have found a new
                hobby.{" "}
              </p>
            </div>

            <div className={styles.subTextContainer}>
              <a href="https://github.com/AyrtonCR" className={styles.subText}>
                <i>https://github.com/AyrtonCR</i>
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
