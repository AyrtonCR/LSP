import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="container">
      <h1>MAIN</h1>
      <li>
        <Link to="/surfbreak">Surfbreak Link</Link>
      </li>
    </div>
  );
};

export default Main;
