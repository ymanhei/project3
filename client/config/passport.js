var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
var db = require("../../models");

console.log("PASSPORT.JS");

passport.use(new LocalStrategy(
  function(username, password, done) {
    db.User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

// Exporting our configured passport
module.exports = passport;