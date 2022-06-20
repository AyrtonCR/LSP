import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container">
      <h1>About Page</h1>
      <li>
        <Link to="/">Main Link</Link>
      </li>
    </div>
  );
};

export default About;
