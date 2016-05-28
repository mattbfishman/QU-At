Template.settings.onCreated( function() {
    Meteor.subscribe('Allaccounts');
});

Template.sidebar.events({
	'click .log-out': function(event) {
	    	event.preventDefault();
	        Meteor.logout();
	    },
});

Template.sidebar.helpers({
  'accountFind': function(){
    let id = Meteor.userId();
    let account = Account.find({accountId: id}).fetch();
    return account[0];
  },
  'accountExists': function(){
    let id = Meteor.userId();
    let account = Account.findOne({accountId: id});
    if(!account) return false;
    return true;
  }
});
