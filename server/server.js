
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://auth-user:auth-password@lsp.slfpy.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});





// const port = process.env.PORT || 5001;
// const app = require("./app");
// const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://auth-user:auth-password@lsp.slfpy.mongodb.net/lsp?retryWrites=true&w=majority", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // This is the old connection for local database //
// // mongodb://surfing:rocks@mongo:27017/lsp?authSource=admin //

// app.listen(port, () => {
//   console.log(`API server started at http://localhost:${port}`);
// });
