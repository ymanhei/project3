var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
var db = require("../../models");

passport.use(new LocalStrategy(
  function(username, password, done) {
    db.User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
          console.log("username is wrong");
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        console.log("password is wrong");
        return done(null, false, { message: 'Incorrect password.' });
      }
      console.log("TEST");
      return done(null, user);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
    cb(null, user);
  });
  
  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });

// Exporting our configured passport
module.exports = passport;