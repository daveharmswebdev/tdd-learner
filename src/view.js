"use strict";

var $ = require('jQuery');
var catOptions = require('../views/catOptions.jade');
var typeOptions = require('../views/typeOptions.jade');
var model = require('../src/model');

var view = {};

view.loadCatSelect = function(data) {
	console.log(data);
	$('#acmeCatsSelect').empty();
	$('#acmeCatsSelect').append(catOptions({ cat: data.categories }));
};

view.loadType = (data) => {
	console.log(data);
	$('#acmeTypeSelect').empty();
	$('#acmeTypeSelect').append(typeOptions({data: data}));
};

module.exports = view;