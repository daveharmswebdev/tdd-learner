"use strict";

var model = require('../src/model');
var $ = require('jQuery');

$('#acmeCatsSelect').on('click', model.load);