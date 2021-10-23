var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var sourcemaps = require('gulp-sourcemaps');
const broswerSync = require('browser-sync').create();


// Compile Sass into Css
function style(){
    return gulp.src("./scss/**/**.scss")
    .pipe(sourcemaps.init())
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./css'))
    .pipe(broswerSync.stream());
}

function watch(){
    broswerSync.init({
        server:{
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/**.scss', style);
    gulp.watch('./**.html', style).on('change',broswerSync.reload);
    gulp.watch('./js/**.js').on('change',broswerSync.reload);
}

exports.style = style;
exports.watch = watch;