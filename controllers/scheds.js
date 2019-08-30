var Sched = require("../models/sched");
var rootURL = "https://some-random-api.ml/facts/panda";
var request = require('request');

module.exports = {
  index,
  new: newSched,
  create,
  show,
  update,
  delete: deleteSched
};

//correct API call
function index(req, res) {
  request(rootURL, (err, response, fact) => {
    var panda = JSON.parse(fact)
    Sched.find({}, function (err, Allscheds) {
      console.log(Allscheds)
      res.render("scheds/index", {
        user: req.user,
        scheds: Allscheds,
        panda
      });
      console.log(panda);
    });
  })
}

function newSched(req, res) {
  res.render("scheds/new");
  console.log(name);
}

function create(req, res) {
  console.log(req.body);
  var scheds = new Sched(req.body);
  scheds.save(function (err) {
    if (err) return res.send(err);
    console.log(scheds);
    res.redirect("/");
  });
}



function show(req, res) {
  Sched.findById(req.params.id)
    .exec(function (err, sched) {
      console.log(sched)
      res.render("scheds/show", {
        user: req.user,
        sched
      });
      console.log(sched)
    });
}

function update(req, res) {
  Sched.findByIdAndUpdate(req.params.id, req.body, (updatedSched) => {
    console.log(req.params.id, req.body, "is this is the stuff I am editing?")
    res.redirect('/')
  })
}

function deleteSched(req, res) {
  Sched.findByIdAndRemove(req.params.id, function (err, removed) {
    if (err) {
      console.error(err);
      res.send(err);
    }
    console.log(removed);
    res.redirect("/");
  });

}