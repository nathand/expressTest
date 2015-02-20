var mongoose = require('mongoose');
var passport = require('passport-local-mongoose')

var userModel = function () {
  var schema = mongoose.Schema({
    username: String,
    password: String
  });
  schema.plugin(passport);
  return mongoose.model('User', schema);
};

module.exports = new userModel();
