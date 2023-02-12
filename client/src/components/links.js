import { Link } from "react-router-dom";
import styles from "./links.module.css";
import LowerNavBar from "./lowerNavBar";
import Wave from "../utils/wave3.png";
import { motion } from "framer-motion";
const WebLinks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spaceSaver}></div>
      <motion.div
        className={styles.titleContainer}
        initial={{ scale: 1, opacity: 0, x: -300 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.4 }}
      >
        <motion.h2
          className={styles.mainTitle}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Links
        </motion.h2>
        <motion.img
          initial={{ opacity: 0, x: 200 }}
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
            className={styles.gridItem1}
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              x: { duration: 1 },
              opacity: { duration: 1.2 },
              delay: 0.5,
            }}
          >
            <img
              alt="surboad-pic"
              className={styles.surfboardImage}
              src="https://i.pinimg.com/originals/56/e7/b0/56e7b091856aadd8d58b1d789e52cc1d.jpg"
            />
          </motion.div>
          <motion.div
            className={styles.gridItem2}
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              x: { duration: 1 },
              opacity: { duration: 1.2 },
              delay: 0.5,
            }}
          >
            <div className={styles.gridItem2Content1}>
              <h3 className={styles.linksSubtitles}>Surfboard Shapers</h3>
              <p className={styles.linksContent}>
                <a
                  className={styles.linkMover}
                  href="https://sadhanasurfboards.co.nz/"
                >
                  Sadahana Surfboards (Christchurch)
                </a>
              </p>
              <p className={styles.linksContent}>
                <a
                  className={styles.linkMover}
                  href="https://www.newwavenz.com/"
                >
                  New Wave NZ Surfboards (Gisbourne)
                </a>
              </p>
              <p className={styles.linksContent}>
                <a
                  className={styles.linkMover}
                  href="http://www.hcsurfboards.com/"
                >
                  HC Surfboards (Ruakaka)
                </a>
              </p>
              <p className={styles.linksContent}>
                <a
                  className={styles.linkMover}
                  href="https://andersonsurfboards.co.nz/"
                >
                  Anderson Surfboards (Whangamata)
                </a>
              </p>
            </div>
            <div className={styles.gridItem2Content2}>
              <h3 className={styles.linksSubtitles}>Forecast Websites</h3>
              <p className={styles.linksContent}>
                <a
                  className={styles.linkMover}
                  href="https://magicseaweed.com/New-Zealand-Surf-Forecast/4/"
                >
                  Magicseaweed
                </a>
              </p>
              <p className={styles.linksContent}>
                <a
                  className={styles.linkMover}
                  href="https://www.surf-forecast.com/countries/New-Zealand/breaks"
                >
                  Surf Forecast
                </a>
              </p>
              <p className={styles.linksContent}>
                <a
                  className={styles.linkMover}
                  href="https://www.surfline.com/"
                >
                  Surfline
                </a>
              </p>
              <p className={styles.linksContent}>
                <a
                  className={styles.linkMover}
                  href="https://www.windy.com/?-43.538,172.615,5"
                >
                  Windy
                </a>
              </p>
            </div>
            <div className={styles.gridItem2Content3}>
              <h3 className={styles.linksSubtitles}>Best Footage</h3>
              <p className={styles.linksContent}>
                <a
                  className={styles.linkMover}
                  href="https://www.youtube.com/watch?v=MmA5gmwgbVQ&list=LL&index=36"
                >
                  Indonesia - Giant Tubes (Uluwatu)
                </a>
              </p>
              <p className={styles.linksContent}>
                <a
                  className={styles.linkMover}
                  href=" https://www.youtube.com/watch?v=pAtzsif4MzA&list=LL&index=144"
                >
                  Australia - The Pros Roll into Town (Snapper Rocks)
                </a>
              </p>
              <p className={styles.linksContent}>
                <a
                  className={styles.linkMover}
                  href="https://www.youtube.com/watch?v=-ilFR_rI_ow"
                >
                  Indonesia - Josh Kerr Twin-Fin Master (Nias)
                </a>
              </p>
              <p className={styles.linksContent}>
                <a
                  className={styles.linkMover}
                  href="https://www.youtube.com/watch?v=GFyxlXAaQLk&list=LL&index=224"
                >
                  Portugal - Post-Contest Pro Session (Peniche)
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <LowerNavBar />
    </div>
  );
};

export default WebLinks;
