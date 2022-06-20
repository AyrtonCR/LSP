import { Link } from "react-router-dom";

const Surfboard = () => {
  return (
    <div className="container">
      <h1>Surfboard Page</h1>
      <li>
        <Link to="/">Main Link</Link>
      </li>
    </div>
  );
};

export default Surfboard;
