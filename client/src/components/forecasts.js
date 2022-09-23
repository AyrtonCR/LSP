import { Link } from "react-router-dom";
import styles from "./forecasts.module.css";
import LowerNavBar from "./lowerNavBar";
import React, { useState, useEffect } from "react";
import ForecastIfStatement1 from "./forecastsIfStatement";
const Forecasts = () => {
  const [forecasts, setForecasts] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5001/forecasts");
    const data = await response.json();
    setForecasts(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className={styles.forecastsContainer}>
        <div className={styles.forecastsGrid}>
          <h2 className={styles.forecastMainName}>Forecasts</h2>
          <ul className={styles.forecastsSingleGrid}>
            {forecasts.map((forecast) => {
              return (
                <>
                  <li
                    className={styles.forecastsSingleItem}
                    key={forecasts._id}
                  >
                    <div className={styles.forecastsItemGridPart1}>
                      <h2 className={styles.forecastName}>
                        <u>{forecast.forecasts_name}</u>
                      </h2>
                      <img
                        alt="forecasts"
                        className={styles.forecastsImage}
                        src={forecast.forecasts_image}
                      ></img>
                    </div>
                    <div className={styles.forecastsItemGridPart2}>
                      <a
                        href={forecast.forecasts_info_1}
                        className={styles.forecastsLink}
                      >
                        {forecast.forecasts_name} Magic Seaweed Report
                      </a>

                      <a
                        href={forecast.forecasts_info_2}
                        className={styles.forecastsLink}
                      >
                        {forecast.forecasts_name} Surf-Forecast Report
                      </a>

                      <a
                        href={forecast.forecasts_cam_1}
                        className={styles.forecastsLink}
                      >
                        Surf Cam - 1
                      </a>

                      <a
                        href={forecast.forecasts_cam_2}
                        className={styles.forecastsLink}
                      >
                        Surf Cam - 2
                      </a>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="lowerNavBar">
        <LowerNavBar />
      </div>
    </div>
  );
};

export default Forecasts;
