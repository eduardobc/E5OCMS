'use strict';
var e5o_file_name = "e5o-mongodb-connect.js - ";
var e5o_mongoose = require('mongoose');
e5o_mongoose.connect('mongodb://localhost/e5o_cms');

module.exports = e5o_mongoose;
