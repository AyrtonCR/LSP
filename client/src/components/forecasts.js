import { Link } from "react-router-dom";
import forecastStyles from "./forecasts.module.css";
import LowerNavBar from "./lowerNavBar";
import React, { useState, useEffect } from "react";
import ForecastIfStatement1 from "./forecastsIfStatement";
import Wave from "../utils/wave3.png";
import { motion } from "framer-motion";
const API_URL = process.env.REACT_APP_API_URL;

const Forecasts = () => {
  const [forecasts, setForecasts] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`${API_URL}/forecasts`);
    const data = await response.json();
    setForecasts(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={forecastStyles.container}>
      <div className={forecastStyles.spaceSaver}></div>
      <div className={forecastStyles.titleContainerContainer}>
        <motion.div
          className={forecastStyles.titleContainer}
          initial={{ scale: 1, opacity: 0, x: -300 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          <motion.h2
            className={forecastStyles.title}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Forecast
          </motion.h2>
          <motion.img
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              x: { duration: 1 },
              opacity: { duration: 1.2 },
              delay: 0.5,
            }}
            className={forecastStyles.image}
            src={Wave}
            alt="wave"
          ></motion.img>
        </motion.div>
      </div>
      <div className={forecastStyles.forecastsContainer}>
        <div className={forecastStyles.forecastsGrid}>
          <div className={forecastStyles.mainBlurbContainer}>
            <motion.h4
              className={forecastStyles.mainBlurb}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                y: { duration: 1 },
                opacity: { duration: 1.2 },
                delay: 0.3,
              }}
            >
              Access the top forecast websites on the web.
            </motion.h4>
            <motion.h4
              className={forecastStyles.mainBlurb}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                y: { duration: 1 },
                opacity: { duration: 1.2 },
                delay: 0.6,
              }}
            >
              'Magicseaweed' offers great swell information and an easy to read
              star rating.
            </motion.h4>
            <motion.h4
              className={forecastStyles.mainBlurb}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                y: { duration: 1 },
                opacity: { duration: 1.2 },
                delay: 0.9,
              }}
            >
              'Surf Forecast' displays important information but does not give
              out stars so easily.
            </motion.h4>
            <motion.h4
              className={forecastStyles.mainBlurb}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                y: { duration: 1 },
                opacity: { duration: 1.2 },
                delay: 1.2,
              }}
            >
              {" "}
              By comparing the two and using the surf cams you can find out what
              the waves are like before heading to the beach!
            </motion.h4>
          </div>
          <motion.ul
            className={forecastStyles.forecastsSingleGrid}
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              x: { duration: 0.8 },
              opacity: { duration: 0.8 },
              delay: 1.2,
            }}
          >
            {forecasts.map((forecast) => {
              return (
                <>
                  <li
                    className={forecastStyles.forecastsSingleItem}
                    key={forecasts._id}
                  >
                    <div className={forecastStyles.mainGridPart1}>
                      <h2 className={forecastStyles.forecastName}>
                        {forecast.forecasts_name}
                      </h2>
                    </div>
                    <div className={forecastStyles.mainGridPart2}>
                      <div className={forecastStyles.forecastsItemGridPart1}>
                        <p className={forecastStyles.breakBlurb}>
                          {forecast.forecast_info}
                        </p>
                      </div>
                      <div className={forecastStyles.forecastsItemGridPart2}>
                        <img
                          alt="forecasts"
                          className={forecastStyles.forecastsImage}
                          src={forecast.forecasts_image}
                        ></img>
                      </div>
                      <div className={forecastStyles.forecastsItemGridPart3}>
                        {" "}
                        <p className={forecastStyles.reportName}>
                          Magic Seaweed Report:
                          <a
                            href={forecast.forecasts_info_1}
                            className={forecastStyles.forecastButton}
                          >
                            <button className={forecastStyles.nestedButton}>
                              <strong>Click Here</strong>
                            </button>
                          </a>
                        </p>
                        <p className={forecastStyles.reportName}>
                          Surf Forecast Report:
                          <a
                            href={forecast.forecasts_info_2}
                            className={forecastStyles.forecastButton}
                          >
                            <button className={forecastStyles.nestedButton}>
                              <strong>Click Here</strong>
                            </button>
                          </a>
                        </p>
                        <p className={forecastStyles.reportName}>
                          Surf Cams:
                          <a
                            href={forecast.forecasts_cam_1}
                            className={forecastStyles.forecastButton}
                          >
                            <button className={forecastStyles.nestedButton}>
                              <strong>Cam (1)</strong>
                            </button>
                          </a>
                          <a
                            href={forecast.forecasts_cam_2}
                            className={forecastStyles.forecastButton}
                          >
                            <button className={forecastStyles.nestedButton}>
                              <strong>Cam (2)</strong>
                            </button>
                          </a>
                        </p>
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
          </motion.ul>
        </div>
      </div>
      <LowerNavBar />
    </div>
  );
};

export default Forecasts;
