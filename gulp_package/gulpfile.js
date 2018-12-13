var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var pug = require('gulp-pug');

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './',
            index: 'index.html'
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('pug', () => {
  return gulp.src(['*.pug'])
  .pipe(pug({ pretty: true }))
  .pipe(gulp.dest('./'));
});

gulp.task('sass', function() {
    gulp.src('stylesheet/**/*scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./stylesheet'))
        .pipe(browser.reload({
          stream:true
        }));
});

gulp.task('default', ['browser-sync'], function () {
  gulp.watch('index.html', ['bs-reload']);
  gulp.watch('stylesheet/*.css', ['bs-reload']);
  gulp.watch('index.pug', ['pug']);
  gulp.watch('stylesheet/**/*.scss', ['sass']);
});
