Template.sidebar.events({
	'click .log-out': function(event) {
	    	event.preventDefault();
	        Meteor.logout();
	    },
});