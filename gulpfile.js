var gulp = require('gulp');
var del = require('del');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var newer = require('gulp-newer');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');

dir = {
    src: 'app/',
    build: 'dist/',

    img_src: 'app/images/*',
    img_build: 'dist/',

    minOpts: {
        optimizationLevel: 1,
        interlaced: true
    }
};

gulp.task('clean', () => del('dist/'));
gulp.task('browser-sync', () => browserSync.init({server: {baseDir: "dist"}}));
gulp.task('copy-json', () => gulp.src(dir.src + 'data/*').pipe(gulp.dest(dir.build + 'data')));
gulp.task('copy-html', () => gulp.src(dir.src + 'index.html').pipe(gulp.dest(dir.build)));
gulp.task('copy-sprites', () => gulp.src(dir.img_src).pipe(gulp.dest(dir.img_build)));
gulp.task('js', function () {
    return gulp.src(dir.src + 'js/**.*')
        .pipe(jshint())
        .pipe(jshint.reporter())
        .pipe(sourcemaps.init())
        .pipe(concat('concat.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('index.js'))
        .pipe(uglify('index.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
});
gulp.task('sass', () =>
    gulp.src(dir.src + "scss/*.scss")
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(sourcemaps.init())
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dir.build))
        .pipe(browserSync.reload({
            stream: true
        }))
);

gulp.task('watch', () => {
    gulp.watch(dir.src + "scss/*.scss", gulp.series('sass')).on('change', browserSync.reload);
    gulp.watch(dir.src + "data/*.json", gulp.series('copy-json')).on('change', browserSync.reload);
    gulp.watch(dir.src + "js/*", gulp.series('js')).on('change', browserSync.reload);
    gulp.watch(dir.src + "index.html", gulp.series('copy-html')).on('change', browserSync.reload);
});

gulp.task('default',
    gulp.series('clean', 'copy-json', 'copy-html', 'js', 'copy-sprites',
        gulp.parallel('browser-sync', 'sass', 'watch'))
);