Account = new Mongo.Collection('accounts');
Chatrooms = new Mongo.Collection('chatrooms');
Messages = new Mongo.Collection('messages');


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
					{'accountId': id},
					{	
						'accountId': id,
						'name' : name
					},
					{upsert : true}
				);
				}	
			},

			'newChat': function (id, chatId, name){
				Chatrooms.insert(
					{'accountId': id,
					'chatroomId': chatId,
					'name' : name,
					}
				);
			},

			'newMessage': function (id, message, chatId, chatName){
				Messages.insert(
					{'messageId': id,
					'message' : message,
					'chatId' : chatId,
					'chatName' : chatName,
					}
				);
			},
		});
	});
				
}