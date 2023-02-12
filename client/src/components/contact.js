import styles from "./contact.module.css";
import { Link } from "react-router-dom";
import LowerNavBar from "./lowerNavBar";
import EverythingImage from "../utils/everythingCr.png";
import Wave from "../utils/wave3.png";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <>
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
            Feel free to get in touch ...
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
              className={styles.formContainerContainer}
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                x: { duration: 1 },
                opacity: { duration: 1.2 },
                delay: 0.5,
              }}
            >
              <div className={styles.formContainer}>
                <form
                  action="https://formspree.io/f/xoqrdzrw"
                  method="POST"
                  className={styles.form}
                >
                  <h3 className={styles.formTitle}>Contact Form</h3>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formLabel}>
                      Name:
                    </label>

                    <input
                      id="name"
                      name="Name"
                      type="text"
                      className={styles.formControl}
                      placeholder="Enter your name here"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>
                      Email:
                    </label>

                    <input
                      id="email"
                      name="Email"
                      type="text"
                      className={styles.formControl}
                      placeholder="Enter your email address here"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.formLabel}>
                      Mobile:
                    </label>

                    <input
                      id="phone"
                      name="Phone"
                      type="tel"
                      className={styles.formControl}
                      placeholder="Enter your mobile number here"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.formLabel}>
                      Message:
                    </label>

                    <textarea
                      id="message"
                      name="Message"
                      className={styles.formControl}
                      placeholder="Enter your message here"
                    />
                  </div>
                  <div className={styles.formButtonContainer}>
                    <button type="submit" className={styles.formButton}>
                      Submit
                    </button>
                  </div>
                </form>
                <div className={styles.contactCardContainer}>
                  <h3 className={styles.formTitle}>My Contact Info</h3>
                  <div className={styles.contactCard}>
                    <p className={styles.contactCardContent}>
                      Email: email@notgmail.com
                    </p>
                    <p className={styles.contactCardContent}>
                      Mobile: (+64) 21 234 5678
                    </p>
                    <p className={styles.contactCardContent}>
                      Work: (03) 322-2233
                    </p>
                    <p className={styles.contactCardContent}>
                      Address: 38 Surfer Dude Lane
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className={styles.imageContainer}
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                x: { duration: 1 },
                opacity: { duration: 1.2 },
                delay: 0.5,
              }}
            >
              <img
                alt="everything-will-kill-you"
                className={styles.everythingImage}
                src={EverythingImage}
              ></img>
            </motion.div>
          </div>
        </div>
        <LowerNavBar />
      </div>
    </>
  );
};

export default Contact;
