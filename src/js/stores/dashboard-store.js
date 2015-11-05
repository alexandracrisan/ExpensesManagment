/**
 * Created by alinaoros on 11/4/2015.
 */
var Constants = require("../constants/dashboard-constants.js")
var Dispatcher = require('../dispatchers/app.dispatcher.js');
var EventEmitter = require('events').EventEmitter;
var Actions = require("../actions/dashboard-actions.js");
var assign = require('react/lib/Object.assign');

var CHANGE_EVENT = 'change';
function add() {
  return 100;
}
var DashboardStore = assign(EventEmitter.prototype, {
    //emitChange: function () {
    //    this.emit(CHANGE_EVENT);
    //},
    ///**
    // * @param {function} callback
    // */
    //addChangeListener: function(callback) {
    //    this.on(CHANGE_EVENT, callback);
    //},
    //
    ///**
    // * @param {function} callback
    // */
    //removeChangeListener: function(callback) {
    //    this.removeListener(CHANGE_EVENT, callback);
    //},

    getCurrentMonthBudget: function() {
        return 100;

    } ,

     getCurrentMonthExpenses: function() {
        return 500;
     },

     getCurrentMonthLeftBudget: function(){
        return 500;
     },
    dispatcherIndex: Dispatcher.register(function(payload){

        var action = payload.action; //this is our action from handleViewAction

        //depending on what value is in payload.action.actionType the corresponding function will be called
        switch(action.actionType){
            case Constants.GET_CURRENT_MONTH_BUDGET:
                add();
                break;

        }

        return true; //return true so it can actually resolve to the dispatcher so it can move onto the next action
    })
});

module.exports = DashboardStore;
