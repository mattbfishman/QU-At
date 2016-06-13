Template.chatShow.onCreated( function() {
      Meteor.subscribe('Allmessages');
      Meteor.subscribe('Allaccounts');
      Meteor.subscribe('Allchatrooms');
      Meteor.subscribe('userStatus');

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
      setObject[name] = true;
      console.log(setObject);
      Meteor.call('joinGroup', newId, setObject);
   },

   'click .leave':function(event){
      let answer = confirm("Are you sure you want to leave?");
      if(answer == true){
        let id = Meteor.userId();
        let chatId = this._id;
        let name = Chatrooms.findOne({_id: chatId}).name;
        let newId = Account.findOne({accountId: id})._id;
        let setObject = {};
        setObject[name] = false;
        console.log(setObject);
        Meteor.call('joinGroup', newId, setObject);
      }
   }

  });

Template.chatShow.helpers({
	'getMessage': function(){
		  let id = this._id;
  	  let message = Messages.find({chatId: id});
  	return message;
  	},
  
  'joined': function(){
      let id = Meteor.userId();
      let newId = Account.findOne({accountId: id})._id;
      let chatId = this._id;
      let name = Chatrooms.findOne({_id: chatId}).name;
      let idObject = {};
      let joniedObject = {};
      idObject["_id"] = newId;
      joniedObject[name] = true;
      let exists = Account.findOne({$and:[ joniedObject, idObject ]});
      if(exists)
        return true;
      else 
        return false;
  },

  'getOnline':function(){
      return null;
  },
  'getOffline':function(){
      return null;
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