var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema ({
  name: String,
  email: String,
  googleId: String
}, {
  timestamps: true
});

var schedSchema = new mongoose.Schema ({
    name: String,
    date: Date,
    location: String,
    details: String
}, {
    timestamps: true
  });

module.exports = mongoose.model('Sched', schedSchema);