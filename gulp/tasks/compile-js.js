'use strict';

var argv = require('yargs').argv;
var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var path = require('path');
var glob = require('glob');


var vendorList = ['babel-polyfill', 'lodash', 'react', 'react-dom', 'redux', 'react-redux'];

/**
 * @name _compileJS
 * @method
 * @description
 * Compiles the JS app modules by retrieving the app files and bundling apps with webpack
 * to distribute to the distribution target
 *
 * Note: to minify and uglify the bundles the `--prod` flag can be used when executing the task
 *
 * @returns {object} The gulp task stream
 * @private
 */
function _compileJS(callback) {
    var isProd = !!argv.prod;

    var webpackConfig = {
        entry: {
            app: config.paths.src.app,
            vendor: vendorList
        },
        output: {
            path: config.paths.dist.js,
            publicPath: '/js/',
            filename: "[name].bundle.js",
            chunks: "[id].chunk.js",
            sourceMapFilename: "[file].map"
        },
        resolve: {
            root: path.resolve(config.paths.src.path + '/js'),
            extensions: ['', '.js', '.jsx']
        },
        module: {
            loaders: [
                {
                    test: /(.js?$)|(.jsx?$)/,
                    exclude: /(node_modules)/,
                    loader: 'babel-loader',
                    query: {
                        presets: [
                            [
                                "es2015",
                                {
                                    "loose": true,
                                    "modules": false
                                }
                            ],
                            "react"
                        ],
                        plugins: [
                            [
                                "transform-es2015-modules-commonjs",
                                {
                                    "allowTopLevelThis": true
                                }
                            ],
                            "transform-object-rest-spread"
                        ]
                    }
                }
            ]
        },
        devtool: "source-map",
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                // The order of this array matters
                names: ["common", "vendor"],
                minChunks: 2
            }),
            //Set node env variable
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify( isProd ? "production" : "development" )
            })
        ]
    };

    if(isProd) {
        //Compress and uglify bundles
        webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }));
    }

    // run webpack
    webpack(
        webpackConfig,
        function(err, stats) {
            if(err) throw new gutil.PluginError("webpack", err);
            /*gutil.log("[webpack]", stats.toString({
             // output options
             }));*/
            callback();
        }
    );
}

/**
 * Gulp task responsible for compiling js to distribution
 * @param {string} --prod Indicator for if the build is for production. By default it will run as a dev build
 * @task compile-js
 */
module.exports = gulp.task('compile-js', ['lint-js'], _compileJS);
