module.exports = function(router) {
  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
  router.get('/about', function(req, res, next) {
    res.send('respond with about');
  });
  router.get('/contact', function(req, res, next) {
    res.send('respond with contact');
  });
}
