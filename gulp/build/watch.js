'use strict';

var gulp = require('gulp');

/**
 * @name _watchDev
 * @method
 * @description
 * Set up gulp watchers for the html, js and sass, and when any files change rebuild the package
 * @private
 */
function _watchDev(){
    gulp.watch(config.paths.src.sass, ['compile-sass']);
    gulp.watch([config.paths.src.js, config.paths.src.jsx], ['compile-js']);
    gulp.watch([config.paths.src.view], ['compile-view']);
}

/**
 * Gulp task responsible for watching the sass, JS and HTML and when any files change, rebuild the package
 * @module watch
 */
module.exports = gulp.task('watch', _watchDev);
