import { Link } from "react-router-dom";
import styles from "./forum.module.css";
import "./forum.css";
import forecastStyles from "./forecasts.module.css";
import LowerNavBar2 from "./lowerNavBarBlack";
import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import Wave from "../utils/wave3.png";
import { motion, useInView } from "framer-motion";
import forumApiRequests from "./forumApiRequests";
import { format } from "date-fns";
import { formatDate } from "../utils/formatDate";

const Forum = () => {
  const [forumInfo, setForumInfo] = useState([]);
  const [nbApiData, setNbApiData] = useState([]);
  const [swellLoading, setSwellLoading] = useState(false);

  const fetchData = async () => {
    const response = await forumApiRequests.getMainData();
    const data = await response.json();
    setForumInfo(data);
    console.log(data);
  };

  const fetchSwellData = async () => {
    setSwellLoading(true);
    const response = await forumApiRequests.getNbSwell();
    if (response.ok) {
      const data = await response.json();
      setNbApiData(data);
      console.log(data);
      setSwellLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    fetchSwellData();
  }, []);

  useEffect(() => {
    const L = require("leaflet");
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    });
  }, []);

  const NBSwellReturn = () => {
    if (swellLoading === false)
      return (
        <>
          <p>{formatDate(nbApiData.values[3].time)}</p>
          <p> Low Tide: {nbApiData.values[3].value}M</p>
          <p>{formatDate(nbApiData.values[4].time)}</p>
          <p> High Tide: {nbApiData.values[4].value}M</p>
        </>
      );
    else if (swellLoading === true)
      return (
        <>
          <p>Swell data loading ..</p>
        </>
      );
  };

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className={styles.container}>
      <div className={styles.spaceSaver}></div>

      <motion.div className={styles.titleContainer} initial={{ scale: 1, opacity: 0, x: 300 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.4 }}>
        <motion.h2 className={styles.mainTitle} initial={{ opacity: 0.3 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          Swell Watcher
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

      <motion.div
        className={styles.mainDescriptionContainer}
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          x: { duration: 1.2 },
          opacity: { duration: 1 },
        }}
      >
        <motion.h3 className={styles.mainDescription} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.6 }}>
          Stay connected with local updates on the surf and let others know when the waves are good near you.
        </motion.h3>
      </motion.div>
      <div className={styles.mainGrid}>
        <motion.div
          className={styles.singleItemMainGrid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            opacity: { duration: 1.2 },
            delay: 0.7,
          }}
        >
          {forumInfo.map((forumData) => {
            return (
              <>
                <li className={styles.forumSingleItem} key={forumData.id}>
                  <div className={styles.singleItemGrid1}>
                    <img alt="forum_pic" className={styles.accountImage} src={forumData.forum_image}></img>
                    <p className={styles.accountName}>{forumData.forum_acc_name}</p>
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
        </motion.div>
        <motion.div
          className={styles.mainGridImageContainer}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            x: { duration: 1 },
            opacity: { duration: 1.2 },
            delay: 0.5,
          }}
        >
          <div className={styles.map}>
            <MapContainer center={[-43.5642322, 172.6498945, 10.34]} zoom={9} scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[-43.582407, 172.778309]}>
                <Popup>
                  Taylors Mistake <br /> (API Swell Data Here)
                </Popup>
              </Marker>
              <Marker position={[-43.570704, 172.76732]}>
                <Popup>
                  Sumner Beach <br /> (API Swell Data Here)
                </Popup>
              </Marker>
              <Marker position={[-43.503715, 172.735158]}>
                <Popup>
                  New Brighton Beach <br /> (API Swell Data Here) <br />
                  {swellLoading}
                  <NBSwellReturn />
                </Popup>
              </Marker>
              <Marker position={[-43.288442, 172.723546]}>
                <Popup>
                  Waikuku Beach <br /> (API Swell Data Here)
                </Popup>
              </Marker>
              <Marker position={[-43.169545, 172.785222]}>
                <Popup>
                  Amberly Beach <br /> (API Swell Data Here)
                </Popup>
              </Marker>
              <Marker position={[-43.843118, 172.740447]}>
                <Popup>
                  Magnet Bay <br /> (API Swell Data Here)
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </motion.div>
      </div>

      <div className={forecastStyles.lowerNavBar}>
        <LowerNavBar2 />
      </div>
    </div>
  );
};

export default Forum;
