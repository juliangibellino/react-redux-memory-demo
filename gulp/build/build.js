'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    argv = require('yargs').argv;

/**
 * @name _build
 * @method
 * @description
 * Cleans distribution and builds new package
 *
 * @returns {object} The gulp task stream
 * @private
 */
function _build(cb){
    return runSequence(
        ['compile-sass', 'compile-js', 'compile-view', 'compile-assets'],
        cb
    );
}

/**
 * Gulp task responsible for building the full distribution package
 * @param {string} --prod Indicator for if the build is for production and should compress output. By default it will run as a dev build
 * @module build
 */
module.exports = gulp.task('build', _build);
