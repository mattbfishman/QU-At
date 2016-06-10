Template.settings.onCreated( function() {
    Meteor.subscribe('Allaccounts');
    Meteor.subscribe('Allmessages');
    Meteor.subscribe('userStatus');
    Meteor.subscribe('userStatus');

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
  },
  'getNameColor': function(){
    let id = Meteor.userId();
    let color = Account.findOne({accountId: id}).nameColor;
    return color;
  },
  'getTextColor': function(){
    let id = Meteor.userId();
    let color = Account.findOne({accountId: id}).textColor;
    return color;
  }
});

Template.settings.events(({
  'click .save': function(event, template) {
    let id = Meteor.userId();
    let name = template.find('#name').value; 
    try {
      nameColor = ($('#nameColor').colorpicker('getValue'));
    }
    catch(err) {
      nameColor = Account.findOne({accountId: id}).textColor;
    }
    try {
      textColor = ($('#textColor').colorpicker('getValue'));
    }
    catch(err) {
      textColor = Account.findOne({accountId: id}).textColor;
    }
    
    Meteor.call('editAccount', id, name, nameColor, textColor);
    Meteor.call('updateMessages', id, name);
    Meteor.call('updateName', id, name);
    Meteor.call('updateNameColor', id, nameColor);
    Meteor.call('updateTextColor', id, textColor);
    },

    'click #textColor':function(event){
        $('#textColor').colorpicker();
    },

    'click #nameColor':function(event){
        $('#nameColor').colorpicker();
    }

}));