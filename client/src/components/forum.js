import { Link } from "react-router-dom";
import styles from "./forum.module.css";
import "./forum.css";
import forecastStyles from "./forecasts.module.css";
import LowerNavBar from "./lowerNavBar";
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

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

  useEffect(() => {
    const L = require("leaflet");

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    });
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>Swell Watcher</h2>
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
          <div className={styles.map}>
            <MapContainer
              center={[-43.5532164, 172.7282033, 9.71]}
              zoom={8.4}
              scrollWheelZoom={true}
            >
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
                  New Brighton Beach <br /> (API Swell Data Here)
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
        </div>
      </div>

      <div className={forecastStyles.lowerNavBar}>
        <LowerNavBar />
      </div>
    </div>
  );
};

export default Forum;
