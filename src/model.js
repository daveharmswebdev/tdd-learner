'use strict';

var model = {};
var $ = require('jQuery');
var view = require('../src/view');
var dataLoad = [];

model.load = function() {

	var fetchJSON = function(url) {
		return new Promise((resolve, reject) => {
			$.ajax(url)
				.done((json) => resolve(json))
				.fail((xhr, status, err) => reject(err));
		});
	};

	var paths = [
		'../data/categories.json',
		'../data/types.json',
		'../data/products.json'
	];

	var itemPromises = paths.map(fetchJSON);

	Promise.all(itemPromises)
		.then(function(results) {
			results.forEach((result) => {
				if (Object.keys(result)[0] === 'categories') view.loadCatSelect(result);
				dataLoad.push(result);
			});
		});
};

module.exports = model;