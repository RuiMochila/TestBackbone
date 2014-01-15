// [
//   {
//     "id": "1",
//     "firstname": "Thomas",
//     "lastname": "Davis",
//     "age": 12
//   }
// ]

var User = Backbone.Model.extend({
  // urlRoot: '/users',

    initialize:function () {
        // this.reports = new app.models.ReportsCollection(); //employee.reports
        // this.reports.parent = this;
    },

    sync: function(method, model, options) {
        console.log("method: " + method + " model: " + JSON.stringify(model) + " options: " + JSON.stringify(options));
        if (method === "read") {
            //this.id passado no construtor como {id: id}
            user_adapter.findById(parseInt(this.id)).done(function (data) {
            	options.success(data);
            });
        }else if(method === "update"){
        	console.log("im here");
        	
        }
    }
});

var Users = Backbone.Collection.extend({
  // url: '/users'
	model: User,
	sync: function(method, model, options) {
        if (method === "read") {
            // user_adapter.findByName(options.data.name).done(function (data) {
            //     options.success(data);
            // });
			user_adapter.getAll().done(function (data) {
                options.success(data);
            });
        }
    }
});
