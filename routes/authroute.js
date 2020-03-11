// Requiring our models and passport as we've configured it
const router = require("express").Router();
var passport = require("../client/config/passport");


// Matches with "/login"
router.route("/login")
/*   .post(passport.authenticate('local', { successRedirect: '/welltops',
  failureRedirect: '/welltops',
  failureFlash: true })); */

  .post(passport.authenticate('local'), function(req, res) {
    //res.json(req.user);
    //res.redirect("/welltops");
    console.log("THIS IS A TEST");
  });

module.exports = router;