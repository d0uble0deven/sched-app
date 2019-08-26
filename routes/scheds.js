var express = require('express');
var router = express.Router();
var schedsCtrl = require('../controllers/scheds');

router.get('/new', schedsCtrl.new);
// router.post('/', schedsCtrl.create);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;
