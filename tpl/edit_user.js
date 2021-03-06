var edit_user_template = '\
<form class="edit-user-form">\
	<legend><%= user ? "Edit" : "New" %> User</legend>\
	<label>First Name</label>\
	<input name="firstname" type="text" value="<%= user ? user.get("firstname") : "" %>">\
	<label>Last Name</label>\
	<input name="lastname" type="text" value="<%= user ? user.get("lastname") : "" %>">\
	<label>Age</label>\
	<input name="age" type="text" value="<%= user ? user.get("age") : "" %>">\
	<hr/>\
	<button type="submit" class="btn"><%= user ? "Update" : "Create" %></button>\
	<% if(user) { %>\
		<input type="hidden" name="id" value="<%= user.id %>" />\
		<button data-user-id="<%= user.id %>" class="btn btn-danger delete">Delete</button>\
	<% }; %>\
</form>';