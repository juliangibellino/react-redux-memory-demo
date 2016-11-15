'use strict';

var del = require('del'),
    gulp = require('gulp');

/**
 * @name _clean
 * @method
 * @description
 * Deletes the distribution packages directory and contents
 *
 * @returns {object} The gulp task stream
 * @private
 */
function _clean(){
    return del([config.paths.dist.css, config.paths.dist.js]);
}

/**
 * Gulp task responsible for cleaning out the distribution directory
 * @module clean
 */
module.exports = gulp.task('clean', _clean);
