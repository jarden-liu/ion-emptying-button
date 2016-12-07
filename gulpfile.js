var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


gulp.task('default',['uglify']);

gulp.task('uglify', function () {
  gulp.src('./ion-emptying-button.js')
  .pipe(uglify())
  .pipe(rename('ion-emptying-button.min.js'))
  .pipe(gulp.dest('.'))
});
