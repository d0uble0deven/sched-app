var mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/${process.env.DATABASE_URL}`, {
  useNewUrlParser: true,
  useCreateIndex: true
});

module.exports = mongoose;


// var db = mongoose.connection;

// db.on('connected', function() {
//     console.log(`Mongoose connected to ${process.env.DATABASE_URL}`);
// });
