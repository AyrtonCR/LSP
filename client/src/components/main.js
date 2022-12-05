import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Peg from "../utils/pegasus_bay.jpg";
import LowerNavBar from "./lowerNavBar";
import Wall_1 from "../utils/wallpaper1.jpg";
import Wave from "../utils/wave3.png";
import "./main.css";

const API_URL = process.env.REACT_APP_API_URL;

const Main = () => {
  const [surfbreaks, setSurfbreaks] = useState([]);
  const fetchData = async () => {
    const response = await fetch(`${API_URL}/surfbreaks`);
    const data = await response.json();
    setSurfbreaks(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="title-container">
          <h1 className="main-title">
            <em>
              <strong>Pegasus Bay Surf</strong>
            </em>
          </h1>
        </div>

        <div className="description-and-image">
          <img className="new-brighton-image" src={Wall_1} alt="" />
          <div className="top-left">
            <h3 className="main-description">
              Welcome fellow surfers and swell-enthusiasts!<br></br>
              <br></br> From Forecasts to Fibreglass, this site hopes to offer a
              place where you can learn all about the wonderful and occasionally
              epic breaks around Canterbury.
              <br></br>
            </h3>
          </div>
        </div>
        <div className="sub-title-container">
          <h3 className="sub-title">
            <i>The Breaks</i>
          </h3>
          <img className="mini-image" src={Wave} alt="wave"></img>
        </div>
        <div className="main-color-wrapper">
          <div className="surfbreaks-grid-container">
            <ul className="surfbreaks-grid">
              {surfbreaks.map((surfbreak) => {
                return (
                  <li className="single-surfbreak" key={surfbreak.id}>
                    <img
                      alt="pegasus-bay"
                      className="surfbreaks-image"
                      src={surfbreak.surfbreak_image}
                    />

                    <a
                      href={surfbreak.forecast_info}
                      className="surfbreaks-title"
                    >
                      <strong>
                        <em>
                          <u>{surfbreak.surfbreak_title}</u>
                        </em>
                      </strong>
                    </a>
                    <p className="surfbreaks-blurb">
                      {surfbreak.surfbreak_blurb}
                    </p>
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
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="lowerNavBar">
          <LowerNavBar />
        </div>
      </div>
    </>
  );
};

export default Main;
