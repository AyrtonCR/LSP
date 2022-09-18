const mongoose = require("mongoose");
const { Schema } = mongoose;

const surfboardSchema = new Schema({
  surfboard_strength: { type: String, required: true },
  surfboard_description: { type: String, required: true },
  surfboard_image: { type: String, required: true },
});

module.exports = mongoose.model("Surfboard", surfboardSchema);
