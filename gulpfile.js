var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var eslint = require('gulp-eslint');
var sass = require("gulp-sass"),
 autoprefixer = require("gulp-autoprefixer"),
 cssnano = require("gulp-cssnano"),
 rename = require("gulp-rename");


gulp.task('scripts', function(done) {
   return gulp
       .src(['./js/*.js', '!node_modules/**'])
       .pipe(eslint())
       .pipe(eslint.format())
       .pipe(eslint.failAfterError())
       .pipe(uglify())
       .pipe(rename({ extname: '.min.js' }))
       .pipe(gulp.dest('./build/js'));
});

gulp.task('js-watch', gulp.series('scripts'), function(done) {
   browserSync.reload();
   done();
});

gulp.task('sass', function(done) {
 return gulp
   .src('./scss/*.scss')
   .pipe(sass())
   .pipe(
     autoprefixer({
       browsers: ['last 2 versions']
     })
   )
   .pipe(cssnano())
   .pipe(rename('style.min.css'))
   .pipe(gulp.dest('./build/css'))
  .pipe(browserSync.stream());
});

gulp.task('serve', function() {
   browserSync.init({
       server: {
           baseDir: './'
       }
   });

   gulp.watch('js/*.js', gulp.series('js-watch'));
   gulp.watch('scss/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.parallel('serve'));
