var mongoose = require('mongoose');

var userModel = function () {
  var schema = mongoose.Schema({
    username: String,
    password: String
  });
  return mongoose.model('User', schema);
};

module.exports = new userModel();
