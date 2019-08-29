var Sched = require("../models/sched");
// var User = require('../models/user');

module.exports = {
  index,
  new: newSched,
  create,
  show,
  update,
  delete: deleteSched
};

function index(req, res) {
  Sched.find({}, function (Allscheds) {
    res.render("index", {
      scheds: Allscheds
    });
  });
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
    res.render("scheds/index", {
      scheds: [scheds],
      user: req.user,
    });
  });
}

function show(req, res) {
  Sched.findById(req.params.id, function (err, scheds) {
    res.render("scheds/show", {
      user: req.user,
      scheds: [scheds]
    });
  })
}


// function update(req, res) {
//   Sched.find(req.params.id, function (err, x) {
//       x.name = req.body.name,
//         x.date = req.body.date,
//         x.location = req.body.location,
//         x.details = req.body.details,
//         x.save().then(res.redirect('/'))
//     }),
//     function (err, sched) {
//       if (err) console.error(err);
//       res.redirect("scheds/index");
//     };
// }
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
      res.send(errr);
    }
    console.log(removed);
    res.redirect("/");
  });

}

// /scheds/ same thing as scheds/index ????