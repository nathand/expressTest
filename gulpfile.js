// Gulpfile.js
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');

gulp.task('lint', function () {
  gulp.src('./**/*.js')
    .pipe(jshint());
});

gulp.task('nodemon', function() {
  return nodemon({ script: 'app.js', ext: 'html js jade', ignore: [] })
    .on('change', ['lint'])
    .on('restart', [], function () {

      console.log('restarted!')
    });
});

gulp.task('develop', ['nodemon']);
