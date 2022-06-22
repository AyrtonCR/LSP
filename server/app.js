const express = require("express");
const app = express();

app.use(express.json());

app.get("./surfbreaks", async (request, response) => {
  const surfbreaks = await SurfbreakModel.find({});
  return response.status(200).json(surfbreaks);
});
