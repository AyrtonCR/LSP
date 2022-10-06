const port = process.env.PORT || 5001;
const app = require("./app");
const mongoose = require("mongoose");

const mongoDbUri =
  process.env.MONGO_URI ||
  "mongodb://surfing:rocks@localhost:27017/lspDatabase";
mongoose.connect(mongoDbUri, {
  family: 4,
});

app.listen(port, () => {
  console.log(`API server started at http://localhost:${port}`);
});
