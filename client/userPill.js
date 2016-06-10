Template.userPill.onCreated( function() {
    Meteor.subscribe('userStatus');
  	Meteor.subscribe('Allaccounts');

});

Template.userPill.helpers({
	'getUsers': function(){
  	return Meteor.users.find({ "status.online": true });
  },

});