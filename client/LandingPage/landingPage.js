Template.landingPage.onCreated( function() {
      Meteor.subscribe('Allmessages');
      Meteor.subscribe('Allaccounts');
      Meteor.subscribe('Allchatrooms');

});

Template.landingPage.events({
  'keyup #chatinput0': function(event) {
      if (event.which == 13){
      	let chatId = 0;
      	let message = $("#chatinput0").val();
      	let messageId = Meteor.userId();
      	let name = Account.findOne({accountId : messageId}).name;
      	Meteor.call('newMainMessage', messageId, message, chatId, name);
      	event.preventDefault();
        event.currentTarget.value = "";
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
  	},
  	'getMessage': function(){
  		let message = Messages.find({chatId: 0});
  		return message;

  	},
  	'getMainUsers' : function(){
  		let users = Account.find().fetch();
  		return users;
  	},

})
