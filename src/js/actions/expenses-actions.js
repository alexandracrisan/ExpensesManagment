
var ExpenseConstants = require('../constants/expense-constants.js');
var AppDispatcher = require('../dispatchers/app.dispatcher.js');

var ExpenseActions = {

    addItem: function(item) {

        AppDispatcher.dispatch({
            type: ExpenseConstants.ActionTypes.ADD_EXPENSE,
            item
        });
    }

};

module.exports = ExpenseActions;