var eslint = require('gulp-eslint');
var gulp   = require('gulp');

/**
 * @name _lint
 * @method
 * @description
 * Lint JS for errors
 *
 * @returns {object} The gulp task stream
 * @private
 */
function _lint() {
    return gulp.src([config.paths.src.js, config.paths.src.jsx])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

/**
 * Gulp task responsible linting JS
 * @module lint
 */
module.exports = gulp.task('lint-js', _lint);
