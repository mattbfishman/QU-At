Template.landingPage.onCreated( function() {
      Meteor.subscribe('Allmessages');
      Meteor.subscribe('Allaccounts');
      Meteor.subscribe('Allchatrooms');
      Meteor.subscribe('userStatus');
});

Template.landingPage.events({
  'keyup #chatinput0': function(event) {
      if (event.which == 13){
      	let chatId = 0;
      	let message = $("#chatinput0").val();
      	let messageId = Meteor.userId();
      	let name = Account.findOne({accountId : messageId}).name;
        let date = Date().toString().substring(4,24);
      	Meteor.call('newMainMessage', messageId, message, chatId, name, date);
      	event.preventDefault();
        event.currentTarget.value = "";
        $('#chatarea0').scrollTop( $('#chatarea0').prop("scrollHeight"));
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
  		let temp = Chatrooms.findOne({name: 'main'}).chatroomId;
  		return temp;
  	},
  	'getMessage': function(){
  		let message = Messages.find({chatId: 0});
  		return message;

  	},
  	'getOnlineUsers' : function(){
  		let users = Meteor.users.find({ "status.online": true });
  		return users;
  	},
    'getOfflineUsers' : function(){
      let users = Meteor.users.find({ "status.online": false });
      return users;
    },
    'getNameColor': function(){
      let id = Meteor.userId();
      let color = Account.findOne({accountId: id}).nameColor;
      return color;
    },
    'getTextColor': function(){
      let id = Meteor.userId();
      let color = Account.findOne({accountId: id}).textColor;
      return color;
    }

});


