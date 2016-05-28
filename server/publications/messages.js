Meteor.publish('messages', function( postId ) {

	if(messagesId){
		return [
      		Messages.find( { 'messagesId': messagesId } ),
    	];
	} 
  	else {
	    return null;
	}
});

Meteor.publish('Allmessages', function(){
	return Messages.find();	
});  
