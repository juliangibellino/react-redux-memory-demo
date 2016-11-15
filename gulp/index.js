'use strict';

var requireDir = require('require-dir');

//global config
require('./config');

// build and run tasks
requireDir('./build');
requireDir('./tasks');