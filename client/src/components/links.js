import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="container">
      <h1>Links Page</h1>
      <li>
        <Link to="/">Main Link</Link>
      </li>
    </div>
  );
};

export default Links;
