'use strict';

var model = {};
var $ = require('jQuery');
var dataLoad = [];

model.load = function() {

	return new Promise(function(loadResolve, loadReject) {

		// var fetch = function() {

			var fetchJSON = function(url) {
				return new Promise((fetchResolve, fetchReject) => {
					$.ajax(url)
						.done((json) => fetchResolve(json))
						.fail((xhr, status, err) => fetchReject(err));
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
						dataLoad.push(result);
					});
					loadResolve(dataLoad);
				});
		// };


	});

}


model.getDataLoad = function() {
	return dataLoad;
};

module.exports = model;

