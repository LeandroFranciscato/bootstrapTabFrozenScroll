var gulp = require('gulp');
var gutil = require('gulp-util');
var minifyCSS = require('gulp-csso');
var uglify = require('gulp-uglify');
var pump = require('pump');
var rename = require('gulp-rename');

gulp.task('js', function (cb) {
    pump([
        gulp.src('src/js/**/*.js'),
        uglify(),
        rename({suffix: '.min'}),
        gulp.dest('build/js')
    ], cb);
});

gulp.task('css', function () {
    return gulp.src('src/css/**/*.css')
            .pipe(minifyCSS())
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('build/css'));
});

gulp.task('build', ['js', 'css']);
