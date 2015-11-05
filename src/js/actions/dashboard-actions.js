/**
 * Created by alinaoros on 11/4/2015.
 */
var Constants = require("./../constants/dashboard-constants.js");
var Dispatcher = require('../dispatchers/app.dispatcher.js');

var AppActions = {
    //calls the handleViewAction from the Dispatcher, takes in an object
    addTask: function (task) {
        Dispatcher.handleViewAction({
            actionType: Constants.GET_CURRENT_MONTH_BUDGET, //the action type comes from the app-constants module
            task: task
        })
    }
};
module.exports = AppActions;
