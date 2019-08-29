var Sched = require('../models/sched');
// var User = require('../models/user');

module.exports = {
    index,
    show,
    create
};


//index
function index(req, res) {
  Sched.find({}, function(Allscheds) {
    res.render('index', {
      scheds:Allscheds,
    });
    });
  };


  function show(req, res) {
    res.render('scheds/show');
    console.log(name);
  }


  function create(req, res) {
  console.log(req.body);
    var scheds = new Sched(req.body);
    scheds.save(function(err) {
      if (err) return res.send(err);
      console.log(scheds);
      res.render('scheds/index',{
        scheds: [scheds],
        user: req.user,
        name: req.name,
        date: req.date,
        location: req.location,
        details: req.details,
      }
      );
    });
  }
