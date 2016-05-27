Template.navbar.events({
	'click .colap': function(event) {
		$('.settings-content').toggleClass('col-sm-12 col-sm-9');

		if ($('#colap').attr('aria-expanded') == "true"){
	      	$(event.target).text("Expand");
  	    }
	    else if ($('#colap').attr('aria-expanded') == "false") {
	    	$(event.target).text("Collapse");
	  	}
	},
});

// Template.navbar.helpers({
// 	addCollapse : function(){
// 		$('[data-toggle="collapse"]').addClass("colap");
// 	}
// });

