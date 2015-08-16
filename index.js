var gulp   = require('gulp');
var header = require('gulp-header');
var elixir = require('laravel-elixir');
var config = elixir.config;

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

    new elixir.Task('header', function () {

        var files = [
            config.get('public.js.outputFolder') + "/*.js",
            config.get('public.css.outputFolder') + "/*.css"
        ];

        return gulp.src(files, {base: './'})
            .pipe(header(banner, data))
            .pipe(gulp.dest('./'))
            .pipe(new elixir.Notification('Header Banner Added!'));

    });

});