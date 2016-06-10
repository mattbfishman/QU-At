Template.userPill.onCreated( function() {
    Meteor.subscribe('userStatus');
  	Meteor.subscribe('Allaccounts');

});

Template.userPill.helpers({
	'getUsers': function(){
  	Meteor.users.find({ "status.online": true });
  	console.log(id);
  	return Meteor.users.find({ "status.online": true });
  },

});