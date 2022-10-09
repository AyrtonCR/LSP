const port = process.env.PORT || 5001;
const app = require("./app");
const mongoose = require("mongoose");

mongoose.connect("mongodb://surfing:rocks@mongo:27017/lsp?authSource=admin", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// mongodb://surfing:rocks@localhost:27017/?authMechanism=DEFAULT
app.listen(port, () => {
  console.log(`API server started at http://localhost:${port}`);
});
