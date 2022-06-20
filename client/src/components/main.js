import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="container">
      <h1>Main Website Title</h1>
      <div className="description-blurb">
        <h3>Website description and blurb goes here</h3>
      </div>
      <div className="breaks-grid"></div>
      <li>
        <Link to="/surfbreak">Surfbreak Link</Link>
      </li>
    </div>
  );
};

export default Main;
