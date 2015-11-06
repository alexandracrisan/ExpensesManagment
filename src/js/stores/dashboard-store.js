/**
 * Created by alinaoros on 11/4/2015.
 */
var Constants = require("../constants/dashboard-constants.js");
var Dispatcher = require('../dispatchers/app.dispatcher.js');
var EventEmitter = require('events').EventEmitter;

var assign = require('react/lib/Object.assign');

var CHANGE_EVENT = 'change';

var mockExpensesList = [
    {
        suma: 30,
        date: '2014-02-01',
        description: 'lalalal'
    },
    {
        suma: 30,
        date: '2014-02-01',
        description: 'AnaBanana'
    },
    {
        suma: 100,
        date: '2014-02-01',
        description: 'mINIONS'
    },
    {
        suma: 100,
        date: '2014-02-01',
        description: 'mINIONS'
    }
];

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

         var total = 0,
             i;

         for( i = 0; i < mockExpensesList.length; i++) {
            total = total + mockExpensesList[i].suma;
         }

        return total;
     }
});

module.exports = DashboardStore;
