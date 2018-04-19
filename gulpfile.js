var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    mincss = require('gulp-clean-css'),
    sequence = require('gulp-sequence'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('mincss', function() {
    return new Promise(function(resolve, reject) {
        return setTimeout(function() {
            return gulp.src('src/sass/*.scss')
                .pipe(sass())
                .on('error', function(e) {
                    return reject(e) && this.end();
                })
                .pipe(gulp.dest('dist/css'))
                .on('end', resolve)
        }, 500);
    }).catch(function(e) {
        return console.warn(e.messageFormatted);
    });
})

gulp.task('copycss', function() {
    gulp.src('src/scss/*.css')
        .pipe(gulp.dest('src/css'))
})

gulp.task('server', ['mincss'], function() {
    gulp.src('src')
        .pipe(webserver({
            host: 'localhost',
            port: '8888',
            open: true,
            livereload: true,
            middleware: function(req, res, next) {
                next()
            }
        }))
})


gulp.task('watch', function() {
    gulp.watch('src/scss/*.scss', ['mincss'])
})

gulp.task('default', ['mincss', 'copycss', 'server', 'watch'])