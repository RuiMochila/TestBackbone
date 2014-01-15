var Router = Backbone.Router.extend({
  routes: {
    "":                     "home",
    "edit/:id":             "edit"
    // Routes para cada página
  },

  initialize: function () {

  },

  home: function () {
    console.log("home");
    userListView.render();
  },

  edit: function (id) {
    console.log("edit");
    userEditView.render({id: id});
  }

});