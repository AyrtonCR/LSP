const mongoose = require("mongoose");
const { Schema } = mongoose;

const forecastSchema = new Schema({
  forecasts_name: { type: String, required: true },
  forecasts_image: { type: String, required: true },
  forecasts_info_1: { type: String, required: true },
  forecasts_info_2: { type: String, required: true },
});

module.exports = mongoose.model("Forecast", forecastSchema);
