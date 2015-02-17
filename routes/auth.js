var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('auth/index', { title: 'Authenication' });
});
router.get('/login', function(req, res, next) {
  res.send('respond with a login');
});
router.get('/register', function(req, res, next) {
  res.render('auth/register', { title: 'Register' });
});
router.post('/register', function(req, res, next) {
  console.log(req.body);
  res.redirect('/auth');
});
router.get('/logout', function(req, res, next) {
  res.send('respond with a logout');
});

module.exports = router;
