const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const authroute = require("./authroute.js");
// Requiring our custom middleware for checking if a user is logged in
//var isAuthenticated = require("../client/config/middleware/isAuthenticated");
// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app

router.use("/user", authroute);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});  

module.exports = router;
