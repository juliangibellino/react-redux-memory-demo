'use strict';

var gulp = require('gulp');

/**
 * @name _compileAssets
 * @method
 * @description
 * Compiles assets from source and packages them to distribution
 *
 * @returns {object} The gulp task stream
 * @private
 */
function _compileAssets(){
    return gulp.src(config.paths.src.assets)
        .pipe(gulp.dest(config.paths.dist.assets));
}

/**
 * Gulp task responsible for compiling assets to distribution
 * @module compile-view
 */
module.exports = gulp.task('compile-assets', _compileAssets);
