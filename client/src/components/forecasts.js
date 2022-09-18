import { Link } from "react-router-dom";
import styles from "./forecasts.module.css";
import LowerNavBar from "./lowerNavBar";
import React, { useState, useEffect } from "react";

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
                  <li className={styles.forecastsSingleItem} key={forecasts.id}>
                    <div className={styles.forecastsItemGridPart1}>
                      <h2 className={styles.forecastName}>
                        {forecast.forecasts_name}
                      </h2>
                      <img
                        alt="forecasts"
                        className={styles.forecastsImage}
                        src={forecast.forecasts_image}
                      ></img>
                    </div>
                    <div className={styles.forecastsItemGridPart2}>
                      <p className={styles.forecastsLink}>
                        {forecast.forecasts_info_1}
                      </p>
                      <p className={styles.forecastsLink}>
                        {forecast.forecasts_info_2}
                      </p>
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
