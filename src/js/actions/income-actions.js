var IncomeConstants = require('../../constants/income-constants.js');
var Dispatcher = require('../../dispatchers/dispatcher');

var ActionTypes = IncomeConstants.ActionTypes;

var IncomeActions = {

	batchLoaded: function(data){
		
		Dispatcher.dispatch({

			type: ActionTypes.ADD_INCOME,
			data,
		});
	},
};

module.exports = IncomeActions;