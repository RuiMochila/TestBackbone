var UserEditView = Backbone.View.extend({
  // Elemento onde meter o html do render.
  el: '.page',
  
  events: {
    'submit .edit-user-form': 'saveUser',
    'click .delete': 'deleteUser'
  },
  
  saveUser: function (ev) {
    // var userDetails = $(ev.currentTarget).serializeObject();
    // var user = new User();
    // // Vai chamar o sync com method update porque o user já existe
    // user.save(userDetails, {
    //   success: function (user) {
    //     router.navigate('', {trigger:true});
    //   }
    // });
    // Faço isto porque n acabei as operações crud 
    router.navigate('', {trigger:true});
    return false;
  },
  
  deleteUser: function (ev) {
    // this.user.destroy({
    //   success: function () {
    //     console.log('destroyed');
    //     router.navigate('', {trigger:true});
    //   }
    // })
    // Faço isto porque n acabei as operações crud 
    router.navigate('', {trigger:true});
  },

  render: function (options) {
    var that = this;
    if(options.id) {
      that.user = new User({id: options.id});
      that.user.fetch({
        success: function (user) { 
          var template = _.template(edit_user_template, {user: user});
          that.$el.html(template);
        }
      })
    } else {
      var template = _.template(edit_user_template, {user: null});
      that.$el.html(template);
    }
  }

});

var userEditView = new UserEditView();