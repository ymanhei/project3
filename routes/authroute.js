// Requiring our models and passport as we've configured it
const router = require("express").Router();
var passport = require("passport");

// Route for "/login"
router.route("/login")
  .post(passport.authenticate('local', { successRedirect: '/welltops',
  failureRedirect: '/',
  failureFlash: true }));

module.exports = router;