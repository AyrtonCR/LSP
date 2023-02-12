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
          <h4 className={forecastStyles.mainBlurb}>
            Access the top forecast websites on the web.
          </h4>
          <h4 className={forecastStyles.mainBlurb}>
            'Magicseaweed' offers great swell information and an easy to read
            star rating.
          </h4>
          <h4 className={forecastStyles.mainBlurb}>
            'Surf Forecast' displays important information but does not give out
            stars so easily.
          </h4>
          <h4 className={forecastStyles.mainBlurb}>
            {" "}
            By comparing the two and using the surf cams you can find out what
            the waves are like before heading to the beach!
          </h4>
          <ul className={forecastStyles.forecastsSingleGrid}>
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
          </ul>
        </div>
      </div>
      <LowerNavBar />
    </div>
  );
};

export default Forecasts;
