var mongoose = require('mongoose');

var db = function () {
    mongoose.connect('mongodb://localhost/passport');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback() {
      console.log('db connection open');
    });
};

module.exports = db();
