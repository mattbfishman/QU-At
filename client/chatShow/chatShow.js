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
        let date = Date().toString().substring(4,24);
      	Meteor.call('newMainMessage', messageId, message, chatId, name, date);
      	event.preventDefault();
        event.currentTarget.value = "";  
        $('#chatarea').scrollTop( $('#chatarea').prop("scrollHeight"));
    
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
      Meteor.call('updateGroup', id, setObject);
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
        Meteor.call('updateGroup', id, setObject);
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
      let chatId = this._id;
      let name = Chatrooms.findOne({_id: chatId}).name;
      let joinedObject = {};
      joinedObject[name] = true;
      console.log(joinedObject);
      let exists = Meteor.users.find({$and:[{ "status.online": true }, joinedObject]});
      return exists;
        
  },
  'getOffline':function(){
      let chatId = this._id;
      let name = Chatrooms.findOne({_id: chatId}).name;
      let joinedObject = {};
      joinedObject[name] = true;
      console.log(joinedObject);
      let exists = Meteor.users.find({$and:[{ "status.online": false }, joinedObject]});
      return exists;
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