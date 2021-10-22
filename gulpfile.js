var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
const broswerSync = require('browser-sync').create();


// Compile Sass into Css
function style(){
    return gulp.src("./scss/**/**.scss")
    .pipe(sass().on('error', sass.logError))
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