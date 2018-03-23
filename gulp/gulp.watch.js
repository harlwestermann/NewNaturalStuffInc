var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('watch', ['default'], function(){
  browserSync.init({
    notify: false,
    server: {
      baseDir: './dist/client'
    }
  });
  gulp.watch('./src/client/styles/**/*.css', ['css']);
  gulp.watch('./src/client/pug/**/*.pug', ['pug']);
  gulp.watch('./src/client/js/**/*.js', ['js']);
  gulp.watch('./dist/client/*.html', function(){
    browserSync.reload();
  });
  gulp.watch('./dist/js/*.js', function(){
    browserSync.reload();
  });
});
