Meteor.methods({
	'updateMessages'(id, name){
      Messages.update({"messageId": id},
        {$set:{"name": name},
        },
        {multi: true}
        );
    },
    'updateName'(id, name){
      Meteor.users.update({"_id": id},
        {$set:{"name": name}
        });
    },
    'updateTextColor'(id, textColor){
      Account.update({"_id": id},
        {$set:{"textColor": textColor}
        });
    },
    'updateNameColor'(id, nameColor){
      Account.update({"_id": id},
        {$set:{"nameColor": nameColor}
        });
    },
    'joinGroup'(newId, setObject){
        Account.update({_id:newId}, {$set:setObject});
    },
    'joined'(newId, joinedObject){
        Account.findOne({
            $and:[
            {_id:newId},
            {joinedObject}
            ]});
    }

});
