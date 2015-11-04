//var AuthService = require('../components/Login/authentication.js');
var LoginConstants = require('../components/Login/login-constants.js');
var AppDisptacher = require('../dispatchers/app-dispatcher');

var LoginActions = {
	loginUser: function(jwt){
		AppDispatcher.dispath({
			actionType: LoginConstants.LOGIN_USER,
			jwt: jwt 
		})
	}
}

module.exports=LoginActions;
	