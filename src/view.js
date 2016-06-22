"use strict";

var $ = require('jQuery');
var catOptions = require('../views/catOptions.jade');

var view = {};

view.loadCatSelect = function(data) {
	console.log(data);
	$('#acmeCatsSelect').empty();
	$('#acmeCatsSelect').append(catOptions({ cat: data.categories }))
};

module.exports = view;