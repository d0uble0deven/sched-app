var Sched = require('../models/sched');

module.exports = {
    index,
    create
};

function index(res, res, next) {
    console.log(req.query)
    // Make the query object to use with Student.find based up
    // the user has submitted the search form or now
    let modelQuery = req.query.date;
    // Default to sorting by name
    let sortKey = req.query.sort || 'date';
    Student.find(modelQuery)
    .sort(sortKey).exec(function(err, scheds) {
      if (err) return next(err);
      // Passing search values, name & sortKey, for use in the EJS
      res.render('scheds/index', {
        scheds,
        name: req.name,
        date: req.date,
        location: req.location,
        details: req.details,
        sortKey
      });
    });
  }
    

function create(res, res) {
    console.log({...req.body})
    // convert nowShowing's checkbox of nothing or "on" to boolean
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    var sched = new Sched(req.body);
    sched.save(function(err) {
      if (err) return res.send(err);
      console.log(sched);
      res.redirect('scheds/create');
    });
  }
