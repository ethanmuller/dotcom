var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var cssnext = require('postcss-cssnext');
var atImport = require('postcss-import');
var cssnano = require('cssnano');

// Right now, this is only copying
// static files into the build directory.
// Eventually I'll reverse engineer this to build
// from sass, partials, etc.
gulp.task('default', ['static', 'styles']);

gulp.task('static', function() {
  return gulp.src('src/static/**/*')
  .pipe( gulp.dest('build/') );
});

gulp.task('styles', function() {
  var cssnextOptions = {
    browsers: ['last 1 version'],
    // because cssnano includes autoprefixer
    warnForDuplicates: false
  }

  var processors = [
    atImport,
    cssnext(cssnextOptions),
    cssnano
  ];

  return gulp.src('src/styles/**/*.css')
  .pipe( sourcemaps.init() )
  .pipe( postcss(processors) )
  .pipe( sourcemaps.write('.') )
  .pipe( gulp.dest('build/css/') );
});
