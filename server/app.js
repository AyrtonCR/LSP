const express = require("express");
const app = express();
const mongoose = require("mongoose");
const SurfbreakModel = require("./models/SurfbreakModel");
const SurfboardModel = require("./models/SurfboardModel");
const ForecastModel = require("./models/ForecastModel");
const ForumModel = require("./models/ForumModel");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/surfbreaks", async (request, response) => {
  const surfbreaks = await SurfbreakModel.find();
  return response.status(200).json(surfbreaks);
});

app.get("/surfbreaks/:id", async (request, response) => {
  const { id } = request.params;

  if (mongoose.Types.ObjectId.isValid(id)) {
    const surfbreaks = await SurfbreakModel.findById(id);
    if (surfbreaks) {
      return response.status(200).send(surfbreaks);
    } else {
      return response
        .status(404)
        .send({ message: "The ID you are trying to access was not found" });
    }
  } else {
    return response.status(400).send({ message: "The ID provided is Invalid" });
  }
});

app.get("/surfboards", async (request, response) => {
  const surfboards = await SurfboardModel.find();
  return response.status(200).json(surfboards);
});

app.get("/forecasts", async (request, response) => {
  const forecasts = await ForecastModel.find();
  return response.status(200).json(forecasts);
});

app.get("/forum", async (request, response) => {
  const forum = await ForumModel.find();
  return response.status(200).json(forum);
});

// app.post("/forum", async (request, response) => {
//   const forum = await ForumModel.find();
//   return response.status(200).json(forum);
// });

module.exports = app;
