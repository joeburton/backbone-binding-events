var app = app || {};

;(function($, window){
    
    'use strict';
    
    app.Item = Backbone.Model.extend({	
        defaults: {
            id: "missing", 
            firstname: "missing",
            surname: "missing"
        }		
    });

    app.ItemCollection = Backbone.Collection.extend({
        model: app.Item,
        url: 'http://localhost/labs/backbone/binding-events/data_json.php?role=all'
    });

    app.ItemListView = Backbone.View.extend({
        
        el: $('#showIt'),
        
        initialize: function(){
            _.bindAll(this, 'renderItem');
            console.log('ItemListView context of this', this);
        },

        render: function(){
            
            this.collection.each(this.renderItem);

        },
        
        renderItem: function(model){
        
            var listItem = new app.ItemView({model: model});

            listItem.render();
            
            $(this.el).append(listItem.el);
            
        }
        
    });

    app.ItemView = Backbone.View.extend({
        
        tagName: "li",
        
        events: {
            "click a": "clicked",
            "click a.edit": "edit",
            "click a.try": "modify"
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
        
        modify: function(){
            
            if (this.model.has('surname')) {
                console.log(this.model.get('surname'));
            }
            
        },		
        
        clicked: function(){
        
            var name = this.model.get("surname"),
                id = this.model.get("id");
            
            if (this.model.get('id') == "4") {
                this.model.set({"surname": "Burton"});
            }
            
        },
        
        template: _.template($('#item-template').html()),
        
        render: function(){
            
            $(this.el).html(this.template(this.model.toJSON()));
            
        }  
        
    });

})(jQuery, this);