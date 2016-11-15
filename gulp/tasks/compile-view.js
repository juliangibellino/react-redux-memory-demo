'use strict';

var gulp = require('gulp');

/**
 * @name _compileView
 * @method
 * @description
 * Compiles view from source and packages them to distribution
 *
 * @returns {object} The gulp task stream
 * @private
 */
function _compileView(){
    return gulp.src(config.paths.src.view)
        .pipe(gulp.dest(config.paths.dist.path));
}

/**
 * Gulp task responsible for compiling assets to distribution
 * @module compile-view
 */
module.exports = gulp.task('compile-view', _compileView);
