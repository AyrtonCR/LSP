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
                Hi there, my name is Ayrton and I am a 26yo student in the last
                stages of completing a Diploma in Web Development and Design. I
                am based out of Christchurch and as you can probably tell I am
                quite passionate about surfing!
              </p>
              <p className={styles.mainText}>
                The goal of this project has been to use the different sills I
                have learnt to build a functional site for people in
                Christchurch who are looking to find some waves. Once the
                project is complete I will do a full retrospective on the
                process and find areas which can be improved. The plan is then
                to rebuild the site a few times, possibly in different
                languages, improving on the previous version each time!
              </p>
              <p className={styles.mainText}>
                I am really enjoying the transition from trade work to Web
                Development, and am finding the learning and designing process
                stimulating and surprisingly fun.{" "}
              </p>
            </div>

            <div className={styles.subTextContainer}>
              <p className={styles.subText}>
                Links to reference material will go here.
              </p>
            </div>
          </div>
        </div>
      </div>
      <LowerNavBar />
    </div>
  );
};

export default About;
