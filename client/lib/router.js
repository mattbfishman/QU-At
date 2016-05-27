Router.configure({ layoutTemplate: 'layout'});

Router.route('/', {name : "landingPage"});

Router.route('signup', {name : "signup",
	onBeforeAction: function() {
		if(Meteor.userId()){
			Router.go("landingPage");
		}
		else{
			this.next();
		}
	}
});


Router.route('login', {name : "login",
	onBeforeAction: function() {
		if(Meteor.userId()){
			Router.go("landingPage");
		}
		else{
			this.next();
		}
	}
});

Router.route('settings', {name : "settings",
	onBeforeAction: function() {
		if(Meteor.userId()){
			this.next();
		}
		else{
			Router.go("landingPage");
		}
	}
});