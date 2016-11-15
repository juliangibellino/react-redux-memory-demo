'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence');

/**
 * @name _package
 * @method
 * @description
 * Builds source to distribution package and sets of change watches and local server
 *
 * @returns {object} The gulp task stream
 * @private
 */
function _dev(cb){
    return runSequence(['build'], ['watch'], cb);
}


/**
 * Gulp task responsible creating dev server
 * @module _dev
 */
module.exports = gulp.task('dev', _dev);