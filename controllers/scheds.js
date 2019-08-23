var Sched = require('../models/sched');

module.exports = {
    index,
};

function index(res, res) {
    Sched.find({}, function(err, scheds) {
        res.render('scheds/index');
    });
}