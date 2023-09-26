import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import Peg from "../utils/pegasus_bay.jpg";
import LowerNavBar from "./lowerNavBar";
import Wall_1 from "../utils/wallpaper1.jpg";
import Wave from "../utils/wave3.png";
import "./main.css";
import { motion, useInView } from "framer-motion";

const API_URL = process.env.REACT_APP_API_URL;

const Main = () => {
  const [surfbreaks, setSurfbreaks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(`${API_URL}/surfbreaks`);
    const data = await response.json();
    console.log(data[0]);
    if (data[0] === undefined) {
      console.log("fetch error");
      console.log("loading is staying true, state will not be updated");
      setIsLoading(true);
    } else if (data[0] !== undefined) {
      setSurfbreaks(data);
      console.log("settings loading to false");
      setIsLoading(false);
    }
  };

  const ref = useRef(null);
  const isInView = useInView(ref);

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2);

  const ref3 = useRef(null);
  const isInView3 = useInView(ref3);

  const ref4 = useRef(null);
  const isInView4 = useInView(ref4);

  const ref5 = useRef(null);
  const isInView5 = useInView(ref5);

  const LoadMongoData = () => {
    if (surfbreaks) {
      if (isLoading === false) {
        console.log("Data is ready, loading now ...");
        return surfbreaks.map((surfbreak) => {
          return (
            <>
              <motion.li className="single-surfbreak" key={surfbreak.id}>
                <img alt="pegasus-bay" className="surfbreaks-image" src={surfbreak.surfbreak_image} />
                <a href={surfbreak.forecast_info} className="surfbreaks-title">
                  <strong>
                    <em>
                      <u>{surfbreak.surfbreak_title}</u>
                    </em>
                  </strong>
                </a>
                <p className="surfbreaks-blurb">{surfbreak.surfbreak_blurb}</p>
                <div className="button-grid">
                  <Link to={`/surfboard`} className="button-link">
                    <button className="main-buttons">
                      <strong>Learn More</strong>
                    </button>
                  </Link>
                  <Link to={`/forecasts`}>
                    <button className="main-buttons">
                      <strong>Check Forecast</strong>
                    </button>
                  </Link>
                </div>
              </motion.li>
            </>
          );
        });
      }
    } else if (isLoading === true);
    console.log("Initial undefined, DB Loading ...");
    return (
      <>
        <h3>Currently DB is undefined.</h3>
      </>
    );
  };

  useEffect(() => {
    fetchData();
  }, []);
  // useEffect(() => {
  //   LoadMongoData();
  // }, [fetchData()]);
  return (
    <>
      <motion.div className="super-container">
        <motion.div className="description-and-image" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.8 }}>
          <motion.img
            className="new-brighton-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            src={Wall_1}
            alt=""
          />

          <motion.div className="new-title-container" initial={{ opacity: 0, x: 300 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.4 }}>
            <h1 className="new-main-title">
              <em>
                <strong>Pegasus Bay Surf</strong>
              </em>
            </h1>
            <motion.div className="canterbury">
              <h5 className="below-title">
                <em>Canterbury, NZ</em>
              </h5>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="main-container" initial={{ opacity: 0.89 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}>
          <motion.div className="description-holder">
            <motion.h3
              className="main-description"
              style={{
                transform: isInView2 ? "none" : "translateX(-200px)",
                opacity: isInView2 ? 1 : 0,
                transition: "all 1.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              Welcome fellow surfers and swell-enthusiasts!<br></br>
              <br></br>{" "}
            </motion.h3>
            <motion.h3
              className="main-description"
              style={{
                transform: isInView2 ? "none" : "translateX(200px)",
                opacity: isInView2 ? 1 : 0,
                transition: "all 1.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              From Forecasts to Fibreglass, this site hopes to offer a place where you can learn all about the wonderful and occasionally epic breaks around
              Canterbury.
              <br></br>
            </motion.h3>
          </motion.div>
          <motion.div
            style={{
              transform: isInView3 ? "none" : "translateX(200px)",
              opacity: isInView3 ? 1 : 0,
              transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="sub-title-container"
            ref={ref2}
          >
            <h3 className="sub-title">
              <i>The Breaks</i>
            </h3>
            <motion.img
              className="mini-image"
              src={Wave}
              alt="wave"
              ref={ref3}
              style={{
                transform: isInView2 ? "none" : "translateX(-300px)",
                opacity: isInView2 ? 1 : 0,
                transition: "all 1.4s cubic-bezier(0.25, 0.50, 0.75, 1) 0.8s",
              }}
            ></motion.img>
          </motion.div>
          <motion.div
            className="main-color-wrapper"
            style={{
              transform: isInView4 ? "none" : "translateX(200px)",
              opacity: isInView4 ? 1 : 0,
              transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <div className="surfbreaks-grid-container" ref={ref4}>
              <ul className="surfbreaks-grid">
                <LoadMongoData />
              </ul>
            </div>
          </motion.div>
        </motion.div>
        <motion.div className="lowerNavBarContainer" ref={ref}>
          <motion.div
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.2s cubic-bezier(0.05, 0.06, 0.08, 1) 0.8s",
            }}
          >
            <LowerNavBar />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Main;
