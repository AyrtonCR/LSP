import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/main";
import Surfbreak from "./components/surfbreak";

const App = () => {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/surfbreak" element={<Surfbreak />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
