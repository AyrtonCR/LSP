const express = require("express");
const app = express();
const monogoose = require("mongoose");
const SurfbreakModel = require("./models/SurfbreakModel");

app.use(express.json());

app.get("/surfbreaks", async (request, response) => {
  const surfbreaks = await SurfbreakModel.find();
  return response.status(200).json(surfbreaks);
});

// app.get("/surfboards", async (request, response) => {
//   const surfbreaks = await SurfbreakModel.find();
//   return response.status(200).json(surfbreaks);
// });

// app.get("/forecasts", async (request, response) => {
//   const surfbreaks = await SurfbreakModel.find();
//   return response.status(200).json(surfbreaks);
// });

module.exports = app;
