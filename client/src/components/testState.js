import { useState, useEffect } from "react";
const API_URL = process.env.REACT_APP_API_URL;
const PassState = () => {
  const [surfbreaks, setSurfbreaks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(`${API_URL}/surfbreaks`);
    const data = await response.json();
    console.log(data[0]);
    if (data[0] === undefined) {
      console.log("fetch error");
      console.log("loading is staying true, state will not be updated");
      setIsLoading(true);
    } else if (data[0] !== undefined) {
      setSurfbreaks(data);
      console.log("settings loading to false");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
};
export default PassState;
