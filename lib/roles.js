Account = new Mongo.Collection('accounts');
Chatrooms = new Mongo.Collection('chatrooms');
Messages = new Mongo.Collection('messages');


if (Meteor.isServer){

	Meteor.startup(function() {
		Meteor.methods({

			'editAccount': function (id, name, nameColor, textColor){
				if(!Account.findOne({accountId:id})){
					Account.insert(
						{	
							'accountId': id,
							'name' : name,
							'nameColor' : nameColor,
							'textColor' : textColor,
						},
						{upsert : true}
					);
				}
				else{
					Account.update(
					{'accountId': id},
					{	
						'accountId': id,
						'name' : name,
						'nameColor': nameColor,
						'textColor': textColor,
					},
					{upsert : true}
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

			'newMainMessage': function (id, message, chatId, name, date){
				Messages.insert(
					{'messageId': id,
					'message' : message,
					'chatId' : chatId,
					'name' : name,
					'date' : date,
					}
				);
			},
		});
	});
				
}