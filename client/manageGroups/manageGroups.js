Template.manageGroups.onCreated( function() {
      Meteor.subscribe('Allaccounts');
      Meteor.subscribe('Allchatrooms');

});

Template.manageGroups.helpers({
	'getGroups': function(){
		let id = Meteor.userId();
		let groups = Chatrooms.find({accountId : id});
		return groups;
  	},
});

Template.manageGroups.events({

   'click .delete':function(event){
    	let answer = confirm("Are you sure you want to delete this group?");
    	if (answer){
    		let groupId = this._id;
    		let name = Chatrooms.findOne({_id: groupId}).name;
    		let setObject = {};
      		setObject[name] = true;
      		Meteor.call("removeGroup", setObject);
    		Meteor.call("deleteGroup", groupId);
    	}

   },

});