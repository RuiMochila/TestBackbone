var UserListView = Backbone.View.extend({
  // Elemento onde meter o html do render.
  el: '.page',

  render: function () {
    var that = this;
    var users = new Users();
    users.fetch({
      success: function (users) {
        var template = _.template(user_list_template, {users: users.models});
        that.$el.html(template);
      }
    });
  }
  
});

var userListView = new UserListView();