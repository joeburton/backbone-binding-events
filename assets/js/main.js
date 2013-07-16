var app = app || {};


app.Item = Backbone.Model.extend({	
	defaults: {
		id: "missing", 
		firstname: "missing",
		surname: "missing"
	}	
});


app.ItemCollection = Backbone.Collection.extend({
	model: app.Item,
	url: 'http://localhost/~joeburton/labs/binding-events/data_json.php?role=all'
});

//console.log(new app.ItemCollection(), new app.Item());

app.ItemListView = Backbone.View.extend({
	
	el: $('#stage'),
	
	events: {
		"click .try": "addModel",
		"click .num": "changeNumbers"
	},

	initialize: function(){

		var that = this, // fix scope of this to that
			results = this.$el.find('#results');

		_.bindAll(this, 'renderItem');

		this.collection.on("add", function(model) {
		  	results.html('');
			that.collection.each(that.renderItem);
			console.log(model.id + " : " + model.get('surname'));
		});

		/*
		order items alphabetically
		*/
		var alphabetical = this.collection.sortBy(function(model) {
			return model.get("surname");
		});

		console.log(alphabetical);

	},


	changeNumbers: function() {

		var myNumber = parseInt($('#mynumber').val());
		//var myNumber = $('#mynumber').val();
		//var myNumber = {};
		//var myNumber = [];
		//var myNumber;
		
		console.log(myNumber);

		// if (isNaN(myNumber)) {
			
		// 	console.log(isNaN(myNumber));

		// }

		// check is if array
		// if (myNumber instanceof Array) {
			
		// 	console.log(typeof myNumber);

		// }
	},

	addModel: function(e){

		e.preventDefault();
		
		this.collection.add([{id: 6, firstname: "James", surname: "Brown"}]);	
		
	},	

	render: function(){
		
		this.collection.each(this.renderItem);

	},
	
	renderItem: function(model){
	
		var listItem = new app.ItemView({model: model}),
			results = this.$el.find('#results');
		
		listItem.render();

		results.append(listItem.el);				

	}
	
});


app.ItemView = Backbone.View.extend({
	
	tagName: "li",
	
	events: {
		"click a": "clicked",
		"click a.edit": "edit"
	},

	initialize: function(){

		_.bindAll(this, 'render');

		this.model.bind('change:surname', this.render, this);

		console.log('ItemView context of this', this);	

	},
	
	edit: function(){
	
		var name = this.model.get("surname"),
			id = this.model.get("id");
		
		if (this.model.get('id') == "2") {
			this.model.set({"surname": "Shakespeare"});
		}
		
	},	
	
	clicked: function(){
	
		var name = this.model.get("surname"),
			id = this.model.get("id");
		
		if (this.model.get('id') == "4") {
			this.model.set({"surname": "Burton"});
		}
		
	},
	
	render: function(){
		
		var template = $("#item-template");
		
		var item = template.tmpl(this.model.toJSON());
		
		$(this.el).html(item);
		
	}  
	
});




