"use strict";

var model = require('../src/model');
var $ = require('jQuery');
var view = require('../src/view');
var dataLoad;

var getData = (arg) => dataLoad[dataLoad.findIndex((data) => Object.keys(data)[0] === arg)];

function showProducts(cat,type) {
	let data = getData('products');
	console.log(data);
}

$(document).ready(() => {
	model.load().then(function(val) {
		dataLoad = val;
		view.loadCatSelect(getData('categories'));
	});
});

$('#acmeCatsSelect').on('change', function() {
	let cat = $('select#acmeCatsSelect').val();
	let type = $('#acmeTypeSelect').val();
	console.log(type);
	let data = getData('types').types.filter((obj) => obj.category == cat);
	view.loadType(data);
	showProducts(cat,type);
}); 

$('#acmeTypeSelect').on('change', function() {
	let cat = $('select#acmeCatsSelect').val();
	let type = $('#acmeTypeSelect').val();
	showProducts(cat,type);
});