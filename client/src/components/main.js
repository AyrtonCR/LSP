import { Link } from "react-router-dom";
import Peg from "../utils/pegasus_bay.jpg";
import "./main.css";
const Main = () => {
  return (
    <div className="container">
      <h1 className="main-title">Pegasus Bay Breaks</h1>
      <div className="description-and-image">
        <h3 className="main-description">
          Welcome surfers and swell-enthusiasts, here we will be displaying some
          of the most well known and occasionally epic surfbreaks around
          Christchurch! Here you can find some information about how the breaks
          hold swell of different sizes, what boards are best to take out, a
          little info about the forecasts as well as some tips I've learnt over
          the years that might help you get some solid waves.
        </h3>
        <img className="pegasus-bay-image" src={Peg} alt="" />
      </div>
      <div className="breaks-grid"></div>
      <li>
        <Link className="main-links" to="/surfbreak">
          Surfbreak Link
        </Link>
      </li>
    </div>
  );
};

export default Main;
