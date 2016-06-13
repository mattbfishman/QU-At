Template.navbar.events({
	'click .colap': function(event) {
		$('.settings-content').toggleClass('col-sm-12 col-sm-9');
		$('.newGroup').toggleClass('col-sm-12 col-sm-9');
		$('.manageGroups-content').toggleClass('col-sm-12 col-sm-9');
	},
});

// Template.navbar.helpers({
// 	addCollapse : function(){
// 		$('[data-toggle="collapse"]').addClass("colap");
// 	}
// });

