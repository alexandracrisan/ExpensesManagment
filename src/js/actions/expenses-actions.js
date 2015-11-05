
var ExpenseConstants = require('../constants/expense-constants.js');
var AppDispatcher = require('../dispatchers/app.dispatcher.js');

var ExpenseActions = {

    addItem: function(item) {
        AppDispatcher.handleViewAction({
            actionType: ExpenseConstants.ADD_EXPENSE, //the action type comes from the app-constants module
            item: item
        })
    }

};

module.exports = ExpenseActions;