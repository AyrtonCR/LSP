import styles from "./contact.module.css";
import { Link } from "react-router-dom";
import LowerNavBar from "./lowerNavBar";
import EverythingImage from "../utils/everythingCr.png";

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainContainer}>
          <h1 className={styles.MainTitle}>Feel free to get in touch ...</h1>
          <div className={styles.mainGrid}>
            <div className={styles.formContainerContainer}>
              <div className={styles.formContainer}>
                <form
                  action="https://formspree.io/f/xoqrdzrw"
                  method="POST"
                  className={styles.form}
                >
                  <h3 className={styles.formTitle}>Contact Form</h3>
                  <div className={styles.formGroup}>
                    <label for="name" class={styles.formLabel}>
                      Name:
                    </label>

                    <input
                      id="name"
                      name="Name"
                      type="text"
                      class={styles.formControl}
                      placeholder="Enter your name here"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label for="email" class={styles.formLabel}>
                      Email:
                    </label>

                    <input
                      id="email"
                      name="Email"
                      type="text"
                      class={styles.formControl}
                      placeholder="Enter your email address here"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label for="phone" class={styles.formLabel}>
                      Mobile:
                    </label>

                    <input
                      id="phone"
                      name="Phone"
                      type="tel"
                      class={styles.formControl}
                      placeholder="Enter your mobile number here"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label for="message" class={styles.formLabel}>
                      Message:
                    </label>

                    <textarea
                      id="message"
                      name="Message"
                      class={styles.formControl}
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
            </div>
            <div className={styles.imageContainer}>
              <img
                alt="everything-will-kill-you"
                className={styles.everythingImage}
                src={EverythingImage}
              ></img>
            </div>
          </div>
        </div>
        <LowerNavBar />
      </div>
    </>
  );
};

export default Contact;
