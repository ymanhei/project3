// Requiring our models and passport as we've configured it
const router = require("express").Router();
var passport = require("passport");
const login = require ('../client/src/components/utils');

/* router.post('/login', (req, res,next) => {
    passport.authenticate('local', function (err, user, info) {      
        if (err) {
            return res.status(401).json(err);
        }
        if (user) {
            login.login();
        } else {
            res.status(401).json(info);
        }
    })(req, res, next)
}) */
// Matches with "/login"
router.route("/login")
  .post(passport.authenticate('local', { successRedirect: '/welltops',
  failureRedirect: '/',
  failureFlash: true }));

/*   .post(passport.authenticate('local', function(err,user) {
    if (err) { return err }
    if (!user) { return user.redirect('/'); }
  
})
  ); */




  router.route("/logout")
  .get((req, res, next) => {
    if (req.session) {
      req.logout();
      req.session.destroy((err) => {
        if (err) {
          console.log(err);
        } else {
          res.clearCookie('session-id');
          res.json({
            message: 'You are successfully logged out!'
          });
        }
      });
    } else {
      var err = new Error('You are not logged in!');
      err.status = 403;
      next(err);
    }
  });

module.exports = router;