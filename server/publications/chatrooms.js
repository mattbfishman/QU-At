Meteor.publish('chatrooms', function( postId ) {

	if(chatroomsId){
		return [
      		Chatrooms.find( { 'chatroomsId': chatroomsId } ),
    	];
	} 
  	else {
	    return null;
	}
});

Meteor.publish('Allchatrooms', function(){
	return Chatrooms.find();	
});  
