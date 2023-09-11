import React, { useState, useEffect } from "react";
const API_URL = process.env.REACT_APP_API_URL;
const SWELL_API_KEY = process.env.SWELL_DATA_API_KEY;

// Main Forum Data Local API Request //
const getMainApi = {
  getMainData: async () => await fetch(`${API_URL}/forum`),
};

const getSwells =
  // All Swells Array //
  {
    getNbSwell: async () =>
      // New Brighton Pier API Request //
      await fetch("https://api.niwa.co.nz/tides/data?lat=-43.50701147743817&long=172.7322249732018", {
        method: "get",
        dataType: "json",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-apikey": `${SWELL_API_KEY}`,
        },
      }),
  };

export { getMainApi, getSwells };
