var express = require('express');
var passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('scheds/index', {user: req.user});
});

 // Google OAuth login route
 router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

 // Google OAuth callback route
 router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/user',
    failureRedirect : '/user'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/user');
});

module.exports = router;
