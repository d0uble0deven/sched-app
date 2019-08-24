var express = require('express');
var router = express.Router();
var schedsCtrl = require('../controllers/scheds');

/* GET users listing. */
router.get('/scheds', schedsCtrl.new);

module.exports = router;
