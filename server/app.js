Meteor.methods({
	'updateMessages'(id, name){
      Messages.update({"messageId": id},
        {$set:{"name": name},
        },
        {multi: true}
        );
    },
});
