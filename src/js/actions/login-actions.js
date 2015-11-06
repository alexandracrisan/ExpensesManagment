var LoginConstants = require('../constants/login-constants.js');
var AppDispatcher = require('../dispatchers/app.dispatcher');

var ActionTypes = LoginConstants.ActionTypes;

var LoginActions = {
	loginUser: function(jwt){
		AppDispatcher.dispatch({
			type: ActionTypes.LOGIN_USER,
			jwt
		});
	},
};

module.exports=LoginActions;
	