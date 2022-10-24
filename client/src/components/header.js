// import "./header.css";
// import { Link } from "react-router-dom";
// import Main from "./main";
// import Surfboard from "./surfboard";
// import Forum from "./forum";
// import About from "./about";
// import WebLinks from "./links";
// import Forecasts from "./forecasts";
// import Contact from "./contact";
// import Logo from "../utils/surfing-board.jpeg";
// import LoginButton from "./loginButton";

// const header = () => {
//   return (
//     <div>
//       <nav className="header">
//         <div className="navbar-container">
//           <ul className="nav">
//             <li className="navbar-item">
//               <Link to="/" className="header-title" element={<Main />}>
//                 <img className="logo" src={Logo} alt="" width="300" />
//               </Link>
//             </li>
//             <li className="navbar-item">
//               <Link
//                 to="/surfboard"
//                 className="nav-link"
//                 element={<Surfboard />}
//               >
//                 <strong> Boards</strong>
//               </Link>
//             </li>
//             <li className="navbar-item">
//               <Link
//                 to="/forecasts"
//                 className="nav-link"
//                 element={<Forecasts />}
//               >
//                 <strong>Forecasts</strong>
//               </Link>
//             </li>
//             <li className="navbar-item">
//               <Link to="/forum" className="nav-link" element={<Forum />}>
//                 <strong>Forum</strong>
//               </Link>
//             </li>
//             <li className="navbar-item">
//               <Link to="/links" className="nav-link" element={<WebLinks />}>
//                 <strong>Links</strong>
//               </Link>
//             </li>
//             <li className="navbar-item">
//               <Link to="/about" className="nav-link" element={<About />}>
//                 <strong> About</strong>
//               </Link>
//             </li>
//             <li className="navbar-item">
//               <Link to="/contact" className="nav-link" element={<Contact />}>
//                 <strong>Contact</strong>
//               </Link>
//             </li>
//             <li className="navbar-item">
//               <LoginButton />
//             </li>
//           </ul>
//           <div
//             className="hamburger"
//             onClick={() => console.log("STUPID FUCKING NAVBARS")}
//           >
//             <span className="bar"></span>
//             <span className="bar"></span>
//             <span className="bar"></span>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default header;
