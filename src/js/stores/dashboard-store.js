/**
 * Created by alinaoros on 11/4/2015.
 */
var Constants = require("../constants/dashboard-constants.js")
var Dispatcher = require('../dispatchers/expense-dispatcher.js');
var EventEmitter = require('events').EventEmitter;
var MemberListActions = require("../actions/dashboard-actions.js");
var assign = require('react/lib/Object.assign');

var CHANGE_EVENT = 'change';

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
        return 1000;
    } ,

     getCurrentMonthExpenses: function() {
        return 500;
     },

     getCurrentMonthLeftBudget: function(){
        return 500;
     }
});

module.exports = DashboardStore;
