var app = app || {};


$(function () {
	'use strict';

	// kick things off by creating the `app`
	new app.ItemListView({collection: app.items}).render();

});