var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('auth/index', { title: 'Authenication' });
});
router.get('/login', function(req, res, next) {
  res.render('auth/login', { title: 'Login' });
});
router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});
router.get('/register', function(req, res, next) {
  res.render('auth/register', { title: 'Register' });
});
router.post('/register', function(req, res, next) {
  console.log(req.body);
  User.register(new User({ username: req.body.username}), req.body.password, function(err, account) {
    if (err) {
      res.send('failed to authenticate');
      res.redirect('/auth');
    }
    passport.authenticate('local')(req, res, function() {
      res.redirect('/');
    });
  });
});
router.get('/logout', function(req, res, next) {
  res.send('respond with a logout');
});

module.exports = router;
