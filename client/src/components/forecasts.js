import { Link } from "react-router-dom";
import forecastStyles from "./forecasts.module.css";
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
      <div className={forecastStyles.forecastsContainer}>
        <div className={forecastStyles.forecastsGrid}>
          <h2 className={forecastStyles.forecastMainName}>Forecasts</h2>
          <ul className={forecastStyles.forecastsSingleGrid}>
            {forecasts.map((forecast) => {
              return (
                <>
                  <li
                    className={forecastStyles.forecastsSingleItem}
                    key={forecasts._id}
                  >
                    <div className={forecastStyles.forecastsItemGridPart1}>
                      <h2 className={forecastStyles.forecastName}>
                        <u>{forecast.forecasts_name}</u>
                      </h2>
                      <img
                        alt="forecasts"
                        className={forecastStyles.forecastsImage}
                        src={forecast.forecasts_image}
                      ></img>
                    </div>
                    <div className={forecastStyles.forecastsItemGridPart2}>
                      <a
                        href={forecast.forecasts_info_1}
                        className={forecastStyles.forecastsLink}
                      >
                        {forecast.forecasts_name} Magic Seaweed Report
                      </a>

                      <a
                        href={forecast.forecasts_info_2}
                        className={forecastStyles.forecastsLink}
                      >
                        {forecast.forecasts_name} Surf-Forecast Report
                      </a>

                      <a
                        href={forecast.forecasts_cam_1}
                        className={forecastStyles.forecastsLink}
                      >
                        Surf Cam - 1
                      </a>

                      <a
                        href={forecast.forecasts_cam_2}
                        className={forecastStyles.forecastsLink}
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

      <LowerNavBar />
    </div>
  );
};

export default Forecasts;
