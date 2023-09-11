import React, { useState, useEffect, useRef } from "react";
import { formatDate } from "../utils/formatDate";
import forumApiRequests from "./forumApiRequests";

const NBSwellReturn = () => {
  const [swellLoading, setSwellLoading] = useState(false);
  const [nbApiData, setNbApiData] = useState([]);

  const fetchSwellData = async () => {
    setSwellLoading(true);
    const response = await forumApiRequests.getNbSwell();
    if (response.ok) {
      const data = await response.json();
      setNbApiData(data);
      console.log("Checking Swell Fetch");
      console.log(data);
      setSwellLoading(false);
    }
  };

  useEffect(() => {
    fetchSwellData();
  }, []);

  if (swellLoading === false)
    return (
      <>
        <p>{formatDate(nbApiData.values[3].time)}</p>
        <p> Low Tide: {nbApiData.values[3].value}M</p>
        <p>{formatDate(nbApiData.values[4].time)}</p>
        <p> High Tide: {nbApiData.values[4].value}M</p>
      </>
    );
  else if (swellLoading === true)
    return (
      <>
        <p>Swell data loading ..</p>
      </>
    );
  return NBSwellReturn();
};

export { NBSwellReturn };
