'use strict';

var argv = require('yargs').argv,
    del = require('del'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    sprity = require('sprity'),
    rename = require('gulp-rename');


/**
 * @name _compileCSS
 * @method
 * @description
 * Compiles and processes Sass modules and packages them to distribution
 *
 * @returns {Promise} Promise object that resolves when task is completed
 * @private
 */
function _compileCSS() {
    var isProd = argv.prod,
        sassOptions = {
            outputStyle: isProd ? 'compressed' : 'expanded',
            sourceMap: true
        };

    return gulp.src([config.paths.src.sass])
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(rename(config.filenames.build.css))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.paths.dist.css));

}

/**
 * Gulp task responsible for compiling sass to distribution
 * @param {string} --prod Indicator for if the build is for production. By default it will run as a dev build
 * @module compile-sass
 */
module.exports = gulp.task('compile-sass', _compileCSS);
