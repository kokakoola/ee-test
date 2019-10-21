var fileinclude = require('gulp-file-include'),
  gulp = require('gulp');

gulp.task('fileinclude', function (done) {
  gulp.src(['partials/index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
  done();
})
// gulp.task('watch', function () {
//   gulp.watch('partials/index.html', ['fileinclude']);
// });
;
