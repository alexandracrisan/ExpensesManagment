var FinanceConstants = require('../constants/finances-constants.js');
var Dispatcher = require('../dispatchers/app.dispatcher.js');

var ActionTypes = FinanceConstants.ActionTypes;

var FinanceActions = {

	dataLoaded: function(data){
		
		Dispatcher.dispatch({
			type: ActionTypes.ADD_FINANCE,
			data: data
		});
	},

	editFinance: function(data){

		Dispatcher.dispatch({
			type: ActionTypes.EDIT_FINANCE,
			data: data
		});
	},

	addId: function(data){
		Dispatcher.dispatch({
			type: ActionTypes.ADD_ID,
			data: data
		});
	},

	deleteId: function(data){
		Dispatcher.dispatch({
			type: ActionTypes.REMOVE_ID,
			data: data
		});
	}
};

module.exports = FinanceActions;