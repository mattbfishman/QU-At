Template.landingPage.onCreated( function() {
      Meteor.subscribe('Allmessages');
      Meteor.subscribe('Allaccounts');
      Meteor.subscribe('Allchatrooms');

});

Template.landingPage.events({
  'keyup #chatinput': function(event) {
      if (event.which == 13){
      	console.log("FUCK YEA");
      }
    },
  });

Template.landingPage.helpers({
	'mainChat': function(){
	let temp = Chatrooms.findOne({chatroomId: 0}).name;
	if(temp == "main")
 		return true;
	 else
	 	return false;
  },
  	'getId': function(){
  		let temp = Chatrooms.findOne({name: "main"}).chatroomId;
  		return temp;
  	}

})
