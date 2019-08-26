var express = require('express');
var router = express.Router();
var schedsCtrl = require('../controllers/scheds');

/* GET users listing. */
router.get('/scheds', schedsCtrl.new);



function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;
