Router.configure({ layoutTemplate: 'layout'});

Router.route('/', {name : "landingPage"});
// Router.route('temp', {name : "userPill"});


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

Router.route('newGroup', {name : "newGroup",
	onBeforeAction: function() {
		if(Meteor.userId()){
			this.next();
		}
		else{
			Router.go("landingPage");
		}
	}
});

Router.route('friends', {name : "friends",
	onBeforeAction: function() {
		if(Meteor.userId()){
			this.next();
		}
		else{
			Router.go("landingPage");
		}
	}
});

Router.route('manageGroups', {name : "manageGroups",
	onBeforeAction: function() {
		if(Meteor.userId()){
			this.next();
		}
		else{
			Router.go("landingPage");
		}
	}
});

Router.map(function(){
	this.route('chatShow',{
		path:'/chatroom/:_id',
		data:function(){
			return Chatrooms.findOne({_id:this.params._id});
		}
	})
});

