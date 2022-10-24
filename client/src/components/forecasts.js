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
    <div className={forecastStyles.container}>
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
                    <div className={forecastStyles.mainGridPart1}>
                      <h2 className={forecastStyles.forecastName}>
                        {forecast.forecasts_name}
                      </h2>
                    </div>
                    <div className={forecastStyles.mainGridPart2}>
                      <div className={forecastStyles.forecastsItemGridPart1}>
                        <img
                          alt="forecasts"
                          className={forecastStyles.forecastsImage}
                          src={forecast.forecasts_image}
                        ></img>
                      </div>
                      <div className={forecastStyles.forecastsItemGridPart2}>
                        <a
                          href={forecast.forecasts_info_1}
                          className={forecastStyles.forecastButton}
                        >
                          <button className={forecastStyles.nestedButton}>
                            <strong>MS Surf Report</strong>
                          </button>
                        </a>

                        <a
                          href={forecast.forecasts_info_2}
                          className={forecastStyles.forecastButton}
                        >
                          <button className={forecastStyles.nestedButton}>
                            <strong>SF Surf Report</strong>
                          </button>
                        </a>
                        <a
                          href={forecast.forecasts_cam_1}
                          className={forecastStyles.forecastButton}
                        >
                          <button className={forecastStyles.nestedButton}>
                            <strong>Surf Cam - 1</strong>
                          </button>
                        </a>

                        <a
                          href={forecast.forecasts_cam_2}
                          className={forecastStyles.forecastButton}
                        >
                          <button className={forecastStyles.nestedButton}>
                            <strong>Surf Cam - 2</strong>
                          </button>
                        </a>
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
