'use strict';

var gulp = require('gulp'),
    server = require('gulp-server-livereload');

/**
 * @name _createServer
 * @method
 * @description
 * Creates a local server for development
 *
 * @returns {object} The gulp task stream
 * @private
 */
function _createServer(){
    return gulp.src('dist')
        .pipe(server({
            livereload: true,
            open: true
        }));
}

/**
 * Gulp task responsible for creating a local server for development
 * @module serve
 */
module.exports = gulp.task('serve', _createServer);
