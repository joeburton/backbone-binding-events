
$(window).load(function(){

	Item = Backbone.Model.extend({	
		defaults: {
			id: "missing", 
			firstname: "missing",
			surname: "missing"
		}		
	});
	
	ItemCollection = Backbone.Collection.extend({
		model: Item
	});

	ItemListView = Backbone.View.extend({
		
		el: $('#showIt'),
		
		initialize: function(){
			_.bindAll(this, 'renderItem');
			console.log('ItemListView context of this', this);
		},

		render: function(){
			this.collection.each(this.renderItem);
		},
		
		renderItem: function(model){
		
			var listItem = new ItemView({model: model});
			
			listItem.render();
			
			$(this.el).append(listItem.el);
			
		}
		
	});
	
	ItemView = Backbone.View.extend({
		
		tagName: "li",
		
		events: {
			"click a": "clicked",
			"click a.edit": "edit"
		},

		initialize: function(){
			_.bindAll(this, 'render');
			this.model.bind('change:surname', this.render);
			console.log('ItemView context of this', this);	
		},
		
		edit: function(){
		
			var name = this.model.get("surname"),
				id = this.model.get("id");
			
			if (this.model.get('id') == "2") {
				this.model.set({"surname": "Shakespeare"});
				console.log(this.model);
			}
			
		},		
		
		clicked: function(){
		
			var name = this.model.get("surname"),
				id = this.model.get("id");
			
			if (this.model.get('id') == "3") {
				this.model.set({"surname": "Burton"});
				console.log(this.model);
			}
			
		},
		
		render: function(){
			
			var template = $("#item-template");
			
			var item = template.tmpl(this.model.toJSON());
			
			$(this.el).html(item);
			
		}  
		
	});
	
	var items = new ItemCollection([
		{id: 1, firstname: "Albert", surname: "Einstein"},
		{id: 2, firstname: "William", surname: "Drake"},
		{id: 3, firstname: "Michael", surname: "Jackson"},
		{id: 4, firstname: "Walt ", surname: "Disney"},
		{id: 5, firstname: "John", surname: "Lennon"}
	]);

	var app = new ItemListView({collection: items}).render();
		
});
