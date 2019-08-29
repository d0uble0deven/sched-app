var Sched = require('../models/sched');
// var User = require('../models/user');

module.exports = {
    index,
    new: newSched,
    create,
    show,
    update
};


function index(req, res) {
  Sched.find({}, function(Allscheds) {
    res.render('index', {
      scheds:Allscheds,
    });
    });
  };


  function newSched(req, res) {
    res.render('scheds/new');
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


  function show(req, res) {
    res.render('scheds/show');
  }


  function update(req, res, next) {
    let { Sched } = req.body
    Sched.findByIdAndUpdate(req.params.id, {   
      scheds: [scheds],
      user: req.user,
      name: req.name,
      date: req.date,
      location: req.location,
      details: req.details,
    }, function(err, sched ){
        if(err) console.error(err);
        res.redirect(`/scheds/${sched._id}`);
    });
}


function deleteSched(req, res, next) {
  Sched.findByIdAndRemove(req.params.id, function(err){
      Sched.remove();
  });
  res.redirect('/scheds');
}