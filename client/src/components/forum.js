import { Link } from "react-router-dom";
import styles from "./forum.module.css";
import "./forum.css";
import forecastStyles from "./forecasts.module.css";
import LowerNavBar2 from "./lowerNavBarBlack";
import React, { useState, useEffect, useCallback } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Wave from "../utils/wave3.png";
import { motion } from "framer-motion";
import { getMainApi, getSwells } from "./forumApiRequests";
import BreakObject from "./forumBreakData/forumBreakObject";
import LoadMongoData from "./loadingMongoData";

const Forum = () => {
  // State Management //
  const [isLoading, setIsLoading] = useState([]);
  const [errorFetchedChecker, setErrorFetchedChecker] = useState(false);
  const [forumInfo, setForumInfo] = useState([]);
  const [nbSwellLoading, setNbSwellLoading] = useState(false);
  const [sumnerSwellLoading, setSumnerSwellLoading] = useState(false);
  const [taylorsSwellLoading, setTaylorsSwellLoading] = useState(false);
  const [waikukuSwellLoading, setWaikukuSwellLoading] = useState(false);
  const [amberlySwellLoading, setAmberlySwellLoading] = useState(false);
  const [magnetSwellLoading, setMagnetSwellLoading] = useState(false);
  const [ahiparaSwellLoading, setAhiparaSwellLoading] = useState(false);
  const [nbApiData, setNbApiData] = useState([]);
  const [sumnerApiData, setSumnerApiData] = useState([]);
  const [taylorsApiData, setTaylorsApiData] = useState([]);
  const [waikukuApiData, setWaikukuApiData] = useState([]);
  const [amberlyApiData, setAmberlyApiData] = useState([]);
  const [magnetApiData, setMagnetApiData] = useState([]);
  const [ahiparaApiData, setAhiparaApiData] = useState([]);

  // Main Fetch //
  const fetchMainData = async () => {
    setIsLoading(true);
    const response = await getMainApi.getMainData();
    const data = await response.json();
    console.log(data[0]);
    if (data[0] === undefined) {
      console.log("fetch error");
      console.log("loading is staying true, state will not be updated");
      setIsLoading(true);
    } else if (data[0] !== undefined) {
      setForumInfo(data);
      console.log("settings loading to false");
      setIsLoading(false);
    }
  };

  //NB Data Fetch //
  const fetchNbSwellData = async () => {
    setNbSwellLoading(true);
    const response = await getSwells[0].getNbSwell();
    const data = await response.json();

    if (data.name === "ChildProcessError") {
      console.log("Child Process Error");
      setNbSwellLoading(false);
    } else {
      setNbApiData(data);
      console.log("New Brighton Fetch");
      console.log(data);
      setNbSwellLoading(false);
      setErrorFetchedChecker(false);
    }
  };
  // Sumner Data Fetch //
  const fetchSumnerSwellData = async () => {
    setSumnerSwellLoading(true);
    const response = await getSwells[1].getSumnerSwell();
    const data = await response.json();

    if (data.name === "ChildProcessError") {
      console.log("Child Process Error");
      setSumnerSwellLoading(true);
    } else {
      setSumnerApiData(data);
      console.log("Sumner Fetch");
      console.log(data);
      setSumnerSwellLoading(false);
      setErrorFetchedChecker(false);
    }
  };
  //Taylors Data Fetch //
  const fetchTaylorsSwellData = async () => {
    setTaylorsSwellLoading(true);
    const response = await getSwells[5].getTaylorsSwell();
    const data = await response.json();
    if (data.name === "ChildProcessError") {
      console.log("Child Process Error");
      setTaylorsSwellLoading(true);
    } else {
      setTaylorsApiData(data);
      console.log("Taylors Fetch");
      console.log(data);
      setErrorFetchedChecker(false);
      setTaylorsSwellLoading(false);
    }
  };

  //Waikuku Data Fetch //
  const fetchWaikukuSwellData = async () => {
    setWaikukuSwellLoading(true);
    const response = await getSwells[3].getWaikukuSwell();
    const data = await response.json();
    if (data.name === "ChildProcessError") {
      console.log("Child Process Error");
      setWaikukuSwellLoading(true);
    } else {
      setWaikukuApiData(data);
      console.log("Waikuku Fetch");
      console.log(data);
      setWaikukuSwellLoading(false);
      setErrorFetchedChecker(false);
    }
  };
  //Magnet Data Fetch //
  const fetchMagnetSwellData = async () => {
    setMagnetSwellLoading(true);
    const response = await getSwells[2].getMagnetSwell();
    const data = await response.json();
    if (data.name === "ChildProcessError") {
      console.log("Child Process Error");
      setMagnetSwellLoading(true);
    } else {
      setMagnetApiData(data);
      console.log("Magnet Fetch");
      console.log(data);
      setMagnetSwellLoading(false);
    }
  };

  //Amberly Data Fetch //
  const fetchAmberlySwellData = async () => {
    setAmberlySwellLoading(true);
    const response = await getSwells[4].getAmberlySwell();
    const data = await response.json();
    if (data.name === "ChildProcessError") {
      console.log("Child Process Error");
      setAmberlySwellLoading(true);
    } else {
      setAmberlyApiData(data);
      console.log("Amberly Fetch");
      console.log(data);
      setAmberlySwellLoading(false);
    }
  };

  //Ahipara Data Fetch //
  const fetchAhiparaSwellData = async () => {
    setAhiparaSwellLoading(true);
    const response = await getSwells[6].getAhiparaSwell();
    const data = await response.json();
    if (data.name === "ChildProcessError") {
      console.log("Child Process Error");
      setAhiparaSwellLoading(true);
    } else {
      setAhiparaApiData(data);
      console.log("Ahipara Fetch");
      console.log(data);
      setAhiparaSwellLoading(false);
    }
  };

  // UseEffects //
  useEffect(() => {
    fetchMainData();
    fetchNbSwellData();
    fetchAmberlySwellData();
    fetchTaylorsSwellData();
    fetchWaikukuSwellData();
    fetchMagnetSwellData();
    fetchSumnerSwellData();
    fetchAhiparaSwellData();
  }, []);
  // Maps //
  useEffect(() => {
    const L = require("leaflet");
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    });
  }, []);

  // For onClick Event handler //
  const nbHandleCall = () => {
    if (fetchNbSwellData) {
      return fetchNbSwellData();
    }
  };
  const taylorsHandleCall = () => {
    if (fetchTaylorsSwellData) {
      return fetchTaylorsSwellData();
    }
  };
  const waikukuHandleCall = () => {
    if (fetchWaikukuSwellData) {
      return fetchWaikukuSwellData();
    }
  };
  const magnetHandleCall = () => {
    if (fetchMagnetSwellData) {
      return fetchMagnetSwellData();
    }
  };
  const amberlyHandleCall = () => {
    if (fetchAmberlySwellData) {
      return fetchAmberlySwellData();
    }
  };
  const sumnerHandleCall = () => {
    if (fetchSumnerSwellData) {
      return fetchSumnerSwellData();
    }
  };
  const ahiparaHandleCall = () => {
    if (fetchAhiparaSwellData) {
      return fetchAhiparaSwellData();
    }
  };

  // const arrayOfHandleCall = [
  //   { fetch: "fetchAhiparaSwellData" },
  //   { fetch: "fetchSumnerSwellData" },
  //   { fetch: "fetchAmberlySwellData" },
  //   { fetch: "fetchMagnetSwellData" },
  //   { fetch: "fetchWaikukuSwellData" },
  //   { fetch: "fetchTaylorsSwellData" },
  //   { fetch: "fetchNbSwellData" },
  // ];
  // console.log(arrayOfHandleCall);

  // const mapArrayOfHandleCalls = () => {
  //   arrayOfHandleCall.map((handles) => {
  //     return {
  //       handles.fetch
  //     }
  //     console.log("HANDLES FETCH");
  //     console.log(handles.fetch);

  //   });
  // };

  // console.log(mapArrayOfHandleCalls());

  const ReturnMappedData = () => {
    return forumInfo.map((forumData) => {
      return (
        <>
          <div key={forumData.id}>
            <li className={styles.forumSingleItem} key={forumData._id}>
              <div className={styles.singleItemGrid1} key={forumData.id}>
                <img alt="forum_pic" key="img" className={styles.accountImage} src={forumData.forum_image}></img>
                <p className={styles.accountName} key="p">
                  {forumData.forum_acc_name}
                </p>
              </div>
              <div key="adiv" className={styles.singleItemGrid2}>
                <p key="anotherthing" className={styles.accountMessage}>
                  {forumData.forum_acc_message_time}: &ensp;
                  {forumData.forum_acc_message}
                </p>
              </div>
            </li>
          </div>
        </>
      );
    });
  };
  // Returning Content //
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
          key="shit"
          transition={{
            opacity: { duration: 1.2 },
            delay: 0.7,
          }}
        >
          {/* ADD */}
          {LoadMongoData(forumInfo, isLoading, ReturnMappedData)}
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
              <Marker position={[-43.570704, 172.76732]}>
                <Popup>
                  Sumner Beach <br /> (API Swell Data Here)
                  <BreakObject prop={sumnerApiData} swellLoading={sumnerSwellLoading} />
                  <button onClick={sumnerHandleCall}>Get Tide Data</button>
                </Popup>
              </Marker>
              <Marker position={[-43.503715, 172.735158]}>
                <Popup>
                  <BreakObject prop={nbApiData} swellLoading={nbSwellLoading} />
                  New Brighton Beach <br /> (NIWA API Swell Data) <br />
                  <button onClick={nbHandleCall}>Get Tide Data</button>
                </Popup>
              </Marker>
              <Marker position={[-43.582407, 172.778309]}>
                <Popup>
                  Taylors Mistake <br /> (API Swell Data Here)
                  <BreakObject prop={taylorsApiData} swellLoading={taylorsSwellLoading} />
                  <button onClick={taylorsHandleCall}>Get Tide Data</button>
                </Popup>
              </Marker>
              <Marker position={[-43.288442, 172.723546]}>
                <Popup>
                  Waikuku Beach <br /> (API Swell Data Here)
                  <BreakObject prop={waikukuApiData} swellLoading={waikukuSwellLoading} />
                  <button onClick={waikukuHandleCall}>Get Tide Data</button>
                </Popup>
              </Marker>
              <Marker position={[-43.169545, 172.785222]}>
                <Popup>
                  Amberly Beach <br /> (API Swell Data Here)
                  <BreakObject prop={amberlyApiData} swellLoading={amberlySwellLoading} />
                  <button onClick={amberlyHandleCall}>Get Tide Data</button>
                </Popup>
              </Marker>{" "}
              <Marker position={[-43.843118, 172.740447]}>
                <Popup>
                  Magnet Bay <br /> (API Swell Data Here)
                  <BreakObject prop={magnetApiData} swellLoading={magnetSwellLoading} />
                  <button onClick={magnetHandleCall}>Get Tide Data</button>
                </Popup>
              </Marker>
              <Marker position={[-35.16352828595721, 173.12768844219224]}>
                <Popup>
                  Ahipara <br /> (API Swell Data Here)
                  <BreakObject prop={ahiparaApiData} swellLoading={ahiparaSwellLoading} />
                  <button onClick={ahiparaHandleCall}>Get Tide Data</button>
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
