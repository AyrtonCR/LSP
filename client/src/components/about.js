import { Link } from "react-router-dom";
import styles from "./about.module.css";
import LowerNavBar from "./lowerNavBar";
import MyFace from "../utils/myFaceCloser.png";
import Southshore from "../utils/southshore.png";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <h1 className={styles.mainTitle}>About Me</h1>
        <div className={styles.mainGrid}>
          <div className={styles.imageGrid}>
            <img
              className={styles.image1}
              alt="ayrtons-face"
              src={MyFace}
            ></img>
          </div>
          <div className={styles.textGrid}>
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
          </div>
        </div>
      </div>
      <LowerNavBar />
    </div>
  );
};

export default About;
