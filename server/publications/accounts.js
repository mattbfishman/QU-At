Meteor.publish('accounts', function( accountID ) {

	if(accountID){
		return [
      		Account.find({ 'accountId': accountID }),
    	];
	} 
  	else {
	    return null;
	}
});

Meteor.publish('Allaccounts', function(){
	return Account.find();	
});  

