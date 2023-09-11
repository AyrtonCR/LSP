const API_URL = process.env.REACT_APP_API_URL;
const SWELL_API_KEY = process.env.SWELL_DATA_API_KEY;

const api = {
  // Main Forum Data Local API Request //
  getMainData: async () => await fetch(`${API_URL}/forum`),

  // New Brighton Pier API Request //
  getNbSwell: async () =>
    await fetch("https://api.niwa.co.nz/tides/data?lat=-43.50701147743817&long=172.7322249732018", {
      method: "get",
      dataType: "json",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-apikey": `${SWELL_API_KEY}`,
      },
    }),

  // getProducts: async (limit, page) =>
  //   await fetch(
  //     `${process.env.REACT_APP_API_URL}/products?limit=${limit}&page=${page}`
  //   ),
  // getReports: async (accessToken) =>
  //   await fetch(`${process.env.REACT_APP_API_URL}/reports`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   }),
};

export default api;
