'use strict';
var e5o_gulp_task = {};

/* =============== start gulp file sass compiler =============== */

/* File: gulpfile.js */

// grab our packages
var gulp   = require('gulp');
var sass   = require('gulp-sass');

var scss_directory = '../public/back-end/scss/';
var css_directory = '../public/back-end/css/';

gulp.task('default', ['watch']);
// configure the jshint task
gulp.task('sass_compile', function() {
    console.log(" ======== e5o_backend_sass_compiler COMPILE FILE ======== ");
    return gulp.src(scss_directory+'*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(css_directory));
    //return gutil.log('Gulp is running!')
});
// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
    console.log(" ======== e5o_backend_sass_compiler WATCH DIRECTORY ======== ",scss_directory);
    gulp.watch(scss_directory+'*.scss', ['sass_compile']);
});

module.exports = e5o_gulp_task;
/* =============== end gulp file sass compiler =============== */

//module.exports = e5o_gulp_task;
