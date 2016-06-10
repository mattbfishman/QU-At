Template.newGroup.onCreated( function() {
    Meteor.subscribe('Allaccounts');
    Meteor.subscribe('Allchatrooms');
});

Template.newGroup.events(({
  'click .newGroupBtn': function(event, template) {
    let id = Meteor.userId();
    let name = template.find('#name').value;
	    if(name != ""){
	    	let exists = Chatrooms.findOne({"name": name});
		   	if(exists){
		   		alert("Group already exists");
		   	}
		   	else{
		   		Meteor.call('newChat', id, name);
		   	}
		}
		else{
			alert("Name cannot be blank");
		}
    },
}));