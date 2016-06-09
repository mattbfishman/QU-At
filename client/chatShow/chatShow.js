Template.chatShow.onCreated( function() {
      Meteor.subscribe('Allmessages');
      Meteor.subscribe('Allaccounts');
      Meteor.subscribe('Allchatrooms');

});

Template.chatShow.helpers({
	'getName': function(){
  		let id = this._id;
  		let name = Chatrooms.findOne({_id: id}).name;
  		console.log(name);
		return name;
	},
});