const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true, limit: '100mb' }));
app.use(express.json({ limit: '100mb' }));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/welltoplist");
mongoose.connect("mongodb+srv://admin:admin@cluster0-eg6gd.mongodb.net/welltoplist?retryWrites=true&w=majority")
//const conn2 = mongoose.createConnection(process.env.MONGODB_URI || "mongodb://localhost/wtSource");
//const conn1 = mongoose.createConnection(process.env.MONGODB_URI || "mongodb://localhost/welltoplist");

//console.log(conn2);
//Repopulate all the data 
//const seedDB2 = require("./scripts/seedDB2");
//const seedDB = require("./scripts/seedDB");


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
