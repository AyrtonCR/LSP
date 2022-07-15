const mongoose = require("mongoose");
const { Schema } = mongoose;

const surfbreaksSchema = new Schema({
  surfbreak_image: { type: String, required: true },
  surfbreak_title: { type: String, required: true },
  surfbreak_blurb: { type: String, required: true },
  surfbreak_button: { type: String, required: true },
});

module.exports = mongoose.model("Surfbreaks", surfbreaksSchema);
// FIXME: Add a Mongoose model here
