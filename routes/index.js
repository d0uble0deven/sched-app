var express = require('express');
var passport = require('passport');
var router = express.Router();
const Sched = require('../models/sched')

/* GET home page. */
router.get('/', function (req, res) {
  Sched.find({}, function (err, events) {
    if (err) res.send(err)
    res.render('scheds/index', {
      user: req.user,
      scheds: events
    });
  })
});



// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google', {
    scope: ['profile', 'email']
  }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google', {
    successRedirect: '/',
    failureRedirect: '/'
  }
));

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;