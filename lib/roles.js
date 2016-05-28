Account = new Mongo.Collection('accounts');
Chatrooms = new Mongo.Collection('chatrooms');


if (Meteor.isServer){

	Meteor.startup(function() {
		Meteor.methods({

			'editAccount': function (id, name){
				if(!Account.findOne({accountId:id})){
					Account.insert(
						{	
							'accountId': id,
							'name' : name
						},
						{upsert : true}
					);
				}
				else{
					Account.update(
						{	
							'accountId': id,
							'name' : name
						},
					);
				}	
			},

			'newChat': function (id, name){
				Chatrooms.insert(
					{'accountId': id,
					'name' : name,
					}
				);
			},
		});
	});
				
}