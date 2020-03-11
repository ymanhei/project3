const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
var passport = require("./client/config/passport");
var session = require("express-session");
var flash = require('connect-flash');

// Define middleware here
app.use(express.urlencoded({ extended: true, limit: '100mb' }));
app.use(express.json({ limit: '100mb' }));


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
// Add routes, both API and view
app.use(routes);
// Requiring our routes
/* require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app); */

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/welltoplist");

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
