var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var eslint = require('gulp-eslint');
var sass = require("gulp-sass"),
 autoprefixer = require("gulp-autoprefixer"),
 cssnano = require("gulp-cssnano");
var concat = require("gulp-concat");
//image optimisation and resizing npms
// var image = require("gulp-image");
// var imageresize = require("gulp-image-resize");


gulp.task('scripts', function(done) {
   return gulp
       .src(['./js/*.js' , '!node_modules/**'])
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
   .pipe(concat('style.min.css'))
   .pipe(gulp.dest('./build/css'))
  .pipe(browserSync.stream());
});
//images optimisation for future projects
// gulp.task('image', function (done) {
//   return gulp
//   .src('./assets/img/*')
//   .pipe(imageresize({
//       width : 640,
//       height : 640,
//       crop : true,
//       upscale : false
//     }))
//     .pipe(image())
//     .pipe(gulp.dest('./build/img'));
// });

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
