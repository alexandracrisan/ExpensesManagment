/**
 * Created by alinaoros on 11/4/2015.
 */
var Constants = require("../constants/dashboard-constants.js")
var Dispatcher = require('../dispatchers/expense-dispatcher.js');
var EventEmitter = require('events').EventEmitter;
//var MemberListActions = require("../actions/dashboard-actions.js");
//var assign = require('object-assign');
//
//var CHANGE_EVENT = 'change';
//
//var DasboardStore = assign({}, EventEmitter.prototype, {
//    /**
//     * @param {function} callback
//     */
//    addChangeListener: function(callback) {
//        this.on(CHANGE_EVENT, callback);
//    },
//
//    /**
//     * @param {function} callback
//     */
//    removeChangeListener: function(callback) {
//        this.removeListener(CHANGE_EVENT, callback);
//    },
//    getCurrentMonthBudget: function() {
//
//    } ,
//     getCurrentMonthExpenses: function() {
//
//     },
//
//     getCurrentMonthLeftBudget: function(){
//
//     }
//});
