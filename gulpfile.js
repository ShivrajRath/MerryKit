/**********************************************************
Merry Kit Software Pvt Limited
Author: Shivraj Rath
Description: Build rules for the project
***********************************************************/

var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  beautify = require('gulp-beautify');

// Common project paths
var paths = {
  'src': ['./server.js', './app/**/*.js', './public/**/*.js'],
  'tests': ['./test/**/*.js']
};

/**
 * Gulp Tasks
 */

// lint source with jshint
gulp.task('lint', function() {
  return gulp.src(paths.src)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// beautify javascript
gulp.task('beautify', function() {
  gulp.src(paths.src)
    .pipe(beautify({
      indentSize: 2
    }))
    .pipe(gulp.dest('./public/'))
});

gulp.task('default', ['lint']);
