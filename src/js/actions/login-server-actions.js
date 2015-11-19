var LoginConstants = require('../constants/login-constants.js');
	AppDispatcher = require('../dispatchers/app.dispatcher');

var ActionTypes = LoginConstants.ActionTypes;

var LoginServerActions = {

	loginUser: function(json, errors){
		AppDispatcher.dispatch({
			type: ActionTypes.LOGIN_RESPONSE,
			json: json,
			errors: errors
		});
	},
};

module.exports=LoginServerActions;