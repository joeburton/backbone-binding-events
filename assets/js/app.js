var app = app || {};

;(function($, window){
    
 	'use strict';

	/*
	use this approach for development and static content
	*/
	
	app.items = new app.ItemCollection([
		{id: 1, firstname: "Albert", surname: "Einstein"},
		{id: 2, firstname: "William", surname: "Drake"},
		{id: 3, firstname: "Michael", surname: "Jackson"},
		{id: 4, firstname: "Walt ", surname: "Disney"},
		{id: 5, firstname: "John", surname: "Lennon"}
	]);

	new app.ItemListView({collection: app.items}).render();	
    

	/*
	call to MySQL databse to get resutls
	
    app.items = new app.ItemCollection();
	app.items.fetch({

	success:function () {
			
        new app.ItemListView({collection: app.items}).render();

	 	}

	});
    */
    
	// console.log( "version: " + $.fn.jquery + "<br>" );
	// console.log( "version: " + jQuery.fn.jquery + "<br>" );

})(jQuery, this);
