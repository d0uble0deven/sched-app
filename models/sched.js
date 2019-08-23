var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schedSchema = new Schema ({
    name: String,
    date: Date,
    details: String,
    location: String,
    googleId: String
}, {
    timestamps: true
  });

module.exports = mongoose.model('Sched', schedSchema);