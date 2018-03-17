var gulp = require('gulp'),
    uglify = require("gulp-uglify"),
    order = require("gulp-order"),
    concat = require('gulp-concat');

gulp.task('js', function() {
  return gulp.src('./src/client/js/**/*.js')
    .pipe(order([
      "jquery-3.3.1.js",
      "poper.js",
      "boostrap.js",
      "all.js"
    ]))
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./dist/client/js/'));
});
