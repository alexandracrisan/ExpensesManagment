var Constants = require('../constants/constants.js');
var Dispatcher = require('../dispatchers/app.dispatcher.js');

var ActionType = Constants.ActionTypes;

var Action = {

	addData: function(data){
		Dispatcher.dispatch({
			type: ActionType.ADD_USER,
			data: data
		});
	},
	deleteData: function(data){
		Dispatcher.dispatch({
			type: ActionType.REMOVE_USER,
			data: data
		});
	}
};
module.exports = Action;