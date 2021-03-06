var user_list_template = '\
<a href="#/new" class="btn btn-primary">New</a>\
<hr />\
<table class="table striped">\
  <thead>\
    <tr>\
      <th>First Name</th><th>Last Name</th><th>Age</th><th></th>\
    </tr>\
  </thead>\
  <tbody>\
    <% _.each(users, function(user) { %>\
      <tr>\
        <td><%= htmlEncode(user.get("firstname")) %></td>\
        <td><%= htmlEncode(user.get("lastname")) %></td>\
        <td><%= htmlEncode(user.get("age")) %></td>\
        <td><a class="btn" href="#/edit/<%= user.id %>">Edit</a></td>\
      </tr>\
    <% }); %>\
  </tbody>\
</table>';