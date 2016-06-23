"use strict";

var model = require('../src/model');
var $ = require('jQuery');
var view = require('../src/view');
var dataLoad;

var getData = (arg) => dataLoad[dataLoad.findIndex((data) => Object.keys(data)[0] === arg)];

$(document).ready(() => {
	model.load().then(function(val) {
		dataLoad = val;
		view.loadCatSelect(getData('categories'));
	});
});

$('#acmeCatsSelect').on('change', function() {
	var cat = $('select#acmeCatsSelect').val();
	let data = getData('types').types.filter((obj) => obj.category == cat);
	view.loadType(data);
}); 