var path = require('path');

/**
 * Configuration object for storing the source, distribution and output filename properties for application builds
 * @name config
 * @type {Object}
 */
global.config = {
    paths: {
        src: {
            path: './src',
            sass: './src/scss/**/*.scss',
            js: './src/js/**/*.js',
            jsx: './src/js/**/*.jsx',
            app: './src/js/app/index.js',
            view: './src/view/**/*',
            assets: './src/assets/**/*'
        },
        dist: {
            path: './dist/',
            css: './dist/resources/css',
            js: './dist/resources/js',
            assets: './dist/resources/assets'
        }
    },
    filenames: {
        build: {
            css: 'main.css',
            js: 'main.js'
        }
    }
};
