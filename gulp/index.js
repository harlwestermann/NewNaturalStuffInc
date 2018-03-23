var gulp = require('gulp');

require('./pug.task');
require('./style.task');
require('./js.task');

require('./gulp.watch');

gulp.task('default', ['pug', 'css', 'js']);
