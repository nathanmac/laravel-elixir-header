var elixir = require('laravel-elixir');
var gulp = require('gulp');
var header = require('gulp-header');
var notify = require('gulp-notify');
var _ = require('underscore');

/*
 |----------------------------------------------------------------
 | Header/Banner
 |----------------------------------------------------------------
 |
 | Add a header message/banner to css/js files, in your public
 | directory.
 |
 */

elixir.extend('header', function(banner, data) {

    var config = this;

    var files = [
        config.jsOutput + "/*.js",
        config.cssOutput + "/*.css"
    ];

    gulp.task('header', function() {
        return gulp.src(files, {base: './'})
            .pipe(header(banner, data))
            .pipe(gulp.dest('./'))
            .pipe(notify({
                title: 'File Headers Added!',
                message: 'All resource files have been headed with header messages/banner.',
                icon: __dirname + '/../laravel-elixir/icons/pass.png'
            }));
    });

    return this.queueTask('header');

});