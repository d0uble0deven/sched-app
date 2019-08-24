var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL,
    {
        useNewUrlParser: true,
    }
);
//above object is not necessary

mongoose.connect(`mongodb://localhost/${process.env.DATABASE_URL}`, {
  useNewUrlParser: true,
  useCreateIndex: true
});

module.exports = mongoose;


// var db = mongoose.connection;

// db.on('connected', function() {
//     console.log(`Mongoose connected to ${process.env.DATABASE_URL}`);
// });
