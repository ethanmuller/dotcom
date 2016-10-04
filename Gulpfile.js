var gulp = require('gulp');

// Right now, this is only copying
// static files into the build directory.
// Eventually I'll reverse engineer this to build
// from sass, partials, etc.
gulp.task('default', function() {
  return gulp.src('src/**/*')
    .pipe(gulp.dest('build/'));
});
