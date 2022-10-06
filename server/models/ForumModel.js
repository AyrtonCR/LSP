const mongoose = require("mongoose");
const { Schema } = mongoose;

const forumSchema = new Schema({
  forum_image: { type: String, required: true },
  forum_acc_name: { type: String, required: true },
  forum_acc_message: { type: String, required: true },
});

module.exports = mongoose.model("Forum", forumSchema);
