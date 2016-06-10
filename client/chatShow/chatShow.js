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
      	Meteor.call('newMainMessage', messageId, message, chatId, name);
      	event.preventDefault();
        event.currentTarget.value = "";  
        $('#chatarea0').scrollTop( $('#chatarea0').prop("scrollHeight"));
    
      }
    },

   'click .join':function(event){
      let id = Meteor.userId();
      let chatId = this._id;
      let name = Chatrooms.findOne({_id: chatId}).name;
      let newId = Account.findOne({accountId: id})._id;
      let setObject = {};
      setObject[name] = "joined";
      Meteor.call('joinGroup', newId, setObject)
   }

  });

Template.chatShow.helpers({
	'getName': function(){
  		let id = this._id;
		  return Chatrooms.findOne({_id: id}).name;
	},

	'getMessage': function(){
		let id = this._id;
  		let message = Messages.find({chatId: id});
  		return message;
  	},
  
  'joined': function(){
    let id = Meteor.userId();
    let chatId = this._id;
    let name = Chatrooms.findOne({_id: chatId}).name;
    let newId = Account.findOne({accountId: id})._id;
    let joinedObject = {};
    joinedObject[name] = "joined";
    let exists = Meteor.call('joined', newId, joinedObject)
    if(exists){
      console.log("HERE");
      return true;
    }
  },

});