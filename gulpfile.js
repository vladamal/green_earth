var gulp        = require('gulp');
var del         = require('del');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var newer       = require('gulp-newer');
var imagemin    = require('gulp-imagemin');
var size        = require('gulp-size');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var minify      = require('gulp-minify-css');
var autoprefixer= require('gulp-autoprefixer');

dir = {
  src         : 'app/',
  build       : 'dist/',

  img_src     : 'app/images/**/*.*',
  img_build   : 'dist/images/',

  minOpts: {
    optimizationLevel: 1,
    interlaced: true
  }
}

gulp.task('clean',        () => del('dist/'));
gulp.task('browser-sync', () => browserSync.init({ server: { baseDir: "dist" } }));
gulp.task('copy-json',    () => gulp.src(dir.src + 'data/*').pipe(gulp.dest(dir.build + 'data')));
gulp.task('copy-html',    () => gulp.src(dir.src + 'index.html').pipe(gulp.dest(dir.build)));
gulp.task('copy-js',      () => 
  gulp.src(dir.src + 'js/**.*')
    .pipe(concat('index.js'))
    .pipe(uglify())
    .pipe(gulp.dest(dir.build))
);
gulp.task('imagemin', () =>
  gulp.src(dir.img_src)
    .pipe(newer(dir.img_build))
    .pipe(imagemin(dir.minOpts))
    .pipe(size({ showFiles:true }))
    .pipe(gulp.dest(dir.img_build))
);
gulp.task('sass', () => 
  gulp.src(dir.src + "scss/*.scss")
    .pipe(sass())
    .pipe(concat('styles.css'))
    .pipe(autoprefixer())
    .pipe(minify())
    .pipe(gulp.dest(dir.build + "css"))
    .pipe(browserSync.reload({
      stream: true
    }))
);

gulp.task('watch', () => {
  gulp.watch(dir.src + "scss/*.scss", gulp.series('sass')).on('change', browserSync.reload);
  gulp.watch(dir.src + "data/*.json", gulp.series('copy-json')).on('change', browserSync.reload);
  gulp.watch(dir.src + "js/*", gulp.series('copy-js')).on('change', browserSync.reload);
  gulp.watch(dir.src + "index.html", gulp.series('copy-html')).on('change', browserSync.reload);
});

gulp.task('default', gulp.series('clean','copy-json', 'copy-html', 'copy-js', 'imagemin', gulp.parallel('browser-sync', 'sass', 'watch')));