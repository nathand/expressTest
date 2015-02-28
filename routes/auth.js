var passport = require('passport');
var User = require('../models/user');

module.exports = function(router) {

  /* GET users listing. */
  router.get('/', function(req, res, next) {
    if (req.isAuthenticated()) {
      return res.render('auth/index', { title: 'Authenticated', isAuth: true, user: req.user.username });
    }
    res.render('auth/index', { title: 'Authenicate', isAuth: false });
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
    User.register(new User({ username: req.body.username}), req.body.password, function(err, account) {
      if (err) {
        res.redirect('/auth');
      }
      passport.authenticate('local')(req, res, function() {
        res.redirect('/');
      });
    });
  });
  router.get('/logout', function(req, res, next) {
    req.logout();
    res.send('respond with a logout');
  });

}
