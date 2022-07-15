import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Peg from "../utils/pegasus_bay.jpg";
import "./main.css";

const Main = () => {
  const [surfbreaks, setSurfbreaks] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5001/surfbreaks");
    const data = await response.json();
    setSurfbreaks(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="main-container">
        <h1 className="main-title">Pegasus Bay Breaks</h1>
        <div className="description-and-image">
          <h3 className="main-description">
            Welcome surfers and swell-enthusiasts, here we will be displaying
            some of the most well known and occasionally epic surfbreaks around
            Christchurch! Here you can find some information about how the
            breaks hold swell of different sizes, what boards are best to take
            out, a little info about the forecasts as well as some tips I've
            learnt over the years that might help you get some solid waves.
          </h3>
          <img className="pegasus-bay-image" src={Peg} alt="" />
        </div>
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

                  <p className="surfbreaks-title">
                    {surfbreak.surfbreak_title}
                  </p>
                  <p className="surfbreaks-blurb">
                    {surfbreak.surfbreak_blurb}
                  </p>
                  <Link to={`/surfbreaks/${surfbreak.id}`}>
                    <button className="view-more-button"></button>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Main;
