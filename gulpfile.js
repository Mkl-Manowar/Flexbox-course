var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('serve', function() {
  browserSync.init({
    reloadDelay: 1000,
    server: {
      baseDir: "./"
    }
  });

  gulp.watch("*.html").on("change", reload);
});