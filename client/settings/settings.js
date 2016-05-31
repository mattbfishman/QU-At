Template.settings.onCreated( function() {
    Meteor.subscribe('Allaccounts');
    Meteor.subscribe('Allmessages')
});

Template.settings.helpers({
  'accountFind': function(){
    let id = Meteor.userId();
    let account = Account.find({accountId: id}).fetch();
    return account[0];
  },
  'accountExists': function(){
    let id = Meteor.userId();
    let account = Account.findOne({accountId: id});
    if(!account) return false;
    return true;
  }
});

Template.settings.events(({
  'click .save': function(event, template) {
    let id = Meteor.userId();
    let name = template.find('#name').value;
    Meteor.call('editAccount', id, name);
    },

    'click #cp2':function(event){
        $('#cp2').colorpicker();
    }

}));