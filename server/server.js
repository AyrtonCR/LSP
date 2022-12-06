const port = process.env.PORT || 5001;
const app = require("./app");
const mongoose = require("mongoose");

// This is the old connection for local database //
mongoose.connect("mongodb://surfing:rocks@mongo:27017/lsp?authSource=admin", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// This is the connection to the hosted Mongo Atlas Database //
// mongodb+srv://auth-user:auth-password@lsp.slfpy.mongodb.net/lsp?retryWrites=true&w=majority //

app.listen(port, () => {
  console.log(`API server started at http://localhost:${port}`);
});
