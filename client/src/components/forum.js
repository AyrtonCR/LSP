import { Link } from "react-router-dom";
import styles from "./forum.module.css";
import forecastStyles from "./forecasts.module.css";
import LowerNavBar from "./lowerNavBar";
import React, { useState, useEffect } from "react";

const Forum = () => {
  const [forumInfo, setForumInfo] = useState([]);
  const fetchData = async () => {
    const response = await fetch("http://localhost:5001/forum");
    const data = await response.json();
    setForumInfo(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>Swell Watcher Forum</h2>
      <h3 className={styles.mainDescription}>
        Description about what how this page is a forum where people can create
        an account and let people know if the surf is cranking near them.
      </h3>
      <div className={styles.mainGrid}>
        <div className={styles.singleItemMainGrid}>
          {forumInfo.map((forumData) => {
            return (
              <>
                <li className={styles.forumSingleItem} key={forumData.id}>
                  <div className={styles.singleItemGrid1}>
                    <img
                      alt="forum_pic"
                      className={styles.accountImage}
                      src={forumData.forum_image}
                    ></img>
                    <p className={styles.accountName}>
                      {forumData.forum_acc_name}
                    </p>
                  </div>
                  <div className={styles.singleItemGrid2}>
                    <p className={styles.accountMessage}>
                      {forumData.forum_acc_message_time}: &ensp;
                      {forumData.forum_acc_message}
                    </p>
                  </div>
                </li>
              </>
            );
          })}
        </div>
        <div className={styles.mainGridImageContainer}>
          <img
            alt="main_grid_pic"
            className={styles.mainGridImage}
            src="https://c.stocksy.com/a/zJ5900/z9/2165411.jpg"
          ></img>
        </div>
      </div>

      <div className={forecastStyles.lowerNavBar}>
        <LowerNavBar />
      </div>
    </div>
  );
};

export default Forum;
