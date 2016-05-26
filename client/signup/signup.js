Template.signup.events({
  'submit form': function(event) {
    event.preventDefault();
    var emailVar = event.target.signupEmail.value;
    var passwordVar = event.target.signupPassword.value;
    if(emailVar.toLowerCase().split('@')[1] == "quinnipiac.edu"){
    Accounts.createUser({
      email: emailVar,
      password: passwordVar
      });
    Router.go("landingPage");
    }
    else{
      window.alert("Invalid email. Must be @quinnipiac.edu");
    }
  }

});