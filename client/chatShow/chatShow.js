Template.chatShow.onCreated( function() {
      Meteor.subscribe('Allmessages');
      Meteor.subscribe('Allaccounts');
      Meteor.subscribe('Allchatrooms');

});

Template.chatShow.events({
  'keyup #chatinput': function(event) {
      if (event.which == 13){
      	let chatId = this._id;
      	let message = $("#chatinput").val();
      	let messageId = Meteor.userId();
      	let name = Account.findOne({accountId : messageId}).name;
      	// console.log("chatId: " + chatId);
      	// console.log("message: " + message);
      	// console.log("messageId: " + messageId);
      	// console.log("name: " + name);

      	Meteor.call('newMainMessage', messageId, message, chatId, name);
      	event.preventDefault();
        event.currentTarget.value = "";  
        $('#chatarea0').scrollTop( $('#chatarea0').prop("scrollHeight"));
    
      }
    },

    // 'click #red': function(event) {
    // 	console.log("HERE");
   	// 	$("#messageColor").css("color", "red");
    // },
  });

Template.chatShow.helpers({
	'getName': function(){
  		let id = this._id;
  		let name = Chatrooms.findOne({_id: id}).name;
		return name;
	},

	'getMessage': function(){
		let id = this._id;
  		let message = Messages.find({chatId: id});
  		return message;
  	},
});